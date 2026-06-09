import type { Metadata } from "next";
import Link from "next/link";
import { HeritageSiteLayout } from "@/components/heritage";
import { HeritageAbout } from "@/components/heritage/HeritageAbout";
import { HeritagePageHero } from "@/components/heritage/HeritagePageHero";
import { HeritageCtaBanner } from "@/components/heritage";
import { HERITAGE } from "@/lib/heritage-content";

export const metadata: Metadata = {
  title: "About AKM Sree Rudra | Living Heritage Institution Kerala",
  description: `Learn about ${HERITAGE.brand}, founded in ${HERITAGE.founded} in ${HERITAGE.location}. ${HERITAGE.recognition}.`,
};

const legacyPillars = [
  "Kerala Martial Heritage",
  "Traditional Gurukkal Lineage",
  "Ancient Knowledge Preservation",
  "Cultural Demonstrations",
  "Traditional Values and Discipline",
];

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

        {/* Our Legacy Section */}
        <section className="py-20 bg-heritage-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center mb-12">
              <p className="text-temple-gold-dark font-display text-sm tracking-widest uppercase mb-2">Our Legacy</p>
              <h2 className="font-display text-heritage-green text-3xl md:text-4xl font-semibold">
                Guardians of Kerala&apos;s Ancient Wisdom
              </h2>
            </div>
            <p className="text-bronze text-lg leading-relaxed">
              Since {HERITAGE.founded}, {HERITAGE.brand} has stood as a beacon for authentic Kalari tradition in{" "}
              {HERITAGE.location}. Our legacy is rooted in the {HERITAGE.heritage}, passed through generations of
              disciplined practice and devoted teaching.
            </p>
            <p className="text-bronze leading-relaxed">
              We preserve not only combat techniques but the complete cultural ecosystem of Kalari - healing, spiritual
              discipline, and community values that define Kerala&apos;s martial heritage.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {legacyPillars.map((item) => (
                <li
                  key={item}
                  className="p-4 border-l-4 border-temple-gold bg-white rounded-r-lg text-heritage-green font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/founder" className="inline-block text-temple-gold-dark font-display hover:underline">
              Meet our Founder & Gurukkal
            </Link>
          </div>
        </section>
        <HeritageCtaBanner />
      </main>
    </HeritageSiteLayout>
  );
}
