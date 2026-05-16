"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function ContactHero() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-28"
      style={{ background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #52B788 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-0 right-0 w-80 h-80 bg-nursery/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-2 text-white/50 text-xs font-poppins mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80">Contact Us</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.55 }} className="font-nunito font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-5">
          We&apos;d Love to
          <br />
          <span className="text-nursery">Hear From You</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }} className="font-poppins text-white/80 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
          Whether you have a question about admissions, want to book a school tour, or just want to know more — our team is always happy to help.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-3 justify-center">
          <a href="https://wa.me/2348037134462" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-nursery text-forest font-nunito font-extrabold text-sm px-6 py-3 rounded-button hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg">
            WhatsApp Us <ArrowRight className="w-4 h-4" />
          </a>
          <a href="tel:+2348037134462" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-nunito font-bold text-sm px-6 py-3 rounded-button hover:bg-white/20 transition-all">
            <Phone className="w-4 h-4" /> Call Us
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14">
          <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#F8FFF4" />
        </svg>
      </div>
    </section>
  );
}

function ContactMain() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", stage: "", message: "" });

  const contactCards = [
    { icon: Phone, color: "#52B788", title: "Call / WhatsApp", lines: ["+234 803 713 4462", "+2348088292398"], href: "https://wa.me/+2348088292398", cta: "Open WhatsApp" },
    { icon: Mail, color: "#5BA4CF", title: "Email Us", lines: ["thinkersbaseacademy@gmail.com"], href: "mailto:thinkersbaseacademy@gmail.com", cta: "Send Email" },
    { icon: MapPin, color: "#E8845C", title: "Visit Us", lines: ["Plot 183A/B Mary Emmanuel Street", "New GRA Trans-Ekulu, Enugu"], href: "https://maps.app.goo.gl/6o2zWi1o3rsL1h6cA", cta: "Get Directions" },
    { icon: Clock, color: "#F4D03F", title: "School Hours", lines: ["Mon – Wed: 8:00am – 3:00pm", "Thu – Fri: 8:00am – 2:00pm"], href: null, cta: null },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Thinkers Base Academy! 👋\n\nI'd like to make an enquiry:\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nStage of interest: ${form.stage || "Not specified"}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/+2348088292398?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactCards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition-shadow group" style={{ borderTop: `4px solid ${card.color}` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: card.color + "22" }}>
                <card.icon className="w-6 h-6" style={{ color: card.color }} />
              </div>
              <h3 className="font-nunito font-bold text-forest text-base mb-2">{card.title}</h3>
              {card.lines.map((line, j) => (
                <p key={j} className="font-poppins text-charcoal/65 text-sm leading-snug">{line}</p>
              ))}
              {card.href && card.cta && (
                <a href={card.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-nunito font-bold text-xs mt-3 transition-colors" style={{ color: card.color }}>
                  {card.cta} <ArrowRight className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Enquiry form */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }}>
            <div className="bg-white rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-nunito font-extrabold text-forest text-xl">Send Us an Enquiry</h2>
                  <p className="font-poppins text-charcoal/50 text-xs">We&apos;ll respond within one school day</p>
                </div>
              </div>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center py-10">
                  <CheckCircle2 className="w-16 h-16 text-leaf mb-4" />
                  <h3 className="font-nunito font-extrabold text-forest text-xl mb-2">Message Sent!</h3>
                  <p className="font-poppins text-charcoal/65 text-sm max-w-xs leading-relaxed">Your WhatsApp has opened with your message ready to send. We&apos;ll be in touch very soon.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", stage: "", message: "" }); }} className="mt-6 font-nunito font-bold text-sm text-leaf hover:text-forest transition-colors">
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="font-poppins text-xs font-semibold text-charcoal/60 block mb-1.5">Full Name *</label>
                      <input required name="name" value={form.name} onChange={handleChange} placeholder="e.g. Mrs. Adaeze Okafor" className="w-full font-poppins text-sm px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-leaf focus:outline-none transition-colors bg-gray-50/50" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="font-poppins text-xs font-semibold text-charcoal/60 block mb-1.5">Phone / WhatsApp *</label>
                      <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" className="w-full font-poppins text-sm px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-leaf focus:outline-none transition-colors bg-gray-50/50" />
                    </div>
                  </div>
                  <div>
                    <label className="font-poppins text-xs font-semibold text-charcoal/60 block mb-1.5">Email Address</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com" className="w-full font-poppins text-sm px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-leaf focus:outline-none transition-colors bg-gray-50/50" />
                  </div>
                  <div>
                    <label className="font-poppins text-xs font-semibold text-charcoal/60 block mb-1.5">Stage of Interest</label>
                    <select name="stage" value={form.stage} onChange={handleChange} className="w-full font-poppins text-sm px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-leaf focus:outline-none transition-colors bg-gray-50/50 text-charcoal/75">
                      <option value="">Select a stage...</option>
                      <option value="Foundation stage (Ages 1–4)">🌱 Foundation — Ages 1–4</option>
                      <option value="Pre School / Key Stage 1 (Ages 4–6)">🎒 Pre School / Key Stage 1 — Ages 4–6</option>
                      <option value="Grade School / Key Stage 2 (Ages 6–12)">📚 Grade School / Key Stage 2 — Ages 6–12</option>
                      <option value="General Enquiry">💬 General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-poppins text-xs font-semibold text-charcoal/60 block mb-1.5">Your Message *</label>
                    <textarea required name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your child, your questions, or what you'd like to know..." className="w-full font-poppins text-sm px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-leaf focus:outline-none transition-colors bg-gray-50/50 resize-none" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-forest text-white font-nunito font-extrabold text-sm px-6 py-3.5 rounded-button hover:bg-forest/90 hover:-translate-y-0.5 transition-all shadow-md">
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                  <p className="font-poppins text-charcoal/40 text-xs text-center">This will open WhatsApp with your message pre-filled</p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Map + visit info */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4, duration: 0.6 }} className="flex flex-col gap-6">

            {/* Map card — shows area map + button to open exact pin */}
            <div className="rounded-card overflow-hidden shadow-card border-2 border-white flex-1 min-h-[300px] relative">

              <iframe
                title="Thinkers Base Academy — New GRA Trans-Ekulu Enugu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.721985840529!2d7.484916499999999!3d6.4856279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a30cc7e626b9%3A0xa4bafd761b6ef4e2!2sThinkers%20Base%20Academy!5e0!3m2!1sen!2sng!4v1700000000001!5m2!1sen!2sng"
                width="100%"
                height="300"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay — opens exact school pin */}
              <a
                href="https://maps.app.goo.gl/6o2zWi1o3rsL1h6cA"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-forest text-white font-nunito font-bold text-xs px-4 py-2 rounded-lg shadow-lg hover:bg-forest/90 transition-all z-10"
              >
                <MapPin className="w-3.5 h-3.5 text-nursery" />
                Open Exact Location
              </a>
            </div>

            {/* Visit info card */}
            <div className="bg-forest rounded-card p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-leaf/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="relative">
                <h3 className="font-nunito font-bold text-white text-lg mb-2">📍 Come Visit Us</h3>
                <p className="font-poppins text-white/75 text-sm mb-4 leading-relaxed">
                  Plot 183A/B Mary Emmanuel Street,<br />New GRA Trans-Ekulu, Enugu.
                </p>
                <a
                  href="https://maps.app.goo.gl/6o2zWi1o3rsL1h6cA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-nursery text-forest font-nunito font-bold text-sm px-5 py-2.5 rounded-button hover:opacity-90 transition-all"
                >
                  Get Directions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const links = [
    { emoji: "✨", label: "Apply for Admissions", href: "/admissions", desc: "Start your application today" },
    { emoji: "🏫", label: "About Our School", href: "/about", desc: "Our story, mission & values" },
    { emoji: "🌱", label: "Foundation Programme", href: "/Foundation", desc: "Ages 1 – 5" },
    { emoji: "📚", label: "Grade School", href: "/grade-school", desc: "Ages 6 – 12" },
    { emoji: "🎨", label: "School Life", href: "/school-life", desc: "Activities & campus life" },
  ];

  return (
    <section ref={ref} className="py-16 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-10">
          <h2 className="font-nunito font-extrabold text-2xl text-white mb-2">Explore More</h2>
          <p className="font-poppins text-white/60 text-sm">Find what you need across our site</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link, i) => (
            <motion.div key={link.href} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.07, duration: 0.4 }}>
              <Link href={link.href} className="group flex flex-col items-center text-center bg-white/10 border border-white/15 rounded-card p-5 hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
                <span className="text-2xl mb-2">{link.emoji}</span>
                <span className="font-nunito font-bold text-white text-sm mb-1">{link.label}</span>
                <span className="font-poppins text-white/50 text-xs">{link.desc}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMain />
      <QuickLinks />
    </>
  );
}