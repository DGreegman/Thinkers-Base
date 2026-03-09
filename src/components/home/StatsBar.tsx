"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// ── School stats data ─────────────────────────────────────────────────────────
const stats = [
  { emoji: "👩‍🏫", label: "Dedicated Teachers & Caregivers", value: 24 },
  { emoji: "📹", label: "CCTV Cameras", value: 30 },
  { emoji: "😊", label: "Happy Parents", value: 98, suffix: "%" },
  { emoji: "🎓", label: "Students Benefiting", value: 100, suffix: "+" },
];

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
  suffix,
  delay,
  started,
}: {
  emoji: string;
  label: string;
  value: number;
  suffix?: string;
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
      <span className="text-4xl mb-1">{emoji}</span>
      <span className="font-nunito font-extrabold text-4xl text-forest tabular-nums">
        {count.toLocaleString()}
        {suffix && <span className="text-leaf">{suffix}</span>}
      </span>
      <span className="font-poppins text-forest/70 text-sm text-center leading-snug">
        {label}
      </span>
    </motion.div>
  );
}

// ── Stats Section ─────────────────────────────────────────────────────────────
export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream relative overflow-hidden py-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-nunito font-extrabold text-forest text-center mb-12">
          Our School at a Glance
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              emoji={stat.emoji}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              delay={i * 0.2}
              started={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}