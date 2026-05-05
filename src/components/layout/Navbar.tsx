"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, School } from "lucide-react";
import { clsx } from "clsx";
import { navLinks } from "@/data/content";


/* ─── Stage accent colours ───────────────────────── */

const stageAccent: Record<string, { border: string; text: string }> = {
  "/creche": {
    border: "border-creche",
    text: "text-creche",
  },
  "/pre-school": {
    border: "border-preschool",
    text: "text-preschool",
  },
  "/grade-school": {
    border: "border-gradeschool",
    text: "text-gradeschool",
  },
};

function getAccent(pathname: string) {
  const match = Object.keys(stageAccent).find((key) =>
    pathname.startsWith(key)
  );

  return match
    ? stageAccent[match]
    : {
        border: "border-leaf",
        text: "text-leaf",
      };
}

/* ─── Logo ─────── */

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition">
        <School className="w-5 h-5 text-white" />
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

/* ─── Desktop dropdown ───────────────────────── */

function DesktopDropdown({
  label,
  children,
}: {
  label: string;
  children: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={clsx(
          "flex items-center gap-1 font-nunito font-semibold text-sm text-white/80 hover:text-white transition py-1 px-2 rounded-lg hover:bg-white/10",
          open && "bg-white/10 text-white"
        )}
      >
        {label}

        <ChevronDown
          className={clsx(
            "w-4 h-4 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-xl shadow-xl border border-gray-100 z-50"
          >
            <div className="py-2">
              {children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Mobile menu ───────────────────────── */

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 left-0 right-0 bg-forest z-50 rounded-b-3xl shadow-2xl"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <Logo />

              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <nav className="px-5 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="text-white/50 text-xs uppercase font-bold px-3 pt-3 pb-1">
                      {link.label}
                    </p>

                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block px-3 py-2 text-white font-semibold hover:bg-white/10 rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block px-3 py-2 text-white font-semibold hover:bg-white/10 rounded-lg"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="px-5 pb-6">
              <a
                href="https://wa.me/2348037134462"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block w-full text-center font-bold py-3 rounded-lg bg-yellow-400 text-black hover:bg-yellow-300 transition"
              >
                Apply Now ✨
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Navbar main component ───────────────────────── */

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const accent = getAccent(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-30 bg-forest border-b-2 transition-shadow duration-100",
          accent.border,
          scrolled && "shadow-lg"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <Logo />

            {/* Desktop menu */}

            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) =>
                link.children ? (
                  <DesktopDropdown
                    key={link.label}
                    label={link.label}
                    children={link.children}
                  />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "font-semibold text-sm py-1 px-3 rounded-lg transition",
                      pathname === link.href
                        ? "text-white bg-white/20"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Apply button — desktop */}

            <div className="hidden lg:flex">
              <a
                href="https://wa.me/2348037134462"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-5 py-2 rounded-lg bg-yellow-400 text-black hover:bg-yellow-300 transition"
              >
                Apply Now ✨
              </a>
            </div>

            {/* Mobile hamburger button */}

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>

          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}