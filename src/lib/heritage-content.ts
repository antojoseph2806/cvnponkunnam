export const HERITAGE = {
  brand: "AKM SREE RUDRA",
  tagline: "Preserving Kerala's Ancient Science of Combat, Healing & Wellness Since 1996",
  founded: 1996,
  location: "Lakkattoor, Kottayam, Kerala, India",
  founder: "Ajithkumar Gurukkal",
  recognition: "Kerala Tourism recognized institution",
  mission:
    "To preserve and promote Kerala's martial, healing, and wellness traditions for future generations while welcoming students and wellness seekers from around the world.",
  heritage: "Traditional CVN lineage and Northern Style Kalaripayattu",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Legacy", href: "/legacy" },
  { label: "Founder", href: "/founder" },
  {
    label: "Programs",
    href: "/kalaripayattu",
    children: [
      { label: "Kalaripayattu Training", href: "/kalaripayattu" },
      { label: "Training Programs", href: "/training-programs" },
      { label: "Marma Chikilsa", href: "/marma-chikilsa" },
      { label: "Wellness & Rejuvenation", href: "/wellness" },
      { label: "International Students", href: "/international-students" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { value: "28+", label: "Years of Legacy" },
  { value: "5000+", label: "Students Trained" },
  { value: "100+", label: "International Students" },
  { value: "25+", label: "Countries Reached" },
] as const;

export const KALARI_PROGRAMS = [
  {
    title: "Meypayattu",
    description: "Body sequences that build flexibility, rhythm, and foundational Kalari movement.",
  },
  {
    title: "Kolthari",
    description: "Wooden weapons training developing coordination, focus, and traditional combat skill.",
  },
  {
    title: "Angathari",
    description: "Metal weapons mastery within the Northern Style tradition.",
  },
  {
    title: "Verumkai",
    description: "Empty-hand techniques for self-defence, control, and advanced combat application.",
  },
  {
    title: "Self Defence",
    description: "Practical protection skills rooted in authentic martial principles.",
  },
  {
    title: "Instructor Development",
    description: "Professional pathways for dedicated practitioners seeking teaching excellence.",
  },
] as const;

export const MARMA_SERVICES = [
  "Traditional Marma Therapy",
  "Kalari Chikilsa",
  "Pain Management",
  "Sports Rehabilitation",
  "Body Alignment",
  "Injury Recovery",
] as const;

export const WELLNESS_PACKAGES = [
  {
    title: "Kalari Rejuvenation",
    description: "Traditional restorative therapies for vitality and deep recovery.",
  },
  {
    title: "Ayurvedic Marma Therapy",
    description: "Integrated healing combining Marma wisdom with Ayurvedic wellness.",
  },
  {
    title: "Mind-Body Retreat",
    description: "Yoga, meditation, and stress relief in a serene heritage setting.",
  },
] as const;

export const SEO_KEYWORDS = [
  "Kalaripayattu Training Kerala",
  "Traditional Kalari Kerala",
  "Kalaripayattu India",
  "Marma Chikilsa Kerala",
  "Marma Therapy Kerala",
  "Kalari Healing Kerala",
  "Ayurvedic Wellness Kerala",
  "Wellness Retreat Kerala",
  "Kalaripayattu For Foreigners",
  "Traditional Martial Arts India",
] as const;
