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
  const wellnessCourses = content.courses
    .filter((c) => c.isActive && c.category === "wellness")
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section id="wellness" className="py-24 bg-gradient-to-b from-heritage-green-dark to-heritage-green text-heritage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={w.eyebrow}
          title={w.title}
          description={w.description}
          light
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                <h3 className="font-display text-xl text-temple-gold-light mb-4 font-bold drop-shadow-md">{pkg.title}</h3>
                <p className="text-heritage-cream/90 text-sm leading-relaxed font-medium">{pkg.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Wellness Therapy Courses */}
        {wellnessCourses.length > 0 && (
          <div className="mb-12">
            <h3 className="font-display text-2xl text-temple-gold-light text-center mb-8 font-bold drop-shadow-md">
              Therapy &amp; Rejuvenation Packages
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {wellnessCourses.map((course, index) => (
                <motion.article
                  key={course.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative p-8 rounded-lg bg-heritage-green-dark/70 border border-temple-gold/20 backdrop-blur-sm"
                >
                  <p className="text-temple-gold text-sm font-semibold uppercase tracking-wide mb-2">
                    {course.duration} - {course.type}
                  </p>
                  <h4 className="font-display text-2xl text-temple-gold-light mb-2 font-bold">{course.title}</h4>
                  <p className="text-heritage-cream/80 text-sm mb-4 italic">{course.subtitle}</p>
                  <p className="text-heritage-cream/90 text-sm leading-relaxed mb-6">{course.description}</p>
                  <ul className="text-sm text-heritage-cream/85 space-y-1 mb-6">
                    {course.features.split("\n").map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-temple-gold">-</span> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-temple-gold/20">
                    <div>
                      <p className="font-display text-temple-gold-light text-xl font-bold">
                        INR {course.amountInr.toLocaleString("en-IN")}
                      </p>
                      <p className="text-heritage-cream/70 text-sm">USD ${course.amountUsd}</p>
                    </div>
                    <a
                      href={`https://wa.me/${content.contact.whatsapp}?text=${encodeURIComponent(
                        `Hello! I'm interested in the *${course.duration} ${course.title}* package.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-temple-gold text-heritage-green-dark rounded-md font-display text-sm font-bold hover:bg-temple-gold-light transition-colors"
                    >
                      Enquire Now
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-temple-gold text-heritage-green-dark rounded-md font-display hover:bg-temple-gold-light transition-colors"
          >
            Book Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
