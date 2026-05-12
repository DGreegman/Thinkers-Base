"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Brain, Heart, Star } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Brain,
    color: "#52B788",
    title: "Critical Thinking First",
    desc: "We use the Montessori approach and EYFS framework to grow independent, curious thinkers who ask the right questions — not just remember the right answers.",
  },
  {
    icon: Heart,
    color: "#F4D03F",
    title: "Every Child Seen",
    desc: "No child is invisible here. Our teachers know every pupil by name, strength and challenge — and they teach to the individual, not the average.",
  },
  {
    icon: Star,
    color: "#5BA4CF",
    title: "Future-Ready Learners",
    desc: "From digital literacy to public speaking, leadership to farming — we prepare children for a world that rewards versatility, confidence and compassion.",
  },
];

export default function WhyThinkers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 bg-cream relative overflow-hidden">
      {/* subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #1B4332 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Our Purpose
            </span>
            <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest leading-tight mb-5">
              Building Future Thinkers
              <br />
              <span className="text-leaf">From the Start</span>
            </h2>
            <p className="font-poppins text-charcoal/75 text-base leading-relaxed max-w-lg">
              Thinkers Base Academy was founded on one belief: that every child — given the right environment, the right teacher, and genuine care — can become extraordinary. We don&apos;t just teach the curriculum. We shape character.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-forest rounded-[24px] p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-leaf/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="relative">
              <div className="font-nunito font-extrabold text-7xl text-white/10 leading-none select-none -mb-4">"</div>
              <p className="font-nunito font-bold text-white text-xl leading-snug mb-4">
                We started as a small playgroup with a big dream — that every child deserves a school that truly sees them.
              </p>
              <p className="font-poppins text-leaf text-sm font-semibold">
                — Mrs. Joysam Ngene, Founding Principal
              </p>
              <div className="mt-5 pt-5 border-t border-white/15">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-nunito font-bold text-sm text-white/70 hover:text-white transition"
                >
                  Read our full story →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className="bg-white rounded-card p-7 shadow-card hover:shadow-card-hover transition-shadow group"
              style={{ borderTop: `4px solid ${pillar.color}` }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ backgroundColor: pillar.color + "22" }}
              >
                <pillar.icon className="w-6 h-6" style={{ color: pillar.color }} />
              </div>
              <h3 className="font-nunito font-extrabold text-forest text-lg mb-3">{pillar.title}</h3>
              <p className="font-poppins text-charcoal/65 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}