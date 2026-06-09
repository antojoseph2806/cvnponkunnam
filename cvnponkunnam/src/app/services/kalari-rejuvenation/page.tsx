import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { buildWhatsAppHref } from "@/lib/contact";
import KalariThreeScene from "@/components/KalariThreeScene";

export const metadata: Metadata = {
  title: "Kalari Rejuvenation Therapy in Kerala | Traditional Kalari Massage & Wellness | CVN Kalari",
  description:
    "Experience authentic Kalari rejuvenation therapy and traditional Kalari massage in Kerala. Ancient wellness treatments for deep relaxation, flexibility, stress relief, and recovery. Expert Kalari therapists at AKM Sree Rudra CVN Kalari in Kottayam offer traditional Thirummu and rejuvenation treatments.",
  keywords:
    "Kalari rejuvenation Kerala, Kalari massage Kottayam, traditional massage Kerala, Kalari therapy, Thirummu treatment, wellness therapy Kerala, Ayurvedic massage, stress relief Kerala, flexibility treatment, recovery therapy, CVN Kalari wellness",
  openGraph: {
    title: "Kalari Rejuvenation Therapy in Kerala | Traditional Kalari Massage",
    description:
      "Experience authentic Kalari rejuvenation therapy for deep relaxation and wellness. Traditional treatments in Kerala.",
    images: [
      {
        url: "/assets/hero-ayurveda.jpg",
        width: 1200,
        height: 630,
        alt: "Kalari Rejuvenation Therapy at AKM Sree Rudra CVN Kalari",
      },
    ],
  },
};

const coreBenefits = [
  "Deep physical relaxation",
  "Reduced body stiffness",
  "Better flexibility",
  "Stress relief",
  "Improved circulation",
  "Recovery from fatigue",
  "Joint mobility",
  "Mental calmness",
  "Renewed energy levels",
];

const therapies = [
  {
    title: "Kalari Uzhichil",
    description:
      "A traditional Kalari oil massage that uses rhythmic pressure, stretching techniques, and therapeutic oils to support flexibility, circulation, and recovery.",
  },
  {
    title: "Marma Point Rejuvenation",
    description:
      "Traditional care focused on key Marma points to help release tension, restore natural flow, and calm the nervous system.",
  },
  {
    title: "Herbal Oil Body Therapy",
    description:
      "Special oils prepared using traditional methods to nourish muscles, joints, and skin while enhancing relaxation and recovery.",
  },
  {
    title: "Flexibility and Movement Therapy",
    description:
      "Gentle Kalari-inspired movement sessions designed to restore mobility, posture, and body awareness for sedentary professionals, travelers, athletes, and older adults.",
  },
  {
    title: "Breath and Mind Reset Sessions",
    description:
      "Guided breathing, relaxation, and calm-awareness practices to reduce mental stress and restore clarity.",
  },
];

const seasonPrograms = [
  "Traditional massage",
  "Strength recovery care",
  "Oil therapies",
  "Flexibility support",
  "Seasonal rejuvenation routines",
];

const sessionHighlights = [
  { label: "Traditional focus", value: "Holistic wellness" },
  { label: "Care approach", value: "Personalized therapy" },
  { label: "Rooted in", value: "Kerala Kalari wisdom" },
];

export default function KalariRejuvenationPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f1]">
      <Header />
      <main className="pt-20">
        {/* Hero Section with First Background Image */}
        <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-section-dark text-white">
          <div
            className="absolute inset-0 -z-20 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/Kalari Rejuvenation 1.jpeg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-1/2 lg:block">
            <KalariThreeScene className="h-full w-full" mode="hero" />
          </div>

          <div className="container-narrow relative z-10 grid min-h-[calc(100vh-5rem)] items-end gap-10 px-4 pb-16 pt-14 md:px-8 lg:grid-cols-[0.95fr_0.55fr] lg:px-16 lg:pb-20">
            <div className="max-w-3xl">
              <p className="mb-4 kalari-tech-label text-[#c8e6b0]">
                Traditional Kerala wellness
              </p>
              <h1 className="font-heading text-4xl leading-[1.06] text-white md:text-6xl lg:text-7xl">
                Kalari Rejuvenation and Therapeutic Healing
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 md:text-xl">
                Restore vitality through time-honored Kalari rejuvenation therapies, traditional massage, Marma care, and Kerala&apos;s ancient wellness wisdom.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildWhatsAppHref(
                    "Hi, I would like to know more about Kalari Rejuvenation therapies and wellness programs.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="h-12 rounded-full bg-[#d8f2a7] px-7 text-sm font-bold uppercase tracking-[0.14em] text-primary hover:bg-white"
                  >
                    Book a Session
                  </Button>
                </a>
                <a
                  href="#rejuvenation-details"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 px-7 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-primary"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="mb-2 border-l border-white/25 bg-black/30 p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">Session guidance</p>
              <div className="mt-6 divide-y divide-white/25">
                {sessionHighlights.map((item) => (
                  <div key={item.label} className="grid grid-cols-[0.85fr_1fr] gap-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c8e6b0]">{item.label}</p>
                    <p className="text-base font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="rejuvenation-details" className="bg-[#f5f7f1] px-4 py-16 md:px-8 lg:px-16 lg:py-24">
          <div className="container-narrow">
            <div className="grid gap-10 border-b border-primary/15 pb-14 lg:grid-cols-[0.78fr_1fr]">
              <div>
                <p className="section-eyebrow">Wellness tradition</p>
                <h2 className="mt-3 max-w-xl font-heading text-3xl leading-tight text-foreground md:text-5xl">
                  A practice rooted in vitality, recovery, and mindful restoration.
                </h2>
              </div>
              <div className="space-y-5 pt-1">
                <p className="section-copy">
                  At AKM Sree Rudra Kalari, rejuvenation is more than relaxation. It is a complete process of
                  restoring the body&apos;s natural vitality, calming the mind, and renewing inner energy through
                  Kerala&apos;s time-honored healing traditions.
                </p>
                <p className="section-copy">
                  Rooted in the therapeutic wisdom of Kalaripayattu, Kalari Rejuvenation combines specialized
                  body treatments, traditional massage techniques, Marma-based care, movement therapy, herbal
                  oils, and mindful rest to help individuals recover from stress, fatigue, stiffness, and
                  modern lifestyle strain.
                </p>
                <p className="section-copy">
                  Unlike ordinary spa treatments, Kalari rejuvenation is rooted in functional healing and body
                  restoration, passed through generations of Kerala&apos;s wellness masters.
                </p>
              </div>
            </div>

            <div className="grid gap-10 py-14 lg:grid-cols-[1fr_0.88fr] lg:py-20">
              <div className="bg-white px-6 py-8 shadow-[0_24px_60px_-42px_rgba(18,41,25,0.45)] md:px-8 lg:px-10">
                <p className="section-eyebrow">What it offers</p>
                <h2 className="mt-3 font-heading text-3xl leading-tight text-foreground md:text-4xl">
                  Kalari Rejuvenation focuses on complete body and mind restoration.
                </h2>
                <div className="mt-7 space-y-5">
                  <p className="section-copy">
                    Kalari Rejuvenation is an ancient therapeutic system that combines traditional massage, Marma point therapy, herbal oil treatments, and movement-based recovery to support the body&apos;s natural healing processes.
                  </p>
                  <p className="section-copy">
                    These methods have been used for centuries by warriors and healers in Kerala to restore strength, flexibility, circulation, and mental clarity after intense physical training or daily life stress.
                  </p>
                  <p className="section-copy">
                    Each session is personalized based on individual needs, body constitution, and wellness goals, ensuring authentic care rooted in tradition.
                  </p>
                </div>
              </div>

              <div className="bg-primary px-6 py-8 text-primary-foreground md:px-8 lg:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8f2a7]">May help support</p>
                <div className="mt-7 grid gap-0 sm:grid-cols-2 lg:grid-cols-1">
                  {coreBenefits.map((benefit, index) => (
                    <div
                      key={benefit}
                      className="grid grid-cols-[3rem_1fr] border-t border-white/18 py-4 first:border-t-0"
                    >
                      <span className="font-heading text-2xl text-[#d8f2a7]">{String(index + 1).padStart(2, "0")}</span>
                      <p className="self-center text-sm font-medium leading-6 text-white/86">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Therapies Section with Second Background Image */}
        <section className="relative isolate overflow-hidden bg-section-dark px-4 py-16 text-white md:px-8 lg:px-16 lg:py-24">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/Kalari Rejuvenation 2.jpeg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-2/3 opacity-65 lg:block">
            <KalariThreeScene className="h-full w-full" mode="section" />
          </div>
          <div className="container-narrow">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8f2a7]">Rejuvenation therapies</p>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-white md:text-5xl">
                Traditional methods for flexibility, circulation, and deep restoration.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {therapies.map((therapy, index) => (
                <div key={therapy.title} className="border border-white/30 bg-black/40 p-6 lg:p-7">
                  <span className="font-heading text-3xl text-[#d8f2a7]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{therapy.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/85">{therapy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Programs Section */}
        <section className="bg-[#f5f7f1] px-4 py-16 md:px-8 lg:px-16 lg:py-24">
          <div className="container-narrow">
            <div className="grid gap-8 lg:grid-cols-[0.62fr_1fr]">
              <div>
                <p className="section-eyebrow">Seasonal wellness</p>
                <h2 className="mt-3 font-heading text-3xl leading-tight text-foreground md:text-4xl">
                  Karkidakam monsoon rejuvenation programs.
                </h2>
                <p className="mt-5 section-copy">
                  During the monsoon season, body protection therapies using special herbal oils are traditionally believed to support circulation, remove impurities, reduce lethargy, and restore physical and mental energy.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {seasonPrograms.map((item) => (
                  <div key={item} className="border border-primary/12 bg-white px-5 py-4">
                    <p className="text-sm font-semibold leading-6 text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
