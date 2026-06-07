import type { Metadata } from "next";
import { HeritageSiteLayout, HeritagePageHero, HeritageCtaBanner } from "@/components/heritage";
import { HeritageImage } from "@/components/heritage/HeritageImage";
import { HERITAGE } from "@/lib/heritage-content";

export const metadata: Metadata = {
  title: "Founder & Chief Gurukkal | Ajithkumar Gurukkal",
  description: `Meet ${HERITAGE.founder}, Chief Gurukkal of AKM Sree Rudra, guiding authentic CVN lineage Kalaripayattu and traditional healing.`,
};

export default function FounderPage() {
  return (
    <HeritageSiteLayout>
      <main>
        <HeritagePageHero
          title="Founder & Chief Gurukkal"
          subtitle={HERITAGE.founder}
          image="/assets/founder-puja.png"
        />
        <section className="py-20 bg-heritage-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <HeritageImage src="/assets/founder-puja.png" alt={HERITAGE.founder} fill className="object-cover" />
            </div>
            <div className="space-y-6 text-bronze leading-relaxed">
              <h2 className="font-display text-heritage-green text-3xl font-semibold">{HERITAGE.founder}</h2>
              <p>
                As Chief Gurukkal of {HERITAGE.brand}, Ajithkumar Gurukkal embodies decades of mastery in Northern Style
                Kalaripayattu, Marma Chikilsa, and traditional Kalari healing arts within the respected CVN lineage.
              </p>
              <p>
                His teaching emphasizes discipline, character development, and the spiritual foundations of martial
                practice - preparing students not only as fighters but as custodians of Kerala&apos;s living heritage.
              </p>
              <p className="font-accent text-xl italic text-heritage-green">
                &ldquo;The Kalari is a temple of body, mind, and tradition.&rdquo;
              </p>
            </div>
          </div>
        </section>
        <HeritageCtaBanner />
      </main>
    </HeritageSiteLayout>
  );
}
