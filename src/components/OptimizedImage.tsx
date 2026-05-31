import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

/**
 * SEO-optimized image component with proper alt text and lazy loading
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  fill = false,
  sizes,
  quality = 85,
}: OptimizedImageProps) {
  // Ensure alt text is descriptive for SEO
  const seoAlt = alt || "AKM Sree Rudra CVN Kalari - Traditional Kalaripayattu and Healing Center";

  if (fill) {
    return (
      <Image
        src={src}
        alt={seoAlt}
        fill
        className={className}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        priority={priority}
        quality={quality}
        loading={priority ? undefined : "lazy"}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={seoAlt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
      quality={quality}
      loading={priority ? undefined : "lazy"}
    />
  );
}
