import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroMartialArt from "@/assets/hero-martial-art.jpg";
import heroGurukkal from "@/assets/hero-gurukkal.jpg";
import aboutKalari from "@/assets/about-kalari.jpg";

const images = [
  { src: gallery1, alt: "Kalari Training" },
  { src: gallery2, alt: "Kalari Student" },
  { src: gallery3, alt: "Yoga Practice" },
  { src: heroMartialArt, alt: "Kalaripayattu" },
  { src: heroGurukkal, alt: "Gurukkal Training" },
  { src: aboutKalari, alt: "CVN Kalari Center" },
];

const Gallery = () => (
  <section id="gallery" className="section-padding bg-background">
    <div className="container-narrow">
      <h2 className="font-heading text-3xl md:text-4xl text-center mb-4 text-foreground">Photo Gallery</h2>
      <div className="text-center mb-10">
        <a href="#gallery" className="text-sm text-terracotta hover:text-accent font-semibold transition-colors">
          View all photos →
        </a>
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
