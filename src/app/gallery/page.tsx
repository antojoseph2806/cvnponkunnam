import type { Metadata } from "next";
import { HeritageSiteLayout, HeritagePageHero, HeritageGallery } from "@/components/heritage";
import { getGalleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery | AKM Sree Rudra Kalari Training & Heritage",
  description: "Photo gallery of Kalaripayattu training, Marma therapy, wellness, and cultural heritage at AKM Sree Rudra.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <HeritageSiteLayout>
      <main>
        <HeritagePageHero title="Gallery" subtitle="Tradition in motion" />
        <HeritageGallery images={images} previewCount={images.length || 12} showViewAllLink={false} />
      </main>
    </HeritageSiteLayout>
  );
}
