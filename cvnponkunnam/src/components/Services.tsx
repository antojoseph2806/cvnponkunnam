import {
  ArrowRight,
  Calendar,
  Clock3,
  Droplets,
  Leaf,
  Swords,
  Users,
} from "lucide-react";
import Link from "next/link";
import KalariThreeScene from "@/components/KalariThreeScene";

const services = [
  {
    icon: Leaf,
    title: "Marma Chikilsa & Traditional Healing",
    description:
      "Restore balance through Kerala's ancient healing wisdom with Marma-based care, therapeutic bodywork, and natural recovery practices.",
    link: "/services/marma-chikilsa",
  },
  {
    icon: Swords,
    title: "Kalaripayattu Training",
    description:
      "Train in Kerala's ancient martial art through body conditioning, footwork, postures, and self-defence in a traditional Kuzhi Kalari.",
    link: "/services/kalari-training",
  },
  {
    icon: Droplets,
    title: "Kalari Rejuvenation",
    description:
      "Renew strength, flexibility, and inner calm through Kalari Uzhichil, Marma care, herbal oils, movement therapy, and seasonal wellness support.",
    link: "/services/kalari-rejuvenation",
  },
];

const Services = () => (
  <section
    id="services"
    className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(246,250,241,0.98),rgba(238,245,234,0.96)_36%,rgba(248,250,244,0.98)_100%)] px-4 py-20 md:px-8 lg:px-16 xl:px-24"
  >
    <div className="pointer-events-none absolute inset-0">
      <KalariThreeScene className="absolute inset-x-0 top-0 h-[720px] opacity-35 mix-blend-multiply" mode="section" />
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
      <div className="motion-reveal motion-fade-up motion-delay-1 mx-auto max-w-4xl text-center">
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
          Explore authentic Marma healing, Kalaripayattu training, and Kalari rejuvenation rooted in Kerala&apos;s
          living traditions of movement, recovery, and wellness.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`motion-reveal motion-fade-up motion-delay-${index + 2} pest-service-card kalari-service-card group relative flex min-h-[330px] flex-col overflow-hidden rounded-lg border border-white/90 bg-white/88 p-6 shadow-[0_18px_45px_-28px_rgba(28,55,36,0.35)] backdrop-blur transition-all duration-500 hover:border-primary/70 hover:shadow-[0_38px_95px_-38px_rgba(11,48,27,0.72)]`}
          >
            <div className="absolute inset-0 z-0 bg-[linear-gradient(145deg,rgba(6,49,24,0.94),rgba(13,74,36,0.9))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 z-[2] h-1 bg-[linear-gradient(90deg,rgba(189,242,130,0.95),rgba(120,214,110,0.9))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <div className="absolute -left-10 bottom-10 h-28 w-28 rounded-full bg-white/10 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

            <div className="pest-service-icon relative z-10 flex h-16 w-16 items-center justify-center rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(232,239,228,0.92))] shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-white/95 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
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
    </div>
  </section>
);

export default Services;
