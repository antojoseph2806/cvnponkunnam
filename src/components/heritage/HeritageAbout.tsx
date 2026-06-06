"use client";

import Link from "next/link";
import { Award, Users, GraduationCap, Globe } from "lucide-react";
import { motion } from "./motion";
import { useSiteContent } from "@/lib/content-store";
import { SectionHeader } from "./SectionHeader";
import { HeritageImage } from "./HeritageImage";

const statIcons = [Award, Users, GraduationCap, Globe];

export function HeritageAbout() {
  const { content } = useSiteContent();
  const about = content.about;

  return (
    <section id="about" className="py-24 bg-heritage-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-temple-gold/5 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-heritage-green/5 rounded-full blur-3xl" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          description={about.description}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl relative">
              <HeritageImage src={about.image} alt="Traditional Kerala heritage" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-temple-gold rounded-lg -z-10" aria-hidden />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="font-display text-heritage-green text-2xl md:text-3xl font-semibold">
              {about.founderTitle}
            </h3>
            <p className="text-bronze leading-relaxed">
              {about.founderText}
            </p>
            <p className="text-bronze leading-relaxed">
              {about.locationText}
            </p>

            <div className="bg-gradient-to-br from-heritage-green to-heritage-green-dark p-8 rounded-lg border-l-4 border-temple-gold shadow-xl">
              <p className="text-heritage-cream font-accent text-lg italic leading-relaxed">
                &ldquo;{about.missionQuote}&rdquo;
              </p>
              <p className="text-temple-gold mt-4 font-semibold">{about.missionLabel}</p>
            </div>

            <Link
              href={about.founderLinkHref}
              className="inline-flex text-temple-gold-dark hover:text-heritage-green font-medium underline-offset-4 hover:underline"
            >
              {about.founderLinkText}
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {about.stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-temple-gold to-bronze rounded-full mb-4 group-hover:shadow-lg">
                  <Icon className="w-8 h-8 text-heritage-green-dark" aria-hidden />
                </div>
                <div className="font-display text-heritage-green text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-bronze font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
