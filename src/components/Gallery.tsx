"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Expand } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";
import { GalleryModal } from "./GalleryModal";

type GalleryProps = {
  images: GalleryImage[];
  previewCount?: number;
  showViewAllLink?: boolean;
};

export default function Gallery({
  images,
  previewCount,
  showViewAllLink = true,
}: GalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const visibleImages = typeof previewCount === "number" ? images.slice(0, previewCount) : images;

  return (
    <>
      <section id="gallery" className="section-padding bg-background">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Gallery</p>
            <h2 className="section-title mt-3">Photo Gallery</h2>
          </div>
          {showViewAllLink && (
            <div className="mb-8 text-center">
              <Link href="/gallery" className="text-sm font-semibold text-highlight transition-colors hover:text-accent">
                View all photos &rarr;
              </Link>
            </div>
          )}
          {visibleImages.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {visibleImages.map((image, index) => (
                <button
                  key={image.slug}
                  onClick={() => setSelectedImageIndex(index)}
                  aria-label={`View image ${image.index}`}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg">
                      <Expand className="h-5 w-5" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No gallery images found.</p>
          )}
        </div>
      </section>

      {selectedImageIndex !== null && (
        <GalleryModal
          images={visibleImages}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </>
  );
}
