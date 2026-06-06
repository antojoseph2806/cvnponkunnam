import type { Metadata } from "next";
import Link from "next/link";
import { HeritageSiteLayout, HeritagePageHero, HeritageCtaBanner } from "@/components/heritage";
import { HERITAGE } from "@/lib/heritage-content";

export const metadata: Metadata = {
  title: "Our Legacy | CVN Lineage & Kerala Martial Heritage",
  description:
    "Discover the legacy of AKM Sree Rudra - traditional Gurukkal lineage, cultural heritage preservation, and Northern Style Kalaripayattu since 1996.",
};

const pillars = [
  "Kerala Martial Heritage",
  "Traditional Gurukkal Lineage",
  "Ancient Knowledge Preservation",
  "Cultural Demonstrations",
  "Traditional Values and Discipline",
];

export default function LegacyPage() {
  return (
    <HeritageSiteLayout>
      <main>
        <HeritagePageHero title="Our Legacy" subtitle="Guardians of Kerala's ancient wisdom" />
        <section className="py-20 bg-heritage-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
              {pillars.map((item) => (
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
