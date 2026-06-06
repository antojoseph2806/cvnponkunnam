/**
 * Sanity CMS integration (optional).
 * Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET to enable.
 * Blog and dynamic content can be fetched via @sanity/client when configured.
 */

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-06-01",
  useCdn: process.env.NODE_ENV === "production",
};

export const isSanityConfigured = Boolean(sanityConfig.projectId);
