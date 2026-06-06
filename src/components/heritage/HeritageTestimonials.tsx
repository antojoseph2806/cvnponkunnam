"use client";

import Link from "next/link";
import { Star, Quote } from "lucide-react";
import { motion } from "./motion";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    name: "Jad",
    country: "International Student",
    text: "Amazing experience. Everyone was extremely friendly and accommodating. They showed incredible technique and weapons proficiency and treated us like family. We highly recommend anyone who wishes to learn Kalaripayattu to train here.",
    rating: 5,
  },
  {
    name: "Nidheesh Vijayan",
    country: "Kerala, India",
    text: "Very good facilities, excellent massaging, good service, and outstanding Kalaripayattu training.",
    rating: 5,
  },
  {
    name: "Manish Yadwad",
    country: "Visitor",
    text: "It was fabulous and mind-blowing. Courageous performances with precision and timing. Do visit and show your support.",
    rating: 5,
  },
  {
    name: "G Radhakrishnan Nair",
    country: "Wellness Seeker",
    text: "Kalari Marma is very good for treatment. Authentic traditional healing in a serene environment.",
    rating: 5,
  },
  {
    name: "Anand S",
    country: "Martial Artist",
    text: "Excellent Kalaripayattu training and traditional healing. Highly recommended for an authentic Kalari experience.",
    rating: 5,
  },
  {
    name: "Anoop M",
    country: "Student",
    text: "Outstanding training facility with experienced instructors. A great place to learn traditional Kalaripayattu.",
    rating: 5,
  },
];

export function HeritageTestimonials({ compact }: { compact?: boolean }) {
  return (
    <section className="py-24 bg-heritage-green-dark text-heritage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Voices from Our Global Community"
          description="Students, wellness seekers, and visitors share their transformative experiences."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, compact ? 3 : 6).map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-6 rounded-lg bg-heritage-green/50 border border-temple-gold/20"
            >
              <Quote className="w-8 h-8 text-temple-gold/60 mb-4" aria-hidden />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-temple-gold text-temple-gold" aria-hidden />
                ))}
              </div>
              <p className="text-heritage-cream/85 text-sm leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer>
                <cite className="not-italic font-display text-temple-gold-light block">{item.name}</cite>
                <span className="text-heritage-cream/60 text-xs">{item.country}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {compact && (
          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="text-temple-gold hover:text-temple-gold-light font-medium underline-offset-4 hover:underline"
            >
              Read all testimonials
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
