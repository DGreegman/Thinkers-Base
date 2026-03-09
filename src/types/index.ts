export type StageId = "nursery" | "primary" | "secondary";

export interface Stage {
  classes: ReactNode;
  id: StageId;
  label: string;
  emoji: string;
  ages: string;
  color: string;
  hex: string;
  description: string;
  href: string;
}

export interface Stat {
  label: string;
  value: number;
  emoji: string;
}

export interface SchoolInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface TeamMember {
  name: string;
  role: string;
  stage?: StageId;
  bio: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  stage: StageId;
  childAge?: string;
  rating: number;
}

export interface Event {
  title: string;
  date: string;
  stage?: StageId | "all";
  description: string;
  time?: string;
}