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
        className={`inline-block px-5 py-2.5 rounded-full mb-5 border ${
          light
            ? "bg-temple-gold/20 border-temple-gold/40 shadow-lg"
            : "bg-temple-gold/15 border-temple-gold/40 shadow-md"
        }`}
      >
        <span
          className={`text-sm tracking-wide uppercase font-bold ${
            light ? "text-temple-gold-light drop-shadow-md" : "text-temple-gold-dark drop-shadow-sm"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-heritage-green mb-6 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight drop-shadow-sm">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-3xl mx-auto text-lg leading-relaxed font-medium ${
            light ? "text-white/90 drop-shadow-md" : "text-bronze-dark drop-shadow-sm"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
