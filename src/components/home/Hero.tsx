"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

// ── Animated headline ───────────────────────────────────────────────────────
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

// ── Hero Section ───────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden min-h-[88vh] flex items-center">

      {/* Soft background glow shapes */}
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
                Creche · Pre School · Grade school
              </span>
            </motion.div>

            <AnimatedHeadline text="Nurturing Critical Thinkers and Future Leaders." />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-poppins text-charcoal/70 text-lg leading-relaxed mb-8 max-w-lg"
            >
              At Thinkers Base Academy, we provide high-quality nursery and primary education
              in a safe, inclusive environment where every child is valued, inspired to learn,
              and supported to reach their full potential.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://wa.me/2348037134462"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest text-white font-nunito font-extrabold text-sm px-6 py-3 rounded-button hover:bg-forest/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-forest/25"
              >
                Apply for Admission
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-leaf text-white font-nunito font-bold text-sm px-6 py-3 rounded-button hover:bg-leaf/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-leaf/25"
              >
                Explore Our School
              </Link>
            </motion.div>

          </div>
          {/* END LEFT SIDE */}

          {/* RIGHT SIDE IMAGES */}
          <div className="relative h-[420px] lg:h-[520px] hidden sm:block">

            {/* MAIN IMAGE — top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="absolute top-0 left-8 right-0 h-[270px] rounded-3xl overflow-hidden shadow-2xl shadow-forest/20 border-4 border-white"
            >
              <Image
                src="/images/bts1.jpg"
                alt="Thinkers Base Academy pupils"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* BOTTOM LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
              className="absolute bottom-0 left-8 h-48 rounded-2xl overflow-hidden shadow-xl shadow-forest/20 border-4 border-white"
              style={{ width: "calc(50% - 18px)" }}
            >
              <Image
                src="/images/P2.webp"
                alt="Pre School pupils at Thinkers Base Academy"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* BOTTOM RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              className="absolute bottom-0 right-0 h-48 rounded-2xl overflow-hidden shadow-xl shadow-forest/20 border-4 border-white"
              style={{ width: "calc(50% - 18px)" }}
            >
              <Image
                src="/images/bts3.jpg"
                alt="Grade School class at Thinkers Base Academy"
                fill
                className="object-cover"
              />
            </motion.div>

          </div>
          {/* END RIGHT SIDE IMAGES */}

        </div>
      </div>

      {/* bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-10 block">
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z" fill="#1B4332" opacity="0.06" />
        </svg>
      </div>

    </section>
  );
}