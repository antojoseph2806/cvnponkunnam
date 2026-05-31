"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buildCourseEnrollmentWhatsApp } from "@/lib/contact";

const slides = [
  {
    image: "/assets/slider/sreerudra-cvn-kalari-marma-thirummu-and-yoga-chikitsa-kendram-lakkattoor-lakkattoor-kottayam-martial-arts-training-centres-ku9w7012s2.avif",
    label: "Authentic CVN Kalari Tradition",
    title: "AKM Sree Rudra CVN Kalari",
    description: "Traditional Kalaripayattu training, Marma Chikilsa, and Kalari rejuvenation in Lakkattoor, Kerala.",
    primaryBtn: { text: "Explore Services", link: "/services" },
    secondaryBtn: { text: "Book Training", link: buildCourseEnrollmentWhatsApp("", "Kalaripayattu Training") },
  },
  {
    image: "/assets/slider/sreerudra-cvn-kalari-marma-thirummu-and-yoga-chikitsa-kendram-lakkattoor-lakkattoor-kottayam-martial-arts-training-centres-o84fvltnk6.avif",
    label: "Ancient Healing Arts",
    title: "Marma Chikilsa & Ayurveda",
    description: "Experience authentic Marma therapy and traditional Ayurvedic treatments for holistic wellness and healing.",
    primaryBtn: { text: "View Treatments", link: "/services/marma-chikilsa" },
    secondaryBtn: { text: "Book Appointment", link: buildCourseEnrollmentWhatsApp("", "Marma Chikilsa Treatment") },
  },
  {
    image: "/assets/slider/sreerudra-cvn-kalari-marma-thirummu-and-yoga-chikitsa-kendram-lakkattoor-lakkattoor-kottayam-martial-arts-training-centres-w49urb95z2.avif",
    label: "Rejuvenation & Wellness",
    title: "Kalari Rejuvenation Programs",
    description: "Restore your body and mind with our specialized Kalari rejuvenation therapies and wellness programs.",
    primaryBtn: { text: "Learn More", link: "/services/kalari-rejuvenation" },
    secondaryBtn: { text: "Enroll Now", link: buildCourseEnrollmentWhatsApp("", "Kalari Rejuvenation") },
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
      <div className="pointer-events-none absolute inset-0 hidden bg-black/60 md:block" />
      <div className="absolute inset-0 hidden items-center md:flex">
        <div className="container-narrow px-8 lg:px-16 xl:px-24">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`max-w-4xl text-left transition-opacity duration-1000 ${
                i === current ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              <p className="motion-reveal motion-slide-down is-visible motion-delay-1 mb-4 kalari-tech-label text-highlight-light">
                {slide.label}
              </p>
              <h1 className="motion-reveal motion-slide-down is-visible motion-delay-2 font-heading text-5xl font-bold leading-tight text-white lg:text-7xl">
                {slide.title}
              </h1>
              <p className="motion-reveal motion-slide-down is-visible motion-delay-3 mt-6 max-w-2xl text-lg leading-8 text-white/85">
                {slide.description}
              </p>
              <div className="motion-reveal motion-slide-down is-visible motion-delay-4 mt-8 flex flex-wrap gap-4">
                <Link
                  href={slide.primaryBtn.link}
                  className="pest-btn-sweep rounded-full bg-highlight-light px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-section-dark shadow-lg"
                >
                  {slide.primaryBtn.text}
                </Link>
                <a
                  href={slide.secondaryBtn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-highlight-light px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-highlight-light transition-all duration-500 hover:bg-highlight-light hover:text-section-dark"
                >
                  {slide.secondaryBtn.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
