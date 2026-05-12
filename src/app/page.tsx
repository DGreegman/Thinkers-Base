import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import StageCards from "@/components/home/StageCards";
import WhyThinkers from "@/components/home/WhyThinkers";
import WhyParentsChooseUs from "@/components/home/WhyParentsChooseUs";
import CampusLife from "@/components/home/CampusLife";
import HomeCta from "@/components/home/HomeCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <StageCards />
      <WhyThinkers />
      <WhyParentsChooseUs />
      <CampusLife />
      <HomeCta />
    </>
  );
}