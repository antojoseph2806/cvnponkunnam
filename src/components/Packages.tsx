import package1 from "@/assets/package-1.jpg";
import package2 from "@/assets/package-2.jpg";
import package3 from "@/assets/package-3.jpg";

const packages = [
  {
    image: package1,
    duration: "7 Days",
    perDay: "1 Hour per Day",
    title: "Kalari Massage Therapy",
    features: [
      "Kalari Massage and Herbal Steam",
      "Yoga, Meditation, and Pranayama",
      "Bio-food for Gurukulam Residents",
    ],
  },
  {
    image: package2,
    duration: "7 Days, 14 Days, and 21 Days",
    perDay: "1 Hour per Day",
    title: "Relaxation Kalari Massage",
    features: [
      "Kalari Massage",
      "Body Rejuvenation, Cleansing, Detoxification, and Herbal Steam",
      "Yoga, Meditation, and Pranayama",
      "Bio-food for Gurukulam Residents",
    ],
  },
  {
    image: package3,
    duration: "7 Days, 14 Days, and 21 Days",
    perDay: "1 Hour per Day",
    title: "Rejuvenation Kalari Massage",
    features: [
      "Kalari Massage",
      "Body Rejuvenation, Cleansing, Detoxification, Dhara, and Herbal Steam",
      "Yoga, Meditation, and Pranayama",
      "Bio-food for Gurukulam Residents",
    ],
  },
];

const Packages = () => (
  <section id="packages" className="section-padding bg-section-warm">
    <div className="container-narrow">
      <h2 className="font-heading text-3xl md:text-4xl text-center mb-4 text-foreground">Offers & Packages</h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
        Discover why we excel as an Ayurveda Kalari, offering a holistic blend of Ayurvedic treatments, Kalari rejuvenation, and Yoga classes. Explore our diverse range of Ayurveda treatments and packages tailored to rejuvenate your body and mind.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.title} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <img src={pkg.image} alt={pkg.title} loading="lazy" className="w-full h-56 object-cover" />
            <div className="p-6">
              <p className="text-highlight text-sm font-semibold">{pkg.duration}</p>
              <p className="text-xs text-muted-foreground mb-3">{pkg.perDay}</p>
              <h4 className="font-heading text-xl text-foreground mb-4">{pkg.title}</h4>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-highlight mt-0.5">•</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/919447042422"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded text-sm font-semibold hover:bg-accent transition-colors"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Packages;
