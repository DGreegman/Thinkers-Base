"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";
import { clsx } from "clsx";
import { navLinks } from "@/data/content";
import type { StageId } from "@/types";

// ── Stage accent colours ──────────────────────────────────────────────────────
const stageAccent: Record<string, { border: string; button: string; text: string }> = {
  "/nursery":   { border: "border-nursery",   button: "bg-nursery   text-forest", text: "text-nursery"   },
  "/primary":   { border: "border-primary",   button: "bg-primary   text-white",  text: "text-primary"   },
  "/secondary": { border: "border-secondary", button: "bg-secondary text-white",  text: "text-secondary" },
};

function getAccent(pathname: string) {
  const match = Object.keys(stageAccent).find((key) => pathname.startsWith(key));
  return match
    ? stageAccent[match]
    : { border: "border-leaf", button: "bg-nursery text-forest", text: "text-leaf" };
}

// ── Logo ─────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-9 h-9">
        <div className="absolute inset-0 bg-leaf rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Leaf className="w-5 h-5 text-nursery fill-nursery" />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-nunito font-extrabold text-white text-[15px] tracking-tight">
          Thinkers Base
        </span>
        <span className="font-poppins text-leaf text-[10px] tracking-widest uppercase">
          Academy
        </span>
      </div>
    </Link>
  );
}

// ── Desktop dropdown ──────────────────────────────────────────────────────────
function DesktopDropdown({
  label,
  children,
  accentText,
}: {
  label: string;
  children: { label: string; href: string }[];
  accentText: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={clsx(
          "flex items-center gap-1 font-nunito font-semibold text-sm text-white/80 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-white/10",
          open && "text-white bg-white/10"
        )}
      >
        {label}
        <ChevronDown
          className={clsx("w-3.5 h-3.5 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-2xl shadow-xl shadow-forest/20 border border-leaf/10 overflow-hidden z-50"
          >
            {/* Arrow pointer */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-leaf/10" />

            <div className="py-2">
              {children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm font-nunito font-semibold text-charcoal hover:bg-cream hover:text-forest transition-colors"
                >
                  <span className="text-base">{child.label.split(" ")[0]}</span>
                  <span>{child.label.split(" ").slice(1).join(" ")}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Mobile menu ───────────────────────────────────────────────────────────────
function MobileMenu({
  open,
  onClose,
  accent,
}: {
  open: boolean;
  onClose: () => void;
  accent: ReturnType<typeof getAccent>;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Slide-down panel */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 bg-forest z-50 lg:hidden rounded-b-3xl shadow-2xl overflow-hidden"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <Logo />
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Links */}
            <nav className="px-5 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  {link.children ? (
                    <div>
                      <p className="font-nunito font-bold text-white/50 text-xs uppercase tracking-widest px-3 pt-3 pb-1">
                        {link.label}
                      </p>
                      <div className="space-y-0.5 ml-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-nunito font-semibold text-white hover:bg-white/10 transition-colors text-[15px]"
                          >
                            <span className="text-xl">{child.label.split(" ")[0]}</span>
                            <span>{child.label.split(" ").slice(1).join(" ")}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center px-3 py-2.5 rounded-xl font-nunito font-semibold text-white hover:bg-white/10 transition-colors text-[15px]"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-5 pb-6 pt-2">
              <Link
                href="/admissions"
                onClick={onClose}
                className={clsx(
                  "block w-full text-center font-nunito font-extrabold text-sm py-3.5 rounded-button transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg",
                  accent.button
                )}
              >
                Apply Now ✨
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const accent = getAccent(pathname);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  // Detect scroll for shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-30 bg-forest transition-shadow duration-300",
          // Stage accent bottom border
          "border-b-2",
          accent.border,
          scrolled && "shadow-lg shadow-forest/30"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Logo />

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <DesktopDropdown
                    key={link.label}
                    label={link.label}
                    children={link.children}
                    accentText={accent.text}
                  />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "font-nunito font-semibold text-sm py-1 px-3 rounded-lg transition-colors",
                      pathname === link.href
                        ? clsx("text-white bg-white/15", accent.text)
                        : "text-white/75 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/admissions"
                className={clsx(
                  "font-nunito font-extrabold text-sm px-5 py-2 rounded-button transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md",
                  accent.button
                )}
              >
                Apply Now ✨
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        accent={accent}
      />
    </>
  );
}