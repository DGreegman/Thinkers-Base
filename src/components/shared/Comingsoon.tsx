"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import type { StageId } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface ComingSoonProps {
  /** Page title shown in the hero */
  title: string;
  /** One-line description of what the page will contain */
  description: string;
  /** Emoji to display large in the hero */
  emoji: string;
  /** Optional: school stage for accent colouring */
  stage?: StageId | "all";
  /** Bullet list of features that will be on this page */
  comingFeatures?: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Stage colour map
// ─────────────────────────────────────────────────────────────────────────────

const stageConfig = {
  nursery:   { hex: "#F4D03F", label: "🌱 Nursery",   textDark: true  },
  primary:   { hex: "#5BA4CF", label: "🎒 Primary",   textDark: false },
  secondary: { hex: "#E8845C", label: "📚 Secondary", textDark: false },
  all:       { hex: "#52B788", label: "🌿 All Stages",textDark: false },
};

// ─────────────────────────────────────────────────────────────────────────────
// Floating leaf decoration
// ─────────────────────────────────────────────────────────────────────────────

function FloatLeaf({ x, y, delay, size }: { x: string; y: string; delay: number; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none text-leaf/20"
      style={{ left: x, top: y, fontSize: size }}
      animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      🍃
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

export default function ComingSoon({
  title,
  description,
  emoji,
  stage = "all",
  comingFeatures = [],
}: ComingSoonProps) {
  const config = stageConfig[stage];
  const accentColor = config.hex;

  return (
    <section className="min-h-[90vh] bg-cream flex flex-col items-center justify-center relative overflow-hidden py-20 px-4">

      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #1B4332 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating leaves */}
      <FloatLeaf x="5%"  y="10%" delay={0}   size={32} />
      <FloatLeaf x="90%" y="15%" delay={1.2} size={24} />
      <FloatLeaf x="8%"  y="75%" delay={2.1} size={20} />
      <FloatLeaf x="85%" y="70%" delay={0.7} size={28} />
      <FloatLeaf x="50%" y="5%"  delay={1.6} size={18} />

      {/* Glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: accentColor + "12" }}
      />

      <div className="relative max-w-2xl mx-auto text-center">

        {/* Stage badge */}
        {stage !== "all" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-button px-4 py-1.5 mb-6 text-xs font-nunito font-bold"
            style={{
              backgroundColor: accentColor + "22",
              color: stage === "nursery" ? "#7a5c00" : accentColor,
              border: `1.5px solid ${accentColor}55`,
            }}
          >
            {config.label}
          </motion.div>
        )}

        {/* Big emoji */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 180 }}
          className="text-7xl sm:text-8xl mb-6 block"
        >
          {emoji}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-nunito font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest mb-4 leading-tight"
        >
          {title}
        </motion.h1>

        {/* Coming soon badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-forest text-white font-nunito font-bold text-xs px-4 py-2 rounded-button mb-5"
        >
          <span className="w-1.5 h-1.5 bg-leaf rounded-full animate-pulse" />
          Coming Soon — Page in Development
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-poppins text-charcoal/65 text-base leading-relaxed mb-10 max-w-xl mx-auto"
        >
          {description}
        </motion.p>

        {/* Features list */}
        {comingFeatures.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white rounded-card p-6 shadow-card mb-10 text-left"
            style={{ borderTop: `4px solid ${accentColor}` }}
          >
            <p className="font-nunito font-extrabold text-forest text-sm mb-4 text-center">
              What&apos;s coming on this page:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {comingFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span
                    className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center text-[10px]"
                    style={{ backgroundColor: accentColor + "33" }}
                  >
                    ✓
                  </span>
                  <span className="font-poppins text-charcoal/70 text-xs leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.45 }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-forest text-white font-nunito font-extrabold text-sm px-6 py-3 rounded-button hover:bg-forest/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-forest/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 font-nunito font-bold text-sm px-6 py-3 rounded-button border-2 hover:-translate-y-0.5 transition-all"
            style={{
              borderColor: accentColor,
              color: stage === "nursery" ? "#7a5c00" : accentColor,
              backgroundColor: accentColor + "11",
            }}
          >
            Admissions Info
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Email notify */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="flex items-center justify-center gap-2 text-charcoal/45 text-xs font-poppins"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>
            Questions? Email us at{" "}
            <a
              href="mailto:hello@greenleafacademy.edu"
              className="text-leaf hover:underline font-semibold"
            >
              hello@greenleafacademy.edu
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  );
}