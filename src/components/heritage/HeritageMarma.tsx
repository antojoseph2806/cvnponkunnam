"use client";

import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";
import { motion } from "./motion";
import { useSiteContent } from "@/lib/content-store";
import { SectionHeader } from "./SectionHeader";
import { HeritageImage } from "./HeritageImage";

export function HeritageMarma() {
  const { content } = useSiteContent();
  const marma = content.marma;

  return (
    <section id="marma" className="py-24 bg-heritage-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={marma.eyebrow}
          title={marma.title}
          description={marma.description}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
          >
            <HeritageImage
              src="/assets/marma-chikilsa-background.jpeg"
              alt="Traditional Marma Chikilsa therapy"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <ul className="grid sm:grid-cols-2 gap-4">
              {marma.services.map((service, i) => (
                <li
                  key={service}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-heritage-green/10 shadow-sm"
                >
                  <HeartPulse className="w-5 h-5 text-temple-gold shrink-0 mt-0.5" aria-hidden />
                  <span className="text-bronze text-sm font-medium">{service}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/marma-chikilsa"
              className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-heritage-green text-heritage-cream rounded-md font-display hover:bg-heritage-green-light transition-colors"
            >
              Explore Marma Chikilsa
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
