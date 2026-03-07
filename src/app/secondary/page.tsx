import ComingSoon from "@/components/shared/Comingsoon";

export const metadata = { title: "Secondary School — Greenleaf Academy" };

export default function SecondaryPage() {
  return (
    <ComingSoon
      title="Secondary School Page"
      emoji="📚"
      stage="secondary"
      description="Our Secondary page is coming soon — built for students and parents alike. Bold, inspiring and packed with everything you need to know about life at Greenleaf Secondary."
      comingFeatures={[
        "Subject pathway explorer (Sciences, Arts, Tech, Business)",
        "Student Voice — quotes from real students",
        "Sixth form and senior year information",
        "Alumni success stories",
        "Sports, drama and competition highlights",
        "Typewriter headline effect hero",
        "Secondary gallery — labs, debates, productions",
        "Why students choose Greenleaf Secondary",
      ]}
    />
  );
}