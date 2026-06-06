"use client";

import { motion } from "./motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, light, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className={`text-center mb-16 ${className}`}
    >
      <div
        className={`inline-block px-4 py-2 rounded-full mb-4 border ${
          light
            ? "bg-temple-gold/10 border-temple-gold/30"
            : "bg-temple-gold/10 border-temple-gold/30"
        }`}
      >
        <span
          className={`text-sm tracking-wide uppercase ${
            light ? "text-temple-gold-light" : "text-temple-gold-dark"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-heritage-green mb-6 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-3xl mx-auto text-lg leading-relaxed ${
            light ? "text-cream/80" : "text-bronze"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
