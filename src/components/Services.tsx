import { Leaf, Droplets, Swords, Sun, Calendar, Users, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Leaf,
    title: "Ayurveda Treatments",
    description:
      "At EP Vasudeva Gurukkal's CVN Ayurveda Kalari, we have an exclusive section for Ayurvedic Treatments. All the medicaments are prepared out of herbs hand-picked from the plant kingdom.",
    link: "/services/ayurveda-treatments",
  },
  {
    icon: Droplets,
    title: "Kalari Rejuvenation",
    description:
      "Kalari massage with herbal oils is applied according to a person's body structure and nerve points in order to enhance mind-strength, joy, health and flexibility of muscles.",
    link: "/services/kalari-rejuvenation",
  },
  {
    icon: Swords,
    title: "Kalari Training",
    description:
      "Kalari is an integrated system of exercises that promotes both mental and physical well-being. It combines martial arts with therapeutic practices for injury treatment, as well as meditation.",
    link: "/services/kalari-training",
  },
  {
    icon: Sun,
    title: "Yoga Classes",
    description:
      "Yoga comprises physical, mental, and spiritual practices originating from ancient India. Its goal is to control the mind and achieve stillness, acknowledging a detached witness-consciousness.",
    link: "/services/yoga-classes",
  },
];

const Services = () => (
  <section id="services" className="section-padding bg-section-warm">
    <div className="container-narrow">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-highlight font-semibold text-sm tracking-wide mb-2">OUR SERVICES</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
          Traditional Healing & Wellness
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Experience authentic Ayurvedic treatments, Kalarippayattu training, and holistic wellness practices rooted in ancient Indian traditions
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((s) => (
          <div 
            key={s.title} 
            className="bg-card rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-primary/5 transition-all duration-200 group cursor-pointer"
          >
            <s.icon className="w-10 h-10 text-highlight mb-4 group-hover:scale-125 group-hover:text-primary transition-all duration-200" />
            <h4 className="font-heading text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-200">{s.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
            <Link href={s.link} className="text-sm font-semibold text-primary hover:text-accent transition-colors duration-200 inline-flex items-center gap-1 group-hover:gap-2">
              Read More →
            </Link>
          </div>
        ))}
      </div>

      {/* Kalari Training Program Details */}
      <div id="kalari-training" className="mt-12">
        <div className="text-center mb-8">
          <p className="text-highlight font-semibold text-sm tracking-wide mb-1">Sree Rudra CVN Kalari</p>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
            One Month Intense Kalari Training Program
          </h2>
          <p className="text-muted-foreground text-sm">
            Lakkoor, Kothala, Ponkunnam
          </p>
        </div>

        <Card className="max-w-5xl mx-auto shadow-lg">
          <CardHeader className="bg-primary/5 py-4">
            <CardTitle className="text-xl font-heading">Program Overview</CardTitle>
            <CardDescription className="text-sm">
              Learn the most important techniques of Kalarippayattu in just 30 days
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 pb-5">
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              The One Month Intense Kalari Training Program is designed to teach the most important techniques of Kalarippayattu that would normally take nearly a year to learn. This training is beneficial for both men and women of all age groups.
            </p>

            {/* Program Highlights */}
            <div className="mb-5">
              <h3 className="font-heading text-lg mb-3 text-foreground">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-highlight mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Basic Kalari Leg Movements</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-highlight mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Meippayattu</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-highlight mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Weapon Training</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-highlight mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Verum Kai</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-highlight mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Basic Yoga</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-highlight mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Ayurvedic Body Massage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 p-4 bg-section-warm rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-highlight" />
                <div>
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="font-semibold text-sm text-foreground">30 Days</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-highlight" />
                <div>
                  <p className="text-xs text-muted-foreground">Suitable For</p>
                  <p className="font-semibold text-sm text-foreground">All Age Groups</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-highlight" />
                <div>
                  <p className="text-xs text-muted-foreground">Training Type</p>
                  <p className="font-semibold text-sm text-foreground">Intensive Program</p>
                </div>
              </div>
            </div>

            {/* Booking Button */}
            <div className="text-center pt-2">
              <a href="https://wa.me/917306901750?text=Hi%2C%20I%27m%20interested%20in%20the%20One%20Month%20Intensive%20Kalari%20Training%20Program%20at%20Sree%20Rudra%20CVN%20Kalari.%20Could%20you%20please%20share%20details%20about%20fees%2C%20schedule%2C%20and%20availability%3F%20Thank%20you." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-6 py-5 text-base font-semibold">
                  Book Your Training Program
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-3">
                Contact us to reserve your spot or learn more about the program
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default Services;
