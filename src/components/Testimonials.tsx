"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mary Santagati",
    text: "Very nice experience, we felt as a family, we had amazing food together, Kalari classes, and 11 days rejuvenation massages. We will never forget the perfume of the oil made by them. We recommend to stay there for 9 days minimum.",
  },
  {
    name: "DeAnne",
    text: "What an incredible week! Nutritious and delicious food, healing massage treatment, a comfortable room in a beautiful jungle with a most welcoming family. I am honored to have shared in the traditional ancestral art of Kalari.",
  },
  {
    name: "Melvin Veliyath",
    text: "If you want to learn authentic Kalari, choose this place. Dr.Shaji is a very experienced and charismatic Kalaripayattu Gurukkal. He is an excellent Ayurveda-Marma doctor.",
  },
  {
    name: "Maryam Al Asousi",
    text: "Excellent Kalaripayattu training, as well as Ayurvedic medicine. The place is calm and peaceful. Wonderful group of teachers and students, they were all very kind, highly experienced and knowledgeable.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-section-dark text-primary-foreground">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-12">Testimonials</h2>
        <div className="relative max-w-3xl mx-auto">
          <Quote className="w-12 h-12 text-highlight-light mx-auto mb-6 opacity-60" />
          <p className="text-lg md:text-xl leading-relaxed mb-8 italic text-primary-foreground/90 min-h-[120px]">
            "{testimonials[current].text}"
          </p>
          <h4 className="font-heading text-xl text-highlight-light">{testimonials[current].name}</h4>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)} className="p-2 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setCurrent((c) => (c + 1) % testimonials.length)} className="p-2 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
