import type { Metadata } from "next";
import Link from "next/link";
import { HeritageSiteLayout, HeritagePageHero, HeritageCtaBanner } from "@/components/heritage";
import { HERITAGE } from "@/lib/heritage-content";

export const metadata: Metadata = {
  title: "Kalaripayattu For Foreigners | International Student Programs",
  description:
    "International student programs for authentic Kalaripayattu training, Marma therapy, and wellness retreats in Kerala. English-friendly instruction at AKM Sree Rudra.",
  keywords: "Kalaripayattu For Foreigners, International Kalari Training, Kerala martial arts for foreigners",
};

const highlights = [
  "English-friendly instruction and consultation",
  "Residential and flexible duration programs",
  "Authentic CVN lineage Northern Style training",
  "Integrated Marma healing and wellness options",
  "Kerala Tourism recognized institution",
  "Support for visa and travel planning inquiries",
];

export default function InternationalStudentsPage() {
  return (
    <HeritageSiteLayout>
      <main>
        <HeritagePageHero
          title="International Students"
          subtitle="Welcome to Kerala's living heritage"
          image="/assets/kalari-training-hero.png"
        />
        <section className="py-20 bg-heritage-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <p className="text-bronze text-lg leading-relaxed">
              {HERITAGE.brand} welcomes martial artists, researchers, wellness travelers, and dedicated students from
              across the world. Located in {HERITAGE.location}, we offer an immersive environment for authentic
              transformation.
            </p>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 p-4 bg-white rounded-lg border border-heritage-green/10">
                  <span className="text-temple-gold font-bold">+</span>
                  <span className="text-bronze">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/training-programs"
                className="px-8 py-4 bg-heritage-green text-heritage-cream rounded-md font-display hover:bg-heritage-green-light transition-colors"
              >
                View Programs
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-heritage-green text-heritage-green rounded-md font-display hover:bg-heritage-green hover:text-heritage-cream transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </section>
        <HeritageCtaBanner />
      </main>
    </HeritageSiteLayout>
  );
}
