"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Calculator,
  Globe,
  Lightbulb,
  Palette,
  Users,
  Mic,
  FlaskConical,
  Trophy,
  Languages,
  BookMarked,
  History,
} from "lucide-react";

const COLOR = "#E8845C";

function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #52B788 100%)" }}>
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" style={{ backgroundColor: COLOR + "20" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-2 text-white/50 text-xs font-poppins mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/80">Grade School</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 font-nunito font-bold text-sm px-4 py-1.5 rounded-full mb-5" style={{ backgroundColor: COLOR, color: "#ffffff" }}>
              📚 Key Stage 2
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.55 }} className="font-nunito font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-5">
              Future Leaders
              <br />
              <span style={{ color: COLOR }}>Start Here.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }} className="font-poppins text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Our Grade School equips children aged 6–12 with the knowledge, critical thinking and character to excel at secondary school and beyond.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-3">
              <a href="https://wa.me/2348037134462" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-nunito font-extrabold text-sm px-6 py-3 rounded-button hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg" style={{ backgroundColor: COLOR, color: "#ffffff" }}>
                Enquire Now <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/admissions" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-nunito font-bold text-sm px-6 py-3 rounded-button hover:bg-white/20 transition-all">
                Apply Now
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { emoji: "📚", value: "Ages 6–12", label: "Age range" },
              { emoji: "🏫", value: "Grade 1–5/6", label: "Classes offered" },
              { emoji: "🧠", value: "Critical", label: "Thinking focus" },
              { emoji: "🎓", value: "Secondary", label: "School ready" },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-card p-5 text-center">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="font-nunito font-extrabold text-lg text-white mb-1">{item.value}</div>
                <div className="font-poppins text-white/70 text-xs">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14">
          <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#F8FFF4" />
        </svg>
      </div>
    </section>
  );
}

function Classes() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const classes = [
    { name: "Grade 1-2", ages: "Ages 6 – 7", desc: "Expanding on Key Stage 1 foundations. Children deepen reading comprehension, written expression and mathematical reasoning.", emoji: "⭐" },
    { name: "Grade 3-4", ages: "Ages 7 – 9", desc: "Greater independence and subject depth. Project-based learning, research skills and stronger analytical abilities across all subjects.", emoji: "🌍" },
    { name: "Grade 5 / 6", ages: "Ages 9 – 12", desc: "Preparing for secondary school. Advanced critical thinking, leadership opportunities, comprehensive subject coverage and graduation preparation.", emoji: "🎓" },
  ];

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Key Stage 2</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">Our Grade School Classes</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <motion.div key={cls.name} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12, duration: 0.5 }} className="bg-white rounded-card p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300" style={{ borderTop: `4px solid ${COLOR}` }}>
              <div className="text-5xl mb-4">{cls.emoji}</div>
              <h3 className="font-nunito font-extrabold text-forest text-2xl mb-2">{cls.name}</h3>
              <span className="inline-block font-poppins text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: COLOR + "33", color: "#1B4332" }}>{cls.ages}</span>
              <p className="font-poppins text-charcoal/65 text-sm leading-relaxed">{cls.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubjectsCovered() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const subjects = [
    {
      icon: BookOpen,
      title: "English Language",
      desc: "A rich four-strand programme:",
      bullets: [
        "Phonics & Diction — clear pronunciation and sound mastery",
        "Grammar & Punctuation — accurate written expression",
        "Spelling & Vocabulary — word knowledge and application",
        "Reading, comprehension, essay writing and oral presentations",
      ],
    },
    {
      icon: Calculator,
      title: "Mathematics",
      desc: "Building number confidence and analytical thinking:",
      bullets: [
        "Mental Problem Solving — fast, confident mental arithmetic",
        "Algebra foundations and fractions",
        "Decimals, geometry and data handling",
        "Word problems and real-world application",
      ],
    },
    {
      icon: FlaskConical,
      title: "Basic Science & Technology",
      desc: "Hands-on investigation of the natural and physical world through experiments. Physical health education concepts are integrated within the science curriculum.",
      bullets: [],
    },
    {
      icon: Globe,
      title: "Social Studies",
      desc: "Geography, Nigerian culture, global awareness and citizenship values. Civic education — including democracy, rights and responsibilities — is embedded within this subject.",
      bullets: [],
    },
    {
      icon: History,
      title: "History",
      desc: "Nigerian and African history, key world events, significant figures and how the past shapes our present. Pupils develop historical thinking and research skills.",
      bullets: [],
    },
    {
      icon: Languages,
      title: "Igbo Language",
      desc: "Reading, writing, speaking and cultural appreciation of the Igbo language. Pupils develop pride in their heritage and strong mother-tongue literacy.",
      bullets: [],
    },
    {
      icon: Lightbulb,
      title: "Computer Studies",
      desc: "ICT skills, coding basics, digital literacy and responsible technology use in our fully equipped computer room.",
      bullets: [],
    },
    {
      icon: Palette,
      title: "Creative Arts",
      desc: "Fine art, crafts, music, drama and cultural arts expression. Every child discovers and develops their creative voice.",
      bullets: [],
    },
    {
      icon: Mic,
      title: "Public Speaking",
      desc: "Debate, presentations, confidence and articulate communication. Linked to our Public Speaking Club for pupils who want to go further.",
      bullets: [],
    },
    {
      icon: Users,
      title: "Religious & Moral Education",
      desc: "Values, character, faith and moral decision-making. Building young people of integrity and compassion.",
      bullets: [],
    },
    {
      icon: BookMarked,
      title: "Literature & Reading",
      desc: "Guided reading of fiction and non-fiction texts. Critical analysis, comprehension and a deep love of books and storytelling.",
      bullets: [],
    },
    {
      icon: Trophy,
      title: "Leadership Development",
      desc: "Prefect system, club responsibilities, community service and character-building activities woven throughout school life.",
      bullets: [],
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Full Curriculum</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-white mb-4">Subjects in Grade School</h2>
          <p className="font-poppins text-white/75 text-base max-w-2xl mx-auto">A comprehensive, balanced curriculum covering academics, technology, language, arts, character and leadership.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjects.map((subject, i) => (
            <motion.div key={subject.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.07, duration: 0.5 }} className="group bg-white/10 border border-white/15 rounded-card p-6 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0" style={{ backgroundColor: COLOR + "33" }}>
                <subject.icon className="w-5 h-5" style={{ color: COLOR }} />
              </div>
              <h3 className="font-nunito font-bold text-white text-base mb-2">{subject.title}</h3>
              <p className="font-poppins text-white/65 text-xs leading-relaxed">{subject.desc}</p>
              {subject.bullets.length > 0 && (
                <ul className="space-y-1.5 mt-3">
                  {subject.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-1.5">
                      <span className="text-nursery mt-0.5 flex-shrink-0 text-xs">•</span>
                      <span className="font-poppins text-white/60 text-xs leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const outcomes = [
    "Academically strong and ready for any secondary school",
    "Confident public speakers and clear written communicators",
    "Critical thinkers who can analyse, evaluate and create",
    "Digitally literate and technologically capable",
    "Proud of their Igbo heritage and culturally grounded",
    "Character-strong young people with clear values and integrity",
    "Well-rounded individuals with developed talents and passions",
  ];

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Graduating from TBA</span>
            <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-6">What Makes a TBA Graduate</h2>
            <p className="font-poppins text-charcoal/70 text-base leading-relaxed mb-6">Our Grade School pupils don&apos;t just leave with good grades — they leave as well-rounded, confident young people with strong character, real skills and a love of learning that lasts a lifetime.</p>
            <ul className="space-y-3 mb-8">
              {outcomes.map((outcome, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.4 }} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
                  <span className="font-poppins text-charcoal/75 text-sm leading-relaxed">{outcome}</span>
                </motion.li>
              ))}
            </ul>
            <a href="https://wa.me/2348037134462" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-nunito font-extrabold text-sm px-6 py-3 rounded-button hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md" style={{ backgroundColor: COLOR, color: "#ffffff" }}>
              Enquire About Grade School <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="relative">
            <div className="relative h-96 rounded-[24px] overflow-hidden shadow-xl">
              <Image src="/images/Grade 3 pupils with computer.jpeg" alt="Grade School pupils at Thinkers Base Academy" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
              <p className="font-nunito font-extrabold text-forest text-lg leading-none">Key Stage 2</p>
              <p className="font-poppins text-charcoal/55 text-xs mt-0.5">Grade 1 – Grade 5/6</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="py-16 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="bg-forest rounded-[24px] p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" style={{ backgroundColor: COLOR + "20" }} />
          <div className="relative">
            <span className="text-5xl mb-4 block">📚</span>
            <h2 className="font-nunito font-extrabold text-2xl sm:text-3xl text-white mb-3">Build the Leader in Your Child</h2>
            <p className="font-poppins text-white/75 text-sm mb-7 max-w-md mx-auto leading-relaxed">Grade School spaces are competitive. Apply early to secure your child&apos;s place and start their leadership journey at TBA.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://wa.me/2348037134462" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-nunito font-extrabold text-sm px-6 py-3 rounded-button hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg" style={{ backgroundColor: COLOR, color: "#ffffff" }}>
                Enquire via WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/admissions" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-nunito font-bold text-sm px-6 py-3 rounded-button hover:bg-white/20 transition-all">
                View Admissions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function GradeSchoolPage() {
  return (
    <>
      <Hero />
      <Classes />
      <SubjectsCovered />
      <Outcomes />
      <Cta />
    </>
  );
}