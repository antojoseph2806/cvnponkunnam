import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getGalleryImage, getGalleryImages } from "@/lib/gallery";

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
      <main className="pt-[calc(2.5rem+5rem)]">
        <section className="section-padding">
          <div className="container-narrow space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-eyebrow">Gallery Photo</p>
                <h1 className="page-title mt-3">Photo {currentImage.index}</h1>
              </div>
              <Link
                href="/gallery"
                className="text-sm font-semibold text-highlight transition-colors hover:text-accent"
              >
                &larr; Back to gallery
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-muted shadow-lg">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-contain bg-black/5"
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
      </main>
      <Footer />
    </div>
  );
}
