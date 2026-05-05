"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Star,
  Heart,
  Lightbulb,
  Users,
  BookOpen,
  CheckCircle2,
  Sprout,
  Sparkles,
  MessageCircle,
  FileText,
  Music,
  Palette,
  Mic,
  Leaf,
  FlaskConical,
  BookMarked,
  ChevronRight,
  Globe,
  Droplets,
  Sun,
  Clock,
  Calendar,
  Shield,
  Utensils,
  Bus,
  Wifi,
  Building2,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO
// ─────────────────────────────────────────────────────────────────────────────

function AboutHero() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #52B788 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-nursery/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-2 text-white/50 text-xs font-poppins mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/80">About Us</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.55 }} className="font-nunito font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-5">
              Built on Care.
              <br />
              <span className="text-nursery">Driven by</span>
              <br />
              Curiosity.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }} className="font-poppins text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              From a small playgroup with a big dream, we&apos;ve grown into a
              thriving school community that walks with every child from their
              very first step into learning all the way through Grade School.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-3">
              <a href="https://wa.me/2348037134462" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-nursery text-forest font-nunito font-extrabold text-sm px-6 py-3 rounded-button hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg">
                Join Our Community <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-nunito font-bold text-sm px-6 py-3 rounded-button hover:bg-white/20 hover:-translate-y-0.5 transition-all">
                Meet the Team
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { emoji: "🌱", value: "5+", label: "Years of excellence" },
              { emoji: "👶", value: "Creche", label: "Ages 1 – 4" },
              { emoji: "🎒", value: "Pre School", label: "Ages 4 – 6" },
              { emoji: "📚", value: "Grade School", label: "Grade 1 – Grade 5/6" },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-card p-5 text-center">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="font-nunito font-extrabold text-2xl text-white mb-1">{item.value}</div>
                <div className="font-poppins text-white/80 text-xs leading-snug">{item.label}</div>
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

// ─────────────────────────────────────────────────────────────────────────────
// 1A. PREAMBLE
// ─────────────────────────────────────────────────────────────────────────────

function Preamble() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Welcome to Thinkers Base Academy</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-6">Our Story</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="max-w-3xl mx-auto space-y-5 font-poppins text-charcoal/80 text-lg leading-relaxed">
          <p>
            <span className="font-nunito font-bold text-forest text-xl">Established on 17th September, 2019</span>, Thinkers Base Academy is located at Plot 183A/B Mary Emmanuel Street New GRA Trans-Ekulu, Enugu.
          </p>
          <p>
            We offer your child the finest international nursery and primary school education in Enugu. Our personalized approach, outstanding teachers and global learning opportunities will support your child to excel at every stage.
          </p>
          <p>
            Thinkers Base Academy is a truly inclusive community of learning. We believe that there are <span className="font-nunito font-bold text-leaf">no limits</span> to what our pupils can achieve.
          </p>
          <p>
            At TBA, we create a nurturing environment where your child will excel academically, morally, socially and personally. We help your child grow to be an outstanding citizen and we lay the foundation for our pupils to become accomplished critical thinkers and solution providers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1B. OUR CURRICULUM
// ─────────────────────────────────────────────────────────────────────────────

function OurCurriculum() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const curriculumStages = [
    { stage: "Foundation Stage / Creche", classes: ["Play Group", "Preschool 1 & 2", "Reception"], color: "#F4D03F" },
    { stage: "Key Stage 1 / Pre School", classes: ["Grade 1", "Grade 2"], color: "#5BA4CF" },
    { stage: "Key Stage 2 / Grade School", classes: ["Grade 3", "Grade 4", "Grade 5/6"], color: "#E8845C" },
  ];

  const curriculumFeatures = [
    { icon: BookOpen, title: "Nigerian & British Blend", desc: "Rich blend of both curricula with extracurricular activities" },
    { icon: Globe, title: "National & International Standards", desc: "Meets both Nigerian and international educational standards" },
    { icon: Sparkles, title: "EYFS Framework", desc: "British Early Years Foundation Stage for foundation stage" },
    { icon: Lightbulb, title: "Play-Based Learning", desc: "Inquiry-based, objective-based, and thematic approach" },
  ];

  return (
    <section ref={ref} className="py-20 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Academic Excellence</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-white mb-4">Our Curriculum</h2>
          <p className="font-poppins text-white/80 text-base max-w-2xl mx-auto">We offer a rich blend of Nigerian and British curriculum with extracurricular activities to suit every child&apos;s interest.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {curriculumFeatures.map((feature, i) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-card p-6">
              <div className="w-12 h-12 rounded-2xl bg-nursery/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-nursery" />
              </div>
              <h3 className="font-nunito font-bold text-white text-lg mb-2">{feature.title}</h3>
              <p className="font-poppins text-white/80 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.6 }}>
          <h3 className="font-nunito font-extrabold text-white text-xl text-center mb-6">Our School Stages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curriculumStages.map((item, i) => (
              <motion.div key={item.stage} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }} className="bg-white/10 border border-white/10 rounded-card p-6 text-center">
                <div className="w-3 h-12 rounded-full mx-auto mb-4" style={{ backgroundColor: item.color }} />
                <h4 className="font-nunito font-bold text-white text-lg mb-3">{item.stage}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.classes.map((cls) => (
                    <span key={cls} className="font-poppins text-xs bg-white/15 text-white px-3 py-1 rounded-full">{cls}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1C. OUR UNIQUENESS
// ─────────────────────────────────────────────────────────────────────────────

function OurUniqueness() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">What Makes Us Special</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">Our Uniqueness</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="max-w-3xl mx-auto text-center">
          <div className="bg-forest rounded-[24px] p-8 mb-8">
            <Sparkles className="w-16 h-16 text-nursery mx-auto mb-4" />
            <p className="font-poppins text-white text-lg leading-relaxed">
              At Thinkers Base Academy, your child will be uniquely valued and will have opportunities that no other school can offer through our well-structured programme and 21st century teaching and learning methods.
            </p>
          </div>
          <p className="font-poppins text-charcoal/80 text-lg leading-relaxed">
            At TBA, we use the <span className="font-nunito font-bold text-forest">Montessori approach</span> to learning and we are equally passionate about helping every pupil grow into a knowledgeable, compassionate and internationally-minded global citizen who can contribute to the world and help make it a better place.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1D. OUR STRATEGY
// ─────────────────────────────────────────────────────────────────────────────

function OurStrategy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const strategies = [
    "Provide opportunities that will stimulate interest and imagination",
    "Make every child feel valued as an individual",
    "Nurture every child to become a happy healthy enthusiastic and confident learner with high self esteem and self worth",
    "Raise independent, curious, creative and resilient learners",
    "Inspire our pupils to be courageous",
    "Encourage them to be the best they can be (we have high expectations for every child)",
    "Mould them to be able to challenge themselves and take risks",
    "Raise pupils that will be exceptional in every area of life",
    "Enhance their ability to think critically and ask questions",
  ];

  return (
    <section ref={ref} className="py-20 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Our Approach</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-white mb-4">Our Strategy</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strategies.map((strategy, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.4 }} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-card p-5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-nursery/30 flex items-center justify-center flex-shrink-0">
                <ChevronRight className="w-4 h-4 text-nursery" />
              </div>
              <p className="font-poppins text-white text-sm leading-relaxed">{strategy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1E. OUR PRINCIPLE - CLASSY
// ─────────────────────────────────────────────────────────────────────────────

function OurPrinciple() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const classyValues = [
    { letter: "C", word: "Communicators", desc: "Express thoughts clearly and listen actively" },
    { letter: "L", word: "Lifelong Learners", desc: "Never stop learning and growing" },
    { letter: "A", word: "Academic Achievers", desc: "Strive for excellence in all subjects" },
    { letter: "S", word: "Social Contributors", desc: "Make positive contributions to society" },
    { letter: "S", word: "Strong & Exceptional", desc: "Healthy body and mind, outstanding character" },
    { letter: "Y", word: "Young Role Models", desc: "Inspire others through good example" },
  ];

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Our Guiding Principle</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">Every Child is UNIQUE and CLASSY</h2>
          <p className="font-poppins text-charcoal/70 text-base max-w-2xl mx-auto">We expose them to well planned activities which stimulate their interest and their natural quest for knowledge.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {classyValues.map((item, i) => (
            <motion.div key={item.letter + i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-white rounded-card p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-16 h-16 rounded-full bg-forest mx-auto mb-4 flex items-center justify-center">
                <span className="font-nunito font-extrabold text-2xl text-white">{item.letter}</span>
              </div>
              <h3 className="font-nunito font-bold text-forest text-lg mb-2">{item.word}</h3>
              <p className="font-poppins text-charcoal/60 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1F. OUR FACILITIES
// ─────────────────────────────────────────────────────────────────────────────

function OurFacilities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const facilities = [
    { icon: Building2, title: "Child-Friendly Environment", desc: "Safe, attractive, comfortable and hygienic facilities" },
    { icon: Shield, title: "24/7 Security", desc: "Fenced premises, locked gates, security personnel & CCTV cameras" },
    { icon: Wifi, title: "Smart Classrooms", desc: "Air conditioned rooms with modern technology" },
    { icon: BookOpen, title: "Library/ICT Room", desc: "Well-stocked library and computer room" },
    { icon: Utensils, title: "Kitchen Facility", desc: "Well equipped kitchen for culinary lessons" },
    { icon: Bus, title: "Transportation", desc: "Air conditioned bus for pickup and drop-off" },
    { icon: Sprout, title: "Playground", desc: "Well equipped playground for exploration" },
    { icon: Droplets, title: "Water Supply", desc: "24 hours steady water supply" },
    { icon: Sun, title: "Solar Electricity", desc: "24 hours solar powered electricity supply" },
  ];

  return (
    <section ref={ref} className="py-20 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Our Infrastructure</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-white mb-4">World-Class Facilities</h2>
          <p className="font-poppins text-white/80 text-base max-w-2xl mx-auto">Our world class facility is child friendly and of highest quality. It is safe, attractive, comfortable and very hygienic.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, i) => (
            <motion.div key={facility.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-card p-6">
              <div className="w-12 h-12 rounded-2xl bg-nursery/20 flex items-center justify-center mb-4">
                <facility.icon className="w-6 h-6 text-nursery" />
              </div>
              <h3 className="font-nunito font-bold text-white text-lg mb-2">{facility.title}</h3>
              <p className="font-poppins text-white/80 text-sm">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1G. ACADEMIC CALENDAR
// ─────────────────────────────────────────────────────────────────────────────

function AcademicCalendar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">School Schedule</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">Academic Calendar</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Calendar, title: "Academic Year", desc: "Starts in September and ends in July. Divided into three terms with short holidays in between." },
            { icon: Clock, title: "School Hours", desc: "8:00am to 2:00pm. Children are expected to be in school before 8:00am." },
            { icon: Calendar, title: "School Days", desc: "Monday to Friday, except on public holidays." },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-white rounded-card p-6 shadow-card">
              <item.icon className="w-10 h-10 text-leaf mb-4" />
              <h3 className="font-nunito font-bold text-forest text-lg mb-2">{item.title}</h3>
              <p className="font-poppins text-charcoal/75 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1H. EXTRA CURRICULAR ACTIVITIES
// ─────────────────────────────────────────────────────────────────────────────

function ExtraCurricular() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const activities = [
    { icon: Music, name: "Music and Dance Club" },
    { icon: Utensils, name: "Culinary Club" },
    { icon: FlaskConical, name: "Science Club" },
    { icon: BookMarked, name: "Bible Explorers" },
    { icon: Mic, name: "Public Speaking Club" },
    { icon: Leaf, name: "Farmers Club" },
    { icon: Palette, name: "Art and Craft" },
  ];

  return (
    <section ref={ref} className="py-20 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Beyond the Classroom</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-white mb-4">Extra Curricular Activities</h2>
          <p className="font-poppins text-white/80 text-base max-w-xl mx-auto">We offer a variety of clubs and activities to nurture every child&apos;s interests and talents.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {activities.map((activity, i) => (
            <motion.div key={activity.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.4 }} className="bg-white/15 backdrop-blur-sm border border-white/15 rounded-card p-4 text-center hover:bg-white/25 transition-colors">
              <div className="w-12 h-12 rounded-full bg-nursery/30 flex items-center justify-center mx-auto mb-3">
                <activity.icon className="w-6 h-6 text-nursery" />
              </div>
              <p className="font-poppins text-white text-xs">{activity.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1I. SCHOOL POLICIES
// ─────────────────────────────────────────────────────────────────────────────

function SchoolPolicies() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Guidelines</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">School Policies</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }} className="bg-white rounded-card p-8 shadow-card">
            <FileText className="w-10 h-10 text-leaf mb-4" />
            <h3 className="font-nunito font-bold text-forest text-xl mb-4">Homework Policy</h3>
            <p className="font-poppins text-charcoal/75 text-sm leading-relaxed mb-4">We give our pupils take home assignment/homework in order to help them develop good study habit and shared learning partnership between school and home.</p>
            <ul className="space-y-2">
              {["Parents should go through their child's school bag", "Ensure homework is properly done and returned promptly", "Do not do homework for your child - guide them instead"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-charcoal/75">
                  <CheckCircle2 className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }} className="bg-white rounded-card p-8 shadow-card">
            <Calendar className="w-10 h-10 text-leaf mb-4" />
            <h3 className="font-nunito font-bold text-forest text-xl mb-4">Birthday Policy</h3>
            <p className="font-poppins text-charcoal/75 text-sm leading-relaxed mb-4">Children can celebrate their birthdays in school. Those who wish to celebrate their children&apos;s birthday should please notify the school or the class teacher two days in advance.</p>
            <div className="bg-forest/8 rounded-lg p-4 border border-forest/10">
              <p className="font-poppins text-charcoal/75 text-sm"><span className="font-nunito font-bold text-forest">Note:</span> Parents must bring their child to school by 10:30am on the birthday celebration day. Cooked food will not be allowed during birthday celebrations.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1J. GOLDEN RULES
// ─────────────────────────────────────────────────────────────────────────────

function GoldenRules() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const rules = [
    "Toys are not allowed in school except pupils are instructed to bring for lessons",
    "Jewelry and money are not allowed in school",
    "No foul language and no bullying in school",
    "No fighting in school - any pupil that starts a fight will be suspended or even expelled",
    "Unhealthy snacks and drinks such as chocolates, chewing gums, sweets, and soft drinks are not allowed (water is the best drink)",
    "Daily meal plan will be provided by the school and parents are expected to adhere strictly to it",
  ];

  return (
    <section ref={ref} className="py-20 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Code of Conduct</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-white mb-4">Golden Rules</h2>
          <p className="font-poppins text-white/80 text-base max-w-xl mx-auto">Our school rules help maintain a safe and positive learning environment for all students.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {rules.map((rule, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.4 }} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-card p-5">
              <div className="w-8 h-8 rounded-full bg-nursery/30 flex items-center justify-center flex-shrink-0">
                <span className="font-nunito font-bold text-nursery text-sm">{i + 1}</span>
              </div>
              <p className="font-poppins text-white text-sm leading-relaxed">{rule}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1K. PRINCIPAL'S MESSAGE / GRATITUDE
// ─────────────────────────────────────────────────────────────────────────────

function PrincipalsMessage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">A Message from Our Head</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">Our Gratitude</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="bg-forest rounded-[24px] p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl shadow-black/30 mb-4">
                  <Image
                    src="/images/Mrs Joysam2.jpg"
                    alt="Mrs. Joysam Ngene — School Head, Thinkers Base Academy"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <p className="font-nunito font-bold text-white text-lg text-center">Mrs. Joysam Ngene</p>
                <p className="font-poppins text-leaf text-sm text-center">School Head & Founding Principal</p>
              </div>
              <div className="md:col-span-2">
                <MessageCircle className="w-10 h-10 text-nursery mb-5" />
                <p className="font-poppins text-white text-lg leading-relaxed mb-6">
                  We are grateful to God for preserving our lives and we thank our parents for cooperating with us towards achieving the mission and vision of the school.
                </p>
                <p className="font-poppins text-white/80 text-base leading-relaxed">
                  It is our collective dedication — staff, parents and pupils — that makes Thinkers Base Academy the warm, thriving community it is today. We look forward to many more years of growth, learning and excellence together.
                </p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-nursery fill-nursery" />
                    ))}
                    <span className="font-poppins text-white/60 text-xs ml-2">Founding Principal, Thinkers Base Academy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. SCHOOL STORY
// ─────────────────────────────────────────────────────────────────────────────

function SchoolStory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-nursery" />
            <div className="pl-8">
              <div className="font-nunito font-extrabold text-8xl text-leaf/20 leading-none -mb-4 select-none">"</div>
              <p className="font-nunito font-extrabold text-2xl sm:text-3xl text-forest leading-snug mb-6">
                We started as a small playgroup with a big dream — that every child deserves a school that truly sees them.
              </p>
              <p className="font-poppins text-charcoal/60 text-sm">— Mrs. Joysam Ngene, Founding Principal</p>
            </div>
            <div className="absolute -bottom-4 -right-4 font-nunito font-extrabold text-[120px] text-forest/5 leading-none select-none pointer-events-none">2019</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15, duration: 0.6 }} className="space-y-5 font-poppins text-charcoal/80 text-base leading-relaxed">
            <p>
              Thinkers Base Academy opened its doors on <strong className="text-forest">17th September 2019</strong>, starting as a <strong className="text-forest">Play Group</strong> — a small but passionate community of learners at Plot 183A/B Mary Emmanuel Street New GRA Trans-Ekulu, Enugu.
            </p>
            <p>
              In <strong className="text-forest">2020</strong>, we grew to welcome our first <strong className="text-forest">Preschool 1, Preschool 2 and Reception</strong> classes, bringing our full Foundation Stage to life with the warmth and structured play that defines early years learning at TBA.
            </p>
            <p>
              By <strong className="text-forest">2021</strong>, those same children — and many new families — were ready for more. <strong className="text-forest">Grades 1, 2 and 3</strong> were launched, giving pupils a seamless transition from nursery into a rigorous, nurturing primary education.
            </p>
            <p>
              Those pupils continued their journey with us through every grade, and in <strong className="text-forest">2024</strong>, Thinkers Base Academy celebrated its <strong className="text-forest">first ever Grade School graduating class</strong> — a proud milestone for our entire community.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Every child seen", "Learning with joy", "Community first", "Growing together"].map((v) => (
                <span key={v} className="font-nunito font-bold text-xs px-3 py-1.5 rounded-button bg-leaf/15 text-forest">✓ {v}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. GROWING TREE TIMELINE
// ─────────────────────────────────────────────────────────────────────────────

const milestones = [
  {
    year: "2019",
    title: "Thinkers Base Academy Founded",
    emoji: "🌱",
    stage: "creche",
    desc: "Established on 17th September 2019 at Plot 183A/B Mary Emmanuel Street New GRA Trans-Ekulu, Enugu. We opened our doors as a Play Group — a small, passionate community of learners with a big dream.",
    color: "#F4D03F",
  },
  {
    year: "2020",
    title: "Preschool 1, 2 & Reception Open",
    emoji: "👶",
    stage: "creche",
    desc: "Our Foundation Stage grows to include Preschool 1, Preschool 2 and Reception classes, bringing the full EYFS-inspired early years programme to life.",
    color: "#F4D03F",
  },
  {
    year: "2021",
    title: "Grades 1, 2 & 3 Launch",
    emoji: "🎒",
    stage: "preschool",
    desc: "Our Pre School stage opens with Grades 1, 2 and 3. Families who started with us in 2019 continue their journey seamlessly into primary education at TBA.",
    color: "#5BA4CF",
  },
  {
    year: "2021",
    title: "Extra-Curricular Clubs Launch",
    emoji: "🎭",
    stage: "preschool",
    desc: "We launch our full club programme: Music and Dance, Culinary, Science, Bible Explorers, Public Speaking, Farmers Club and Art and Craft.",
    color: "#5BA4CF",
  },
  {
    year: "2022–23",
    title: "Grades 4 & 5 Added",
    emoji: "📚",
    stage: "gradeschool",
    desc: "Our Grade School grows to its full offering — Grades 4 and 5/6 — completing Key Stage 2 and giving every pupil a complete primary education from Creche to graduation.",
    color: "#E8845C",
  },
  {
    year: "2024",
    title: "First Grade School Graduation 🎓",
    emoji: "🏆",
    stage: "gradeschool",
    desc: "A landmark year — Thinkers Base Academy celebrates its very first Grade School graduating class. The pupils who joined us as a Play Group in 2019 crossed the stage in 2024. A proud day for our whole community.",
    color: "#E8845C",
  },
];

type MilestoneStage = "creche" | "preschool" | "gradeschool";

function TreeTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState<number | null>(null);

  const stageLabels: Record<MilestoneStage, string> = {
    creche: "🌱 Creche",
    preschool: "🎒 Pre School",
    gradeschool: "📚 Grade School",
  };

  const stageColors: Record<MilestoneStage, string> = {
    creche: "#F4D03F",
    preschool: "#5BA4CF",
    gradeschool: "#E8845C",
  };

  return (
    <section ref={ref} className="py-20 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle, #52B788 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Our Journey</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-white mb-4">How We Grew 🌳</h2>
          <p className="font-poppins text-white/80 text-base max-w-lg mx-auto">
            From a Play Group in 2019 to a full Creche, Pre School and Grade School — with our first graduating class in 2024.
          </p>
        </motion.div>

        {/* Stage legend */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.entries(stageLabels) as [MilestoneStage, string][]).map(([stage, label]) => (
            <span key={stage} className="font-nunito font-bold text-xs px-3 py-1.5 rounded-button" style={{ backgroundColor: stageColors[stage] + "33", color: stageColors[stage] }}>
              {label}
            </span>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-leaf/30 sm:-translate-x-px" />
          <div className="space-y-10">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              const isActive = active === i;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: isLeft ? -32 : 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.5 }} className={`relative flex items-start gap-4 sm:gap-0 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <button
                    onClick={() => setActive(isActive ? null : i)}
                    className={`flex-1 ml-14 sm:ml-0 text-left bg-white/10 backdrop-blur-sm border rounded-card p-5 transition-all duration-300 cursor-pointer ${isLeft ? "sm:mr-12" : "sm:ml-12"} ${isActive ? "border-white/40 bg-white/20 shadow-lg shadow-black/20" : "border-white/15 hover:border-white/30 hover:bg-white/15"}`}
                  >
                    <span className="inline-block font-nunito font-bold text-[10px] px-2 py-0.5 rounded-button mb-2" style={{ backgroundColor: m.color + "33", color: m.color }}>
                      {m.stage.toUpperCase()}
                    </span>
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{m.emoji}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-nunito font-extrabold text-sm" style={{ color: m.color }}>{m.year}</span>
                          <span className="font-nunito font-bold text-white text-sm">{m.title}</span>
                        </div>
                        <motion.p initial={false} animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }} transition={{ duration: 0.3 }} className="font-poppins text-white/80 text-xs leading-relaxed overflow-hidden">
                          {m.desc}
                        </motion.p>
                        {!isActive && <p className="font-poppins text-white/50 text-xs">Click to read more</p>}
                      </div>
                    </div>
                  </button>

                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-4 w-8 h-8 rounded-full border-4 border-forest flex items-center justify-center text-sm z-10 shadow-md" style={{ backgroundColor: m.color }}>
                    {m.emoji}
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
// 4. MISSION, VISION & VALUES
// ─────────────────────────────────────────────────────────────────────────────

function MissionVisionValues() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const cards = [
    { icon: Target, title: "Our Mission", color: "#52B788", bg: "#F0FFF4", content: "To provide an exceptional, inclusive education that nurtures every child's unique potential — from their very first day in Creche to the moment they step into the world as confident, capable young people.", type: "paragraph" as const },
    { icon: Eye, title: "Our Vision", color: "#5BA4CF", bg: "#EBF5FF", content: "A community where every child — regardless of background, ability or circumstance — has access to outstanding education, genuine care, and the opportunity to discover what makes them extraordinary.", type: "paragraph" as const },
    {
      icon: Star, title: "Our Values", color: "#F4D03F", bg: "#FFFDE7",
      items: [
        { icon: Heart, label: "Care", desc: "Every child known and loved" },
        { icon: Lightbulb, label: "Curiosity", desc: "Questions are always welcome" },
        { icon: Users, label: "Community", desc: "We grow stronger together" },
        { icon: CheckCircle2, label: "Integrity", desc: "We say what we do, and do what we say" },
      ],
      type: "list" as const,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">What Drives Us</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">Mission, Vision & Values</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15, duration: 0.5 }} className="rounded-card p-8 shadow-card hover:shadow-card-hover transition-shadow" style={{ backgroundColor: card.bg, borderTop: `4px solid ${card.color}` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: card.color + "33" }}>
                <card.icon className="w-6 h-6" style={{ color: card.color }} />
              </div>
              <h3 className="font-nunito font-extrabold text-forest text-xl mb-4">{card.title}</h3>
              {card.type === "paragraph" ? (
                <p className="font-poppins text-charcoal/75 text-sm leading-relaxed">{card.content}</p>
              ) : (
                <ul className="space-y-3">
                  {card.items!.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: card.color + "33" }}>
                        <item.icon className="w-3.5 h-3.5" style={{ color: "#7a5c00" }} />
                      </div>
                      <div>
                        <p className="font-nunito font-bold text-forest text-sm">{item.label}</p>
                        <p className="font-poppins text-charcoal/60 text-xs">{item.desc}</p>
                      </div>
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

// ─────────────────────────────────────────────────────────────────────────────
// 5. TEAM — you can edit names/roles later
// ─────────────────────────────────────────────────────────────────────────────

const team = [
  { name: "Mrs. Joysam Ngene", role: "Founding Principal & School Head", stage: "all", initials: "JN", bio: "Mrs. Joysam Ngene founded Thinkers Base Academy in 2019. She believes every child has a gift — her job is to help them find it.", color: "#52B788" },
  { name: "Mrs. Amaka Chukwu", role: "Head of Grade School", stage: "gradeschool", initials: "AC", bio: "Amaka leads our Grade School with passion and precision. Her classrooms are always the most engaged.", color: "#E8845C" },
  { name: "Miss Ngozi Adeyemi", role: "Head of Pre School", stage: "preschool", initials: "NA", bio: "Ngozi brings warmth and expertise to every Pre School classroom. She has a gift for making children feel safe and excited to learn.", color: "#5BA4CF" },
  { name: "Mrs. Fatima Bello", role: "Head of Creche & Foundation", stage: "creche", initials: "FB", bio: "Fatima leads our youngest learners with love and patience. Her door is always open for parents and children alike.", color: "#F4D03F" },
];

function TeamGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState<number | null>(null);

  const stageColors: Record<string, string> = {
    creche: "#F4D03F", preschool: "#5BA4CF", gradeschool: "#E8845C", all: "#52B788",
  };

  return (
    <section ref={ref} className="py-20 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">The People Behind Thinkers Base Academy</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-white mb-4">Meet the Leadership Team 👋</h2>
          <p className="font-poppins text-white/80 text-base max-w-lg mx-auto">Every one of them chose this school because they believe in what it stands for. Hover over a card to meet them properly.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => {
            const ringColor = stageColors[member.stage] || "#52B788";
            const isHovered = hovered === i;
            return (
              <motion.div key={member.name} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} className="bg-white/10 border border-white/15 rounded-card p-6 cursor-default transition-all duration-300 hover:bg-white/18 hover:border-white/25 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-nunito font-extrabold text-lg flex-shrink-0 transition-all duration-300" style={{ backgroundColor: ringColor + "33", color: ringColor, border: `${isHovered ? 3 : 2}px solid ${isHovered ? ringColor : ringColor + "55"}` }}>
                    {member.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-nunito font-extrabold text-white text-base leading-tight">{member.name}</p>
                    <p className="font-poppins text-sm mt-0.5" style={{ color: ringColor }}>{member.role}</p>
                  </div>
                </div>
                <motion.div initial={false} animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <p className="font-poppins text-white/80 text-xs leading-relaxed mt-4 pt-4 border-t border-white/10">{member.bio}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. BY THE NUMBERS
// ─────────────────────────────────────────────────────────────────────────────

const schoolStats = [
  { emoji: "📅", value: "5", suffix: "+", label: "Years in operation" },
  { emoji: "👶", value: "Creche", suffix: "", label: "Ages 1 – 4" },
  { emoji: "🎒", value: "Pre School", suffix: "", label: "Grades 1 – 2" },
  { emoji: "📚", value: "Grade School", suffix: "", label: "Grades 3 – 5" },
  { emoji: "🎓", value: "2024", suffix: "", label: "First graduating class" },
  { emoji: "🏆", value: "7", suffix: "", label: "Clubs & activities" },
];

function useCounter(target: number, started: boolean) {
  const [count, setCount] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);
  if (started && count === 0 && target > 0) {
    const step = Math.ceil(target / 60);
    ref.current = setInterval(() => {
      setCount((c) => {
        if (c + step >= target) { clearInterval(ref.current!); return target; }
        return c + step;
      });
    }, 24);
  }
  return count;
}

function StatChip({ emoji, value, suffix, label, index, started }: { emoji: string; value: string; suffix: string; label: string; index: number; started: boolean }) {
  const isNum = !isNaN(Number(value));
  const num = useCounter(isNum ? parseInt(value) : 0, started && isNum);
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="flex flex-col items-center gap-1 px-4">
      <span className="text-3xl mb-1">{emoji}</span>
      <span className="font-nunito font-extrabold text-2xl sm:text-3xl text-white tabular-nums text-center">
        {isNum ? `${num}${suffix}` : value}
      </span>
      <span className="font-poppins text-white/80 text-xs text-center">{label}</span>
    </motion.div>
  );
}

function ByTheNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 divide-x divide-white/20">
          {schoolStats.map((s, i) => (
            <StatChip key={s.label} {...s} index={i} started={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. SCHOOL LIFE PHOTO WALL — real image slots for you to upload
// ─────────────────────────────────────────────────────────────────────────────

const schoolLifePhotos = [
  { src: "/images/bts2.jpg", label: "In the Classroom", size: "col-span-2 row-span-2" },
  { src: "/images/bts3.jpg", label: "Playtime", size: "col-span-1" },
  { src: "/images/students displaying handcraft.jpeg", label: "Art & Craft", size: "col-span-1" },
  { src: "/images/student with mini microscope.jpeg", label: "Science Club", size: "col-span-1" },
  { src: "/images/life-5.jpg", label: "Music & Dance", size: "col-span-1" },
  { src: "/images/Students in swimmingpool.jpeg", label: "Sports Day", size: "col-span-2" },
  { src: "/images/.jpeg", label: "Graduation 2024", size: "col-span-1" },
  { src: "/images/students in traditional atire.jpeg", label: "Cultural Day", size: "col-span-1" },
];

function PhotoWall() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block font-poppins text-leaf font-semibold text-sm tracking-widest uppercase mb-3">Life at Thinkers Base Academy</span>
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest mb-4">A School Full of Life 📸</h2>
          <p className="font-poppins text-charcoal/60 text-base max-w-md mx-auto">
           Moments from our classrooms, playgrounds and celebrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-3 auto-rows-[160px]">
          {schoolLifePhotos.map((photo, i) => (
            <motion.div
              key={photo.label}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`${photo.size} relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border-2 border-white transition-shadow group`}
            >
              <Image
                src={photo.src}
                alt={`${photo.label} — Thinkers Base Academy`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Label overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-nunito font-bold text-white text-sm">{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. BOTTOM CTA
// ─────────────────────────────────────────────────────────────────────────────

function AboutCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="py-16 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="bg-forest rounded-[24px] p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-leaf/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-nursery/10 rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
          <div className="relative">
            <span className="text-4xl mb-4 block">🤝</span>
            <h2 className="font-nunito font-extrabold text-2xl sm:text-3xl text-white mb-3">Come and See It for Yourself</h2>
            <p className="font-poppins text-white/80 text-sm mb-7 max-w-md mx-auto leading-relaxed">
              No website can fully show you what Thinkers Base Academy feels like. Book a visit and experience our community firsthand.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://wa.me/2348037134462" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-nursery text-forest font-nunito font-extrabold text-sm px-6 py-3 rounded-button hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg">
                Book a School Visit <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-nunito font-bold text-sm px-6 py-3 rounded-button hover:bg-white/20 transition-all">
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE ASSEMBLY
// ─────────────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Preamble />
      <OurCurriculum />
      <OurUniqueness />
      <OurStrategy />
      <OurPrinciple />
      <OurFacilities />
      <AcademicCalendar />
      <ExtraCurricular />
      <SchoolPolicies />
      <GoldenRules />
      <PrincipalsMessage />
      <SchoolStory />
      <TreeTimeline />
      <MissionVisionValues />
      <TeamGrid />
      <ByTheNumbers />
      <PhotoWall />
      <AboutCta />
    </>
  );
}