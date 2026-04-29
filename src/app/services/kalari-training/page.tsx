import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, Users, Calendar, Award, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { buildWhatsAppHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "One Month Intensive Kalari Training | Sree Rudra CVN Kalari",
  description: "Transform your life with our signature 30-day intensive Kalaripayattu training program. Learn ancient martial arts, yoga, and Ayurvedic practices.",
};

const programFeatures = [
  {
    title: "Basic Kalari Leg Movements",
    description: "Master foundational footwork and stances",
  },
  {
    title: "Meippayattu",
    description: "Body control and conditioning exercises",
  },
  {
    title: "Weapon Training",
    description: "Traditional Kalari weapons mastery",
  },
  {
    title: "Verum Kai",
    description: "Bare-hand self-defence techniques",
  },
  {
    title: "Basic Yoga",
    description: "Mind-body integration practices",
  },
  {
    title: "Ayurvedic Massage",
    description: "Therapeutic body treatments",
  },
];

const programStats = [
  {
    icon: Clock,
    label: "Duration",
    value: "30 Days",
    description: "Intensive daily training",
  },
  {
    icon: Users,
    label: "Suitable For",
    value: "All Ages",
    description: "Men & women welcome",
  },
  {
    icon: Calendar,
    label: "Training Type",
    value: "Intensive",
    description: "Comprehensive program",
  },
];

export default function KalariTrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-section-dark to-primary py-16 md:py-20">
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-highlight/20 blur-3xl" />
            <div className="absolute right-[-10%] bottom-[-10%] h-96 w-96 rounded-full bg-highlight-light/20 blur-3xl" />
          </div>

          <div className="container-narrow relative z-10 px-4">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-5 py-2 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Our Signature Program
                </span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                One Month Intensive
                <span className="mt-1 block text-highlight-light">
                  Kalari Training Program
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-base text-white/90 md:text-lg">
                One Ritual. One Month. A Lifetime of Change.
              </p>

              {/* Location */}
              <p className="mt-2 text-sm text-white/80">
                Sree Rudra CVN Kalari • Lakkoor, Kothala, Ponkunnam
              </p>

              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href={buildWhatsAppHref("Hi, I'm interested in the One Month Intensive Kalari Training Program at Sree Rudra CVN Kalari. Could you please share details about fees, schedule, and availability? Thank you.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="h-auto rounded-full bg-highlight-light px-8 py-3 text-base font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-highlight"
                  >
                    Enroll Now - Limited Spots
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative -mt-12 px-4">
          <div className="container-narrow">
            <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
              {programStats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border-2 border-white bg-white p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/20"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:bg-primary/10" />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-highlight">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="px-4 py-16">
          <div className="container-narrow">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              {/* Image Column */}
              <div className="relative">
                <div className="sticky top-24">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <img
                      src="/one month training.jpeg"
                      alt="One Month Intensive Kalari Training Program"
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-highlight-light px-4 py-2">
                        <Award className="h-4 w-4 text-white" />
                        <span className="text-sm font-bold text-white">Featured Program</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="space-y-6">
                {/* Program Overview */}
                <div className="rounded-xl border-2 border-primary/20 bg-white p-6 shadow-lg">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Program Overview
                    </span>
                  </div>
                  <h2 className="mb-3 font-heading text-2xl font-bold text-foreground">
                    Transform Your Life in 30 Days
                  </h2>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    The One Month Intensive Kalari Training Program is designed to teach the most important
                    techniques of Kalaripayattu that would normally take nearly a year to learn. This training
                    is beneficial for both men and women of all age groups.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    The 30-day program is carefully structured to help participants understand Kalaripayattu
                    more deeply while also bringing renewed energy and balance to both body and mind.
                  </p>
                </div>

                {/* What You'll Learn */}
                <div className="rounded-xl border-2 border-highlight/20 bg-section-warm p-6 shadow-lg">
                  <h3 className="mb-4 font-heading text-xl font-bold text-foreground">
                    What You'll Master
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {programFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="group flex items-start gap-3 rounded-lg bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                          <CheckCircle className="h-4 w-4 text-primary transition-colors duration-300 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="rounded-xl bg-gradient-to-br from-primary via-section-dark to-primary p-6 text-center shadow-xl">
                  <h3 className="mb-2 font-heading text-xl font-bold text-white">
                    Ready to Begin Your Journey?
                  </h3>
                  <p className="mb-4 text-sm text-white/90">
                    Join hundreds of students who have transformed their lives through this intensive program.
                  </p>
                  <a
                    href={buildWhatsAppHref("Hi, I'm interested in the One Month Intensive Kalari Training Program at Sree Rudra CVN Kalari. Could you please share details about fees, schedule, and availability? Thank you.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="h-auto rounded-full bg-highlight-light px-6 py-3 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-highlight"
                    >
                      Contact Us on WhatsApp
                    </Button>
                  </a>
                  <p className="mt-3 text-xs text-white/80">
                    Limited spots available • Early booking recommended
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
