import type { SchoolInfo, Stage, Stat, NavLink } from "@/types";

export const schoolInfo: SchoolInfo = {
  name:        "Thinkers Base Academy",
  tagline:     "Every Child Belongs Here",
  description: "A nurturing school community where nursery, primary and secondary pupils grow together.",
  phone:       "+234 000 000 0000",
  email:       "hello@greenleafacademy.edu",
  address:     "123 School Road, Your City",
  hours:       "Monday – Friday: 7:30am – 5:00pm",
};

export const stages: Stage[] = [
  {
    id:          "nursery",
    label:       "Little Learners",
    emoji:       "🌱",
    ages:        "Ages 2 – 5",
    color:       "nursery",
    hex:         "#F4D03F",
    description: "A safe, warm space where your child takes their first steps into learning through play.",
    href:        "/nursery",
  },
  {
    id:          "primary",
    label:       "Big Adventurers",
    emoji:       "🎒",
    ages:        "Ages 5 – 11",
    color:       "primary",
    hex:         "#5BA4CF",
    description: "Curious minds, big questions and the skills to find the answers.",
    href:        "/primary",
  },
  {
    id:          "secondary",
    label:       "Future Leaders",
    emoji:       "📚",
    ages:        "Ages 11 – 18",
    color:       "secondary",
    hex:         "#E8845C",
    description: "Ambitious, supported and ready to shape the world.",
    href:        "/secondary",
  },
];

export const stats: Stat[] = [
  { label: "Nursery Pupils",      value: 120, emoji: "🌱" },
  { label: "Primary Pupils",      value: 480, emoji: "🎒" },
  { label: "Secondary Pupils",    value: 350, emoji: "📚" },
  { label: "Years of Excellence", value: 15,  emoji: "🏆" },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Our School",
    href: "#",
    children: [
      { label: "🌱 Nursery",   href: "/nursery"   },
      { label: "🎒 Primary",   href: "/primary"   },
      { label: "📚 Secondary", href: "/secondary" },
    ],
  },
  { label: "Admissions",  href: "/admissions"  },
  { label: "School Life", href: "/school-life" },
  { label: "Contact",     href: "/contact"     },
];