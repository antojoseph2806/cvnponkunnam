"use client";

import Link from "next/link";
import { ArrowRight, Clock, CalendarCheck, Utensils, IndianRupee } from "lucide-react";
import { motion } from "./motion";
import { useSiteContent } from "@/lib/content-store";
import { SectionHeader } from "./SectionHeader";

const infoBoxes = [
  {
    icon: Clock,
    title: "Training Schedule",
    text: "6:00 AM to 8:00 PM daily, 2 to 2.5 hours per session, Sundays off",
  },
  {
    icon: CalendarCheck,
    title: "Program Durations",
    text: "2 weeks / 1 month / 2 months",
  },
  {
    icon: Utensils,
    title: "Meals",
    text: "3 complimentary vegetarian meals daily",
  },
  {
    icon: IndianRupee,
    title: "Booking",
    text: "10% advance of total course fee, remaining balance due at check-in",
  },
];

export function HeritageKalaripayattu() {
  const { content } = useSiteContent();
  const k = content.kalaripayattu;
  const trainingCourses = content.courses
    .filter((c) => c.isActive && c.category === "training")
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section id="kalaripayattu" className="py-24 bg-heritage-green text-heritage-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 heritage-pattern" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow={k.eyebrow}
          title={k.title}
          description={k.description}
          light
        />

        {/* Info Boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {infoBoxes.map((box, i) => {
            const Icon = box.icon;
            return (
              <div
                key={box.title}
                className="bg-heritage-green-dark/60 border border-temple-gold/25 rounded-lg p-5 text-center hover:border-temple-gold/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-temple-gold/15 mb-3">
                  <Icon className="w-6 h-6 text-temple-gold" aria-hidden />
                </div>
                <h4 className="font-display text-temple-gold-light text-sm font-bold uppercase tracking-wider mb-2">
                  {box.title}
                </h4>
                <p className="text-heritage-cream/85 text-sm leading-relaxed">{box.text}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Training Courses */}
        {trainingCourses.length > 0 && (
          <div className="mb-12">
            <h3 className="font-display text-2xl text-temple-gold-light text-center mb-8 font-bold drop-shadow-md">
              Training Programs
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {trainingCourses.map((course, index) => (
                <motion.article
                  key={course.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative p-8 rounded-lg bg-heritage-green-dark/70 border backdrop-blur-sm ${
                    course.isPopular
                      ? "border-temple-gold ring-2 ring-temple-gold/30"
                      : "border-temple-gold/20"
                  }`}
                >
                  {course.isPopular && (
                    <span className="absolute -top-3 right-6 px-3 py-1 bg-temple-gold text-heritage-green-dark text-xs font-bold uppercase tracking-wide rounded">
                      Popular
                    </span>
                  )}
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
                      <p className="text-temple-gold/80 text-xs mt-1">
                        Booking advance: INR {Math.round(course.amountInr * 0.1).toLocaleString("en-IN")} (10%)
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${content.contact.whatsapp}?text=${encodeURIComponent(
                        `Hello! I'm interested in the *${course.duration} ${course.title}* program.`
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-temple-gold text-heritage-green-dark rounded-md font-display hover:bg-temple-gold-light transition-colors"
          >
            Book Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
