import type { SchoolInfo, Stage, Stat, NavLink } from "@/types";

// ── School info ───────────────────────────────────────────────────────────────
export const schoolInfo: SchoolInfo = {
  name:        "Thinkers Base Academy",
  tagline:     "Every Child Belongs Here",
  description: "A nurturing school community where nursery, primary and secondary pupils grow together.",
  phone:       "+2348037134462",
  email:       "hello@thinkersbaseacademy.edu",
  address:     "Plot 183A/B Mary Emmanuel Street New GRA Trans-Ekulu, Enugu.",
  hours:       "Monday – Friday: 7:30am – 5:00pm",
};

// ── Stages ───────────────────────────────────────────────────────────────────
export const stages: Stage[] = [
  {
    id: "nursery",
    label: "Little Learners",
    emoji: "🌱",
    ages: "Ages 2 – 5",
    color: "#F4D03F", // Use hex to match type
    description: "A safe, warm space where your child takes their first steps into learning through play.",
    href: "/nursery",
    classes: undefined,
    hex: ""
  },
  {
    id: "primary",
    label: "Big Adventurers",
    emoji: "🎒",
    ages: "Ages 5 – 11",
    color: "#5BA4CF",
    description: "Curious minds, big questions and the skills to find the answers.",
    href: "/primary",
    classes: undefined,
    hex: ""
  },
  {
    id: "secondary",
    label: "Future Leaders",
    emoji: "📚",
    ages: "Ages 11 – 18",
    color: "#E8845C",
    description: "Ambitious, supported and ready to shape the world.",
    href: "/secondary",
    classes: undefined,
    hex: ""
  },
];

// ── Stats ────────────────────────────────────────────────────────────────────
export const stats: Stat[] = [
  { label: "Nursery Pupils",      value: 120, emoji: "🌱" },
  { label: "Primary Pupils",      value: 480, emoji: "🎒" },
  { label: "Secondary Pupils",    value: 350, emoji: "📚" },
  { label: "Years of Excellence", value: 15,  emoji: "🏆" },
];

// ── Navigation links ─────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our School",
    href: "#",
    children: [
      { label: "🌱 Nursery",   href: "/nursery" },
      { label: "🎒 Primary",   href: "/primary" },
      { label: "📚 Secondary", href: "/secondary" },
    ],
  },
  { label: "Admissions",  href: "/admissions" },
  { label: "School Life", href: "/school-life" },
  { label: "Contact",     href: "/contact" },
];