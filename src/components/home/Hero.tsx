"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { stages } from "@/data/content";

function LeafPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="leaves" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M30 10 C20 10 10 20 10 30 C10 40 20 50 30 50 C40 50 50 40 50 30 C50 20 40 10 30 10 Z M30 15 C30 15 45 25 30 45 C15 25 30 15 30 15 Z"
            fill="#52B788"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#leaves)" />
    </svg>
  );
}

// ── Floating photo card ───────────────────────────────────────────────────────
function PhotoCard({
  src,
  alt,
  className,
  delay,
}: {
  src: string;
  alt: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`absolute rounded-2xl overflow-hidden shadow-xl shadow-forest/30 border-4 border-white ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </motion.div>
  );
}

function StagePill({ emoji, label, hex }: { emoji: string; label: string; hex: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-nunito font-bold px-3 py-1.5 rounded-button"
      style={{
        backgroundColor: hex + "22",
        color: hex === "#F4D03F" ? "#7a5c00" : hex,
        border: `1.5px solid ${hex}55`,
      }}
    >
      {emoji} {label}
    </span>
  );
}

function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h1 className="font-nunito font-extrabold text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.1] mb-6">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, duration: 0.4 }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden min-h-[88vh] flex items-center">
      <LeafPattern />

      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-nursery/15 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE */}
          <div className="relative z-10">

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-leaf/15 text-forest rounded-button px-4 py-1.5 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-leaf" />
              <span className="font-nunito font-bold text-xs tracking-wide">
                Nursery · Primary · Secondary
              </span>
            </motion.div>

            <AnimatedHeadline text="Nurturing Critical Thinkers and Future Leaders." />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-poppins text-charcoal/70 text-lg leading-relaxed mb-8 max-w-lg"
            >
              At Thinkers Base Academy, we provide high-quality nursery and primary education in a safe,
              inclusive environment where every child is valued, inspired to learn, and supported to reach their full potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 bg-forest text-white font-nunito font-extrabold text-sm px-6 py-3 rounded-button hover:bg-forest/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-forest/25"
              >
                Apply for Admission
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white text-forest font-nunito font-bold text-sm px-6 py-3 rounded-button border-2 border-leaf/40 hover:border-leaf hover:-translate-y-0.5 transition-all"
              >
                Explore Our School
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-2"
            >
              {stages.map((s) => (
                <StagePill key={s.id} emoji={s.emoji} label={s.label} hex={s.hex} />
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="relative h-[420px] lg:h-[520px] hidden sm:block">

            {/* MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="absolute top-0 left-8 right-0 h-[300px] rounded-3xl overflow-hidden shadow-2xl shadow-forest/20 border-4 border-white"
            >
              <div className="w-full h-full bg-gradient-to-br from-leaf/30 to-primary/30 flex items-center justify-center">
                {/* Replace with actual Image component once you have photos */}
                <div className="text-center">
                  <span className="text-6xl">🎒</span>
                  <p className="font-nunito font-bold text-forest/50 mt-2 text-sm">
                    Primary class photo
                  </p>
                </div>
              </div>
            </motion.div>

            {/* NURSERY IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-44 h-44 rounded-2xl overflow-hidden shadow-xl shadow-forest/20 border-4 border-white"
            >
              <div className="w-full h-full bg-gradient-to-br from-nursery/40 to-nursery/20 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl">🌱</span>
                  <p className="font-nunito font-bold text-forest/50 mt-1 text-xs">
                    Nursery play
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SECONDARY IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              className="absolute bottom-4 right-0 w-48 h-40 rounded-2xl overflow-hidden shadow-xl shadow-forest/20 border-4 border-white"
            >
              <div className="w-full h-full bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl">📚</span>
                  <p className="font-nunito font-bold text-forest/50 mt-1 text-xs">
                    Secondary lab
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating achievement badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
              className="absolute top-6 right-4 bg-white rounded-2xl px-3 py-2 shadow-lg shadow-forest/15 border border-leaf/20"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🏆</span>
                <div>
                  <p className="font-nunito font-extrabold text-forest text-xs">Top School</p>
                  <p className="font-poppins text-charcoal/50 text-[10px]">2024 Award</p>
                </div>
              </div>
            </motion.div>

            {/* Floating happy stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.05, type: "spring", stiffness: 200 }}
              className="absolute bottom-32 -left-4 bg-nursery rounded-2xl px-3 py-2 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">😊</span>
                <div>
                  <p className="font-nunito font-extrabold text-forest text-xs">98% Happy</p>
                  <p className="font-poppins text-forest/60 text-[10px]">Parent survey</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-10 block">
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z" fill="#1B4332" opacity="0.06" />
        </svg>
      </div>
    </section>
  );
}