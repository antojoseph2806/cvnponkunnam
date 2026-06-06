"use client";

import { useState } from "react";
import { HeritageImage } from "./HeritageImage";

const FALLBACK =
  "https://images.unsplash.com/photo-1514050566906-8d077bae7046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

type HeroBackgroundProps = {
  src: string;
  alt: string;
};

export function HeroBackground({ src, alt }: HeroBackgroundProps) {
  const [imgSrc, setImgSrc] = useState(src);

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
