import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const USERS_FILE  = path.join(process.cwd(), "src", "data", "users.json");
const JWT_SECRET  = process.env.JWT_SECRET || "TBA_SECRET_KEY_CHANGE_IN_PRODUCTION";
const JWT_EXPIRES = "8h";
const SALT_ROUNDS = 10;
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_MINUTES = 15;

export type User = {
  id: string;
  username: string;
  password: string;
  role: "admin" | "teacher" | "parent";
  name: string;
  active: boolean;
  createdAt: string;
  createdBy?: string;
  loginAttempts?: number;
  lockedUntil?: string;
};

type UsersData = { users: User[] };

async function readUsers(): Promise<UsersData> {
  try {
    const raw = await fs.readFile(USERS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { users: [] };
  }
}

async function writeUsers(data: UsersData) {
  await fs.writeFile(USERS_FILE, JSON.stringify(data, null, 2), "utf-8");
}

function generateId(): string {
  return `usr_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

function sanitizeUser(user: User) {
  const { password, loginAttempts, lockedUntil, ...safe } = user;
  return safe;
}

function isLocked(user: User): boolean {
  if (!user.lockedUntil) return false;
  return new Date(user.lockedUntil) > new Date();
}

export function generateToken(user: User): string {
  return jwt.sign(
    { id: user.id, role: user.role, name: user.name },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES }
  );
}

export function verifyToken(token: string): { id: string; role: string; name: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: string; role: string; name: string };
  } catch {
    return null;
  }
}

function verifyAdminRequest(req: NextRequest): boolean {
  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) return false;
  const decoded = verifyToken(auth.slice(7));
  return decoded?.role === "admin";
}

// ─── GET ──────────────────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const action = searchParams.get("action");

    // Staff login
    if (action === "login") {
      const username = searchParams.get("username");
      const password = searchParams.get("password");

      if (!username || !password) {
        return NextResponse.json({ success: false, error: "Username and password required" }, { status: 400 });
      }

      const data = await readUsers();
      const userIndex = data.users.findIndex(
        (u) => u.username.toLowerCase() === username.toLowerCase()
      );

      if (userIndex === -1) {
        return NextResponse.json({ success: false, error: "Invalid username or password" }, { status: 401 });
      }

      const user = data.users[userIndex];

      if (!user.active) {
        return NextResponse.json({ success: false, error: "Account deactivated. Contact admin." }, { status: 403 });
      }

      if (isLocked(user)) {
        const t = new Date(user.lockedUntil!).toLocaleTimeString();
        return NextResponse.json({ success: false, error: `Account locked. Try again after ${t}.` }, { status: 429 });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        data.users[userIndex].loginAttempts = (user.loginAttempts || 0) + 1;
        if (data.users[userIndex].loginAttempts! >= MAX_LOGIN_ATTEMPTS) {
          data.users[userIndex].lockedUntil = new Date(Date.now() + LOCKOUT_MINUTES * 60000).toISOString();
          data.users[userIndex].loginAttempts = 0;
          await writeUsers(data);
          return NextResponse.json({ success: false, error: `Too many attempts. Locked for ${LOCKOUT_MINUTES} minutes.` }, { status: 429 });
        }
        await writeUsers(data);
        const left = MAX_LOGIN_ATTEMPTS - data.users[userIndex].loginAttempts!;
        return NextResponse.json({ success: false, error: `Invalid credentials. ${left} attempt(s) left.` }, { status: 401 });
      }

      data.users[userIndex].loginAttempts = 0;
      data.users[userIndex].lockedUntil = undefined;
      await writeUsers(data);

      return NextResponse.json({ success: true, user: sanitizeUser(user), token: generateToken(user) });
    }

    // Parent login with access code
    if (action === "parentLogin") {
      const code = searchParams.get("code");
      if (!code) {
        return NextResponse.json({ success: false, error: "Access code required" }, { status: 400 });
      }
      const data = await readUsers();
      const user = data.users.find((u) => u.role === "parent" && u.password === code && u.active);
      if (!user) {
        return NextResponse.json({ success: false, error: "Invalid access code" }, { status: 401 });
      }
      return NextResponse.json({ success: true, user: sanitizeUser(user), token: generateToken(user) });
    }

    // List users — admin only
    if (action === "list") {
      if (!verifyAdminRequest(req)) {
        return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
      }
      const data = await readUsers();
      const roleFilter = searchParams.get("roleFilter");
      let users = data.users;
      if (roleFilter) users = users.filter((u) => u.role === roleFilter);
      return NextResponse.json({ success: true, users: users.map(sanitizeUser) });
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (err) {
    console.error("GET /api/users:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

// ─── POST — create user (admin only) ─────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    if (!verifyAdminRequest(req)) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { username, password, role, name, createdBy } = await req.json();

    if (!username || !password || !role || !name) {
      return NextResponse.json({ success: false, error: "All fields required" }, { status: 400 });
    }
    if (!["admin", "teacher", "parent"].includes(role)) {
      return NextResponse.json({ success: false, error: "Invalid role" }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json({ success: false, error: "Password must be at least 6 characters" }, { status: 400 });
    }

    const data = await readUsers();

    if (role !== "parent") {
      const exists = data.users.find((u) => u.username.toLowerCase() === username.toLowerCase());
      if (exists) {
        return NextResponse.json({ success: false, error: "Username already exists" }, { status: 409 });
      }
    }

    const hashedPassword = role === "parent"
      ? password
      : await bcrypt.hash(password, SALT_ROUNDS);

    const newUser: User = {
      id: generateId(),
      username,
      password: hashedPassword,
      role,
      name,
      active: true,
      createdAt: new Date().toISOString(),
      createdBy: createdBy || "admin",
      loginAttempts: 0,
    };

    data.users.push(newUser);
    await writeUsers(data);

    return NextResponse.json({ success: true, user: sanitizeUser(newUser) });
  } catch (err) {
    console.error("POST /api/users:", err);
    return NextResponse.json({ success: false, error: "Failed to create user" }, { status: 500 });
  }
}

// ─── PUT — update user (admin only) ──────────────────────────────────────────
export async function PUT(req: NextRequest) {
  try {
    if (!verifyAdminRequest(req)) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { id, password, name, active, username } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, error: "User ID required" }, { status: 400 });
    }

    const data = await readUsers();
    const index = data.users.findIndex((u) => u.id === id);

    if (index === -1) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    if (data.users[index].username === "admin" && active === false) {
      return NextResponse.json({ success: false, error: "Cannot deactivate main admin" }, { status: 403 });
    }

    if (name !== undefined)     data.users[index].name = name;
    if (active !== undefined)   data.users[index].active = active;
    if (username !== undefined) data.users[index].username = username;

    if (password && password.length >= 6) {
      const isParent = data.users[index].role === "parent";
      data.users[index].password = isParent ? password : await bcrypt.hash(password, SALT_ROUNDS);
    }

    data.users[index].loginAttempts = 0;
    data.users[index].lockedUntil = undefined;

    await writeUsers(data);
    return NextResponse.json({ success: true, user: sanitizeUser(data.users[index]) });
  } catch (err) {
    console.error("PUT /api/users:", err);
    return NextResponse.json({ success: false, error: "Failed to update user" }, { status: 500 });
  }
}

// ─── DELETE — remove user (admin only) ───────────────────────────────────────
export async function DELETE(req: NextRequest) {
  try {
    if (!verifyAdminRequest(req)) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ success: false, error: "User ID required" }, { status: 400 });
    }

    const data = await readUsers();
    const user = data.users.find((u) => u.id === id);

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }
    if (user.username === "admin") {
      return NextResponse.json({ success: false, error: "Cannot delete main admin" }, { status: 403 });
    }

    data.users = data.users.filter((u) => u.id !== id);
    await writeUsers(data);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/users:", err);
    return NextResponse.json({ success: false, error: "Failed to delete user" }, { status: 500 });
  }
}