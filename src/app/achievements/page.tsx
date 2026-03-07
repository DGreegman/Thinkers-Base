import ComingSoon from "@/components/shared/Comingsoon";

export const metadata = { title: "Achievements — Greenleaf Academy" };

export default function AchievementsPage() {
  return (
    <ComingSoon
      title="Achievements & Portfolio"
      emoji="🏆"
      stage="all"
      description="The heart of the portfolio site — a showcase of academic excellence, student projects, alumni journeys, competition victories and community impact."
      comingFeatures={[
        "Live achievement ticker board",
        "Academic award winners with photos",
        "Student project showcase grid",
        "Alumni success stories with roles",
        "Competition and award results timeline",
        "Community service impact stats",
        "Parent & alumni voices wall",
        "Alumni world map",
      ]}
    />
  );
}