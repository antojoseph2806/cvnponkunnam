"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type GalleryImageClientProps = {
  currentImage: {
    src: string;
    alt: string;
    slug: string;
    index: number;
  };
  images: Array<{
    src: string;
    alt: string;
    slug: string;
    index: number;
  }>;
  previousImage: {
    slug: string;
  } | null;
  nextImage: {
    slug: string;
  } | null;
};

export function GalleryImageClient({
  currentImage,
  images,
  previousImage,
  nextImage,
}: GalleryImageClientProps) {
  const router = useRouter();

  return (
    <section className="section-padding">
      <div className="container-narrow space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Gallery Photo</p>
            <h1 className="page-title mt-3">Photo {currentImage.index}</h1>
          </div>
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-semibold text-highlight transition-colors hover:text-accent hover:bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-muted shadow-lg">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="bg-black/5 object-contain"
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="section-eyebrow">Browse Images</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {images.map((image) => {
              const isCurrent = image.slug === currentImage.slug;

              return (
                <Link
                  key={image.slug}
                  href={`/gallery/${image.slug}`}
                  aria-label={`View gallery image ${image.index}`}
                  className={`group overflow-hidden rounded-xl border bg-muted transition-all duration-300 ${
                    isCurrent
                      ? "border-highlight ring-2 ring-highlight/30"
                      : "border-border hover:border-highlight/60"
                  }`}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 14vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          {previousImage ? (
            <Link
              href={`/gallery/${previousImage.slug}`}
              className="text-sm font-semibold text-highlight transition-colors hover:text-accent"
            >
              &larr; Previous photo
            </Link>
          ) : (
            <span className="text-sm text-muted-foreground">Beginning of gallery</span>
          )}

          <span className="text-sm text-muted-foreground">
            {currentImage.index} of {images.length}
          </span>

          {nextImage ? (
            <Link
              href={`/gallery/${nextImage.slug}`}
              className="text-sm font-semibold text-highlight transition-colors hover:text-accent"
            >
              Next photo &rarr;
            </Link>
          ) : (
            <span className="text-sm text-muted-foreground">End of gallery</span>
          )}
        </div>
      </div>
    </section>
  );
}
