import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";
import ScrollAnimator from "@/components/ScrollAnimator";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cvnkalari.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d3b2e",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AKM SREE RUDRA | Kalaripayattu Training, Marma Chikilsa & Wellness Kerala",
    template: "%s | AKM SREE RUDRA",
  },
  description:
    "Experience authentic Kalaripayattu training, traditional Marma Chikitsa healing, and Kalari rejuvenation therapy at AKM Sree Rudra CVN Kalari in Lakkattoor, Kottayam, Kerala. Learn from experienced Gurukkals in the CVN tradition.",
  keywords: [
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
  authors: [{ name: "AKM Sree Rudra CVN Kalari" }],
  creator: "AKM Sree Rudra CVN Kalari",
  publisher: "AKM Sree Rudra CVN Kalari",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "AKM Sree Rudra CVN Kalari",
    title: "AKM Sree Rudra CVN Kalari | Authentic Kalaripayattu Training & Marma Chikitsa in Kerala",
    description:
      "Experience authentic Kalaripayattu training, traditional Marma Chikitsa healing, and Kalari rejuvenation therapy at AKM Sree Rudra CVN Kalari in Lakkattoor, Kottayam, Kerala.",
    images: [
      {
        url: "/assets/kalari-training-hero.png",
        width: 1200,
        height: 630,
        alt: "AKM Sree Rudra CVN Kalari - Traditional Kalaripayattu Training Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AKM Sree Rudra CVN Kalari | Authentic Kalaripayattu Training & Marma Chikitsa",
    description:
      "Experience authentic Kalaripayattu training and traditional Marma Chikitsa healing in Kerala.",
    images: ["/assets/kalari-training-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Health & Wellness",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
        <link rel="canonical" href={siteUrl} />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kottayam, Kerala" />
        <meta name="geo.position" content="9.5916;76.5222" />
        <meta name="ICBM" content="9.5916, 76.5222" />
      </head>
      <body>
        <Providers>
          <ScrollAnimator />
          {children}
        </Providers>
      </body>
    </html>
  );
}
