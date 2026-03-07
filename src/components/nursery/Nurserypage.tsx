"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Heart,
  BookOpen,
  Music,
  Palette,
  Sun,
  TreePine,
  Users,
  Star,
  CheckCircle2,
  Clock,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO
// ─────────────────────────────────────────────────────────────────────────────

function FloatingBubble({
  size,
  x,
  y,
  delay,
  opacity = 0.15,
}: {
  size: number;
  x: string;
  y: string;
  delay: number;
  opacity?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-white pointer-events-none"
      style={{ width: size, height: size, left: x, top: y, opacity }}
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function NurseryHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #F4D03F 0%, #F9E07F 60%, #FFF3A3 100%)" }}
    >
      {/* Floating bubbles */}
      {[
        { size: 80,  x: "5%",  y: "10%", delay: 0   },
        { size: 48,  x: "12%", y: "70%", delay: 1.2 },
        { size: 120, x: "80%", y: "5%",  delay: 0.7 },
        { size: 60,  x: "88%", y: "60%", delay: 1.8 },
        { size: 36,  x: "50%", y: "80%", delay: 0.4 },
        { size: 96,  x: "70%", y: "75%", delay: 2.1 },
      ].map((b, i) => (
        <FloatingBubble key={i} {...b} />
      ))}

      {/* Faint star pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #1B4332 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            {/* Stage breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-forest/10 text-forest rounded-button px-4 py-1.5 mb-6"
            >
              <span className="text-base">🌱</span>
              <span className="font-nunito font-bold text-xs tracking-wide">
                Nursery · Ages 2 – 5
              </span>
            </motion.div>

            {/* Headline — Baloo 2 feel via extra-bold Nunito */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="font-nunito font-extrabold text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.1] mb-5"
            >
              A Safe Place to{" "}
              <span className="relative inline-block">
                Play
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-forest/15 rounded-full -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                />
              </span>
              , Wonder &amp; Grow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="font-poppins text-forest/70 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Our nursery is a warm, joyful world where your little one discovers
              the magic of learning through play — with qualified teachers who
              genuinely love what they do.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/admissions#nursery"
                className="inline-flex items-center gap-2 bg-forest text-white font-nunito font-extrabold text-sm px-6 py-3 rounded-button hover:bg-forest/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-forest/30"
              >
                Book a Nursery Visit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/60 border-2 border-forest/20 text-forest font-nunito font-bold text-sm px-6 py-3 rounded-button hover:bg-white hover:-translate-y-0.5 transition-all"
              >
                Ask a Question
              </Link>
            </motion.div>
          </div>

          {/* Right — illustrated placeholder (replace with real photo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full bg-white/50 border-4 border-white shadow-2xl shadow-forest/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-3">👧🏾</div>
                  <p className="font-nunito font-bold text-forest/50 text-sm">
                    Replace with nursery photo
                  </p>
                </div>
              </div>
              {/* Orbiting emoji badges */}
              {[
                { emoji: "🎨", angle: 30,  r: 170 },
                { emoji: "🧸", angle: 150, r: 170 },
                { emoji: "🌻", angle: 270, r: 170 },
              ].map(({ emoji, angle, r }) => {
                const rad = (angle * Math.PI) / 180;
                return (
                  <motion.div
                    key={emoji}
                    className="absolute w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-2xl"
                    style={{
                      left: `calc(50% + ${r * Math.cos(rad)}px - 24px)`,
                      top:  `calc(50% + ${r * Math.sin(rad)}px - 24px)`,
                    }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: angle / 360 * 2 }}
                  >
                    {emoji}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14">
          <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#F8FFF4" />
        </svg>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. ACTIVITIES GRID
// ─────────────────────────────────────────────────────────────────────────────

const activities = [
  { icon: Palette,  label: "Arts & Crafts",         desc: "Painting, collage, clay — creative expression every single day.",        color: "#FF7F7F" },
  { icon: BookOpen, label: "Story Time",             desc: "Daily shared reading builds a lifelong love of books and language.",      color: "#5BA4CF" },
  { icon: Sun,      label: "Outdoor Exploration",    desc: "Our garden is a classroom — nature, bugs, weather and discovery.",        color: "#F4D03F" },
  { icon: Music,    label: "Songs & Music",          desc: "Singing, rhythm and movement develop memory and coordination.",            color: "#A78BFA" },
  { icon: Users,    label: "Making Friends",         desc: "Guided play teaches sharing, empathy and social confidence.",             color: "#52B788" },
  { icon: TreePine, label: "Play-Based Learning",    desc: "Every activity is purposeful — learning disguised as pure fun.",          color: "#E8845C" },
];

function ActivitiesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-poppins text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            What Your Child Will Do
          </span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">
            Every Day is an Adventure 🎉
          </h2>
          <p className="font-poppins text-charcoal/60 text-base max-w-lg mx-auto">
            Our nursery day is filled with activities carefully chosen to develop
            your child's mind, body and heart — all through play.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((act, i) => (
            <motion.div
              key={act.label}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition-shadow border-2 border-transparent hover:border-nursery/30 group"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: act.color + "22" }}
              >
                <act.icon className="w-6 h-6" style={{ color: act.color }} />
              </div>
              <h3 className="font-nunito font-extrabold text-forest text-lg mb-2">
                {act.label}
              </h3>
              <p className="font-poppins text-charcoal/60 text-sm leading-relaxed">
                {act.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. DAILY SCHEDULE TIMELINE
// ─────────────────────────────────────────────────────────────────────────────

const schedule = [
  { time: "8:00",  label: "Arrival & Free Play",    emoji: "👋", desc: "Children settle in with favourite activities and greet their friends." },
  { time: "9:00",  label: "Morning Circle",          emoji: "🎵", desc: "Songs, weather, calendar and sharing — the heart of the nursery morning." },
  { time: "9:30",  label: "Structured Activity",     emoji: "🎨", desc: "Focused play-based learning — art, phonics, numbers or sensory play." },
  { time: "11:00", label: "Outdoor Exploration",     emoji: "🌳", desc: "Garden time — digging, discovering, running and exploring nature." },
  { time: "12:00", label: "Lunch & Rest",            emoji: "🍱", desc: "A nutritious lunch followed by quiet rest or gentle story time." },
  { time: "13:30", label: "Afternoon Activity",      emoji: "🧩", desc: "Crafts, role play, music or a visitor — every afternoon is different." },
  { time: "15:00", label: "Story Time & Home",       emoji: "📖", desc: "A calming story to end the day before parents collect their little ones." },
];

function DailySchedule() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF9E6 0%, #FFFDE7 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-poppins text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            A Day in Nursery
          </span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">
            What Does a Typical Day Look Like? ☀️
          </h2>
          <p className="font-poppins text-charcoal/60 text-base max-w-lg mx-auto">
            Routine gives little ones confidence. Here&apos;s how a typical nursery
            day unfolds at Greenleaf.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-nursery/30 -translate-x-px" />

          <div className="space-y-8">
            {schedule.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className={`relative flex items-start gap-4 sm:gap-0 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 bg-white rounded-card p-5 shadow-card ml-12 sm:ml-0 ${
                      isLeft ? "sm:mr-10 sm:text-right" : "sm:ml-10"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        isLeft ? "sm:justify-end" : ""
                      }`}
                    >
                      <span
                        className="inline-flex items-center gap-1 font-nunito font-extrabold text-xs px-2.5 py-1 rounded-button"
                        style={{ backgroundColor: "#F4D03F33", color: "#7a5c00" }}
                      >
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </span>
                    </div>
                    <h3 className="font-nunito font-extrabold text-forest text-base mb-1">
                      {item.label}
                    </h3>
                    <p className="font-poppins text-charcoal/60 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Centre node */}
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-4 w-9 h-9 bg-nursery rounded-full border-4 border-white shadow-md flex items-center justify-center text-base z-10">
                    {item.emoji}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. PARENT REASSURANCE
// ─────────────────────────────────────────────────────────────────────────────

const reassurances = [
  {
    icon: Shield,
    title: "Safe & Secure",
    color: "#52B788",
    points: [
      "CCTV monitored premises",
      "Secure entry & sign-in system",
      "Fully DBS-checked staff",
      "Safeguarding policy reviewed annually",
    ],
  },
  {
    icon: Heart,
    title: "Qualified & Caring Staff",
    color: "#E8845C",
    points: [
      "All teachers are Early Years qualified",
      "1:4 staff-to-child ratio",
      "First Aid trained in every classroom",
      "Regular professional development",
    ],
  },
  {
    icon: BookOpen,
    title: "Learning Through Play",
    color: "#5BA4CF",
    points: [
      "EYFS curriculum framework",
      "Tailored to each child's pace",
      "Weekly progress updates for parents",
      "Monthly parent-teacher check-ins",
    ],
  },
];

function Reassurance() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-poppins text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            For Peace of Mind
          </span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">
            Your Child is in Safe Hands 🤝
          </h2>
          <p className="font-poppins text-charcoal/60 text-base max-w-lg mx-auto">
            We know how much courage it takes to leave your little one for the
            first time. Here&apos;s what we put in place so you can feel completely at ease.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reassurances.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white rounded-card p-7 shadow-card hover:shadow-card-hover transition-shadow"
              style={{ borderTop: `4px solid ${item.color}` }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: item.color + "22" }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <h3 className="font-nunito font-extrabold text-forest text-xl mb-4">
                {item.title}
              </h3>
              <ul className="space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: item.color }}
                    />
                    <span className="font-poppins text-charcoal/70 text-sm leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. GALLERY PLACEHOLDER
// ─────────────────────────────────────────────────────────────────────────────

const galleryItems = [
  { emoji: "🎨", label: "Arts & crafts session",    bg: "#FFE8E8" },
  { emoji: "📚", label: "Story time circle",         bg: "#E8F4FF" },
  { emoji: "🌱", label: "Garden exploration",        bg: "#E8FFE8" },
  { emoji: "🎵", label: "Music & movement",          bg: "#FFF3E8" },
  { emoji: "🧩", label: "Puzzle play",               bg: "#F3E8FF" },
  { emoji: "👨‍🏫", label: "Teacher-guided activity",  bg: "#E8FFF3" },
];

function NurseryGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20"
      style={{ background: "linear-gradient(135deg, #FFF9E6 0%, #F8FFF4 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-poppins text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Nursery Life
          </span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">
            A Peek Inside Our Nursery 📸
          </h2>
          <p className="font-poppins text-charcoal/60 text-base max-w-md mx-auto">
            Real moments from a real nursery day — replace these placeholders with
            your own photos once you have them.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 1 : -1, transition: { duration: 0.2 } }}
              className="aspect-square rounded-2xl flex flex-col items-center justify-center shadow-card cursor-pointer border-4 border-white"
              style={{ backgroundColor: item.bg }}
            >
              <span className="text-5xl mb-2">{item.emoji}</span>
              <span className="font-nunito font-bold text-forest/60 text-xs text-center px-2">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. PARENT QUOTE
// ─────────────────────────────────────────────────────────────────────────────

function NurseryQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-card p-10 shadow-card text-center"
          style={{ borderTop: "4px solid #F4D03F" }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-nursery text-nursery" />
            ))}
          </div>

          {/* Quote mark */}
          <div className="font-nunito font-extrabold text-8xl text-nursery/30 leading-none -mb-4">
            "
          </div>

          <p className="font-poppins text-charcoal/75 text-lg leading-relaxed mb-6 italic">
            My son used to cry every morning at his old nursery. Within two weeks
            at Greenleaf he was running in ahead of me. The teachers remembered
            every little thing about him — his favourite story, his best friend,
            even that he doesn&apos;t like the colour red in his painting. That
            attention to detail is everything.
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-nursery/30 flex items-center justify-center font-nunito font-extrabold text-forest text-sm">
              TO
            </div>
            <div className="text-left">
              <p className="font-nunito font-bold text-forest">Mrs. Temi Okafor</p>
              <p className="font-poppins text-charcoal/50 text-xs">Parent of Tobi, Age 3</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. NURSERY CTA
// ─────────────────────────────────────────────────────────────────────────────

function NurseryCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      className="py-16 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F4D03F 0%, #F9E07F 100%)" }}
    >
      {/* Bubbles */}
      {[
        { size: 100, x: "5%",  y: "10%", delay: 0   },
        { size: 60,  x: "90%", y: "60%", delay: 1   },
        { size: 40,  x: "75%", y: "10%", delay: 0.5 },
      ].map((b, i) => (
        <FloatingBubble key={i} {...b} opacity={0.2} />
      ))}

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-5xl mb-4 block">🌱</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">
            Ready to Book a Nursery Visit?
          </h2>
          <p className="font-poppins text-forest/65 text-base mb-8 max-w-md mx-auto">
            Come and see our nursery in action. Meet the teachers, explore the
            space, and ask us anything.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/admissions#nursery"
              className="inline-flex items-center gap-2 bg-forest text-white font-nunito font-extrabold text-sm px-7 py-3.5 rounded-button hover:bg-forest/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-forest/30"
            >
              Book a Visit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/60 border-2 border-forest/20 text-forest font-nunito font-bold text-sm px-7 py-3.5 rounded-button hover:bg-white hover:-translate-y-0.5 transition-all"
            >
              Download Nursery Guide
            </Link>
          </div>
          <p className="font-poppins text-forest/50 text-xs mt-5">
            We respond within 1 working day 😊
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE ASSEMBLY
// ─────────────────────────────────────────────────────────────────────────────

export default function NurseryPage() {
  return (
    <>
      <NurseryHero />
      <ActivitiesGrid />
      <DailySchedule />
      <Reassurance />
      <NurseryGallery />
      <NurseryQuote />
      <NurseryCta />
    </>
  );
}