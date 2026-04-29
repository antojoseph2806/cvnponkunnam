"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    image: "/assets/slider/sreerudra-cvn-kalari-marma-thirummu-and-yoga-chikitsa-kendram-lakkattoor-lakkattoor-kottayam-martial-arts-training-centres-ku9w7012s2.avif",
  },
  {
    image: "/assets/slider/sreerudra-cvn-kalari-marma-thirummu-and-yoga-chikitsa-kendram-lakkattoor-lakkattoor-kottayam-martial-arts-training-centres-o84fvltnk6.avif",
  },
  {
    image: "/assets/slider/sreerudra-cvn-kalari-marma-thirummu-and-yoga-chikitsa-kendram-lakkattoor-lakkattoor-kottayam-martial-arts-training-centres-w49urb95z2.avif",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[60vh] min-h-[320px] max-h-[520px] overflow-hidden bg-[hsl(var(--hero-overlay))] md:h-[90vh] md:min-h-[600px] md:max-h-none"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-contain md:object-cover"
            width={1920}
            height={1080}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
          />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-white scale-110" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
