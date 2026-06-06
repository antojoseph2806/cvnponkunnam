"use client";

import Link from "next/link";
import { ArrowRight, Swords } from "lucide-react";
import { motion } from "./motion";
import { useSiteContent } from "@/lib/content-store";
import { SectionHeader } from "./SectionHeader";

export function HeritageKalaripayattu() {
  const { content } = useSiteContent();
  const k = content.kalaripayattu;

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {k.programs.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group p-6 rounded-lg border border-temple-gold/20 bg-heritage-green-dark/50 hover:border-temple-gold/50 hover:bg-heritage-green-dark transition-all"
            >
              <Swords className="w-8 h-8 text-temple-gold mb-4 group-hover:scale-110 transition-transform" aria-hidden />
              <h3 className="font-display text-xl text-temple-gold-light mb-3">{program.title}</h3>
              <p className="text-heritage-cream/75 text-sm leading-relaxed">{program.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/kalaripayattu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-temple-gold text-heritage-green-dark rounded-md font-display hover:bg-temple-gold-light transition-colors"
          >
            View Training Details
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/international-students"
            className="inline-flex items-center gap-2 px-8 py-4 border border-temple-gold text-temple-gold rounded-md font-display hover:bg-temple-gold/10 transition-colors"
          >
            International Programs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
