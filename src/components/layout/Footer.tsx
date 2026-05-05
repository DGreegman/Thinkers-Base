"use client";

import Link from "next/link";
import {
  School,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  
} from "lucide-react";

import stages, { schoolInfo, navLinks } from "@/data/content";


/* Wave divider */
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


/* Social Button */
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


/* Footer link */
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white/60 hover:text-nursery text-sm transition-colors duration-150"
    >
      {children}
    </Link>
  );
}


/* Contact row */
function ContactRow({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 w-7 h-7 flex items-center justify-center rounded-full bg-white/10">
        <Icon className="w-4 h-4 text-nursery" />
      </div>
      <span className="text-white/70 text-sm leading-relaxed">{children}</span>
    </div>
  );
}


/* Main Footer */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <WaveTop />

      <footer className="bg-forest text-white">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <School className="w-8 h-8 text-nursery" />

                <div className="flex flex-col leading-none">
                  <span className="font-bold text-lg">
                    {schoolInfo.name}
                  </span>
                  <span className="text-xs text-white/60">
                    Excellence in Education
                  </span>
                </div>
              </Link>

              <p className="text-white/60 text-sm mb-5">
                {schoolInfo.description}
              </p>

              {/* Social Media */}
              <div className="flex gap-2">
                <SocialBtn
                  href="https://www.facebook.com/share/1CCEHrhTFm/"
                  icon={Facebook}
                  label="Facebook"
                />

                <SocialBtn
                  href="https://www.instagram.com/thinkersbaseacademyenugu?utm_source=qr&igsh=MWs2bDh0ZjU3eG81Mw=="
                  icon={Instagram}
                  label="Instagram"
                />
                <SocialBtn
                href="mailto:thinkersbaseacademy@gmail.com"
                  icon={Mail}
                  label="Gmail"
                />
              </div>
            </div>


            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm uppercase mb-4">
                Quick Links
              </h4>

              <ul className="space-y-2">
                {navLinks
                  .filter((l) => !l.children)
                  .map((l) => (
                    <li key={l.href}>
                      <FooterLink href={l.href}>{l.label}</FooterLink>
                    </li>
                  ))}
              </ul>
            </div>


            {/* Our School */}
            <div>
              <h4 className="font-bold text-sm uppercase mb-4">
                Our School
              </h4>

              <ul className="space-y-2">
                {stages.map((s) => (
                  <li key={s.id}>
                    <FooterLink href={s.href}>
                      {s.label}
                    </FooterLink>
                  </li>
                ))}

                <li>
                  <FooterLink href="/admissions">Admissions</FooterLink>
                </li>

                <li>
                  <FooterLink href="/about">About Us</FooterLink>
                </li>
              </ul>
            </div>


            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm uppercase mb-4">
                Contact
              </h4>

              <div className="space-y-3">
                <ContactRow icon={MapPin}>
                  {schoolInfo.address}
                </ContactRow>

                <ContactRow icon={Phone}>
                  <a href={`tel:${schoolInfo.phone}`}>
                    {schoolInfo.phone}
                  </a>
                </ContactRow>

                <ContactRow icon={Mail}>
                  <a href={`mailto:${schoolInfo.email}`}>
                    {schoolInfo.email}
                  </a>
                </ContactRow>

                <ContactRow icon={Clock}>
                  {schoolInfo.hours}
                </ContactRow>
              </div>
            </div>
          </div>


          {/* Bottom bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">

            <p className="text-white/40 text-xs">
              © {year} {schoolInfo.name}. All rights reserved.
            </p>

            <div className="flex gap-4 text-xs">
              <FooterLink href="/privacy">Privacy</FooterLink>
              <FooterLink href="/terms">Terms</FooterLink>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}