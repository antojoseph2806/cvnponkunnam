import type { Metadata } from "next";
import { HeritageSiteLayout, HeritagePageHero, HeritageKalaripayattu, HeritageCtaBanner } from "@/components/heritage";

export const metadata: Metadata = {
  title: "Kalaripayattu Training Kerala | Northern Style Authentic Kalari",
  description:
    "Traditional Northern Style Kalaripayattu training - Meypayattu, Kolthari, Angathari, Verumkai, self defence, and instructor programs at AKM Sree Rudra, Kottayam.",
  keywords:
    "Kalaripayattu Training Kerala, Traditional Kalari Kerala, Kalaripayattu India, Traditional Martial Arts India",
};

export default function KalaripayattuPage() {
  return (
    <HeritageSiteLayout>
      <main>
        <HeritagePageHero
          title="Kalaripayattu Training"
          subtitle="Traditional Northern Style mastery"
          image="/assets/kalari-training-hero.png"
        />
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-bronze leading-relaxed space-y-4">
            <p>
              Our comprehensive curriculum develops physical conditioning, strength, flexibility, discipline, and
              character through authentic Gurukkal-led instruction. Programs range from foundational training to
              professional instructor development.
            </p>
          </div>
        </section>
        <HeritageKalaripayattu />
        <HeritageCtaBanner />
      </main>
    </HeritageSiteLayout>
  );
}
