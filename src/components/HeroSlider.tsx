"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    image: "/assets/hero-martial-art.jpg",
    subtitle: "EXPERIENCE THE TRANSFORMATIVE POWER OF KALARIPAYATTU",
    title: (
      <>
        <em>Learn</em> Kalaripayattu: The Ancient <em>Martial Art of Kerala</em>
      </>
    ),
  },
  {
    image: "/assets/hero-ayurveda.jpg",
    subtitle: "DISCOVER THE HEALING POWER OF ANCIENT AYURVEDIC PRACTICES",
    title: (
      <>
        Ayurveda Kalari Treatments: Your Path to <em>Natural Healing</em>
      </>
    ),
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
          />
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.55)]" />
        </div>
      ))}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24 max-w-4xl">
        <div className="animate-fade-in">
          <p className="section-eyebrow mb-4 text-primary-foreground/80">
            {slides[current].subtitle}
          </p>
          <h1 className="font-heading text-4xl leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            {slides[current].title}
          </h1>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary-foreground scale-110" : "bg-primary-foreground/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
