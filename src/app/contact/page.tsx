import ComingSoon from "@/components/shared/Comingsoon";

export const metadata = { title: "Contact — Greenleaf Academy" };

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact Page"
      emoji="💬"
      stage="all"
      description="Get in touch with us — whichever stage you're enquiring about, we'll make sure your message reaches the right person quickly."
      comingFeatures={[
        "Stage-specific contact cards",
        "Contact form with stage dropdown",
        "Google Maps embed",
        "Office hours and response time",
        "Direct coordinator emails per stage",
        "Social media links",
        "WhatsApp quick enquiry button",
        "Book a visit CTA",
      ]}
    />
  );
}