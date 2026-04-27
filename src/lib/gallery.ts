import { readdir } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

export type GalleryImage = {
  alt: string;
  filename: string;
  index: number;
  slug: string;
  src: string;
};

const GALLERY_DIRECTORY = path.join(process.cwd(), "public", "assets", "gallery images");
const IMAGE_EXTENSIONS = new Set([".avif", ".jpeg", ".jpg", ".png", ".webp"]);

function createSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createPublicPath(...segments: string[]) {
  return `/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;
}

export const getGalleryImages = cache(async (): Promise<GalleryImage[]> => {
  let entries;

  try {
    entries = await readdir(GALLERY_DIRECTORY, { withFileTypes: true });
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return [];
    }

    throw error;
  }

  const imageFiles = entries
    .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort((left, right) =>
      left.localeCompare(right, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    );

  return imageFiles.map((filename, index) => {
    const baseName = path.parse(filename).name;
    const slug = createSlug(baseName) || `image-${index + 1}`;

    return {
      alt: `CVN Kalari gallery image ${index + 1}`,
      filename,
      index: index + 1,
      slug,
      src: createPublicPath("assets", "gallery images", filename),
    };
  });
});

export async function getGalleryImage(slug: string) {
  const images = await getGalleryImages();
  return images.find((image) => image.slug === slug);
}
