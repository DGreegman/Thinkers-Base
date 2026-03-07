"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/content";

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);

  return count;
}

// ── Single stat item ──────────────────────────────────────────────────────────
function StatItem({
  emoji,
  label,
  value,
  delay,
  started,
}: {
  emoji: string;
  label: string;
  value: number;
  delay: number;
  started: boolean;
}) {
  const count = useCounter(value, 1600, started);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center gap-1 px-4"
    >
      <span className="text-3xl mb-1">{emoji}</span>
      <span className="font-nunito font-extrabold text-4xl text-white tabular-nums">
        {count.toLocaleString()}
        <span className="text-nursery">+</span>
      </span>
      <span className="font-poppins text-white/65 text-sm text-center leading-snug">
        {label}
      </span>
    </motion.div>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────
export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-forest relative overflow-hidden py-12">
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              emoji={stat.emoji}
              label={stat.label}
              value={stat.value}
              delay={i * 0.1}
              started={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}