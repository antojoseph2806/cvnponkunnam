import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import KalariTrainingCourses from "@/components/KalariTrainingCourses";
import KalariThreeScene from "@/components/KalariThreeScene";
import { buildCourseEnrollmentWhatsApp } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Kalaripayattu Training in Kerala | Traditional Martial Arts Classes | CVN Kalari",
  description:
    "Learn authentic Kalaripayattu martial arts in Kerala from experienced Gurukkals. Traditional training in Meypayattu, Chuvadu, Vadivu, and weapons. Classes for all ages and skill levels at our Kottayam center. Join the ancient warrior tradition of Kerala.",
  keywords:
    "Kalaripayattu training, Kalari classes Kerala, martial arts training Kottayam, CVN Kalari training, Kalari Gurukkal, traditional martial arts, Kalaripayattu courses, Kalari weapons training, Meypayattu, Chuvadu, Vadivu, Kerala martial arts",
  openGraph: {
    title: "Kalaripayattu Training in Kerala | Traditional Martial Arts Classes",
    description:
      "Learn authentic Kalaripayattu from experienced Gurukkals in Kerala. Traditional training for all ages.",
    images: [
      {
        url: "/assets/kalari-training-hero.png",
        width: 1200,
        height: 630,
        alt: "Kalaripayattu Training at AKM Sree Rudra CVN Kalari",
      },
    ],
  },
};

const practiceBenefits = [
  {
    title: "Strength and endurance",
    description: "Build physical resilience through disciplined movement training",
  },
  {
    title: "Flexibility and agility",
    description: "Develop fluid, responsive, and adaptable body movement",
  },
  {
    title: "Balance and coordination",
    description: "Improve total body control through structured sequences and postures",
  },
  {
    title: "Speed and reflexes",
    description: "Sharpen timing, reactions, and directional awareness",
  },
  {
    title: "Mental focus and confidence",
    description: "Strengthen concentration, calmness, and self-belief",
  },
  {
    title: "Discipline and resilience",
    description: "Cultivate humility, self-control, and inner steadiness",
  },
];

const trainingComponents = [
  {
    title: "Meypayattu",
    subtitle: "Body conditioning and movement mastery",
    description:
      "Flowing sequences that build total body control through coordinated movement, breath, rhythm, and precision.",
    points: ["Improved flexibility", "Stronger core stability", "Better posture", "Increased stamina"],
  },
  {
    title: "Chuvadu",
    subtitle: "Steps and footwork",
    description:
      "Strategic stepping patterns and directional movement that form the base of offence, defence, and mobility.",
    points: ["Speed", "Timing", "Reaction ability", "Lower body strength"],
  },
  {
    title: "Vadivu",
    subtitle: "Animal postures",
    description:
      "Powerful stances inspired by animals such as lion, elephant, snake, horse, cat, and rooster.",
    points: ["Leg strength", "Mobility", "Body awareness", "Stability under pressure"],
  },
  {
    title: "Verum Kai",
    subtitle: "Bare hand self defence",
    description:
      "The unarmed combat system of Kalaripayattu, focused on practical techniques for defence, escapes, control, and body mechanics.",
    points: ["Personal safety", "Confidence building", "Reflex development", "Real-world awareness"],
  },
];

const traditionNotes = [
  {
    label: "Training space",
    value: "Traditional Kuzhi Kalari",
    description:
      "A sacred sunken training arena designed to deepen concentration, humility, and connection to tradition.",
  },
  {
    label: "Lineage",
    value: "C.V.N Tradition",
    description: "Authentic techniques preserved through generations of respected Gurukkals.",
  },
  {
    label: "Guidance",
    value: "Ajithkumar Gurukkal",
    description: "Training led with dedication, practical expertise, and deep respect for Kalari values.",
  },
];

export default function KalariTrainingPage() {
  return (
    <div className="min-h-screen bg-[#f6f4ec]">
      <Header />
      <main className="pt-20">
        <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-section-dark text-white">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/kalari-training-hero.png')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-1/2 lg:block">
            <KalariThreeScene className="h-full w-full" mode="hero" />
          </div>

          <div className="container-narrow relative z-10 grid min-h-[calc(100vh-5rem)] items-end gap-10 px-4 pb-16 pt-16 md:px-8 lg:grid-cols-[0.92fr_0.58fr] lg:px-16 lg:pb-20">
            <div className="max-w-3xl">
              <p className="mb-4 kalari-tech-label text-[#d8f2a7]">
                Authentic training tradition
              </p>
              <h1 className="font-heading text-4xl leading-[1.04] text-white md:text-6xl lg:text-7xl">
                Discover the Power of Kerala&apos;s Ancient Martial Art
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/84 md:text-xl">
                Structured Kalaripayattu training for strength, flexibility, focus, discipline, and cultural
                connection, guided through traditional practice.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-[#d8f2a7] px-7 text-sm font-bold uppercase tracking-[0.14em] text-primary hover:bg-white"
                >
                  <a
                    href={buildCourseEnrollmentWhatsApp("", "Kalaripayattu Training")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll via WhatsApp
                  </a>
                </Button>
                <a
                  href="#training-details"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 px-7 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-primary"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="mb-2 border-l border-white/25 bg-black/30 p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">Practice develops</p>
              <div className="mt-6 divide-y divide-white/25">
                {practiceBenefits.slice(0, 3).map((item, index) => (
                  <div key={item.title} className="grid grid-cols-[3rem_1fr] gap-5 py-4">
                    <span className="font-heading text-2xl text-[#d8f2a7]">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-white/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="training-details" className="bg-[#f6f4ec] px-4 py-16 md:px-8 lg:px-16 lg:py-24">
          <div className="container-narrow">
            <div className="grid gap-10 border-b border-primary/15 pb-14 lg:grid-cols-[0.76fr_1fr]">
              <div>
                <p className="section-eyebrow">Kalaripayattu</p>
                <h2 className="mt-3 max-w-xl font-heading text-3xl leading-tight text-foreground md:text-5xl">
                  Dynamic movement, disciplined strength, and Kerala martial heritage.
                </h2>
              </div>
              <div className="space-y-5 pt-1">
                <p className="section-copy">
                  At AKM Sree Rudra Kalari, Kalaripayattu is taught not merely as a martial art, but as a complete
                  path of strength, discipline, flexibility, focus, self-mastery, and cultural heritage.
                </p>
                <p className="section-copy">
                  Our training programs preserve the authentic traditions of Northern Style Kalaripayattu, guided by
                  lineage-based instruction, structured progression, and deep respect for the values of discipline and
                  humility.
                </p>
                <p className="section-copy">
                  Whether you are a beginner, athlete, child, wellness seeker, performer, or international student,
                  our Kalari offers a transformative experience rooted in timeless wisdom.
                </p>
              </div>
            </div>

            <div className="grid gap-8 py-14 md:grid-cols-3 lg:py-20">
              {traditionNotes.map((item) => (
                <div key={item.label} className="border-t border-primary/25 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">{item.label}</p>
                  <h3 className="mt-3 font-heading text-2xl leading-tight text-foreground">{item.value}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Training Courses Section */}
            <KalariTrainingCourses />
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-section-dark px-4 py-16 text-white md:px-8 lg:px-16 lg:py-24">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/kalari-training-landscape.jpg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,20,11,0.9)_0%,rgba(7,20,11,0.68)_48%,rgba(7,20,11,0.28)_100%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-2/3 opacity-70 lg:block">
            <KalariThreeScene className="h-full w-full" mode="section" />
          </div>
          <div className="container-narrow">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8f2a7]">What the practice develops</p>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-white md:text-5xl">
                Training that sharpens the whole body and steadies the mind.
              </h2>
            </div>

            <div className="mt-10 grid gap-0 border-y border-white/30 bg-black/40 md:grid-cols-2 lg:grid-cols-3">
              {practiceBenefits.map((item, index) => (
                <div key={item.title} className="border-b border-white/25 p-6 md:border-r lg:p-7">
                  <span className="font-heading text-3xl text-[#d8f2a7]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/72">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f4ec] px-4 py-16 md:px-8 lg:px-16 lg:py-24">
          <div className="container-narrow">
            <div className="grid gap-10 lg:grid-cols-[0.62fr_1fr]">
              <div>
                <p className="section-eyebrow">Core components</p>
                <h2 className="mt-3 font-heading text-3xl leading-tight text-foreground md:text-4xl">
                  Structured progression through movement, stance, timing, and self-defence.
                </h2>
                <p className="mt-5 section-copy">
                  Kalaripayattu is both physically demanding and deeply meditative, making it one of the most complete
                  movement systems in the world.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {trainingComponents.map((component, index) => (
                  <div key={component.title} className="bg-white px-6 py-6 shadow-[0_24px_60px_-46px_rgba(18,41,25,0.48)]">
                    <p className="font-heading text-3xl text-highlight">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">{component.title}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-highlight">
                      {component.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{component.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {component.points.map((point) => (
                        <span
                          key={point}
                          className="border border-primary/12 bg-[#f6f4ec] px-3 py-1.5 text-xs font-semibold text-foreground"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
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
