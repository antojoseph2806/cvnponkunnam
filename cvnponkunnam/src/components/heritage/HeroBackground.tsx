"use client";

import { useState } from "react";
import { HeritageImage } from "./HeritageImage";

const FALLBACK =
  "https://images.unsplash.com/photo-1514050566906-8d077bae7046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

type HeroBackgroundProps = {
  src: string;
  videoSrc?: string;
  alt: string;
};

export function HeroBackground({ src, videoSrc, alt }: HeroBackgroundProps) {
  const [imgSrc, setImgSrc] = useState(src);

  if (videoSrc) {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={src || undefined}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type={videoSrc.endsWith(".webm") ? "video/webm" : videoSrc.endsWith(".ogg") ? "video/ogg" : "video/mp4"} />
      </video>
    );
  }

  return (
    <HeritageImage
      src={imgSrc}
      alt={alt}
      fill
      priority
      className="object-cover"
      sizes="100vw"
      onError={() => {
        if (imgSrc !== FALLBACK) setImgSrc(FALLBACK);
      }}
    />
  );
}
