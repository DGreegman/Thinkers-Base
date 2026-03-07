import ComingSoon from "@/components/shared/Comingsoon";

export const metadata = { title: "Admissions — Greenleaf Academy" };

export default function AdmissionsPage() {
  return (
    <ComingSoon
      title="Admissions Page"
      emoji="✨"
      stage="all"
      description="Everything you need to apply — for Nursery, Primary or Secondary. Step-by-step guide, key dates, requirements, open days and an enquiry form. Coming very soon."
      comingFeatures={[
        "Stage selector — Nursery, Primary, Secondary",
        "5-step visual admissions flowchart",
        "Requirements checklist per stage",
        "Key dates and application deadlines",
        "Upcoming open days calendar",
        "Online enquiry form",
        "FAQ accordion by stage",
        "Direct contact for each stage coordinator",
      ]}
    />
  );
}