import type { Metadata } from "next";
import { HeritageSiteLayout } from "@/components/heritage";
import { HeritageAbout } from "@/components/heritage/HeritageAbout";
import { HeritagePageHero } from "@/components/heritage/HeritagePageHero";
import { HeritageCtaBanner } from "@/components/heritage";
import { HERITAGE } from "@/lib/heritage-content";

export const metadata: Metadata = {
  title: "About AKM Sree Rudra | Living Heritage Institution Kerala",
  description: `Learn about ${HERITAGE.brand}, founded in ${HERITAGE.founded} in ${HERITAGE.location}. ${HERITAGE.recognition}.`,
};

export default function AboutPage() {
  return (
    <HeritageSiteLayout>
      <main>
        <HeritagePageHero
          title="About AKM Sree Rudra"
          subtitle="A sanctuary where ancient wisdom meets modern practice"
          image="/assets/about.png"
        />
        <HeritageAbout />
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-bronze leading-relaxed">
            <p>
              AKM Sree Rudra is not merely a martial arts academy. It is a living heritage institution dedicated to
              preserving and promoting Kerala&apos;s ancient traditions of Kalaripayattu, Marma Chikilsa, Kalari Healing,
              Ayurvedic Wellness, Yoga, and Holistic Rejuvenation.
            </p>
            <p>
              Under {HERITAGE.founder}, we carry the {HERITAGE.heritage}, welcoming international students, martial
              artists, wellness travelers, researchers, and organizations seeking authentic transformation.
            </p>
          </div>
        </section>
        <HeritageCtaBanner />
      </main>
    </HeritageSiteLayout>
  );
}
