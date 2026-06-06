"use client";

import Link from "next/link";
import { ArrowRight, Leaf, Sparkles, Brain } from "lucide-react";
import { motion } from "./motion";
import { useSiteContent } from "@/lib/content-store";
import { SectionHeader } from "./SectionHeader";

const icons = [Leaf, Sparkles, Brain];

export function HeritageWellness() {
  const { content } = useSiteContent();
  const w = content.wellness;

  return (
    <section id="wellness" className="py-24 bg-gradient-to-b from-heritage-green-dark to-heritage-green text-heritage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={w.eyebrow}
          title={w.title}
          description={w.description}
          light
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {w.packages.map((pkg, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-lg border border-temple-gold/25 bg-heritage-green-dark/40 hover:border-temple-gold/60 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-temple-gold/20 mb-6">
                  <Icon className="w-7 h-7 text-temple-gold" aria-hidden />
                </div>
                <h3 className="font-display text-xl text-temple-gold-light mb-4">{pkg.title}</h3>
                <p className="text-heritage-cream/75 text-sm leading-relaxed">{pkg.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/wellness"
            className="inline-flex items-center gap-2 px-8 py-4 bg-temple-gold text-heritage-green-dark rounded-md font-display hover:bg-temple-gold-light transition-colors"
          >
            View Wellness Programs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
