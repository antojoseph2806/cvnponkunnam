"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "./motion";

export function HeritageCtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-heritage-green via-heritage-green-light to-heritage-green">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <h2 className="font-display text-heritage-cream text-3xl md:text-4xl font-semibold mb-4">
          Experience Authentic Kerala Heritage
        </h2>
        <p className="text-heritage-cream/80 mb-8 text-lg">
          Join students and wellness seekers from around the world at one of Kerala&apos;s most respected Kalari institutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-temple-gold text-heritage-green-dark rounded-md font-display hover:bg-temple-gold-light transition-colors"
          >
            Book Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/kalaripayattu"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-temple-gold text-temple-gold rounded-md font-display hover:bg-temple-gold/10 transition-colors"
          >
            Explore Programs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
