"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 60, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Natural Products" },
  { value: 100, suffix: "%", label: "Authentic Methods" },
  { value: 5, suffix: "K+", label: "Students" },
];

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl md:text-5xl text-highlight-light">
        {count}
        <span>{suffix}</span>
      </p>
      <p className="section-eyebrow mt-2 text-primary-foreground/70">{label}</p>
    </div>
  );
};

const Stats = () => (
  <section className="py-16 px-4 bg-section-dark text-primary-foreground">
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} />
      ))}
    </div>
  </section>
);

export default Stats;
