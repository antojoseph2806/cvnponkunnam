import type { Metadata } from "next";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { getGalleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery | CVN Kalari Kaduthuruthy",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Gallery images={images} showViewAllLink={false} />
      </main>
      <Footer />
    </div>
  );
}

