export interface HeroContent {
  backgroundImage: string;
  badgeText: string;
  title: string;
  tagline: string;
  subtitle: string;
  sinceYear: number;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  founderTitle: string;
  founderName: string;
  founderText: string;
  locationText: string;
  missionQuote: string;
  missionLabel: string;
  founderLinkText: string;
  founderLinkHref: string;
  stats: StatItem[];
}

export interface ProgramItem {
  title: string;
  description: string;
}

export interface KalaripayattuContent {
  eyebrow: string;
  title: string;
  description: string;
  programs: ProgramItem[];
}

export interface MarmaContent {
  eyebrow: string;
  title: string;
  description: string;
  services: string[];
}

export interface WellnessPackage {
  title: string;
  description: string;
}

export interface WellnessContent {
  eyebrow: string;
  title: string;
  description: string;
  packages: WellnessPackage[];
}

export interface CourseItem {
  id: number;
  duration: string;
  title: string;
  subtitle: string;
  description: string;
  features: string;
  type: string;
  suitableFor: string;
  amountInr: number;
  amountUsd: number;
  tokenAmountInr: number;
  tokenAmountUsd: number;
  isPopular: boolean;
  isActive: boolean;
  displayOrder: number;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
  instagram: string;
  facebook: string;
  youtube: string;
}

export interface FooterContent {
  brand: string;
  tagline: string;
  description: string;
  quickLinks: { label: string; href: string }[];
  services: { label: string; href: string }[];
  copyright: string;
}

export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  kalaripayattu: KalaripayattuContent;
  marma: MarmaContent;
  wellness: WellnessContent;
  courses: CourseItem[];
  contact: ContactInfo;
  footer: FooterContent;
}

export const defaultContent: SiteContent = {
  hero: {
    backgroundImage: "/assets/kalari-training-hero.png",
    badgeText: "Kerala Tourism recognized institution",
    title: "AKM SREE RUDRA",
    tagline: "Preserving Kerala's Ancient Science of Combat, Healing & Wellness",
    subtitle: "Traditional Kalaripayattu Training - Marma Chikilsa - Ayurvedic Wellness - Holistic Rejuvenation",
    sinceYear: 1996,
    primaryButtonText: "Explore Programs",
    primaryButtonLink: "/training-programs",
    secondaryButtonText: "Book Consultation",
    secondaryButtonLink: "/contact",
  },
  about: {
    eyebrow: "Our Legacy",
    title: "A Living Heritage Institution",
    description:
      "Since 1996, AKM Sree Rudra has been the guardian of Kerala's ancient martial and healing traditions, preserving authentic knowledge while welcoming seekers from across the globe.",
    image: "https://images.unsplash.com/photo-1644773182204-f0bf03cae0cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    founderTitle: "Founder & Chief Gurukkal",
    founderName: "Ajithkumar Gurukkal",
    founderText:
      "Under the guidance of Ajithkumar Gurukkal, AKM Sree Rudra carries forward the Traditional CVN lineage and Northern Style Kalaripayattu. Our institution is not merely a training center - it is a sanctuary where ancient wisdom meets modern practice.",
    locationText:
      "Located in Lakkattoor, Kottayam, Kerala, we preserve the complete spectrum of traditional knowledge: from combat techniques and weapons mastery to healing arts and spiritual practices.",
    missionQuote:
      "To preserve and promote Kerala's martial, healing, and wellness traditions for future generations while welcoming students and wellness seekers from around the world.",
    missionLabel: "- Our Mission",
    founderLinkText: "Meet the Gurukkal",
    founderLinkHref: "/founder",
    stats: [
      { value: "28+", label: "Years of Legacy" },
      { value: "5000+", label: "Students Trained" },
      { value: "100+", label: "International Students" },
      { value: "25+", label: "Countries Reached" },
    ],
  },
  kalaripayattu: {
    eyebrow: "Our Programs",
    title: "Authentic Kalaripayattu Training",
    description:
      "Experience the world's oldest martial art in its authentic Northern Style form. Our comprehensive training programs are rooted in the CVN tradition, developed over centuries of disciplined practice.",
    programs: [
      { title: "Meypayattu", description: "Body sequences that build flexibility, rhythm, and foundational Kalari movement." },
      { title: "Kolthari", description: "Wooden weapons training developing coordination, focus, and traditional combat skill." },
      { title: "Angathari", description: "Metal weapons mastery within the Northern Style tradition." },
      { title: "Verumkai", description: "Empty-hand techniques for self-defence, control, and advanced combat application." },
      { title: "Self Defence", description: "Practical protection skills rooted in authentic martial principles." },
      { title: "Instructor Development", description: "Professional pathways for dedicated practitioners seeking teaching excellence." },
    ],
  },
  marma: {
    eyebrow: "Healing Arts",
    title: "Traditional Marma Chikitsa",
    description:
      "Marma Chikitsa is the ancient healing science of vital energy points. Our treatments combine traditional knowledge with practical therapeutic techniques to restore balance and vitality.",
    services: [
      "Traditional Marma Therapy",
      "Kalari Chikilsa",
      "Pain Management",
      "Sports Rehabilitation",
      "Body Alignment",
      "Injury Recovery",
    ],
  },
  wellness: {
    eyebrow: "Wellness",
    title: "Holistic Rejuvenation",
    description:
      "Our wellness programs integrate the ancient healing traditions of Kalari with Ayurvedic wisdom to provide comprehensive rejuvenation for body, mind, and spirit.",
    packages: [
      { title: "Kalari Rejuvenation", description: "Traditional restorative therapies for vitality and deep recovery." },
      { title: "Ayurvedic Marma Therapy", description: "Integrated healing combining Marma wisdom with Ayurvedic wellness." },
      { title: "Mind-Body Retreat", description: "Yoga, meditation, and stress relief in a serene heritage setting." },
    ],
  },
  courses: [
    {
      id: 1,
      duration: "1 Month",
      title: "Foundation Course",
      subtitle: "Perfect for beginners to experience authentic Kalaripayattu",
      description:
        "An intensive introduction to the ancient martial art of Kalaripayattu, covering basic techniques, body conditioning, and traditional practices.",
      features:
        "Basic stances and movements\nBody flexibility training\nIntroduction to traditional weapons\nMeditation and breathing exercises\nCultural understanding of Kalari",
      type: "Residential",
      suitableFor: "Beginners",
      amountInr: 15000,
      amountUsd: 200,
      tokenAmountInr: 3000,
      tokenAmountUsd: 40,
      isPopular: false,
      isActive: true,
      displayOrder: 1,
    },
    {
      id: 2,
      duration: "3 Months",
      title: "Intermediate Training",
      subtitle: "Deepen your practice with advanced techniques",
      description:
        "Build upon foundational skills with advanced combat techniques, weapon training, and deeper understanding of Kalari philosophy.",
      features:
        "Advanced combat techniques\nWeapon mastery (staff, sword)\nMarma point knowledge\nAdvanced flexibility training\nTraditional healing practices\nSparring sessions",
      type: "Residential",
      suitableFor: "Intermediate",
      amountInr: 40000,
      amountUsd: 550,
      tokenAmountInr: 8000,
      tokenAmountUsd: 110,
      isPopular: true,
      isActive: true,
      displayOrder: 2,
    },
    {
      id: 3,
      duration: "6 Months",
      title: "Advanced Program",
      subtitle: "Master the art with comprehensive training",
      description:
        "Comprehensive training program covering all aspects of Kalaripayattu including advanced weapons, healing techniques, and teaching methodology.",
      features:
        "Complete weapon training\nMarma chikitsa (healing)\nAdvanced combat forms\nTeaching methodology\nPhilosophy and history\nDaily practice routines\nCertification preparation",
      type: "Residential",
      suitableFor: "Advanced",
      amountInr: 75000,
      amountUsd: 1000,
      tokenAmountInr: 15000,
      tokenAmountUsd: 200,
      isPopular: false,
      isActive: true,
      displayOrder: 3,
    },
    {
      id: 4,
      duration: "1 Year",
      title: "Master Course",
      subtitle: "Complete mastery and instructor certification",
      description:
        "The ultimate training program for those seeking complete mastery of Kalaripayattu, including instructor certification and deep knowledge of healing arts.",
      features:
        "Complete Kalari mastery\nInstructor certification\nAdvanced marma therapy\nAll traditional weapons\nAyurvedic integration\nTeaching practicum\nLifetime guidance\nCertificate of completion",
      type: "Residential",
      suitableFor: "All Levels",
      amountInr: 140000,
      amountUsd: 1850,
      tokenAmountInr: 28000,
      tokenAmountUsd: 370,
      isPopular: false,
      isActive: true,
      displayOrder: 4,
    },
  ],
  contact: {
    phone: "+919946471378",
    phoneDisplay: "+91 99464 71378",
    whatsapp: "919946471378",
    email: "info@akmsreerudra.com",
    address: "Lakkattoor, Kottayam, Kerala, India - 686506",
    hours: "Mon - Sat: 6:00 AM - 7:00 PM",
    instagram: "https://www.instagram.com/akmkalari",
    facebook: "https://www.facebook.com/akmsreerudra",
    youtube: "https://www.youtube.com/@akmsreerudra",
  },
  footer: {
    brand: "AKM SREE RUDRA",
    tagline: "Preserving Kerala's Ancient Science of Combat, Healing & Wellness Since 1996",
    description:
      "AKM Sree Rudra CVN Kalari is a Kerala Tourism recognized institution dedicated to preserving authentic Northern Style Kalaripayattu and traditional healing arts.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Legacy", href: "/legacy" },
      { label: "Founder", href: "/founder" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Kalaripayattu Training", href: "/kalaripayattu" },
      { label: "Training Programs", href: "/training-programs" },
      { label: "Marma Chikilsa", href: "/marma-chikilsa" },
      { label: "Wellness & Rejuvenation", href: "/wellness" },
      { label: "International Students", href: "/international-students" },
    ],
    copyright: "AKM Sree Rudra CVN Kalari. All rights reserved.",
  },
};
