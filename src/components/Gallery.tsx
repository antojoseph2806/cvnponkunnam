import Image from "next/image";
import Link from "next/link";
import { Expand } from "lucide-react";
import { getGalleryImages } from "@/lib/gallery";

type GalleryProps = {
  previewCount?: number;
  showViewAllLink?: boolean;
};

export default async function Gallery({
  previewCount,
  showViewAllLink = true,
}: GalleryProps) {
  const images = await getGalleryImages();
  const visibleImages = typeof previewCount === "number" ? images.slice(0, previewCount) : images;

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Gallery</p>
          <h2 className="section-title mt-3">Photo Gallery</h2>
        </div>
        {showViewAllLink ? (
          <div className="mb-10 text-center">
            <Link href="/gallery" className="text-sm font-semibold text-highlight transition-colors hover:text-accent">
              View all photos &rarr;
            </Link>
          </div>
        ) : (
          <p className="section-lead mx-auto mb-10 max-w-2xl text-center">
            Open any image to view it individually and browse the full collection.
          </p>
        )}
        {visibleImages.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleImages.map((image) => (
              <Link
                key={image.slug}
                href={`/gallery/${image.slug}`}
                aria-label={`Open gallery image ${image.index}`}
                className="group overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/92 text-primary shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                      <Expand className="h-6 w-6" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No gallery images were found.</p>
        )}
      </div>
    </section>
  );
}
