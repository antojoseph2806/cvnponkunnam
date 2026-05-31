import Script from "next/script";

interface StructuredDataProps {
  type?: "organization" | "local-business" | "course" | "service";
  data?: unknown;
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": "https://akmsreerudra.com/#organization",
    name: "AKM Sree Rudra CVN Kalari",
    alternateName: "CVN Kalari Kaduthuruthy",
    description:
      "Authentic Kalaripayattu training center and traditional Marma Chikitsa healing center in Kerala, India. Learn from experienced Gurukkals in the CVN tradition.",
    url: "https://akmsreerudra.com",
    logo: "https://akmsreerudra.com/assets/logo-wide.png",
    image: "https://akmsreerudra.com/assets/kalari-training-hero.png",
    telephone: "+91-XXXXXXXXXX", // Add actual phone number
    email: "info@akmsreerudra.com", // Add actual email
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lakkattoor",
      addressLocality: "Kottayam",
      addressRegion: "Kerala",
      postalCode: "686506",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.5916",
      longitude: "76.5222",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "06:00",
        closes: "19:00",
      },
    ],
    priceRange: "₹₹",
    sameAs: [
      // Add your social media profiles
      "https://www.facebook.com/akmsreerudra",
      "https://www.instagram.com/akmsreerudra",
      "https://www.youtube.com/@akmsreerudra",
    ],
    areaServed: {
      "@type": "State",
      name: "Kerala",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kalari Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kalaripayattu Training",
            description:
              "Authentic Kalaripayattu martial arts training for all age groups and skill levels",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marma Chikitsa",
            description: "Traditional Marma therapy for healing and wellness",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kalari Rejuvenation",
            description: "Kalari massage and rejuvenation therapy",
          },
        },
      ],
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://akmsreerudra.com/#business",
    name: "AKM Sree Rudra CVN Kalari",
    image: "https://akmsreerudra.com/assets/kalari-training-hero.png",
    description:
      "Premier Kalaripayattu training center and traditional healing center in Kottayam, Kerala",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lakkattoor",
      addressLocality: "Kottayam",
      addressRegion: "Kerala",
      postalCode: "686506",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.5916",
      longitude: "76.5222",
    },
    url: "https://akmsreerudra.com",
    telephone: "+91-XXXXXXXXXX",
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "06:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CourseSchema({
  name,
  description,
  provider,
  duration,
  price,
}: {
  name: string;
  description: string;
  provider: string;
  duration: string;
  price: number;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: "https://akmsreerudra.com",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      location: {
        "@type": "Place",
        name: "AKM Sree Rudra CVN Kalari",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Lakkattoor",
          addressLocality: "Kottayam",
          addressRegion: "Kerala",
          postalCode: "686506",
          addressCountry: "IN",
        },
      },
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    timeRequired: duration,
  };

  return (
    <Script
      id={`course-schema-${name.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
