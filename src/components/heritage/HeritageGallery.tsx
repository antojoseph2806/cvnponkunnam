"use client";

import Link from "next/link";
import { motion } from "./motion";
import { SectionHeader } from "./SectionHeader";
import { HeritageImage } from "./HeritageImage";
import type { GalleryImage, GalleryVideo } from "@/lib/gallery";

type DisplayImage = { src: string; alt: string; slug: string };
type DisplayVideo = { src: string; alt: string; slug: string };

const FALLBACK_IMAGES: DisplayImage[] = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  "https://images.unsplash.com/photo-1599901860904-17fbfe66c6b0?w=800&q=80",
  "https://images.unsplash.com/photo-1545205597-3b040cad2476?w=800&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50e?w=800&q=80",
].map((src, i) => ({
  src,
  alt: `AKM Sree Rudra gallery ${i + 1}`,
  slug: `preview-${i}`,
}));

type HeritageGalleryProps = {
  images?: GalleryImage[];
  videos?: GalleryVideo[];
  previewCount?: number;
  showViewAllLink?: boolean;
};

export function HeritageGallery({ images = [], videos = [], previewCount = 6, showViewAllLink = true }: HeritageGalleryProps) {
  const displayImages: DisplayImage[] =
    images.length > 0
      ? images.slice(0, previewCount).map((img) => ({
          src: img.src,
          alt: img.alt,
          slug: img.slug,
        }))
      : FALLBACK_IMAGES.slice(0, previewCount);

  const displayVideos: DisplayVideo[] = videos.map((v) => ({
    src: v.src,
    alt: v.alt,
    slug: v.slug,
  }));

  return (
    <section id="gallery" className="py-24 bg-heritage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Gallery"
          title="Moments of Tradition & Transformation"
          description="Training, healing, wellness, and cultural heritage captured at our Kalari."
        />

        {/* Photo Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mb-16">
          {displayImages.map((image, index) => (
            <motion.div
              key={image.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/5]">
                <HeritageImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-heritage-green-dark/0 group-hover:bg-heritage-green-dark/40 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Gallery */}
        {displayVideos.length > 0 && (
          <div>
            <h3 className="font-display text-heritage-green text-2xl md:text-3xl font-semibold text-center mb-8">
              Video Gallery
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayVideos.map((video, index) => (
                <motion.div
                  key={video.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="relative aspect-video bg-heritage-green-dark">
                    <video
                      src={video.src}
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {showViewAllLink && (
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex px-8 py-4 border-2 border-heritage-green text-heritage-green font-display rounded-md hover:bg-heritage-green hover:text-heritage-cream transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
