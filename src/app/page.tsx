import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import InfoBar from "@/components/InfoBar";
import Services from "@/components/Services";
import About from "@/components/About";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import StickyContactButtons from "@/components/StickyContactButtons";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/StructuredData";
import { getGalleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "AKM Sree Rudra CVN Kalari | Authentic Kalaripayattu Training & Marma Chikitsa in Kerala",
  description:
    "Experience authentic Kalaripayattu training, traditional Marma Chikitsa healing, and Kalari rejuvenation therapy at AKM Sree Rudra CVN Kalari in Lakkattoor, Kottayam, Kerala. Learn from experienced Gurukkals in the CVN tradition with courses for all ages and skill levels.",
  keywords:
    "Kalaripayattu training Kerala, Kalari training Kottayam, Marma Chikitsa Kerala, CVN Kalari, Kalari Gurukkal, traditional martial arts Kerala, Ayurvedic treatment Kottayam, Kalari rejuvenation therapy, authentic Kalaripayattu, Kalari training center Ponkunnam",
  openGraph: {
    title: "AKM Sree Rudra CVN Kalari | Authentic Kalaripayattu Training & Marma Chikitsa",
    description:
      "Experience authentic Kalaripayattu training and traditional Marma Chikitsa healing in Kerala. Learn from experienced Gurukkals in the CVN tradition.",
    images: [
      {
        url: "/assets/kalari-training-hero.png",
        width: 1200,
        height: 630,
        alt: "AKM Sree Rudra CVN Kalari - Traditional Kalaripayattu Training Center in Kerala",
      },
    ],
  },
};

export default async function HomePage() {
  const images = await getGalleryImages();

  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <HeroSlider />
          <InfoBar />
          <Services />
          <About variant="home" />
          <FeaturedPrograms />
          <Testimonials />
          <Gallery images={images} previewCount={6} />
          <ContactForm />
          <Stats />
        </main>
        <Footer />
        <StickyContactButtons />
      </div>
    </>
  );
}

