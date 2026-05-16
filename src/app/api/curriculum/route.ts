import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// ─── paths ────────────────────────────────────────────────────────────────────
const DATA_FILE = path.join(process.cwd(), "src", "data", "curriculum.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "curriculum");

// ─── types ────────────────────────────────────────────────────────────────────
export type CurriculumResource = {
  id: string;
  title: string;
  description: string;
  class: string;        // e.g. "Grade 3"
  subject: string;      // e.g. "Mathematics"
  term: string;         // e.g. "First Term"
  session: string;      // e.g. "2024/2025"
  fileType: string;     // pdf | docx | pptx | image | other
  fileName: string;     // stored filename
  originalName: string; // original upload name
  fileSize: number;     // bytes
  uploadedBy: string;   // teacher name
  uploadedByRole: "admin" | "teacher";
  approved: boolean;
  uploadedAt: string;   // ISO date string
  approvedAt?: string;
  approvedBy?: string;
};

type CurriculumData = {
  resources: CurriculumResource[];
};

// ─── helpers ─────────────────────────────────────────────────────────────────
async function ensureDirectories() {
  await fs.mkdir(path.join(process.cwd(), "src", "data"), { recursive: true });
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
}

async function readData(): Promise<CurriculumData> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { resources: [] };
  }
}

async function writeData(data: CurriculumData) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

function generateId(): string {
  return `res_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

function getFileType(filename: string): string {
  const ext = filename.split(".").pop()?.toLowerCase() || "";
  if (ext === "pdf") return "pdf";
  if (["doc", "docx"].includes(ext)) return "docx";
  if (["ppt", "pptx"].includes(ext)) return "pptx";
  if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "image";
  return "other";
}

// ─── GET — list resources (with optional filters) ────────────────────────────
export async function GET(req: NextRequest) {
  try {
    await ensureDirectories();
    const data = await readData();
    const { searchParams } = new URL(req.url);

    const classFilter   = searchParams.get("class");
    const subjectFilter = searchParams.get("subject");
    const termFilter    = searchParams.get("term");
    const sessionFilter = searchParams.get("session");
    const search        = searchParams.get("search")?.toLowerCase();
    const approvedOnly  = searchParams.get("approvedOnly") !== "false";

    let resources = data.resources;

    if (approvedOnly) resources = resources.filter((r) => r.approved);
    if (classFilter)   resources = resources.filter((r) => r.class === classFilter);
    if (subjectFilter) resources = resources.filter((r) => r.subject === subjectFilter);
    if (termFilter)    resources = resources.filter((r) => r.term === termFilter);
    if (sessionFilter) resources = resources.filter((r) => r.session === sessionFilter);
    if (search) {
      resources = resources.filter(
        (r) =>
          r.title.toLowerCase().includes(search) ||
          r.subject.toLowerCase().includes(search) ||
          r.class.toLowerCase().includes(search) ||
          r.description.toLowerCase().includes(search)
      );
    }

    // Sort newest first
    resources = [...resources].sort(
      (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    );

    return NextResponse.json({ success: true, resources });
  } catch (err) {
    console.error("GET /api/curriculum error:", err);
    return NextResponse.json({ success: false, error: "Failed to fetch resources" }, { status: 500 });
  }
}

// ─── POST — upload a new resource ────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    await ensureDirectories();
    const formData = await req.formData();

    const title        = formData.get("title") as string;
    const description  = formData.get("description") as string || "";
    const cls          = formData.get("class") as string;
    const subject      = formData.get("subject") as string;
    const term         = formData.get("term") as string;
    const session      = formData.get("session") as string;
    const uploadedBy   = formData.get("uploadedBy") as string;
    const role         = (formData.get("role") as "admin" | "teacher") || "teacher";
    const file         = formData.get("file") as File | null;

    if (!title || !cls || !subject || !term || !session || !uploadedBy) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    let fileName = "";
    let originalName = "";
    let fileSize = 0;
    let fileType = "other";

    if (file && file.size > 0) {
      originalName = file.name;
      fileType = getFileType(file.name);
      const ext = file.name.split(".").pop() || "";
      fileName = `${generateId()}.${ext}`;
      fileSize = file.size;

      const buffer = Buffer.from(await file.arrayBuffer());
      await fs.writeFile(path.join(UPLOAD_DIR, fileName), buffer);
    }

    const newResource: CurriculumResource = {
      id: generateId(),
      title,
      description,
      class: cls,
      subject,
      term,
      session,
      fileType,
      fileName,
      originalName,
      fileSize,
      uploadedBy,
      uploadedByRole: role,
      approved: role === "admin", // admin uploads auto-approved
      uploadedAt: new Date().toISOString(),
    };

    const data = await readData();
    data.resources.push(newResource);
    await writeData(data);

    return NextResponse.json({ success: true, resource: newResource });
  } catch (err) {
    console.error("POST /api/curriculum error:", err);
    return NextResponse.json({ success: false, error: "Upload failed" }, { status: 500 });
  }
}

// ─── PUT — approve or edit a resource ────────────────────────────────────────
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, action, approvedBy, ...updates } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "Resource ID required" }, { status: 400 });
    }

    const data = await readData();
    const index = data.resources.findIndex((r) => r.id === id);

    if (index === -1) {
      return NextResponse.json({ success: false, error: "Resource not found" }, { status: 404 });
    }

    if (action === "approve") {
      data.resources[index].approved = true;
      data.resources[index].approvedAt = new Date().toISOString();
      data.resources[index].approvedBy = approvedBy || "Admin";
    } else if (action === "unapprove") {
      data.resources[index].approved = false;
    } else {
      // General edit
      data.resources[index] = { ...data.resources[index], ...updates };
    }

    await writeData(data);
    return NextResponse.json({ success: true, resource: data.resources[index] });
  } catch (err) {
    console.error("PUT /api/curriculum error:", err);
    return NextResponse.json({ success: false, error: "Update failed" }, { status: 500 });
  }
}

// ─── DELETE — remove a resource ──────────────────────────────────────────────
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ success: false, error: "Resource ID required" }, { status: 400 });
    }

    const data = await readData();
    const resource = data.resources.find((r) => r.id === id);

    if (!resource) {
      return NextResponse.json({ success: false, error: "Resource not found" }, { status: 404 });
    }

    // Delete the physical file
    if (resource.fileName) {
      try {
        await fs.unlink(path.join(UPLOAD_DIR, resource.fileName));
      } catch {
        // File may not exist, continue anyway
      }
    }

    data.resources = data.resources.filter((r) => r.id !== id);
    await writeData(data);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/curriculum error:", err);
    return NextResponse.json({ success: false, error: "Delete failed" }, { status: 500 });
  }
}