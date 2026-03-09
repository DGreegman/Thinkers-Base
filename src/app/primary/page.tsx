npm installimport ComingSoon from "@/components/shared/Comingsoon";

export const metadata = { title: "Primary School — Greenleaf Academy" };

export default function PrimaryPage() {
  return (
    <ComingSoon
      title="Primary School Page"
      emoji="🎒"
      stage="primary"
      description="Our Primary School page is on its way. It will take you inside Year 1 through Year 6 — lessons, clubs, results, field trips and everything in between."
      comingFeatures={[
        "Curriculum overview for each year group",
        "Academic results & achievement highlights",
        "Clubs and extracurricular activities",
        "Class life photo gallery",
        "Learning, outdoors & community feature rows",
        "Subject cards with icons and descriptions",
        "Upcoming primary events",
        "Parent testimonials from primary families",
      ]}
    />
  );
}