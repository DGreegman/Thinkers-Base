"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, MapPin, Clock } from "lucide-react";
import type { StageId } from "@/types";

// ── Events data (replace with real content / CMS) ─────────────────────────────
const events = [
  {
    id: 1,
    title: "Nursery Open Day",
    date: "15 Mar 2026",
    time: "9:00am – 12:00pm",
    venue: "Nursery Block, Main Campus",
    description: "Come and see our nursery in action. Meet the teachers and watch a typical morning unfold.",
    stage: "nursery" as StageId,
    stageColor: "#F4D03F",
    emoji: "🌱",
    href: "/events/nursery-open-day",
  },
  {
    id: 2,
    title: "Primary Science Fair",
    date: "22 Mar 2026",
    time: "10:00am – 2:00pm",
    venue: "School Hall",
    description: "Over 60 student projects on display — from volcanoes to weather stations. All welcome.",
    stage: "primary" as StageId,
    stageColor: "#5BA4CF",
    emoji: "🎒",
    href: "/events/primary-science-fair",
  },
  {
    id: 3,
    title: "Secondary Admissions Evening",
    date: "28 Mar 2026",
    time: "5:00pm – 7:30pm",
    venue: "Secondary Block, Room 101",
    description: "An evening for parents and prospective secondary students to meet staff and explore the programme.",
    stage: "secondary" as StageId,
    stageColor: "#E8845C",
    emoji: "📚",
    href: "/events/secondary-admissions-evening",
  },
];

// ── Event card ────────────────────────────────────────────────────────────────
function EventCard({
  event,
  index,
  inView,
}: {
  event: (typeof events)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="group bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      {/* Coloured top bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: event.stageColor }} />

      <div className="p-6">
        {/* Date pill + stage tag */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-nunito font-bold px-2.5 py-1 rounded-button"
            style={{
              backgroundColor: event.stageColor + "22",
              color: event.stage === "nursery" ? "#7a5c00" : event.stageColor,
            }}
          >
            <Calendar className="w-3 h-3" />
            {event.date}
          </span>
          <span
            className="text-xs font-nunito font-bold px-2 py-1 rounded-button bg-gray-100 text-charcoal/60"
          >
            {event.emoji} {event.stage.charAt(0).toUpperCase() + event.stage.slice(1)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-nunito font-extrabold text-forest text-lg mb-2 group-hover:text-leaf transition-colors">
          {event.title}
        </h3>

        {/* Description */}
        <p className="font-poppins text-charcoal/60 text-sm leading-relaxed mb-4">
          {event.description}
        </p>

        {/* Meta info */}
        <div className="space-y-1.5 mb-5">
          <div className="flex items-center gap-2 text-charcoal/50 text-xs font-poppins">
            <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: event.stageColor }} />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-charcoal/50 text-xs font-poppins">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: event.stageColor }} />
            <span>{event.venue}</span>
          </div>
        </div>

        {/* Read more */}
        <Link
          href={event.href}
          className="inline-flex items-center gap-1.5 font-nunito font-bold text-sm transition-all group-hover:gap-2.5"
          style={{ color: event.stage === "nursery" ? "#7a5c00" : event.stageColor }}
        >
          Read More
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

// ── Events Section ────────────────────────────────────────────────────────────
export function LatestEvents() {
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
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">
              What&apos;s Coming Up
            </span>
            <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest">
              Upcoming Events
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-nunito font-bold text-sm text-forest hover:text-leaf transition-colors flex-shrink-0"
          >
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Bottom CTA Banner ─────────────────────────────────────────────────────────
export function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="bg-forest py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-leaf/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-nursery/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-4xl mb-4 block">🌱</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Ready to Join Our Family?
          </h2>
          <p className="font-poppins text-white/65 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re looking for a nursery spot, a primary place, or a
            secondary school that truly cares — we&apos;d love to meet you.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-nursery text-forest font-nunito font-extrabold text-sm px-7 py-3.5 rounded-button hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-nursery/30"
            >
              Start Your Application ✨
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-nunito font-bold text-sm px-7 py-3.5 rounded-button hover:bg-white/20 hover:-translate-y-0.5 transition-all"
            >
              Book a School Visit
            </Link>
          </div>

          {/* Micro trust line */}
          <p className="font-poppins text-white/40 text-xs mt-6">
            No commitment required · We respond within 1 working day
          </p>
        </motion.div>
      </div>
    </section>
  );
}