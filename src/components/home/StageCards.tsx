"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stages } from "@/data/content";
import type { Stage } from "@/types";

// ── Updated stage illustrations ──────────────────────────────────────────────
const stageIllustrations: Record<string, string> = {
  nursery: "🌱🧸🎨",
  primary: "📚⚽🔭",
  secondary: "🎓💻🏆",
};

// ── Individual stage card ─────────────────────────────────────────────────────
function StageCard({ stage, index }: { stage: Stage; index: number }) {
  const textColor = "text-forest";
  const mutedColor = "text-forest/70";
  const btnBg = "bg-forest text-white hover:bg-forest/90";
  const iconBg = "bg-forest/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
      style={{ backgroundColor: stage.hex }}
    >
      {/* Background blob */}
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 pointer-events-none"
        style={{ backgroundColor: "#1B4332" }}
      />

      <div className="relative p-7">
        {/* Emoji cluster */}
        <div className={`inline-flex items-center gap-1 ${iconBg} rounded-2xl px-3 py-2 mb-5`}>
          <span className="text-xl tracking-wider">{stageIllustrations[stage.id]}</span>
        </div>

        {/* Stage / Curriculum badge */}
        <div className="mb-3">
          <span className={`font-poppins text-xs font-semibold ${mutedColor} uppercase tracking-widest`}>
            {stage.classes} {/* Example: "Playgroup / Foundation Stage" */}
          </span>
        </div>

        {/* Stage label */}
        <h3 className={`font-nunito font-extrabold text-2xl ${textColor} mb-2`}>
          {stage.emoji} {stage.label}
        </h3>

        {/* Description */}
        <p className={`font-poppins text-sm ${mutedColor} leading-relaxed mb-6`}>
          {stage.description}
        </p>

        {/* CTA */}
        <Link
          href={stage.href}
          className={`inline-flex items-center gap-2 font-nunito font-bold text-sm px-5 py-2.5 rounded-button ${btnBg} transition-all group-hover:gap-3`}
        >
          Discover {stage.label} Learning
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-20"
        style={{ backgroundColor: "#1B4332" }}
      />
    </motion.div>
  );
}

// ── Stage Cards Section ───────────────────────────────────────────────────────
export default function StageCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0,20 C480,40 960,0 1440,20 L1440,0 L0,0 Z" fill="#1B4332" opacity="0.04" />
        </svg>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">
            Our School Stages
          </span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">
            A Place for Every Child
          </h2>
          <p className="font-poppins text-charcoal/60 text-base max-w-xl mx-auto leading-relaxed">
            From first steps into learning to launching young minds — we provide a curriculum that grows with your child.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inView &&
            stages.map((stage, i) => <StageCard key={stage.id} stage={stage} index={i} />)}
        </div>
      </div>
    </section>
  );
}