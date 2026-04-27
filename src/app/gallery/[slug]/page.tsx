import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getGalleryImage, getGalleryImages } from "@/lib/gallery";
import { GalleryImageClient } from "./GalleryImageClient";

type GalleryImagePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const images = await getGalleryImages();

  return images.map((image) => ({
    slug: image.slug,
  }));
}

export async function generateMetadata({ params }: GalleryImagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const image = await getGalleryImage(slug);

  if (!image) {
    return {
      title: "Gallery Image Not Found | CVN Kalari Kaduthuruthy",
    };
  }

  return {
    title: `Gallery Photo ${image.index} | CVN Kalari Kaduthuruthy`,
    description: `Individual view for gallery photo ${image.index} from CVN Kalari Kaduthuruthy.`,
  };
}

export default async function GalleryImagePage({ params }: GalleryImagePageProps) {
  const { slug } = await params;
  const images = await getGalleryImages();
  const currentIndex = images.findIndex((image) => image.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const currentImage = images[currentIndex];
  const previousImage = currentIndex > 0 ? images[currentIndex - 1] : null;
  const nextImage = currentIndex < images.length - 1 ? images[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <GalleryImageClient
          currentImage={currentImage}
          images={images}
          previousImage={previousImage}
          nextImage={nextImage}
        />
      </main>
      <Footer />
    </div>
  );
}
