import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akmsreerudra.com";

const routes = [
  "",
  "/about",
  "/founder",
  "/kalaripayattu",
  "/marma-chikilsa",
  "/wellness",
  "/gallery",
  "/contact",
  "/services/kalari-training",
  "/services/marma-chikilsa",
  "/services/kalari-rejuvenation",
  "/privacy-policy",
  "/terms-conditions",
  "/cancellation-refunds",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : index < 10 ? 0.9 : 0.7,
  }));
}
