import Image from "next/image";

type HeritageImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  onError?: () => void;
};

export function HeritageImage({
  src,
  alt,
  fill,
  className = "",
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  width,
  height,
  onError,
}: HeritageImageProps) {
  const isExternal = src.startsWith("http");

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        unoptimized={isExternal}
        onError={onError}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1080}
      height={height ?? 720}
      className={className}
      priority={priority}
      sizes={sizes}
      unoptimized={isExternal}
      onError={onError}
    />
  );
}
