import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock3,
  Droplets,
  Leaf,
  Sparkles,
  Sun,
  Swords,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Leaf,
    title: "Ayurveda Treatments",
    description:
      "At EP Vasudeva Gurukkal's CVN Ayurveda Kalari, we have an exclusive section for Ayurvedic treatments prepared from herbs hand-picked from the plant kingdom.",
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

const programFeatures = [
  "Basic Kalari Leg Movements",
  "Meippayattu",
  "Weapon Training",
  "Verum Kai",
  "Basic Yoga",
  "Ayurvedic Body Massage",
];

const programDetails = [
  {
    icon: Clock3,
    label: "Duration",
    value: "30 Days",
  },
  {
    icon: Users,
    label: "Suitable For",
    value: "All Age Groups",
  },
  {
    icon: Calendar,
    label: "Training Type",
    value: "Intensive Program",
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
          <Sparkles className="h-4 w-4" />
          <span className="h-px w-16 bg-highlight/30" />
        </div>
        <p className="section-lead mx-auto mt-6 max-w-3xl">
          Experience authentic Ayurvedic treatments, Kalaripayattu training, and holistic wellness practices rooted in ancient Indian traditions.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.link}
            className="group relative flex min-h-[31rem] flex-col overflow-hidden rounded-none border border-white/90 bg-white/92 p-7 shadow-[0_18px_45px_-28px_rgba(28,55,36,0.35)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/70 hover:shadow-[0_32px_80px_-34px_rgba(11,48,27,0.62)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(6,49,24,1),rgba(13,74,36,0.98))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(189,242,130,0.95),rgba(120,214,110,0.9))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <div className="absolute -left-10 bottom-10 h-28 w-28 rounded-full bg-white/10 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(232,239,228,0.92))] shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-white/14 group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]">
              <service.icon className="h-10 w-10 text-highlight transition-all duration-500 group-hover:text-white" />
            </div>
            <h3 className="relative z-10 mt-7 text-2xl leading-tight text-foreground transition-colors duration-500 group-hover:text-white group-hover:[text-shadow:0_1px_1px_rgba(0,0,0,0.18)]">
              {service.title}
            </h3>
            <p className="relative z-10 mt-4 flex-1 text-base leading-8 text-muted-foreground transition-colors duration-500 group-hover:text-white">
              {service.description}
            </p>
            <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary transition-all duration-500 group-hover:translate-x-1 group-hover:text-white">
              Read More
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>

      <div
        id="kalari-training"
        className="relative mt-16 overflow-hidden rounded-[2rem] border border-[#dfe7da] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(250,252,248,0.96))] p-5 shadow-[0_24px_70px_-42px_rgba(34,65,40,0.4)] md:p-8 lg:p-10"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-0 h-52 w-52 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute right-[-3rem] bottom-0 h-56 w-56 rounded-full bg-highlight/8 blur-3xl" />
          <Leaf className="absolute bottom-10 right-8 h-24 w-24 rotate-[22deg] text-highlight/10 md:h-32 md:w-32" />
        </div>

        <div className="relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 text-sm font-semibold text-highlight">
              <span className="h-px w-10 bg-highlight/30" />
              <span>One Ritual. One Month. A Lifetime of Change.</span>
              <span className="h-px w-10 bg-highlight/30" />
            </div>
            <h3 className="mt-5 text-4xl leading-tight text-foreground md:text-5xl">
              One Month Intense Kalari Training Program
            </h3>
            <div className="mt-4 flex items-center justify-center gap-3 text-highlight/55">
              <span className="h-px w-14 bg-highlight/25" />
              <Leaf className="h-4 w-4" />
              <span className="h-px w-14 bg-highlight/25" />
            </div>
            <p className="mt-4 text-lg text-muted-foreground">Lakkoor, Kothala, Ponkunnam</p>
          </div>

          <div className="mt-10 rounded-[1.6rem] border border-[#e4e9e0] bg-white/95 p-6 shadow-[0_18px_40px_-30px_rgba(35,58,40,0.28)] md:p-8">
            <div className="flex flex-col gap-4 border-b border-border/70 pb-6 md:flex-row md:items-center">
              <div className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm">
                <Sparkles className="h-4 w-4" />
                PROGRAM OVERVIEW
              </div>
              <p className="text-base leading-7 text-muted-foreground md:text-lg">
                Learn the most important techniques of Kalaripayattu in just 30 days.
              </p>
            </div>

            <p className="mt-6 text-base leading-8 text-muted-foreground">
              This One Month Intense Kalari Training Program is designed to teach the most important techniques of Kalaripayattu that you can continue to develop in your life and learn. The training is beneficial for both men and women of all age groups.
            </p>

            <div className="mt-8 border-t border-border/70 pt-8">
              <h4 className="text-3xl text-foreground">What You&apos;ll Learn</h4>
              <div className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
                {programFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-highlight" />
                    <p className="text-base font-medium text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(248,250,244,1),rgba(243,247,239,1))] p-5 md:grid-cols-3 md:gap-0">
              {programDetails.map((detail, index) => (
                <div
                  key={detail.label}
                  className={`flex items-center gap-4 ${
                    index < programDetails.length - 1 ? "md:border-r md:border-border/80" : ""
                  } md:px-6`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-highlight/20 bg-white/80">
                    <detail.icon className="h-7 w-7 text-highlight" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{detail.label}</p>
                    <p className="text-2xl font-semibold text-foreground">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/917306901750?text=Hi%2C%20I%27m%20interested%20in%20the%20One%20Month%20Intensive%20Kalari%20Training%20Program%20at%20Sree%20Rudra%20CVN%20Kalari.%20Could%20you%20please%20share%20details%20about%20fees%2C%20schedule%2C%20and%20availability%3F%20Thank%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="h-auto rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-accent"
              >
                <Leaf className="mr-2 h-5 w-5" />
                Book Your Training Program
              </Button>
            </a>
            <p className="mt-4 text-base text-muted-foreground">
              Embark on a journey to physical and mental excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
