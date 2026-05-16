// ─────────────────────────────────────────────────────────────────────────────
// src/app/about/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Save this file as: src/app/about/page.tsx

import AboutPage from "@/components/about/Aboutpage";

export const metadata = {
  title: "About Us — Thinkersbase Academy",
  description:
    "Learn about Thinkersbase Academy's story, mission, values and leadership team. A school built on care and driven by curiosity since 2019.",
};

export default function Page() {
  return <AboutPage />;
}