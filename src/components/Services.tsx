import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock3,
  Droplets,
  Leaf,
  Sun,
  Swords,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buildWhatsAppHref } from "@/lib/contact";

const services = [
  {
    icon: Leaf,
    title: "Ayurveda Treatments",
    description:
      "At A. K. M Sri Rudra C. V. N. Kalari, we have an exclusive section for Ayurvedic treatments prepared from herbs hand-picked from the plant kingdom.",
    link: "/services/ayurveda-treatments",
  },
  {
    icon: Droplets,
    title: "Kalari Rejuvenation",
    description:
      "Kalari massage with herbal oils is applied according to a person's body structure and nerve points to improve strength, health, and flexibility of muscles.",
    link: "/services/kalari-rejuvenation",
  },
  {
    icon: Swords,
    title: "Kalari Training",
    description:
      "Kalari is an integrated system of exercise that promotes mental and physical well-being through martial discipline, therapy, and mindful practice.",
    link: "/services/kalari-training",
  },
  {
    icon: Sun,
    title: "Yoga Classes",
    description:
      "Yoga programs support mental clarity, energy, and spiritual growth through guided practice suitable for different ages and fitness levels.",
    link: "/services/yoga-classes",
  },
];

const Services = () => (
  <section
    id="services"
    className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(246,250,241,0.98),rgba(238,245,234,0.96)_36%,rgba(248,250,244,0.98)_100%)] px-4 py-20 md:px-8 lg:px-16 xl:px-24"
  >
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[-6rem] top-[-4rem] h-72 w-72 rounded-full bg-highlight/8 blur-3xl" />
      <div className="absolute right-[-8rem] top-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-[-6rem] left-1/3 h-72 w-72 rounded-full bg-cream blur-3xl" />
      <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-highlight/5 blur-2xl" />
      <Leaf className="absolute left-6 top-4 h-24 w-24 -rotate-12 text-highlight/20 md:h-32 md:w-32" />
      <Leaf className="absolute left-20 top-20 h-16 w-16 rotate-12 text-highlight/15 md:h-20 md:w-20" />
      <Leaf className="absolute right-8 top-28 h-24 w-24 rotate-[22deg] text-highlight/15 md:h-32 md:w-32" />
      <Leaf className="absolute right-28 top-52 h-16 w-16 -rotate-[18deg] text-highlight/10 md:h-20 md:w-20" />
      <Leaf className="absolute right-10 bottom-40 h-24 w-24 rotate-[30deg] text-highlight/10 md:h-32 md:w-32" />
    </div>

    <div className="container-narrow relative z-10">
      <div className="mx-auto max-w-4xl text-center">
        <div className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-highlight/25 bg-white/80 px-5 py-2 !text-sm shadow-sm backdrop-blur">
          <Leaf className="h-4 w-4" />
          OUR SERVICES
        </div>
        <h2 className="section-title mt-6">
          Traditional Healing <span className="text-highlight">&amp;</span> Wellness
        </h2>
        <div className="mt-4 flex items-center justify-center gap-3 text-highlight/60">
          <span className="h-px w-16 bg-highlight/30" />
          <Leaf className="h-4 w-4" />
          <span className="h-px w-16 bg-highlight/30" />
        </div>
        <p className="section-lead mx-auto mt-6 max-w-3xl">
          Experience authentic Ayurvedic treatments, Kalaripayattu training, and holistic wellness practices rooted in ancient Indian traditions.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-white/90 bg-white/92 p-6 shadow-[0_18px_45px_-28px_rgba(28,55,36,0.35)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/70 hover:shadow-[0_32px_80px_-34px_rgba(11,48,27,0.62)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(6,49,24,1),rgba(13,74,36,0.98))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(189,242,130,0.95),rgba(120,214,110,0.9))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <div className="absolute -left-10 bottom-10 h-28 w-28 rounded-full bg-white/10 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(232,239,228,0.92))] shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-white/95 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
              <service.icon className="h-8 w-8 text-highlight transition-all duration-500 group-hover:text-primary" />
            </div>
            <h3 className="relative z-10 mt-5 text-xl font-semibold leading-tight text-foreground transition-colors duration-500 group-hover:text-white group-hover:[text-shadow:0_1px_1px_rgba(0,0,0,0.18)]">
              {service.title}
            </h3>
            <p className="relative z-10 mt-3 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/90">
              {service.description}
            </p>
            <Link
              href={service.link}
              className="relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-500 group-hover:translate-x-1 group-hover:text-white"
            >
              Read More
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>

      <div
        id="kalari-training"
        className="relative mt-16 overflow-hidden rounded-xl border border-primary/20 bg-white p-6 shadow-lg md:p-8"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-0 h-52 w-52 rounded-full bg-highlight/5 blur-3xl" />
          <div className="absolute right-[-3rem] bottom-0 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-highlight">
              <span className="h-px w-8 bg-highlight/30" />
              <span>Featured Program</span>
              <span className="h-px w-8 bg-highlight/30" />
            </div>
            <h3 className="mt-4 text-2xl font-bold leading-tight text-foreground md:text-3xl">
              One Month Intensive Kalari Training Program
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              One Ritual. One Month. A Lifetime of Change.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Lakkoor, Kothala, Ponkunnam</p>
          </div>

          <div className="mt-6 rounded-lg border border-primary/10 bg-section-warm p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              This intensive 30-day program is designed to teach the most important techniques of Kalaripayattu. 
              Learn foundational movements, weapon training, yoga, and receive Ayurvedic treatments. 
              Suitable for all age groups.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg bg-white p-3">
                <Clock3 className="h-5 w-5 flex-shrink-0 text-highlight" />
                <div>
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-sm font-semibold text-foreground">30 Days</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white p-3">
                <Users className="h-5 w-5 flex-shrink-0 text-highlight" />
                <div>
                  <p className="text-xs text-muted-foreground">Suitable For</p>
                  <p className="text-sm font-semibold text-foreground">All Ages</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white p-3">
                <Calendar className="h-5 w-5 flex-shrink-0 text-highlight" />
                <div>
                  <p className="text-xs text-muted-foreground">Type</p>
                  <p className="text-sm font-semibold text-foreground">Intensive</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/services/kalari-training">
              <Button
                size="lg"
                variant="outline"
                className="h-auto rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Read More Details
              </Button>
            </Link>
            <a
              href={buildWhatsAppHref("Hi, I'm interested in the One Month Intensive Kalari Training Program at Sree Rudra CVN Kalari. Could you please share details about fees, schedule, and availability? Thank you.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="h-auto rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-accent"
              >
                <Leaf className="mr-2 h-4 w-4" />
                Book Your Training
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
