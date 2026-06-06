"use client";

import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/lib/content-store";

export default function KalariTrainingCourses() {
  const { content } = useSiteContent();
  const courses = content.courses
    .filter((c) => c.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <div className="border-t border-primary/15 pt-14 lg:pt-20">
      <div className="text-center">
        <p className="section-eyebrow">Featured Program</p>
        <h2 className="mt-3 font-heading text-3xl leading-tight text-foreground md:text-5xl">
          Our Most Trending and Demanded Courses
        </h2>
        <p className="mx-auto mt-5 max-w-2xl section-copy">
          Choose the training duration that fits your goals and commitment level. Each program is designed to provide authentic Kalaripayattu education with traditional guidance.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((course, index) => {
          const featuresList = course.features.split('\n').filter(f => f.trim());
          const delayClass = `motion-delay-${Math.min(index + 2, 8)}`;
          const whatsappMsg = `Hello! I'm interested in enrolling for the *${course.duration} ${course.title}* program at AKM Sree Rudra CVN Kalari.`;

          return (
            <div
              key={course.id}
              className={`motion-reveal motion-fade-up ${delayClass} relative flex flex-col bg-white border transition-all hover:shadow-[0_32px_80px_-46px_rgba(18,41,25,0.62)] ${
                course.isPopular
                  ? "border-highlight shadow-[0_32px_80px_-46px_rgba(18,41,25,0.62)]"
                  : "border-primary/10 shadow-[0_24px_60px_-46px_rgba(18,41,25,0.48)]"
              }`}
            >
              {!!course.isPopular && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-highlight px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="border-b border-primary/10 px-5 py-6 text-center">
                <p className="font-heading text-4xl font-bold text-highlight">{course.duration}</p>
                <h3 className="mt-3 text-lg font-bold text-foreground leading-tight">{course.title}</h3>
                <p className="mt-2 text-xs font-medium text-muted-foreground italic leading-relaxed">
                  {course.subtitle}
                </p>
              </div>

              <div className="flex-1 px-5 py-4">
                <p className="text-xs leading-relaxed text-muted-foreground">{course.description}</p>

                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-highlight mb-3">
                    What you&apos;ll learn
                  </p>
                  <ul className="space-y-2">
                    {featuresList.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-foreground">
                        <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-highlight" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-primary/10 px-5 py-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1">
                      Suitable for
                    </p>
                    <p className="text-xs font-bold text-foreground">{course.suitableFor}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1">
                      Type
                    </p>
                    <p className="text-xs font-bold text-foreground">{course.type}</p>
                  </div>
                </div>

                <div className="mb-3 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Total Course Fee</p>
                  <p className="text-sm font-bold text-foreground">
                    INR {course.amountInr.toLocaleString()} / ${course.amountUsd.toLocaleString()}
                  </p>
                </div>

                <div className="mb-3 text-center bg-highlight/10 rounded-lg py-2 px-2">
                  <p className="text-xs font-semibold text-highlight mb-1">Token Amount</p>
                  <p className="text-lg font-bold text-highlight">
                    INR {course.tokenAmountInr.toLocaleString()} / ${course.tokenAmountUsd.toLocaleString()}
                  </p>
                </div>

                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-accent font-bold" size="lg">
                  <a
                    href={`https://wa.me/${content.contact.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
