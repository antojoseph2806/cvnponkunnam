import type { Metadata } from "next";
import { HeritageSiteLayout, HeritagePageHero, HeritageMarma, HeritageCtaBanner } from "@/components/heritage";

export const metadata: Metadata = {
  title: "Marma Chikilsa Kerala | Traditional Marma Therapy & Kalari Healing",
  description:
    "Traditional Marma Chikilsa and Kalari healing for pain management, sports rehabilitation, body alignment, and injury recovery at AKM Sree Rudra, Kottayam.",
  keywords: "Marma Chikilsa Kerala, Marma Therapy Kerala, Kalari Healing Kerala",
};

export default function MarmaChikilsaPage() {
  return (
    <HeritageSiteLayout>
      <main>
        <HeritagePageHero
          title="Marma Chikilsa"
          subtitle="Traditional healing through vital energy points"
          image="/assets/marma-chikilsa-background.jpeg"
        />
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-bronze leading-relaxed space-y-4">
            <p>
              Marma Chikilsa is the ancient Kalari healing science addressing vital energy points (marmas) to restore
              balance, relieve pain, and accelerate recovery. Our therapies integrate generations of traditional knowledge
              with practical treatment for modern practitioners and wellness seekers.
            </p>
          </div>
        </section>
        <HeritageMarma />
        <HeritageCtaBanner />
      </main>
    </HeritageSiteLayout>
  );
}
