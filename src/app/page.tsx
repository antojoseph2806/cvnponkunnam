import type { Metadata } from "next";
import {
  HeritageSiteLayout,
  HeritageHero,
  HeritageAbout,
  HeritageKalaripayattu,
  HeritageMarma,
  HeritageWellness,
  HeritageGallery,
  HeritageTestimonials,
  HeritageContact,
  HeritageCtaBanner,
} from "@/components/heritage";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/StructuredData";
import { getGalleryImages } from "@/lib/gallery";
import { SEO_KEYWORDS, HERITAGE } from "@/lib/heritage-content";

export const metadata: Metadata = {
  title: `${HERITAGE.brand} | Kalaripayattu Training, Marma Chikilsa & Wellness Kerala`,
  description:
    "AKM Sree Rudra - Kerala Tourism recognized institution for authentic Northern Style Kalaripayattu, Marma Chikilsa, Ayurvedic wellness and holistic rejuvenation in Kottayam since 1996.",
  keywords: SEO_KEYWORDS.join(", "),
  openGraph: {
    title: `${HERITAGE.brand} | Preserving Kerala's Ancient Combat, Healing & Wellness`,
    description: HERITAGE.tagline,
    images: [{ url: "/assets/kalari-training-hero.png", width: 1200, height: 630, alt: HERITAGE.brand }],
  },
};

export default async function HomePage() {
  const images = await getGalleryImages();

  return (
    <HeritageSiteLayout>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <main>
        <HeritageHero />
        <HeritageAbout />
        <HeritageKalaripayattu />
        <HeritageMarma />
        <HeritageWellness />
        <HeritageGallery images={images} previewCount={6} />
        <HeritageTestimonials compact />
        <HeritageCtaBanner />
        <HeritageContact />
      </main>
    </HeritageSiteLayout>
  );
}
