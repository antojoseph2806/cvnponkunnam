"use client";

import Link from "next/link";
import { HeritageSiteLayout, HeritagePageHero, HeritageCtaBanner } from "@/components/heritage";
import { useSiteContent } from "@/lib/content-store";

export default function TrainingProgramsPage() {
  const { content } = useSiteContent();
  const courses = content.courses.filter((c) => c.isActive);

  return (
    <HeritageSiteLayout>
      <main>
        <HeritagePageHero
          title="Training Programs"
          subtitle="Structured pathways from foundation to mastery"
          image="/assets/kalari-training-landscape.jpg"
        />
        <section className="py-20 bg-heritage-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course) => (
                <article
                  key={course.id}
                  className={`relative p-8 rounded-lg bg-white border shadow-lg ${
                    course.isPopular ? "border-temple-gold ring-2 ring-temple-gold/30" : "border-heritage-green/10"
                  }`}
                >
                  {course.isPopular && (
                    <span className="absolute -top-3 right-6 px-3 py-1 bg-temple-gold text-heritage-green-dark text-xs font-bold uppercase tracking-wide rounded">
                      Popular
                    </span>
                  )}
                  <p className="text-temple-gold-dark text-sm font-semibold uppercase tracking-wide mb-2">
                    {course.duration} - {course.type}
                  </p>
                  <h2 className="font-display text-2xl text-heritage-green mb-2">{course.title}</h2>
                  <p className="text-bronze text-sm mb-4 italic">{course.subtitle}</p>
                  <p className="text-bronze text-sm leading-relaxed mb-6">{course.description}</p>
                  <ul className="text-sm text-bronze space-y-1 mb-6">
                    {course.features.split("\n").map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-temple-gold">-</span> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-heritage-green/10">
                    <div>
                      <p className="font-display text-heritage-green text-xl">
                        INR {course.amountInr.toLocaleString("en-IN")}
                      </p>
                      <p className="text-bronze text-sm">USD ${course.amountUsd}</p>
                    </div>
                    <a
                      href={`https://wa.me/${content.contact.whatsapp}?text=${encodeURIComponent(
                        `Hello! I'm interested in the *${course.duration} ${course.title}* program.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-heritage-green text-heritage-cream rounded-md font-display text-sm hover:bg-heritage-green-light transition-colors"
                    >
                      Enquire Now
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-center text-bronze mt-12 text-sm">
              Custom programs available.{" "}
              <Link href="/contact" className="text-heritage-green font-medium hover:underline">
                Contact us
              </Link>{" "}
              for personalized consultation.
            </p>
          </div>
        </section>
        <HeritageCtaBanner />
      </main>
    </HeritageSiteLayout>
  );
}
