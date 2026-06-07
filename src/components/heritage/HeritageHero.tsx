"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "./motion";
import { useSiteContent } from "@/lib/content-store";
import { HeroBackground } from "./HeroBackground";

export function HeritageHero() {
  const { content } = useSiteContent();
  const hero = content.hero;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <HeroBackground
          src={hero.backgroundImage}
          alt="Traditional Kalaripayattu training at AKM Sree Rudra"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-heritage-green-dark/95 via-heritage-green-dark/90 to-heritage-green-dark/98"
          aria-hidden
        />
      </div>

      <div className="absolute inset-0 opacity-5 heritage-pattern" aria-hidden />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="py-10 px-6 sm:px-10 rounded-2xl bg-black/35 backdrop-blur-sm border border-white/10 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/60 border border-temple-gold/70 rounded-full mb-6 backdrop-blur-md shadow-xl">
            <span className="w-2.5 h-2.5 bg-temple-gold rounded-full animate-pulse" aria-hidden />
            <span className="text-temple-gold-light text-sm tracking-wide font-bold drop-shadow-lg">{hero.badgeText}</span>
          </div>

          <h1 className="mb-6 text-heritage-cream font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] tracking-wide drop-shadow-xl text-shadow-lg">
            {hero.title}
          </h1>

          <p className="text-temple-gold-light mb-5 max-w-3xl mx-auto font-display text-[clamp(1.25rem,3vw,2rem)] leading-snug drop-shadow-xl text-shadow-lg font-semibold">
            {hero.tagline}
          </p>

          <p className="text-white mb-12 max-w-2xl mx-auto text-lg drop-shadow-xl font-bold text-shadow-lg leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="mb-12">
            <div className="inline-block px-7 py-2.5 border-2 border-temple-gold rounded-md bg-black/50 backdrop-blur-md shadow-lg">
              <span className="text-temple-gold-light font-display text-lg tracking-[0.15em] drop-shadow-lg font-bold">
                SINCE {hero.sinceYear}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={hero.primaryButtonLink}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-temple-gold text-heritage-green-dark hover:bg-temple-gold-light transition-all rounded-md shadow-xl hover:shadow-2xl hover:scale-[1.02] font-display text-lg font-bold"
            >
              {hero.primaryButtonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
            </Link>
            <Link
              href={hero.secondaryButtonLink}
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-temple-gold text-temple-gold hover:bg-temple-gold/20 transition-all rounded-md backdrop-blur-md font-display text-lg font-bold bg-black/30"
            >
              {hero.secondaryButtonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        aria-hidden
      >
        <span className="text-temple-gold text-sm tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-temple-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
