"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Jad",
    rating: 5,
    timeAgo: "2 years ago",
    text: "Amazing experience. We were able to come in the middle of our vacation and train with the Master and his students and everyone was extremely friendly and accommodating. They showed us their incredible technique and weapons proficiency and taught us very much and treated us like family. We would love to return, and would give it six stars if we could. We highly recommend anyone who wishes to learn Kalaripayattu to come train here. 🙏❤️",
    isGoogleReview: true,
  },
  {
    name: "Nidheesh Vijayan",
    rating: 5,
    timeAgo: "1 year ago",
    text: "Very good facilities and good massaging and good service and good Kalaripayattu training....",
    isGoogleReview: true,
  },
  {
    name: "Manish Yadwad",
    rating: 5,
    timeAgo: "3 years ago",
    text: "It was fabulous and mind-blowing. It was courageous & kudos to their precision and timing. Do visit and show your love and support. 🙏",
    isGoogleReview: true,
    badge: "Local Guide",
  },
  {
    name: "G Radhakrishnan Nair",
    rating: 5,
    timeAgo: "3 years ago",
    text: "Kalari Marma is very good for treatment.",
    isGoogleReview: true,
    badge: "Local Guide",
  },
  {
    name: "Anand S",
    rating: 5,
    timeAgo: "4 years ago",
    text: "Excellent Kalaripayattu training and traditional healing. Highly recommended for authentic Kalari experience.",
    isGoogleReview: true,
    badge: "Local Guide",
  },
  {
    name: "Anoop M",
    rating: 5,
    timeAgo: "6 years ago",
    text: "Outstanding training facility with experienced instructors. Great place to learn traditional Kalaripayattu.",
    isGoogleReview: true,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[current];

  return (
    <section className="section-padding bg-section-dark text-primary-foreground">
      <div className="container-narrow text-center">
        <p className="motion-reveal motion-fade-up motion-delay-1 section-eyebrow text-primary-foreground/70">Testimonials</p>
        <h2 className="section-title mb-4 mt-3 text-primary-foreground">What Our Students Say</h2>
        <p className="text-primary-foreground/70 mb-12">Real reviews from Google</p>
        
        <div className="motion-reveal motion-fade-up motion-delay-2 relative max-w-4xl mx-auto">
          <div key={current} className="pest-testimonial-bubble motion-reveal motion-zoom-in is-visible bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <Quote className="w-12 h-12 text-highlight-light mx-auto mb-6 opacity-60" />
            
            {/* Star Rating */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg md:text-xl leading-relaxed mb-6 italic text-primary-foreground/90 min-h-[140px]">
              "{currentTestimonial.text}"
            </p>

            {/* Reviewer Info */}
            <div className="flex flex-col items-center gap-2">
              <h4 className="font-heading text-xl font-bold text-highlight-light">
                {currentTestimonial.name}
              </h4>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                {currentTestimonial.badge && (
                  <>
                    <span className="bg-highlight/20 text-highlight-light px-2 py-0.5 rounded text-xs font-semibold">
                      {currentTestimonial.badge}
                    </span>
                    <span>•</span>
                  </>
                )}
                <span>{currentTestimonial.timeAgo}</span>
                {currentTestimonial.isGoogleReview && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Google Review
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)} 
              className="pest-carousel-btn p-3 rounded-full bg-white/10 border border-white/20"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? "w-8 bg-highlight-light" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)} 
              className="pest-carousel-btn p-3 rounded-full bg-white/10 border border-white/20"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Google Link */}
          <div className="mt-8">
            <a
              href="https://share.google/BJ8l13jyYvXTkGCCf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-highlight-light hover:text-white transition-colors"
            >
              View all reviews on Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
