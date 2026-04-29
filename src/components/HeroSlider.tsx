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
      className="relative overflow-hidden md:h-[90vh] md:min-h-[600px] md:max-h-none md:bg-[hsl(var(--hero-overlay))]"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`transition-opacity duration-1000 ${
            i === current ? "block opacity-100" : "hidden opacity-0"
          } md:absolute md:inset-0 md:block ${i === current ? "md:opacity-100" : "md:opacity-0"}`}
        >
          <img
            src={slide.image}
            alt=""
            className="block w-full h-auto md:h-full md:w-full md:object-cover"
            width={1920}
            height={1080}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
          />
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;
