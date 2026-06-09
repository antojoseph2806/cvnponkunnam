import type { Metadata } from "next";
import { HeritageSiteLayout, HeritagePageHero, HeritageWellness, HeritageCtaBanner } from "@/components/heritage";

export const metadata: Metadata = {
  title: "Wellness & Rejuvenation Kerala | Ayurvedic Kalari Retreats",
  description:
    "Kalari rejuvenation packages, Ayurvedic Marma therapy, yoga, meditation, and wellness retreats for mind-body balance at AKM Sree Rudra.",
  keywords: "Ayurvedic Wellness Kerala, Wellness Retreat Kerala, Kalari rejuvenation",
};

export default function WellnessPage() {
  return (
    <HeritageSiteLayout>
      <main>
        <HeritagePageHero
          title="Wellness & Rejuvenation"
          subtitle="Holistic healing for mind, body, and spirit"
          image="/assets/hero-ayurveda.jpg"
        />
        <section className="py-16 bg-heritage-cream">
          <div className="max-w-4xl mx-auto px-4 text-bronze leading-relaxed space-y-4">
            <p>
              Experience transformative wellness through integrated Kalari rejuvenation, Ayurvedic therapies, yoga, and
              meditation. Our programs are designed for stress relief, deep recovery, and sustainable vitality in an
              authentic heritage environment.
            </p>
          </div>
        </section>
        <HeritageWellness />
        <HeritageCtaBanner />
      </main>
    </HeritageSiteLayout>
  );
}
