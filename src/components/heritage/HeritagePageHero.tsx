"use client";

import { motion } from "./motion";
import { HeritageImage } from "./HeritageImage";

type HeritagePageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function HeritagePageHero({
  title,
  subtitle,
  image = "/assets/kalari-training-hero.png",
}: HeritagePageHeroProps) {
  return (
    <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-end overflow-hidden pt-20">
      <div className="absolute inset-0">
        <HeritageImage src={image} alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-green-dark via-heritage-green/80 to-heritage-green-dark/60" />
      </div>
      <div className="absolute inset-0 opacity-5 heritage-pattern" aria-hidden />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-display text-heritage-cream text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-wide">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-temple-gold-light font-accent text-xl md:text-2xl italic max-w-2xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
