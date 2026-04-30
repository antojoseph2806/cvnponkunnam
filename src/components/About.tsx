import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Flower2,
  Globe2,
  GraduationCap,
  Landmark,
  Leaf,
  MapPin,
  Quote,
  Users,
} from "lucide-react";

type AboutProps = {
  variant?: "home" | "full";
};

const aboutStats = [
  {
    icon: MapPin,
    label: "Location",
    value: "Lakkattoor, Kottayam, Kerala",
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

const homeParagraphs = [
  "Welcome to AKM Sree Rudra Kalari, a distinguished center of Kalaripayattu, Marma Chikilsa, traditional wellness, and cultural heritage in the serene village of Lakkattoor, Kottayam, Kerala.",
  "Established in 1996, our kalari preserves Kerala's warrior and healing traditions through authentic Northern Style Kalaripayattu, therapeutic bodywork, wellness education, and compassionate guidance.",
];

const fullIntroParagraphs = [
  "Welcome to AKM Sree Rudra Kalari, a distinguished center of Kalaripayattu, Marma Chikilsa, traditional wellness, and cultural heritage located in the serene village of Lakkattoor, Kottayam, Kerala. Rooted in the timeless wisdom of Kerala's warrior traditions, our kalari is more than a place of training. It is a living sanctuary where discipline, healing, movement, and inner transformation come together.",
  "Established in 1996, AKM Sree Rudra Kalari has grown into one of Kerala's respected institutions for authentic Northern Style Kalaripayattu, therapeutic bodywork, and wellness education. With decades of dedication, thousands of trained students, and visitors from across the world, we proudly preserve one of India's treasured martial and healing systems for future generations.",
];

const gurukkalParagraphs = [
  "AKM Sree Rudra Kalari is founded and functions under the leadership of Ajithkumar Gurukkal, a dedicated practitioner, teacher, and preserver of Kerala's martial and healing traditions.",
  "Having received rigorous training under the guidance of the respected Malabar Vasudeva Gurukkal of the esteemed C.V.N. tradition, Ajithkumar Gurukkal has devoted his life to the disciplined transmission of authentic Kalaripayattu, Marmachikitsa, Ayurvedic therapy, and Kalari wellness practices.",
  "For nearly three decades, he has trained thousands of students from Kerala, other Indian states, and several foreign countries, guiding each learner not only in martial techniques, but also in the deeper values of concentration, humility, courage, healing, and self-mastery.",
  "Under his leadership, AKM Sree Rudra Kalari has evolved into a destination where traditional knowledge is preserved with authenticity and offered with compassionate care.",
];

const gurukkalExpertise = [
  "Marma therapy",
  "Kalari Uzhichil rejuvenation massage",
  "Ayurvedic wellness consultation",
  "Yoga-based flexibility training",
  "Heritage cultural performances",
];

const kuzhiKalariParagraphs = [
  "Our training center is built in the traditional Kuzhi Kalari style, a sacred sunken arena constructed according to ancient principles. This unique space is designed to cultivate focus, humility, discipline, and energy alignment while students train in an environment deeply connected to tradition.",
  "Within this sacred training ground, students experience the original atmosphere of Kerala's warrior heritage while learning directly through structured practice and guided mentorship.",
];

const About = ({ variant = "home" }: AboutProps) => (
  <section
    id="about"
    className="relative min-h-screen overflow-hidden"
  >
    {/* Full Background Image with Classic Overlay */}
    <div className="pointer-events-none absolute inset-0">
      <Image
        src="/assets/about.png"
        alt="Kalari Background"
        fill
        className="object-cover"
        priority
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>

    {/* Classic Decorative Border Elements */}
    <div className="pointer-events-none absolute inset-0">
      {/* Corner Ornaments */}
      <div className="absolute left-8 top-8 h-24 w-24 border-l-2 border-t-2 border-highlight-light/40" />
      <div className="absolute right-8 top-8 h-24 w-24 border-r-2 border-t-2 border-highlight-light/40" />
      <div className="absolute bottom-8 left-8 h-24 w-24 border-b-2 border-l-2 border-highlight-light/40" />
      <div className="absolute bottom-8 right-8 h-24 w-24 border-b-2 border-r-2 border-highlight-light/40" />
      
      {/* Decorative Lines */}
      <div className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-highlight-light/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-32 w-px -translate-x-1/2 bg-gradient-to-t from-highlight-light/50 to-transparent" />
    </div>

    <div className="relative z-10 px-4 py-16 md:px-8 lg:px-16 xl:px-24">
      {/* Classic Header Section */}
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-highlight-light/60" />
          <Leaf className="h-6 w-6 text-highlight-light" />
          <span className="text-xs uppercase tracking-wider text-highlight-light/90">C. V. N. Kalari Tradition</span>
          <Leaf className="h-6 w-6 text-highlight-light" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-highlight-light/60" />
        </div>
        
        <h1 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          {variant === "full" ? "About" : "AKM Sree Rudra"}
          <span className="mt-2 block text-highlight-light">
            {variant === "full" ? "AKM Sree Rudra Kalari" : "Kalari"}
          </span>
        </h1>

        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-highlight-light/40 to-highlight-light/60" />
          <Quote className="h-5 w-5 text-highlight-light/70" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-highlight-light/40 to-highlight-light/60" />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          {/* Content Section */}
          <div>
            <div className="rounded-lg border-2 border-highlight-light/30 bg-black/50 p-8 shadow-2xl backdrop-blur-md md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <Landmark className="h-8 w-8 text-highlight-light" />
                <h2 className="font-heading text-xl font-bold text-white md:text-2xl">
                  {variant === "full" ? "A Legacy of Strength, Tradition & Holistic Healing" : "Our Heritage"}
                </h2>
              </div>
              
              <div className="space-y-5 text-base leading-relaxed text-gray-200 md:text-lg">
                {(variant === "full" ? fullIntroParagraphs : homeParagraphs).map((paragraph, index) => (
                  <p key={index} className="first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-bold first-letter:leading-none first-letter:text-highlight-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href={variant === "full" ? "/contact" : "/about"}
                  className="inline-flex items-center gap-2 rounded-md border-2 border-highlight-light bg-highlight-light px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-transparent hover:text-highlight-light"
                >
                  <Leaf className="h-4 w-4" />
                  {variant === "full" ? "Contact Us" : "Read More"}
                </Link>
                <div className="flex items-center gap-2 text-highlight-light/70">
                  <span className="h-px w-12 bg-highlight-light/30" />
                  <Leaf className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {variant === "full" ? (
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
            <div className="self-start rounded-lg border-2 border-highlight-light/20 bg-black/50 p-6 shadow-xl backdrop-blur-md transition-all hover:border-highlight-light/40 hover:bg-black/60 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Flower2 className="h-6 w-6 text-highlight-light" />
                <h3 className="font-heading text-xl font-bold text-white md:text-2xl">Our Gurukkal</h3>
              </div>
              <p className="mb-4 text-lg font-semibold text-highlight-light">Ajithkumar Gurukkal</p>
              <div className="space-y-4 text-sm leading-relaxed text-gray-300 md:text-base">
                {gurukkalParagraphs.slice(0, 3).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-highlight-light/20 bg-black/30 p-5">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-highlight-light/80">
                  Areas of Expertise
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {gurukkalExpertise.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-200 md:text-base">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-highlight-light" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-gray-300 md:text-base">
                {gurukkalParagraphs[3]}
              </p>
            </div>

            <div className="self-start rounded-lg border-2 border-highlight-light/20 bg-black/50 p-6 shadow-xl backdrop-blur-md transition-all hover:border-highlight-light/40 hover:bg-black/60 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Flower2 className="h-6 w-6 text-highlight-light" />
                <h3 className="font-heading text-xl font-bold text-white md:text-2xl">Our Traditional Kuzhi Kalari</h3>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-300 md:text-base">
                {kuzhiKalariParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {/* Stats Section */}
        <div className="mt-12 overflow-hidden rounded-lg border-2 border-highlight-light/30 bg-black/50 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,1fr)_minmax(0,2fr)]">
            <div className="flex flex-col justify-center border-b-2 border-highlight-light/30 bg-gradient-to-br from-primary/30 to-section-dark/40 px-8 py-10 lg:border-b-0 lg:border-r-2">
              <Quote className="h-12 w-12 text-highlight-light" />
              <p className="mt-6 font-heading text-xl italic leading-relaxed text-white md:text-2xl">
                "Preserving the ancient wisdom of Kalaripayattu and passing it on with pride."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-12 bg-highlight-light/40" />
                <Leaf className="h-5 w-5 text-highlight-light" />
                <span className="h-px w-12 bg-highlight-light/40" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {aboutStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-6 py-8 ${
                    index < aboutStats.length - 1 ? "border-b-2 border-highlight-light/20 md:border-b-0" : ""
                  } ${index % 2 === 0 ? "md:border-r-2 md:border-highlight-light/20" : ""}`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-highlight-light/40 bg-highlight-light/10">
                    <stat.icon className="h-7 w-7 text-highlight-light" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-highlight-light/80">{stat.label}</p>
                  <p className="mt-2 text-base font-medium leading-relaxed text-white md:text-lg">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
