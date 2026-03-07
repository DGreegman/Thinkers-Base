import Hero         from "@/components/home/Hero";
import StatsBar     from "@/components/home/StatsBar";
import StageCards   from "@/components/home/StageCards";
import Testimonials from "@/components/home/Testimonials";
import { LatestEvents, CtaBanner } from "@/components/home/Eventsandcta";

export const metadata = {
  title: "Greenleaf Academy — Nursery, Primary & Secondary",
  description:
    "A nurturing school community where every child belongs. Nursery, Primary and Secondary education in one welcoming campus.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <StageCards />
      <Testimonials />
      <LatestEvents />
      <CtaBanner />
    </>
  );
}