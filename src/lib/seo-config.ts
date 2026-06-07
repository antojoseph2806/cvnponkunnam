/**
 * SEO Configuration for AKM Sree Rudra CVN Kalari
 * Central location for all SEO-related constants and configurations
 */

export const SEO_CONFIG = {
  siteName: "AKM Sree Rudra CVN Kalari",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://akmsreerudra.com",
  defaultTitle: "AKM Sree Rudra CVN Kalari | Authentic Kalaripayattu Training & Marma Chikitsa in Kerala",
  defaultDescription:
    "Experience authentic Kalaripayattu training, traditional Marma Chikitsa healing, and Kalari rejuvenation therapy at AKM Sree Rudra CVN Kalari in Lakkattoor, Kottayam, Kerala.",
  
  // Business Information
  business: {
    name: "AKM Sree Rudra CVN Kalari",
    alternateName: "CVN Kalari Kaduthuruthy",
    legalName: "AKM Sree Rudra CVN Kalari Marma Thirummu and Yoga Chikitsa Kendram",
    address: {
      street: "Lakkattoor",
      locality: "Kottayam",
      region: "Kerala",
      postalCode: "686506",
      country: "India",
      countryCode: "IN",
    },
    geo: {
      latitude: "9.5916",
      longitude: "76.5222",
    },
    contact: {
      phone: "+91-XXXXXXXXXX", // Update with actual phone
      email: "info@akmsreerudra.com", // Update with actual email
      whatsapp: "+91-XXXXXXXXXX", // Update with actual WhatsApp
    },
    hours: {
      opens: "06:00",
      closes: "19:00",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
  },

  // Primary Keywords (for Kerala market)
  primaryKeywords: [
    "Kalaripayattu training Kerala",
    "Kalari training Kottayam",
    "Marma Chikitsa Kerala",
    "CVN Kalari",
    "Kalari Gurukkal",
    "traditional martial arts Kerala",
    "Ayurvedic treatment Kottayam",
    "Kalari rejuvenation therapy",
    "authentic Kalaripayattu",
    "Kalari training center Ponkunnam",
  ],

  // Secondary Keywords
  secondaryKeywords: [
    "Marma therapy Kerala",
    "traditional healing Kerala",
    "Kalari Kaduthuruthy",
    "CVN Gurukkal tradition",
    "Kalaripayattu classes",
    "martial arts training Kerala",
    "Ayurveda Kerala",
    "Kalari massage",
    "Thirummu treatment",
    "Yoga classes Kerala",
  ],

  // Location-based Keywords
  locationKeywords: [
    "Kalari Kottayam",
    "Kalaripayattu Ponkunnam",
    "Marma Chikitsa Kottayam",
    "martial arts Kottayam",
    "Kalari center Kerala",
    "traditional healing Kottayam",
    "Ayurvedic treatment Ponkunnam",
  ],

  // Competitor Keywords (CVN Gurukkals and others)
  competitorKeywords: [
    "CVN Kalari training",
    "CVN Gurukkal Kerala",
    "best Kalari center Kerala",
    "authentic Kalaripayattu training",
    "traditional Kalari Gurukkal",
    "CVN tradition Kalaripayattu",
  ],

  // Social Media
  social: {
    facebook: "https://www.facebook.com/akmsreerudra", // Update with actual
    instagram: "https://www.instagram.com/akmsreerudra", // Update with actual
    youtube: "https://www.youtube.com/@akmsreerudra", // Update with actual
    twitter: "", // Add if available
  },

  // Images for SEO
  images: {
    logo: "/assets/logo-new.png",
    ogImage: "/assets/kalari-training-hero.png",
    favicon: "/assets/logo-new.png",
  },

  // Services offered
  services: [
    {
      name: "Kalaripayattu Training",
      description: "Authentic Kalaripayattu martial arts training for all age groups and skill levels",
      url: "/services/kalari-training",
      keywords: ["Kalaripayattu training", "Kalari classes", "martial arts training"],
    },
    {
      name: "Marma Chikitsa",
      description: "Traditional Marma therapy for healing and wellness",
      url: "/services/marma-chikilsa",
      keywords: ["Marma Chikitsa", "Marma therapy", "traditional healing"],
    },
    {
      name: "Kalari Rejuvenation",
      description: "Kalari massage and rejuvenation therapy",
      url: "/services/kalari-rejuvenation",
      keywords: ["Kalari massage", "rejuvenation therapy", "Thirummu"],
    },
  ],
};

/**
 * Generate page-specific metadata
 */
export function generatePageMetadata(page: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}) {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords?.join(", "),
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.url || SEO_CONFIG.siteUrl,
      images: [
        {
          url: page.image || SEO_CONFIG.images.ogImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.image || SEO_CONFIG.images.ogImage],
    },
  };
}

/**
 * Get all keywords for a specific page type
 */
export function getKeywordsForPage(pageType: "home" | "training" | "marma" | "rejuvenation" | "about" | "contact") {
  const baseKeywords = [...SEO_CONFIG.primaryKeywords, ...SEO_CONFIG.secondaryKeywords];
  
  switch (pageType) {
    case "home":
      return [...baseKeywords, ...SEO_CONFIG.locationKeywords, ...SEO_CONFIG.competitorKeywords];
    case "training":
      return [
        "Kalaripayattu training Kerala",
        "Kalari classes Kottayam",
        "martial arts training",
        "CVN Kalari training",
        "Kalari Gurukkal",
        ...SEO_CONFIG.locationKeywords,
      ];
    case "marma":
      return [
        "Marma Chikitsa Kerala",
        "Marma therapy Kottayam",
        "traditional healing",
        "pain relief Kerala",
        "injury treatment",
        ...SEO_CONFIG.locationKeywords,
      ];
    case "rejuvenation":
      return [
        "Kalari rejuvenation",
        "Kalari massage Kerala",
        "Thirummu treatment",
        "wellness therapy",
        "Ayurvedic massage",
        ...SEO_CONFIG.locationKeywords,
      ];
    default:
      return baseKeywords;
  }
}
