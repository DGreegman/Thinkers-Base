"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import { schoolInfo, stages, navLinks } from "@/data/content";

// ── Wave SVG divider ──────────────────────────────────────────────────────────
function WaveTop() {
  return (
    <div className="w-full overflow-hidden leading-none -mb-px">
      <svg
        viewBox="0 0 1440 64"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16 block"
      >
        <path
          d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
          fill="#1B4332"
        />
      </svg>
    </div>
  );
}

// ── Social icon button ────────────────────────────────────────────────────────
function SocialBtn({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-nursery hover:text-forest text-white/70 transition-all duration-200 hover:-translate-y-1"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

// ── Footer link ───────────────────────────────────────────────────────────────
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white/60 hover:text-nursery text-sm font-poppins transition-colors duration-150 hover:translate-x-1 inline-block"
    >
      {children}
    </Link>
  );
}

// ── Contact row ───────────────────────────────────────────────────────────────
function ContactRow({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full bg-leaf/20">
        <Icon className="w-3.5 h-3.5 text-nursery" />
      </div>
      <span className="text-white/70 text-sm font-poppins leading-relaxed">{children}</span>
    </div>
  );
}

// ── Main Footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <WaveTop />

      <footer className="bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">

          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

            {/* Col 1 — Brand */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group mb-4">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-leaf rounded-full opacity-25 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-nursery fill-nursery" />
                  </div>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-nunito font-extrabold text-white text-base tracking-tight">
                    {schoolInfo.name}
                  </span>
                  <span className="font-poppins text-leaf text-[10px] tracking-widest uppercase">
                    Growing Minds
                  </span>
                </div>
              </Link>

              <p className="text-white/60 text-sm font-poppins leading-relaxed mb-5">
                {schoolInfo.description}
              </p>

              {/* Stage pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {stages.map((s) => (
                  <Link
                    key={s.id}
                    href={s.href}
                    className="text-xs font-nunito font-bold px-3 py-1 rounded-button transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{ backgroundColor: s.hex, color: s.id === "nursery" ? "#1B4332" : "#fff" }}
                  >
                    {s.emoji} {s.id.charAt(0).toUpperCase() + s.id.slice(1)}
                  </Link>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex gap-2">
                <SocialBtn href="#" icon={Facebook}  label="Facebook"  />
                <SocialBtn href="#" icon={Instagram} label="Instagram" />
                <SocialBtn href="#" icon={Youtube}   label="YouTube"   />
                <SocialBtn href="#" icon={Twitter}   label="Twitter"   />
              </div>
            </div>

            {/* Col 2 — Quick links */}
            <div>
              <h4 className="font-nunito font-extrabold text-white text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {navLinks
                  .filter((l) => !l.children)
                  .map((l) => (
                    <li key={l.href}>
                      <FooterLink href={l.href}>{l.label}</FooterLink>
                    </li>
                  ))}
                <li><FooterLink href="/achievements">Achievements</FooterLink></li>
                <li><FooterLink href="/school-life">School Life</FooterLink></li>
              </ul>
            </div>

            {/* Col 3 — Our School */}
            <div>
              <h4 className="font-nunito font-extrabold text-white text-sm uppercase tracking-wider mb-4">
                Our School
              </h4>
              <ul className="space-y-2.5">
                {stages.map((s) => (
                  <li key={s.id}>
                    <FooterLink href={s.href}>
                      {s.emoji} {s.label}
                      <span className="ml-1.5 text-white/40 text-xs">({s.ages})</span>
                    </FooterLink>
                  </li>
                ))}
                <li><FooterLink href="/admissions">How to Apply</FooterLink></li>
                <li><FooterLink href="/about">Our Story</FooterLink></li>
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div>
              <h4 className="font-nunito font-extrabold text-white text-sm uppercase tracking-wider mb-4">
                Get in Touch
              </h4>
              <div className="space-y-3">
                <ContactRow icon={MapPin}>{schoolInfo.address}</ContactRow>
                <ContactRow icon={Phone}>
                  <a href={`tel:${schoolInfo.phone}`} className="hover:text-nursery transition-colors">
                    {schoolInfo.phone}
                  </a>
                </ContactRow>
                <ContactRow icon={Mail}>
                  <a href={`mailto:${schoolInfo.email}`} className="hover:text-nursery transition-colors">
                    {schoolInfo.email}
                  </a>
                </ContactRow>
                <ContactRow icon={Clock}>{schoolInfo.hours}</ContactRow>
              </div>

              {/* CTA button */}
              <Link
                href="/admissions"
                className="mt-6 inline-block bg-nursery text-forest font-nunito font-extrabold text-sm px-5 py-2.5 rounded-button hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md"
              >
                Apply Now ✨
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs font-poppins text-center sm:text-left">
              © {year} {schoolInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <span className="text-white/20 text-xs">·</span>
              <FooterLink href="/safeguarding">Safeguarding</FooterLink>
              <span className="text-white/20 text-xs">·</span>
              <FooterLink href="/terms">Terms of Use</FooterLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}