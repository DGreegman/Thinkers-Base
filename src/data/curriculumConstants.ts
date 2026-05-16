// src/data/curriculumConstants.ts
// Central config for all dropdown options in the Curriculum Hub

export const CLASSES = [
  // Foundation Stage
  "Play Group",
  "Preschool 1",
  "Preschool 2",
  "Reception",
  // Key Stage 1
  "Grade 1",
  "Grade 2",
  // Key Stage 2
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 5/6",
];

export const SUBJECTS = [
  // Core — Grade School
  "English Language",
  "Mathematics",
  "Basic Science & Technology",
  "Social Studies",
  "History",
  "Igbo Language",
  // Technology
  "Computer Studies",
  // Arts & Expression
  "Creative Arts",
  "Music",
  // Character & Communication
  "Public Speaking",
  "Religious & Moral Education",
  "Literature & Reading",
  // Foundation Stage specific
  "Language & Literacy",
  "Expressive Arts",
  "Personal & Social Development",
  "Understanding the World",
  "Physical Development",
  // General
  "General",
];

export const TERMS = [
  "First Term",
  "Second Term",
  "Third Term",
];

export const SESSIONS = [
  "2024/2025",
  "2025/2026",
  "2026/2027",
];

export const ROLES = {
  ADMIN:   "admin",
  TEACHER: "teacher",
  PARENT:  "parent",
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

export const FILE_TYPES = {
  pdf:   { label: "PDF",        icon: "📄", color: "#E74C3C" },
  docx:  { label: "Word Doc",   icon: "📝", color: "#2E86C1" },
  pptx:  { label: "PowerPoint", icon: "📊", color: "#E67E22" },
  image: { label: "Image",      icon: "🖼️", color: "#27AE60" },
  other: { label: "File",       icon: "📁", color: "#7F8C8D" },
} as const;

export const STAGE_GROUPS = [
  {
    label:   "🌱 Foundation Stage",
    classes: ["Play Group", "Preschool 1", "Preschool 2", "Reception"],
    color:   "#F4D03F",
  },
  {
    label:   "🎒 Key Stage 1",
    classes: ["Grade 1", "Grade 2"],
    color:   "#5BA4CF",
  },
  {
    label:   "📚 Key Stage 2",
    classes: ["Grade 3", "Grade 4", "Grade 5", "Grade 5/6"],
    color:   "#E8845C",
  },
];

export const MAX_FILE_SIZE_MB    = 10;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export const ALLOWED_EXTENSIONS = [
  ".pdf", ".doc", ".docx",
  ".ppt", ".pptx",
  ".jpg", ".jpeg", ".png", ".gif", ".webp",
];