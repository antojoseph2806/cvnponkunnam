import { Leaf, Droplets, Swords, Sun } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Ayurveda Treatments",
    description:
      "At EP Vasudeva Gurukkal's CVN Ayurveda Kalari, we have an exclusive section for Ayurvedic Treatments. All the medicaments are prepared out of herbs hand-picked from the plant kingdom.",
  },
  {
    icon: Droplets,
    title: "Kalari Rejuvenation",
    description:
      "Kalari massage with herbal oils is applied according to a person's body structure and nerve points in order to enhance mind-strength, joy, health and flexibility of muscles.",
  },
  {
    icon: Swords,
    title: "Kalari Training",
    description:
      "Kalari is an integrated system of exercises that promotes both mental and physical well-being. It combines martial arts with therapeutic practices for injury treatment, as well as meditation.",
  },
  {
    icon: Sun,
    title: "Yoga Classes",
    description:
      "Yoga comprises physical, mental, and spiritual practices originating from ancient India. Its goal is to control the mind and achieve stillness, acknowledging a detached witness-consciousness.",
  },
];

const Services = () => (
  <section id="services" className="section-padding bg-section-warm">
    <div className="container-narrow">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
            <s.icon className="w-10 h-10 text-terracotta mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-heading text-xl mb-3 text-foreground">{s.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
            <a href="#" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
