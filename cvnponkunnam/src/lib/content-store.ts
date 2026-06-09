"use client";

import { useState, useEffect, useCallback } from "react";
import type { SiteContent, CourseItem } from "./admin-types";
import { defaultContent } from "./admin-types";

const STORAGE_KEY = "akm-sree-rudra-site-content";
const CONTENT_VERSION = "v7"; // admin overhaul: media management, hero video support, simplified courses/services
const VERSION_KEY = "akm-sree-rudra-content-version";

export function loadContent(): SiteContent {
  if (typeof window === "undefined") return defaultContent;
  try {
    // If content version has changed, reset to new defaults
    const storedVersion = localStorage.getItem(VERSION_KEY);
    if (storedVersion !== CONTENT_VERSION) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(VERSION_KEY, CONTENT_VERSION);
      return defaultContent;
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultContent;
    const parsed = JSON.parse(raw) as Partial<SiteContent>;
    return mergeWithDefaults(parsed);
  } catch {
    return defaultContent;
  }
}

function mergeWithDefaults(data: Partial<SiteContent>): SiteContent {
  return {
    hero: { ...defaultContent.hero, ...data.hero },
    about: { ...defaultContent.about, ...data.about },
    kalaripayattu: {
      ...defaultContent.kalaripayattu,
      ...data.kalaripayattu,
      programs: data.kalaripayattu?.programs ?? defaultContent.kalaripayattu.programs,
    },
    marma: {
      ...defaultContent.marma,
      ...data.marma,
      services: data.marma?.services ?? defaultContent.marma.services,
    },
    wellness: {
      ...defaultContent.wellness,
      ...data.wellness,
      packages: data.wellness?.packages ?? defaultContent.wellness.packages,
    },
    courses: data.courses ?? defaultContent.courses,
    contact: { ...defaultContent.contact, ...data.contact },
    footer: { ...defaultContent.footer, ...data.footer },
  };
}

export function saveContent(content: SiteContent): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

export function resetContent(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.setItem(VERSION_KEY, CONTENT_VERSION);
}

export function exportContent(): string {
  return JSON.stringify(loadContent(), null, 2);
}

export function importContent(json: string): boolean {
  try {
    const parsed = JSON.parse(json) as Partial<SiteContent>;
    const merged = mergeWithDefaults(parsed);
    saveContent(merged);
    return true;
  } catch {
    return false;
  }
}

export function useSiteContent(): {
  content: SiteContent;
  updateContent: (updater: (prev: SiteContent) => SiteContent) => void;
  updateHero: (hero: SiteContent["hero"]) => void;
  updateAbout: (about: SiteContent["about"]) => void;
  updateKalaripayattu: (kalaripayattu: SiteContent["kalaripayattu"]) => void;
  updateMarma: (marma: SiteContent["marma"]) => void;
  updateWellness: (wellness: SiteContent["wellness"]) => void;
  updateCourses: (courses: CourseItem[]) => void;
  updateContact: (contact: SiteContent["contact"]) => void;
  updateFooter: (footer: SiteContent["footer"]) => void;
  reset: () => void;
} {
  const [content, setContent] = useState<SiteContent>(defaultContent);

  useEffect(() => {
    setContent(loadContent());
  }, []);

  const updateContent = useCallback((updater: (prev: SiteContent) => SiteContent) => {
    setContent((prev) => {
      const next = updater(prev);
      saveContent(next);
      return next;
    });
  }, []);

  const updateHero = useCallback(
    (hero: SiteContent["hero"]) => updateContent((prev) => ({ ...prev, hero })),
    [updateContent]
  );

  const updateAbout = useCallback(
    (about: SiteContent["about"]) => updateContent((prev) => ({ ...prev, about })),
    [updateContent]
  );

  const updateKalaripayattu = useCallback(
    (kalaripayattu: SiteContent["kalaripayattu"]) => updateContent((prev) => ({ ...prev, kalaripayattu })),
    [updateContent]
  );

  const updateMarma = useCallback(
    (marma: SiteContent["marma"]) => updateContent((prev) => ({ ...prev, marma })),
    [updateContent]
  );

  const updateWellness = useCallback(
    (wellness: SiteContent["wellness"]) => updateContent((prev) => ({ ...prev, wellness })),
    [updateContent]
  );

  const updateCourses = useCallback(
    (courses: CourseItem[]) => updateContent((prev) => ({ ...prev, courses })),
    [updateContent]
  );

  const updateContact = useCallback(
    (contact: SiteContent["contact"]) => updateContent((prev) => ({ ...prev, contact })),
    [updateContent]
  );

  const updateFooter = useCallback(
    (footer: SiteContent["footer"]) => updateContent((prev) => ({ ...prev, footer })),
    [updateContent]
  );

  const reset = useCallback(() => {
    resetContent();
    setContent(defaultContent);
  }, []);

  return {
    content,
    updateContent,
    updateHero,
    updateAbout,
    updateKalaripayattu,
    updateMarma,
    updateWellness,
    updateCourses,
    updateContact,
    updateFooter,
    reset,
  };
}
