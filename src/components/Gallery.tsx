import Link from "next/link";

const images = [
  { src: "/assets/gallery-1.jpg", alt: "Kalari Training" },
  { src: "/assets/gallery-2.jpg", alt: "Kalari Student" },
  { src: "/assets/gallery-3.jpg", alt: "Yoga Practice" },
  { src: "/assets/hero-martial-art.jpg", alt: "Kalaripayattu" },
  { src: "/assets/about-kalari.jpg", alt: "CVN Kalari Center" },
];

const Gallery = () => (
  <section id="gallery" className="section-padding bg-background">
    <div className="container-narrow">
      <h2 className="font-heading text-3xl md:text-4xl text-center mb-4 text-foreground">Photo Gallery</h2>
      <div className="text-center mb-10">
        <Link href="/gallery" className="text-sm text-highlight hover:text-accent font-semibold transition-colors">
          View all photos →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg group cursor-pointer">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
