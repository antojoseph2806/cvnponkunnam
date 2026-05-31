"use client";

import { useEffect } from "react";

const ScrollAnimator = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".motion-reveal"));

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    document.body.classList.add("motion-ready");

    const observedItems = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      },
    );

    const observeRevealItems = () => {
      document.querySelectorAll<HTMLElement>(".motion-reveal:not(.is-visible)").forEach((item) => {
        if (observedItems.has(item)) {
          return;
        }

        observedItems.add(item);
        observer.observe(item);
      });
    };

    revealItems.forEach((item) => {
      observedItems.add(item);
      observer.observe(item);
    });

    const mutationObserver = new MutationObserver(observeRevealItems);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      document.body.classList.remove("motion-ready");
    };
  }, []);

  return null;
};

export default ScrollAnimator;
