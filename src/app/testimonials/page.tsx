import type { Metadata } from "next";
import { HeritageSiteLayout, HeritagePageHero, HeritageTestimonials, HeritageCtaBanner } from "@/components/heritage";

export const metadata: Metadata = {
  title: "Testimonials | Student & Visitor Reviews",
  description: "Read testimonials from international students, martial artists, and wellness seekers at AKM Sree Rudra CVN Kalari.",
};

export default function TestimonialsPage() {
  return (
    <HeritageSiteLayout>
      <main>
        <HeritagePageHero title="Testimonials" subtitle="Stories of transformation and discovery" />
        <HeritageTestimonials />
        <HeritageCtaBanner />
      </main>
    </HeritageSiteLayout>
  );
}
