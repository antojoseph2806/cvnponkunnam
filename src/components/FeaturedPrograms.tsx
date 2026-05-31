import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getFeaturedCourses } from "@/data/courses";
import { buildCourseEnrollmentWhatsApp } from "@/lib/contact";

const FeaturedPrograms = () => {
  const courses = getFeaturedCourses();

  return (
    <section className="bg-[#f6f4ec] px-4 py-16 md:px-8 lg:px-16 lg:py-24">
      <div className="container-narrow">
        <div className="motion-reveal motion-fade-up motion-delay-1 text-center">
          <p className="section-eyebrow">Featured Program</p>
          <h2 className="mt-3 font-heading text-3xl leading-tight text-foreground md:text-5xl">
            Our Most Trending and Demanded Courses
          </h2>
          <p className="mx-auto mt-5 max-w-2xl section-copy">
            Choose the training duration that fits your goals and commitment level. Each program is designed to provide
            authentic Kalaripayattu education with traditional guidance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => {
            const featuresList = course.features.split('\n').filter(f => f.trim());
            // Calculate staggered delay for each card
            const delayClass = `motion-delay-${Math.min(index + 2, 6)}`;
            
            return (
              <div
                key={course.id}
                className={`motion-reveal motion-fade-up ${delayClass} pest-pricing-card group relative flex flex-col bg-white border overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 ${
                  course.is_popular
                    ? "border-highlight shadow-[0_32px_80px_-46px_rgba(18,41,25,0.62)] hover:shadow-[0_48px_120px_-40px_rgba(18,41,25,0.85)]"
                    : "border-primary/10 shadow-[0_24px_60px_-46px_rgba(18,41,25,0.48)] hover:border-highlight/40 hover:shadow-[0_40px_100px_-40px_rgba(18,41,25,0.72)]"
                }`}
              >
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-highlight to-transparent transition-all duration-500 group-hover:w-20" />
                <div className="absolute top-0 right-0 w-0 h-0.5 bg-gradient-to-l from-highlight to-transparent transition-all duration-500 delay-75 group-hover:w-20" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-highlight to-transparent transition-all duration-500 delay-150 group-hover:w-20" />
                <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-highlight to-transparent transition-all duration-500 delay-200 group-hover:w-20" />
                
                {/* Floating particles effect */}
                <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-highlight/20 opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:-translate-y-8 group-hover:translate-x-4" />
                <div className="absolute top-20 right-16 w-1.5 h-1.5 rounded-full bg-primary/20 opacity-0 transition-all duration-1000 delay-100 group-hover:opacity-100 group-hover:-translate-y-12 group-hover:translate-x-2" />
                <div className="absolute top-32 right-8 w-1 h-1 rounded-full bg-highlight/30 opacity-0 transition-all duration-1000 delay-200 group-hover:opacity-100 group-hover:-translate-y-10 group-hover:translate-x-6" />

                {!!course.is_popular && (
                  <div className="absolute -top-3 left-6 z-10">
                    <span className="bg-highlight px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all duration-500 group-hover:shadow-lg group-hover:scale-105">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="relative border-b border-primary/10 px-6 py-8 text-center transition-colors duration-500 group-hover:border-highlight/20">
                  <p className="font-heading text-5xl font-bold text-highlight transition-all duration-500 group-hover:scale-110 group-hover:text-primary">{course.duration}</p>
                  <h3 className="mt-5 text-xl font-bold text-foreground leading-tight transition-colors duration-500 group-hover:text-highlight">{course.title}</h3>
                  <p className="mt-3 text-sm font-medium text-muted-foreground italic leading-relaxed transition-colors duration-500 group-hover:text-foreground/80">
                    {course.subtitle}
                  </p>
                </div>

                <div className="relative flex-1 px-6 py-6">
                  <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-foreground/90">{course.description}</p>

                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-highlight mb-4 transition-all duration-500 group-hover:text-primary group-hover:tracking-[0.16em]">
                      What you&apos;ll learn
                    </p>
                    <ul className="space-y-2.5">
                      {featuresList.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground transition-all duration-300 group-hover:translate-x-1" style={{ transitionDelay: `${idx * 50}ms` }}>
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-highlight transition-all duration-500 group-hover:scale-150 group-hover:bg-primary" />
                          <span className="transition-colors duration-500 group-hover:text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative border-t border-primary/10 px-6 py-5 transition-colors duration-500 group-hover:border-highlight/20 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-highlight/5">
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="transition-transform duration-500 group-hover:translate-y-[-2px]">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1.5 transition-colors duration-500 group-hover:text-highlight">
                        Suitable for
                      </p>
                      <p className="text-sm font-bold text-foreground transition-colors duration-500 group-hover:text-primary">{course.suitable_for}</p>
                    </div>
                    <div className="transition-transform duration-500 delay-75 group-hover:translate-y-[-2px]">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1.5 transition-colors duration-500 group-hover:text-highlight">
                        Type
                      </p>
                      <p className="text-sm font-bold text-foreground transition-colors duration-500 group-hover:text-primary">{course.type}</p>
                    </div>
                  </div>

                  <div className="mb-3 text-center transition-transform duration-500 group-hover:scale-105">
                    <p className="text-xs text-muted-foreground mb-1 transition-colors duration-500 group-hover:text-foreground/70">Total Course Fee</p>
                    <p className="text-sm font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                      ₹{course.amount_inr.toLocaleString()} / ${course.amount_usd.toLocaleString()}
                    </p>
                  </div>

                  <div className="mb-3 text-center bg-highlight/10 rounded-lg py-2 px-2 transition-all duration-500 group-hover:bg-highlight/20 group-hover:scale-105 group-hover:shadow-inner">
                    <p className="text-xs font-semibold text-highlight mb-1 transition-all duration-500 group-hover:tracking-wider">Token Amount</p>
                    <p className="text-lg font-bold text-highlight transition-all duration-500 group-hover:scale-110 group-hover:text-primary">
                      ₹{course.token_amount_inr.toLocaleString()} / ${course.token_amount_usd.toLocaleString()}
                    </p>
                  </div>

                  <Button asChild className="pest-btn-sweep w-full bg-primary text-primary-foreground font-bold transition-all duration-500 group-hover:bg-highlight group-hover:shadow-lg group-hover:scale-105" size="lg">
                    <a
                      href={buildCourseEnrollmentWhatsApp(course.duration, course.title)}
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

        {/* Enrollment Information */}
        <div className="mt-8 mx-auto max-w-3xl bg-highlight/5 border border-highlight/20 rounded-lg py-4 px-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-highlight mb-2">How to Enroll</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Contact us to discuss your training goals and secure your spot in our programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
