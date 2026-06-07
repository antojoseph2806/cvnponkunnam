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
    image: "/assets/about-training.png",
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
      { title: "Kalari Warm-Up", description: "Traditional warm-up sequences to prepare the body for training, improve circulation, and prevent injury." },
      { title: "Vandanam", description: "Sacred salutation rituals performed at the beginning and end of each session to honor the tradition." },
      { title: "Kaalukal", description: "Leg exercises that build foundational strength, balance, and flexibility essential for all Kalari forms." },
      { title: "Chuvadu", description: "Basic footwork patterns that teach movement, agility, and grounding in the Kalari pit." },
      { title: "Chumattadi", description: "Weight-based exercises using traditional implements to build core strength and endurance." },
      { title: "Meypayattu", description: "Complete body sequences combining flexibility, rhythm, and foundational Kalari movement into flowing forms." },
      { title: "Vadivu", description: "Traditional postures and stances that form the structural foundation of Kalaripayattu combat." },
      { title: "Angachuvadu", description: "Advanced footwork sequences that develop speed, precision, and combat readiness." },
      { title: "Neduvadi & Vadiveeshal", description: "Long staff techniques and defensive maneuvers — the first weapon introduced in the Northern Style tradition." },
      { title: "Cheruvadi", description: "Short stick combat techniques requiring close-quarter skill and refined coordination." },
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
      duration: "1 Week",
      title: "Kalari Aaramba",
      subtitle: "A perfect introduction to the ancient art of Kalaripayattu",
      description:
        "Begin your Kalari journey with foundational practices including warm-ups, salutations, basic stances, and introductory body sequences in a traditional Gurukulam setting.",
      features:
        "Kalari Warm-Up sequences\nVandanam (traditional salutation)\nKaalukal × 4 leg exercises\nChuvadu × 1 basic footwork\nMeypayattu × 1 body sequence\nVadivu (postures and stances)",
      type: "Residential",
      suitableFor: "Beginners",
      amountInr: 8000,
      amountUsd: 95,
      tokenAmountInr: 2000,
      tokenAmountUsd: 25,
      isPopular: false,
      isActive: true,
      displayOrder: 1,
    },
    {
      id: 2,
      duration: "2 Weeks",
      title: "Kalari Praramba",
      subtitle: "Build a strong foundation in Northern Style Kalaripayattu",
      description:
        "Establish solid fundamentals with expanded body conditioning, additional sequences, and deeper immersion into the CVN tradition of Northern Style Kalaripayattu.",
      features:
        "Kalari Warm-Up + Vandanam + Vadivu\nKaalukal × 6 leg exercises\nChuvadu × 1 footwork sequence\nChumattadi × 1 weight exercise\nMeypayattu × 1 complete body sequence\nDaily meditation and breathing practice",
      type: "Residential",
      suitableFor: "Beginners",
      amountInr: 16000,
      amountUsd: 190,
      tokenAmountInr: 3000,
      tokenAmountUsd: 35,
      isPopular: false,
      isActive: true,
      displayOrder: 2,
    },
    {
      id: 3,
      duration: "1 Month",
      title: "Kalari Parijaya",
      subtitle: "Intensive residential training for dedicated practitioners",
      description:
        "Immerse yourself fully with twice-daily training sessions. Progress through advanced sequences, weapon introductions, and deepen your understanding of Kalari as a way of life.",
      features:
        "Kalari Warm-Up + Vandanam + Vadivu\nKaalukal × 8 leg exercises\nChuvadu × 2 footwork sequences\nChumattadi × 1 weight exercise\nMeypayattu × 2 body sequences\nAngachuvadu (advanced footwork)\nNeduvadi + Vadiveeshal (staff basics)",
      type: "Residential",
      suitableFor: "Intermediate",
      amountInr: 25500,
      amountUsd: 305,
      tokenAmountInr: 5000,
      tokenAmountUsd: 60,
      isPopular: true,
      isActive: true,
      displayOrder: 3,
    },
    {
      id: 4,
      duration: "2 Months",
      title: "Kalari Parisrema",
      subtitle: "Comprehensive mastery of foundational Kalari arts",
      description:
        "The complete residential experience covering all foundational aspects of Northern Style Kalaripayattu. Includes wooden weapon introduction and deeper philosophical understanding.",
      features:
        "Kalari Warm-Up + Vandanam + Vadivu\nKaalukal × 10 leg exercises\nChuvadu × 3 footwork sequences\nChumattadi × 2 weight exercises\nMeypayattu × 3 body sequences\nAngachuvadu + Neduvadi + Vadiveeshal\nCheruvadi Introduction (short stick)\nCompletion certificate awarded",
      type: "Residential",
      suitableFor: "Advanced Beginners",
      amountInr: 51000,
      amountUsd: 610,
      tokenAmountInr: 8000,
      tokenAmountUsd: 95,
      isPopular: false,
      isActive: true,
      displayOrder: 4,
    },
    {
      id: 5,
      duration: "3 Days",
      title: "Relax Therapy",
      subtitle: "Herbal heat therapy and full-body massages for complete relaxation",
      description:
        "Support your training journey with traditional Kalari-based therapies. Ideal for beginners easing into the physical demands of Kalari practice, helping the body recover faster and improve flexibility.",
      features:
        "Daily Uzhichal (full-body massage)\nDaily Kizhi (herbal heat therapy)\nSteam therapy (alternate days)\nSession duration: 75 mins\nIdeal for recovery and relaxation",
      type: "Treatment Add-On",
      suitableFor: "All Levels",
      amountInr: 6800,
      amountUsd: 82,
      tokenAmountInr: 1500,
      tokenAmountUsd: 18,
      isPopular: false,
      isActive: true,
      displayOrder: 5,
    },
    {
      id: 6,
      duration: "5 Days",
      title: "Destress Therapy",
      subtitle: "Dhara and full-body massages for deeper relaxation and stress relief",
      description:
        "A deeper therapeutic experience combining traditional Dhara treatment with full-body massages to release stress, calm the nervous system, and restore mental clarity.",
      features:
        "Daily Uzhichal (full-body massage)\nDhara treatment (3 days)\nKizhi (herbal heat therapy) (2 days)\nSteam therapy (2 days)\nSession duration: 75 mins",
      type: "Treatment Add-On",
      suitableFor: "All Levels",
      amountInr: 11500,
      amountUsd: 138,
      tokenAmountInr: 2500,
      tokenAmountUsd: 30,
      isPopular: false,
      isActive: true,
      displayOrder: 6,
    },
    {
      id: 7,
      duration: "7 Days",
      title: "Kalari Conditioning",
      subtitle: "Complete traditional full-body conditioning program for practitioners",
      description:
        "The ultimate Kalari conditioning package designed specifically for practitioners. Includes daily massages, herbal therapies, steam treatments, and a full-body alignment traction session.",
      features:
        "Daily Uzhichal (full-body massage)\nDaily Kizhi (herbal heat therapy)\nSteam therapy (alternate days)\nOne Traction session (full-body alignment)\nSession duration: 75 mins\nBest for active practitioners",
      type: "Treatment Add-On",
      suitableFor: "Practitioners",
      amountInr: 15400,
      amountUsd: 185,
      tokenAmountInr: 3000,
      tokenAmountUsd: 36,
      isPopular: false,
      isActive: true,
      displayOrder: 7,
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
