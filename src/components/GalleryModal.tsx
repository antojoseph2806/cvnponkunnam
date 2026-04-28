"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";

type GalleryModalProps = {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
};

export function GalleryModal({ images, initialIndex, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [currentIndex]);

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close gallery"
      >
        <X className="h-6 w-6 text-white" />
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-4 z-50 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block"
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>

      {/* Image container with swipe support */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4 py-2 bg-black/50 rounded-full">
        {images.map((image, index) => (
          <button
            key={image.slug}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 transition-all ${
              index === currentIndex
                ? "ring-2 ring-white scale-110"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <Image
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="48px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
