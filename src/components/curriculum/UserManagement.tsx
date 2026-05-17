"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, Plus, Trash2, Edit2, Check, X,
  Eye, EyeOff, RefreshCw, Shield, BookOpen, UserCheck,
} from "lucide-react";
import type { AuthUser } from "./CurriculumLogin";

type ManagedUser = {
  id: string;
  username: string;
  role: "admin" | "teacher" | "parent";
  name: string;
  active: boolean;
  createdAt: string;
  createdBy?: string;
};

type Props = {
  user: AuthUser;
};

const ROLE_META = {
  admin:   { icon: Shield,    color: "#E8845C", label: "Admin" },
  teacher: { icon: BookOpen,  color: "#5BA4CF", label: "Teacher" },
  parent:  { icon: UserCheck, color: "#52B788", label: "Parent/Student" },
};

export default function UserManagement({ user }: Props) {
  const [users, setUsers]           = useState<ManagedUser[]>([]);
  const [loading, setLoading]       = useState(true);
  const [showForm, setShowForm]     = useState(false);
  const [editUser, setEditUser]     = useState<ManagedUser | null>(null);
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [error, setError]           = useState("");
  const [success, setSuccess]       = useState("");

  // New user form
  const [form, setForm] = useState({
    name: "", username: "", password: "", role: "teacher" as "teacher" | "parent",
  });
  const [showPass, setShowPass] = useState(false);
  const [saving, setSaving]     = useState(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const roleQ = roleFilter !== "all" ? `&roleFilter=${roleFilter}` : "";
      const res   = await fetch(`/api/users?action=list${roleQ}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const data = await res.json();
      if (data.success) setUsers(data.users);
    } catch {
      setError("Failed to load users.");
    }
    setLoading(false);
  }, [roleFilter, user.token]);

  useEffect(() => { fetchUsers(); }, [fetchUsers]);

  function showSuccess(msg: string) {
    setSuccess(msg);
    setTimeout(() => setSuccess(""), 3000);
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      const res  = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${user.token}` },
        body: JSON.stringify({ ...form, createdBy: user.name }),
      });
      const data = await res.json();
      if (!data.success) { setError(data.error); setSaving(false); return; }
      showSuccess(`${form.role === "parent" ? "Parent/Student" : "Teacher"} account created!`);
      setForm({ name: "", username: "", password: "", role: "teacher" });
      setShowForm(false);
      fetchUsers();
    } catch {
      setError("Failed to create user.");
    }
    setSaving(false);
  }

  async function handleToggleActive(u: ManagedUser) {
    try {
      const res  = await fetch("/api/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${user.token}` },
        body: JSON.stringify({ id: u.id, active: !u.active }),
      });
      const data = await res.json();
      if (!data.success) { setError(data.error); return; }
      showSuccess(`Account ${!u.active ? "activated" : "deactivated"}.`);
      fetchUsers();
    } catch {
      setError("Failed to update user.");
    }
  }

  async function handleResetPassword(u: ManagedUser, newPassword: string) {
    try {
      const res  = await fetch("/api/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${user.token}` },
        body: JSON.stringify({ id: u.id, password: newPassword }),
      });
      const data = await res.json();
      if (!data.success) { setError(data.error); return; }
      showSuccess("Password reset successfully.");
      setEditUser(null);
    } catch {
      setError("Failed to reset password.");
    }
  }

  async function handleDelete(u: ManagedUser) {
    if (!confirm(`Delete account for ${u.name}? This cannot be undone.`)) return;
    try {
      const res  = await fetch("/api/users", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${user.token}` },
        body: JSON.stringify({ id: u.id }),
      });
      const data = await res.json();
      if (!data.success) { setError(data.error); return; }
      showSuccess("User deleted.");
      fetchUsers();
    } catch {
      setError("Failed to delete user.");
    }
  }

  const filtered = roleFilter === "all" ? users : users.filter((u) => u.role === roleFilter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-nunito font-extrabold text-forest text-xl">User Management</h2>
            <p className="font-poppins text-charcoal/50 text-xs">{users.length} total accounts</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchUsers} className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <RefreshCw className="w-4 h-4 text-charcoal/60" />
          </button>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-forest text-white font-nunito font-bold text-sm px-4 py-2.5 rounded-button hover:bg-forest/90 transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" /> Add User
          </button>
        </div>
      </div>

      {/* Alerts */}
      {error   && <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 font-poppins text-red-600 text-xs flex items-center gap-2"><X className="w-4 h-4 flex-shrink-0" />{error}</div>}
      {success && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-leaf/15 border border-leaf/30 rounded-xl px-4 py-3 font-poppins text-forest text-xs flex items-center gap-2"><Check className="w-4 h-4 flex-shrink-0" />{success}</motion.div>}

      {/* Role filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {["all", "teacher", "parent"].map((r) => (
          <button
            key={r}
            onClick={() => setRoleFilter(r)}
            className={`font-nunito font-bold text-xs px-4 py-2 rounded-button transition-all capitalize ${
              roleFilter === r ? "bg-forest text-white shadow-sm" : "bg-white text-charcoal/60 border border-gray-200 hover:border-forest/40"
            }`}
          >
            {r === "all" ? "All Users" : r === "parent" ? "Parents/Students" : "Teachers"}
          </button>
        ))}
      </div>

      {/* Users list */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <RefreshCw className="w-6 h-6 text-charcoal/30 animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-card border border-gray-100">
          <Users className="w-10 h-10 text-charcoal/20 mx-auto mb-3" />
          <p className="font-nunito font-bold text-charcoal/40 text-base">No users found</p>
          <p className="font-poppins text-charcoal/30 text-xs mt-1">Click &quot;Add User&quot; to create an account</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((u) => {
            const meta = ROLE_META[u.role];
            const Icon = meta.icon;
            return (
              <div key={u.id} className={`bg-white rounded-card p-4 shadow-card border-l-4 flex items-center gap-4 flex-wrap ${!u.active ? "opacity-60" : ""}`} style={{ borderLeftColor: meta.color }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: meta.color + "22" }}>
                  <Icon className="w-5 h-5" style={{ color: meta.color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-nunito font-bold text-forest text-base">{u.name}</p>
                    {!u.active && <span className="font-poppins text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-500">Inactive</span>}
                    {u.username === "admin" && <span className="font-poppins text-xs px-2 py-0.5 rounded-full bg-forest/10 text-forest">Main Admin</span>}
                  </div>
                  <p className="font-poppins text-charcoal/50 text-xs">
                    {u.role === "parent" ? `Access Code: ${u.username}` : `@${u.username}`} · {meta.label}
                  </p>
                  <p className="font-poppins text-charcoal/35 text-xs">
                    Added {new Date(u.createdAt).toLocaleDateString("en-GB")}
                  </p>
                </div>

                {/* Actions */}
                {u.username !== "admin" && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setEditUser(u)}
                      title="Reset password"
                      className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleToggleActive(u)}
                      title={u.active ? "Deactivate" : "Activate"}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${u.active ? "bg-gray-100 hover:bg-orange-100 hover:text-orange-600" : "bg-green-100 text-green-600 hover:bg-green-200"}`}
                    >
                      {u.active ? <X className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => handleDelete(u)}
                      title="Delete"
                      className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Create user modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className="bg-white rounded-[24px] shadow-2xl w-full max-w-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-nunito font-extrabold text-forest text-lg">Create New Account</h3>
                <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreate} className="space-y-4">
                {/* Role toggle */}
                <div>
                  <label className="font-poppins text-xs font-semibold text-charcoal/60 block mb-2">Account Type *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(["teacher", "parent"] as const).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setForm({ ...form, role: r, username: r === "parent" ? `PAR${Date.now().toString().slice(-4)}` : "" })}
                        className={`py-3 px-4 rounded-xl font-nunito font-bold text-sm transition-all border-2 ${form.role === r ? "bg-forest text-white border-forest" : "bg-white text-charcoal/60 border-gray-200"}`}
                      >
                        {r === "teacher" ? "👩‍🏫 Teacher" : "👨‍👩‍👧 Parent/Student"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="font-poppins text-xs font-semibold text-charcoal/60 block mb-1.5">Full Name *</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Mrs. Okafor" className="w-full font-poppins text-sm px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-leaf focus:outline-none transition-colors" />
                </div>

                {/* Username / Access code */}
                <div>
                  <label className="font-poppins text-xs font-semibold text-charcoal/60 block mb-1.5">
                    {form.role === "parent" ? "Access Code *" : "Username *"}
                  </label>
                  <input
                    required
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    placeholder={form.role === "parent" ? "e.g. PAR2025 or child's name" : "e.g. mrs.okafor"}
                    className="w-full font-poppins text-sm px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-leaf focus:outline-none transition-colors"
                  />
                  {form.role === "parent" && (
                    <p className="font-poppins text-charcoal/40 text-xs mt-1">This code is what the parent uses to log in. Keep it simple and share it privately.</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="font-poppins text-xs font-semibold text-charcoal/60 block mb-1.5">
                    {form.role === "parent" ? "Confirm Access Code *" : "Password *"}
                  </label>
                  <div className="relative">
                    <input
                      required
                      type={showPass ? "text" : "password"}
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder={form.role === "parent" ? "Re-enter access code" : "Min 6 characters"}
                      className="w-full font-poppins text-sm px-4 py-3 pr-11 rounded-xl border-2 border-gray-100 focus:border-leaf focus:outline-none transition-colors"
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-forest transition-colors">
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {error && <p className="font-poppins text-red-500 text-xs">{error}</p>}

                <div className="flex gap-3 pt-1">
                  <button type="button" onClick={() => setShowForm(false)} className="flex-1 font-nunito font-bold text-sm py-3 rounded-button border-2 border-gray-200 text-charcoal/60 hover:border-gray-300 transition-all">Cancel</button>
                  <button type="submit" disabled={saving} className="flex-1 bg-forest text-white font-nunito font-bold text-sm py-3 rounded-button hover:bg-forest/90 transition-all shadow-sm disabled:opacity-60">
                    {saving ? "Creating..." : "Create Account"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reset password modal */}
      <AnimatePresence>
        {editUser && (
          <ResetPasswordModal
            user={editUser}
            onClose={() => setEditUser(null)}
            onReset={handleResetPassword}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Reset Password Modal ────────────────────────────────────────────────────
function ResetPasswordModal({
  user, onClose, onReset,
}: {
  user: ManagedUser;
  onClose: () => void;
  onReset: (user: ManagedUser, password: string) => void;
}) {
  const [newPassword, setNewPassword] = useState("");
  const [show, setShow]               = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white rounded-[24px] shadow-2xl w-full max-w-sm p-6">
        <h3 className="font-nunito font-extrabold text-forest text-lg mb-1">Reset Password</h3>
        <p className="font-poppins text-charcoal/50 text-xs mb-5">For: {user.name} (@{user.username})</p>

        <div className="relative mb-4">
          <input
            type={show ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password (min 6 characters)"
            className="w-full font-poppins text-sm px-4 py-3 pr-11 rounded-xl border-2 border-gray-100 focus:border-leaf focus:outline-none transition-colors"
          />
          <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-forest transition-colors">
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 font-nunito font-bold text-sm py-3 rounded-button border-2 border-gray-200 text-charcoal/60 hover:border-gray-300 transition-all">Cancel</button>
          <button
            onClick={() => { if (newPassword.length >= 6) onReset(user, newPassword); }}
            disabled={newPassword.length < 6}
            className="flex-1 bg-forest text-white font-nunito font-bold text-sm py-3 rounded-button hover:bg-forest/90 transition-all shadow-sm disabled:opacity-40"
          >
            Reset
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}