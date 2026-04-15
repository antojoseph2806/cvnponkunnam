import aboutImg from "@/assets/about-kalari.jpg";

const About = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src={aboutImg} alt="CVN Kalari Kerala" loading="lazy" width={1200} height={800} className="w-full h-[400px] lg:h-[500px] object-cover" />
      </div>
      <div>
        <p className="text-terracotta font-semibold text-sm tracking-wide mb-2">EP Vasudeva Gurukkal's</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
          CVN Kalari Kaduthuruthy
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          CVN Kalari Kaduthuruthy (also known as EPV Ayurveda Kalari) has branched out from the renowned CVN Kalari to spread the traditional Kalaripayattu to other parts of the region.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          CVN Kalari Kaduthuruthy is steadfast in its commitment to give the very best to its pupils by training with the early tradition of the art with all its nuances and techniques as inherited from CVN Kalari.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We aim at taking the benefits of Kalaripayattu to a global level and thereby making the traditional art form renowned worldwide for its revitalizing effects on both mind and body.
        </p>
        <a href="#contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm hover:bg-accent transition-colors">
          About Us
        </a>
      </div>
    </div>
  </section>
);

export default About;
