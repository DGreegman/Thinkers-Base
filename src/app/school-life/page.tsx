import ComingSoon from "@/components/shared/Comingsoon";

export const metadata = { title: "School Life — Greenleaf Academy" };

export default function SchoolLifePage() {
  return (
    <ComingSoon
      title="School Life Page"
      emoji="🎉"
      stage="all"
      description="The full picture of life at Greenleaf — clubs, sports, events, performances and the everyday moments that make this school extraordinary."
      comingFeatures={[
        "Photo mosaic hero across all stages",
        "Clubs & activities with stage filter",
        "Sports highlights and competition results",
        "Upcoming events calendar",
        "Stage mini-sections (Nursery / Primary / Secondary)",
        "Masonry photo & video gallery",
        "Student leadership team cards",
        "'A Day at School' immersive story feature",
      ]}
    />
  );
}