import type { SchoolInfo, Stage, Stat, NavLink } from "@/types";

// ── School info ───────────────────────────────────────────────────────────────
export const schoolInfo: SchoolInfo = {
  name:        "Thinkers Base Academy",
  tagline:     "Every Child Belongs Here",
  description: "A nurturing school community where nursery, primary and secondary pupils grow together.",
  phone:       "+2348037134462",
  email:       "thinkersbaseacademy@gmail.com",
  address:     "Plot 183A/B Mary Emmanuel Street New GRA Trans-Ekulu, Enugu.",
  hours:       "Monday – Friday: 7:30am – 5:00pm",
};

// ── Stages ───────────────────────────────────────────────────────────────────
const stages: Stage[] = [
  {
    id: "Creche",
    label: "Little Learners",
    emoji: "🌱",
    ages: "Ages 1 – 4",
    color: "#F4D03F",
    description: "A safe, warm space where your child takes their first steps into learning through play.",
    href: "/creche",
    classes: "Playgroup / Foundation Stage",
    hex: "#FEF9E7",
    // ↓ Replace this filename with your actual creche card image
    image: "/images/P2.webp",
  },
  {
    id: "Pre School",
    label: "Big Adventurers",
    emoji: "🎒",
    ages: "Ages 4 – 6",
    color: "#5BA4CF",
    description: "Curious minds, big questions and the skills to find the answers.",
    href: "/pre-school",
    classes: "Years 4 – 6",
    hex: "#EBF5FB",
    // ↓ Replace this filename with your actual pre-school card image
    image: "/images/small pupils in uniform.jpeg",
  },
  {
    id: "Grade School",
    label: "Future Leaders",
    emoji: "📚",
    ages: "Ages 6 – 12",
    color: "#E8845C",
    description: "Ambitious, supported and ready to shape the world.",
    href: "/grade-school",
    classes: "Grade 1 – Grade 5",
    hex: "#FDF2E9",
    // ↓ Replace this filename with your actual grade school card image
    image: "/images/Grade 3 pupils with computer.jpeg",
  },
];
export default stages;

// ── Stats ────────────────────────────────────────────────────────────────────
export const stats: Stat[] = [
  { label: "Creche",            value: 120, emoji: "🌱" },
  { label: "Pre School Pupils", value: 480, emoji: "🎒" },
  { label: "Grade School Pupils", value: 350, emoji: "📚" },
  { label: "Years of Excellence", value: 15, emoji: "🏆" },
];

// ── Navigation links ─────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our School",
    href: "#",
    children: [
      { label: "🌱 Creche",       href: "/creche" },
      { label: "🎒 Pre School",   href: "/pre-school" },
      { label: "📚 Grade School", href: "/grade-School" },
    ],
  },
  { label: "Admissions",  href: "/admissions" },
  { label: "School Life", href: "/school-life" },
  { label: "Contact",     href: "/contact" },
];