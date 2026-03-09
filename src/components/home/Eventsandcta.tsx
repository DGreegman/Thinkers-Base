"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ── Static Programs / Activities ─────────────────────────────────────────────
const programs = [
  {
    id: 1,
    title: "Montessori & Early Learning",
    description:
      "Our youngest learners explore through play, inquiry, and guided activities, laying a strong foundation for lifelong learning.",
    emoji: "🧸",
    color: "#F4D03F",
  },
  {
    id: 2,
    title: "STEM & Creative Labs",
    description:
      "Hands-on science, technology, engineering, and math activities to spark curiosity and develop problem-solving skills.",
    emoji: "🔭",
    color: "#5BA4CF",
  },
  {
    id: 3,
    title: "Arts, Music & Sports",
    description:
      "Encouraging creativity, teamwork, and confidence through music, arts, drama, and athletic programs for every child.",
    emoji: "🎨⚽",
    color: "#E8845C",
  },
];

// ── Program Card ─────────────────────────────────────────────────────────────
function ProgramCard({
  program,
  index,
  inView,
}: {
  program: (typeof programs)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="group bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-1"
      style={{ borderTop: `4px solid ${program.color}` }}
    >
      <div className="p-6">
        {/* Emoji */}
        <div className="text-3xl mb-3" style={{ color: program.color }}>
          {program.emoji}
        </div>

        {/* Title */}
        <h3 className="font-nunito font-extrabold text-forest text-lg mb-2 group-hover:text-leaf transition-colors">
          {program.title}
        </h3>

        {/* Description */}
        <p className="font-poppins text-charcoal/60 text-sm leading-relaxed mb-4">
          {program.description}
        </p>

        {/* CTA */}
        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 font-nunito font-bold text-sm transition-all group-hover:gap-2.5"
          style={{ color: program.color }}
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

// ── Programs Section ─────────────────────────────────────────────────────────
export default function ProgramsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">
            Our Programs
          </span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest">
            What Your Child Can Explore
          </h2>
          <p className="font-poppins text-charcoal/60 text-base max-w-lg mx-auto">
            At Thinkers Base Academy, we nurture curiosity, creativity, and growth at every stage.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}