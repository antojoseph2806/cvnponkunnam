"use client";

import Link from "next/link";
import { ArrowRight, HeartPulse, Hand, Swords, Activity, Bone, Shield, Siren } from "lucide-react";
import { motion } from "./motion";
import { useSiteContent } from "@/lib/content-store";
import { SectionHeader } from "./SectionHeader";
import { HeritageImage } from "./HeritageImage";

const serviceDetails: Record<string, {
  icon: typeof HeartPulse;
  description: string;
  image: string;
  benefits: string[];
}> = {
  "Traditional Marma Therapy": {
    icon: Hand,
    description: "Ancient healing practice targeting 108 vital energy points (marmas) to restore balance, release blocked energy, and promote natural healing throughout the body.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    benefits: ["Energy balancing", "Deep relaxation", "Improved circulation"],
  },
  "Kalari Chikilsa": {
    icon: Swords,
    description: "Traditional Kalari treatment system combining specialized oil massages, herbal applications, and body manipulation techniques passed down through generations of Gurukkals.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
    benefits: ["Herbal oil therapy", "Joint mobilization", "Muscle recovery"],
  },
  "Pain Management": {
    icon: Activity,
    description: "Holistic pain relief combining Marma point stimulation with traditional Ayurvedic therapies to address chronic and acute pain without medication or surgery.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    benefits: ["Non-invasive relief", "Chronic pain support", "Stress reduction"],
  },
  "Sports Rehabilitation": {
    icon: Shield,
    description: "Recovery programs rooted in Kalari sports medicine, helping athletes heal from injuries, improve performance, and prevent future damage through targeted therapy.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50e?w=600&q=80",
    benefits: ["Injury recovery", "Performance boost", "Flexibility training"],
  },
  "Body Alignment": {
    icon: Bone,
    description: "Structural correction through traditional techniques that realign the skeletal system, improve posture, and restore natural body mechanics for long-term wellbeing.",
    image: "https://images.unsplash.com/photo-1599901860904-17fbfe66c6b0?w=600&q=80",
    benefits: ["Posture correction", "Spinal health", "Joint alignment"],
  },
  "Injury Recovery": {
    icon: Siren,
    description: "Comprehensive rehabilitation combining Marma therapy, oil treatments, and progressive exercise protocols to restore full function after injuries or surgical procedures.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80",
    benefits: ["Accelerated healing", "Scar tissue care", "Strength rebuilding"],
  },
};

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

        {/* Featured Image + Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
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
            className="space-y-6"
          >
            <h3 className="font-display text-heritage-green text-2xl md:text-3xl font-semibold">
              The Ancient Science of Vital Energy Healing
            </h3>
            <p className="text-bronze leading-relaxed">
              Marma Chikilsa is the ancient Kalari healing science addressing vital energy points (marmas) to restore
              balance, relieve pain, and accelerate recovery. Our therapies integrate generations of traditional knowledge
              with practical treatment for modern practitioners and wellness seekers.
            </p>
            <p className="text-bronze leading-relaxed">
              Each treatment is personalized, combining specialized techniques with Ayurvedic oils and herbal preparations
              to target your specific health needs and promote holistic wellbeing.
            </p>
            <Link
              href="/marma-chikilsa"
              className="inline-flex items-center gap-2 px-8 py-4 bg-heritage-green text-heritage-cream rounded-md font-display hover:bg-heritage-green-light transition-colors"
            >
              Explore Marma Chikilsa
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Expanded Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marma.services.map((service, index) => {
            const details = serviceDetails[service];
            const Icon = details?.icon || HeartPulse;
            return (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-heritage-green/5 hover:border-temple-gold/30"
              >
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {details?.image ? (
                    <img
                      src={details.image}
                      alt={service}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-heritage-green to-heritage-green-dark" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-heritage-green/85 backdrop-blur-sm rounded-md">
                      <Icon className="w-4 h-4 text-temple-gold" aria-hidden />
                      <span className="text-white text-xs font-display font-bold uppercase tracking-wider">{service}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <p className="text-bronze-dark text-sm leading-relaxed mb-4">
                    {details?.description || "Traditional healing therapy rooted in ancient Kalari wisdom and Ayurvedic principles."}
                  </p>
                  {details?.benefits && (
                    <ul className="space-y-1.5">
                      {details.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-xs text-bronze">
                          <span className="w-1.5 h-1.5 rounded-full bg-temple-gold shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
