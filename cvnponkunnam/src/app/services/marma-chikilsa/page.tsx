import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { buildWhatsAppHref } from "@/lib/contact";
import KalariThreeScene from "@/components/KalariThreeScene";

export const metadata: Metadata = {
  title: "Marma Chikitsa in Kerala | Traditional Marma Therapy & Healing | CVN Kalari",
  description:
    "Experience authentic Marma Chikitsa (Marma therapy) in Kerala for pain relief, injury healing, and wellness. Traditional Kalari healing techniques by experienced practitioners at AKM Sree Rudra CVN Kalari in Kottayam. Effective treatment for sports injuries, chronic pain, neck tension, back pain, and stress relief.",
  keywords:
    "Marma Chikitsa Kerala, Marma therapy Kottayam, traditional healing Kerala, Kalari treatment, Marma massage, pain relief Kerala, injury treatment, Ayurvedic healing, Marma points therapy, CVN Kalari healing, sports injury treatment Kerala, neck pain treatment, back pain relief",
  openGraph: {
    title: "Marma Chikitsa in Kerala | Traditional Marma Therapy & Healing",
    description:
      "Experience authentic Marma Chikitsa for pain relief and healing. Traditional Kalari therapy in Kerala.",
    images: [
      {
        url: "/assets/marma-chikilsa-background.jpeg",
        width: 1200,
        height: 630,
        alt: "Marma Chikitsa Treatment at AKM Sree Rudra CVN Kalari",
      },
    ],
  },
};

const benefits = [
  "Improved circulation",
  "Pain relief",
  "Better mobility",
  "Muscle relaxation",
  "Stress reduction",
  "Faster recovery from fatigue",
  "Energy balance",
  "Overall physical wellbeing",
];

const supportAreas = [
  "Neck and shoulder tension",
  "Lower back discomfort",
  "Joint stiffness",
  "Muscle fatigue",
  "Stress-related tightness",
  "General body imbalance",
];

const sessionHighlights = [
  { label: "Traditional focus", value: "Marma points" },
  { label: "Care approach", value: "Assessment-led" },
  { label: "Rooted in", value: "Kerala Kalari practice" },
];

export default function MarmaChikilsaPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f1]">
      <Header />
      <main className="pt-20">
        <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-section-dark text-white">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/marma-chikilsa-background.jpeg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-1/2 lg:block">
            <KalariThreeScene className="h-full w-full" mode="hero" />
          </div>

          <div className="container-narrow relative z-10 grid min-h-[calc(100vh-5rem)] items-end gap-10 px-4 pb-16 pt-14 md:px-8 lg:grid-cols-[0.95fr_0.55fr] lg:px-16 lg:pb-20">
            <div className="max-w-3xl">
              <p className="mb-4 kalari-tech-label text-[#c8e6b0]">
                Traditional Kerala healing
              </p>
              <h1 className="font-heading text-4xl leading-[1.06] text-white md:text-6xl lg:text-7xl">
                Marma Chikilsa and Traditional Healing
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 md:text-xl">
                Restore balance through time-honored Marma care, therapeutic bodywork, and Kalari-based recovery
                methods practiced with attention and discipline.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildWhatsAppHref(
                    "Hi, I would like to know more about Marma Chikilsa and Traditional Healing sessions.",
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
                  href="#marma-details"
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

        <section id="marma-details" className="bg-[#f5f7f1] px-4 py-16 md:px-8 lg:px-16 lg:py-24">
          <div className="container-narrow">
            <div className="grid gap-10 border-b border-primary/15 pb-14 lg:grid-cols-[0.78fr_1fr]">
              <div>
                <p className="section-eyebrow">Healing tradition</p>
                <h2 className="mt-3 max-w-xl font-heading text-3xl leading-tight text-foreground md:text-5xl">
                  A practice rooted in harmony, recovery, and careful touch.
                </h2>
              </div>
              <div className="space-y-5 pt-1">
                <p className="section-copy">
                  At AKM Sree Rudra Kalari, healing is understood as the restoration of harmony between the body,
                  mind, energy, and movement. Our traditional wellness practices are rooted in Kerala&apos;s
                  time-honored systems of Marma Chikilsa, therapeutic bodywork, Kalari-based recovery methods,
                  and natural rejuvenation therapies passed through generations.
                </p>
                <p className="section-copy">
                  For centuries, warriors, healers, and communities in Kerala relied on these methods to recover
                  from injuries, regain strength, improve vitality, and maintain lifelong wellness. Today, we
                  continue this legacy by offering authentic healing experiences guided by knowledge, care, and
                  tradition.
                </p>
              </div>
            </div>

            <div className="grid gap-10 py-14 lg:grid-cols-[1fr_0.88fr] lg:py-20">
              <div className="bg-white px-6 py-8 shadow-[0_24px_60px_-42px_rgba(18,41,25,0.45)] md:px-8 lg:px-10">
                <p className="section-eyebrow">What it is</p>
                <h2 className="mt-3 font-heading text-3xl leading-tight text-foreground md:text-4xl">
                  Marma Chikilsa focuses on the body&apos;s vital energy points.
                </h2>
                <div className="mt-7 space-y-5">
                  <p className="section-copy">
                    Marma Chikilsa is an ancient therapeutic science focused on the body&apos;s vital energy points,
                    known as Marmas. These points are traditionally believed to be intersections of muscles, nerves,
                    joints, bones, blood vessels, and subtle life energy pathways.
                  </p>
                  <p className="section-copy">
                    When these areas are properly stimulated, balanced, or treated using traditional methods, they may
                    support circulation, relaxation, mobility, recovery, and overall physical wellbeing.
                  </p>
                  <p className="section-copy">
                    Marma therapy has long been associated with Kerala&apos;s martial heritage, where it was used to
                    help restore warriors after intense physical training.
                  </p>
                </div>
              </div>

            <div className="relative isolate overflow-hidden bg-primary px-6 py-8 text-primary-foreground md:px-8 lg:px-10">
                <div className="pointer-events-none absolute inset-0 -z-10 hidden opacity-20 lg:block" aria-hidden="true">
                  <KalariThreeScene className="h-full w-full" mode="section" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8f2a7]">May help support</p>
                <div className="mt-7 grid gap-0 sm:grid-cols-2 lg:grid-cols-1">
                  {benefits.map((benefit, index) => (
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

            <div className="border-t border-primary/15 pt-14">
              <div className="grid gap-8 lg:grid-cols-[0.62fr_1fr]">
                <div>
                  <p className="section-eyebrow">Marma therapy sessions</p>
                  <h2 className="mt-3 font-heading text-3xl leading-tight text-foreground md:text-4xl">
                    Traditional techniques for tension, mobility, and balance.
                  </h2>
                  <p className="mt-5 section-copy">
                    Each session is designed around traditional care principles and may be beneficial for the following
                    concerns.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {supportAreas.map((item) => (
                    <div key={item} className="border border-primary/12 bg-white px-5 py-4">
                      <p className="text-sm font-semibold leading-6 text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
