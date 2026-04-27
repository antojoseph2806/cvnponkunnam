import Image from "next/image";
import Link from "next/link";
import {
  Flower2,
  Globe2,
  GraduationCap,
  Landmark,
  Leaf,
  MapPin,
  Quote,
  Swords,
  Users,
} from "lucide-react";

const imageHighlights = [
  {
    icon: Landmark,
    title: "Rooted in",
    value: "Kerala Tradition",
  },
  {
    icon: Swords,
    title: "Focus on",
    value: "Meypayattu & Self Defence",
  },
  {
    icon: Flower2,
    title: "Holistic Training",
    value: "Body, Mind & Discipline",
  },
  {
    icon: Users,
    title: "5000+",
    value: "Students Trained",
  },
];

const aboutStats = [
  {
    icon: MapPin,
    label: "Location",
    value: "Lakkoor, Kothala, Ponkunnam, Kottayam, Kerala",
  },
  {
    icon: GraduationCap,
    label: "Established",
    value: "1996",
  },
  {
    icon: Users,
    label: "Students Trained",
    value: "5000+",
  },
  {
    icon: Globe2,
    label: "Open To",
    value: "All Age Groups & International Students",
  },
];

const aboutParagraphs = [
  "AKM Sri Rudra (C. V. N. Kalari) is situated in Lakkoor, Kothala, Ponkunnam, Kottayam and is close to famous tourist centres like Kumarakom and Wazamon. Ajithkumar Gurukkal, the founder of this kalari, was the student of Malabar Vasudeva Gurukkal who belongs to the C. V. N. tradition. He established it in 1996, after having first learnt under his father Karunakaran Nair too.",
  "Sri Rudra is a kuzhi kalari and it focuses on Meypayattu, Self defence and weapon training which is the cornerstone of the Northern style. Besides daily Kalaripayattu classes are done in morning and evening, it offers yoga classes as well. Children from the age of seven are taken in for training programmes. No upper age limit has been fixed to induct interested pupils.",
  "According to a rough estimate, Sri Rudra must have trained at least 5,000 students in Kalaripayattu by now. Women too enrol themselves for his courses, most of whom are physical education instructors at schools. Foreign students from countries like Japan, Switzerland and USA have come here and signed up for short courses. Most prefer short-term programmes such as (1 month courses).",
  "Gurukkal travels all over Kerala and India to give Kalaripayattu performances in front of invited audiences, and participates in cultural events as well. Students are given massage treatment and Marmachikitsa in the month of Kartidakam (July-August). Many foreigners also come here for treatment or rejuvenation therapies.",
  "All the oils required for massage and treatment are manufactured here itself. Accommodation facilities for up to inpatient are available, along with Kerala food. Sri Rudra Kalari is a recipient of the Membership Certificate issued by Responsible Tourism Mission of the Government of Kerala. As it is a member of the Arts and Cultural Forum of Responsible Tourism Mission, many foreign tourists flock towards the kalari to watch the performances conducted there.",
];

const About = () => (
  <section
    id="about"
    className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(247,250,244,0.98)_42%,rgba(242,247,238,0.98)_100%)] px-4 py-20 md:px-8 lg:px-16 xl:px-24"
  >
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[-4rem] bottom-16 h-64 w-64 rounded-full bg-highlight/8 blur-3xl" />
      <div className="absolute right-[-5rem] top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-[-6rem] right-1/4 h-64 w-64 rounded-full bg-cream blur-3xl" />
      <div className="absolute left-10 top-24 h-40 w-40 border border-highlight/12" />
      <div className="absolute left-20 top-34 h-40 w-40 border border-highlight/10" />
      <div className="absolute right-20 bottom-24 h-44 w-44 border border-highlight/12" />
      <div className="absolute right-10 bottom-14 h-44 w-44 border border-highlight/10" />
      <div className="absolute left-1/3 top-12 h-px w-40 rotate-45 bg-gradient-to-r from-transparent via-highlight/18 to-transparent" />
      <div className="absolute left-[36%] top-16 h-px w-32 -rotate-45 bg-gradient-to-r from-transparent via-highlight/14 to-transparent" />
      <div className="absolute right-24 bottom-36 h-px w-40 rotate-45 bg-gradient-to-r from-transparent via-highlight/18 to-transparent" />
      <div className="absolute right-16 bottom-28 h-px w-32 -rotate-45 bg-gradient-to-r from-transparent via-highlight/14 to-transparent" />
      <Leaf className="absolute right-6 top-4 h-20 w-20 rotate-[16deg] text-highlight/20 md:h-28 md:w-28" />
      <Leaf className="absolute right-20 top-0 h-12 w-12 rotate-[28deg] text-highlight/15 md:h-16 md:w-16" />
      <Leaf className="absolute right-0 top-20 h-12 w-12 -rotate-[6deg] text-highlight/10 md:h-16 md:w-16" />
    </div>

    <div className="container-narrow relative z-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-start">
        <div>
          <div className="mb-8 flex items-center gap-4 text-highlight">
            <div className="section-eyebrow inline-flex items-center gap-2 !text-sm md:!text-base">
              <Leaf className="h-4 w-4" />
              <span>C. V. N. Kalari Tradition</span>
            </div>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-highlight/50 to-transparent md:block" />
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/90 bg-white/85 shadow-[0_24px_70px_-34px_rgba(26,53,34,0.35)] backdrop-blur">
            <div className="relative">
              <Image
                src="/assets/about-kalari.jpg"
                alt="AKM Sri Rudra Kalari building"
                width={1200}
                height={900}
                priority={false}
                className="h-[320px] w-full object-cover md:h-[420px] lg:h-[520px]"
              />
            </div>

            <div className="grid grid-cols-2 bg-[linear-gradient(180deg,rgba(13,92,45,0.98),rgba(12,78,40,0.98))] text-primary-foreground md:grid-cols-4">
              {imageHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex flex-col items-center px-4 py-7 text-center ${
                    index < imageHighlights.length - 1 ? "border-b border-white/10 md:border-b-0 md:border-r md:border-white/15" : ""
                  }`}
                >
                  <item.icon className="h-8 w-8 text-primary-foreground/95" />
                  <p className="mt-5 text-lg font-medium">{item.title}</p>
                  <p className="mt-1 max-w-[11rem] text-lg leading-8 text-primary-foreground/95">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-2 lg:pt-12">
          <h2 className="section-title leading-none">
            AKM Sri Rudra
            <span className="mt-3 block text-highlight">Kalari</span>
          </h2>

          <div className="mt-6 flex items-center gap-4 text-highlight/55">
            <span className="h-px w-20 bg-highlight/30" />
            <Leaf className="h-4 w-4" />
            <span className="h-px w-20 bg-highlight/20" />
          </div>

          <div className="mt-8 space-y-6">
            {aboutParagraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-accent"
          >
            <Leaf className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {aboutParagraphs.slice(2).map((paragraph) => (
          <div
            key={paragraph}
            className="rounded-[1.35rem] border border-white/85 bg-white/72 p-6 shadow-[0_18px_44px_-32px_rgba(26,53,34,0.25)] backdrop-blur"
          >
            <p className="body-copy">{paragraph}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-[1.8rem] border border-white/90 bg-white/90 shadow-[0_24px_60px_-38px_rgba(26,53,34,0.28)] backdrop-blur">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.95fr)_minmax(0,3.05fr)]">
          <div className="flex flex-col justify-center border-b border-border/70 px-8 py-8 lg:border-b-0 lg:border-r">
            <Quote className="h-10 w-10 text-highlight" />
            <p className="mt-5 max-w-xs font-heading text-3xl italic leading-[1.5] text-foreground">
              "Preserving the ancient wisdom of Kalaripayattu and passing it on with pride."
            </p>
            <div className="mt-6 flex items-center gap-3 text-highlight/60">
              <span className="h-px w-14 bg-highlight/25" />
              <Leaf className="h-4 w-4" />
              <span className="h-px w-14 bg-highlight/25" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {aboutStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-7 py-8 ${
                  index < aboutStats.length - 1 ? "border-b border-border/70 md:border-b-0 xl:border-r" : ""
                } ${index === 1 ? "md:border-r xl:border-r" : ""} ${index === 2 ? "xl:border-r" : ""}`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-section-warm text-highlight">
                  <stat.icon className="h-7 w-7" />
                </div>
                <p className="section-eyebrow mt-4 !text-[0.78rem]">{stat.label}</p>
                <p className="mt-2 text-lg leading-8 text-foreground/90">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
