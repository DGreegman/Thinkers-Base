"use client";

import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import StageCards from "@/components/home/StageCards";
import Testimonials from "@/components/home/Testimonials";
import Eventsandcta from "@/components/home/Eventsandcta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <StageCards />
      <Testimonials />
      <Eventsandcta />
      
    </>
  );
}