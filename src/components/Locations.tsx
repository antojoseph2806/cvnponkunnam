"use client";

import { MapPin, ExternalLink } from "lucide-react";

const locations = [
  {
    name: "Sree Rudra CVN Kalari",
    address: "Lakkoor, Kothala, Ponkunnam",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sree+Rudra+CVN+Kalari+Lakkoor+Kothala+Ponkunnam",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.5!2d76.5!3d9.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzYnMDAuMCJOIDc2wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    name: "Sree Rudra CVN Kalari",
    address: "Lakkoor, Kothala, Ponkunnam",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sree+Rudra+CVN+Kalari+Lakkoor+Kothala+Ponkunnam",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.5!2d76.5!3d9.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzYnMDAuMCJOIDc2wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567891",
  },
  {
    name: "Sree Rudra CVN Kalari",
    address: "Lakkoor, Kothala, Ponkunnam",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sree+Rudra+CVN+Kalari+Lakkoor+Kothala+Ponkunnam",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.5!2d76.5!3d9.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzYnMDAuMCJOIDc2wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567892",
  },
];

const Locations = () => {
  return (
    <section className="section-padding bg-section-warm">
      <div className="container-narrow">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="section-eyebrow">Visit Us</p>
          <h2 className="section-title mt-3">
            Our <span className="text-highlight">Locations</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Map Preview */}
              <div className="relative h-64 bg-muted overflow-hidden">
                <iframe
                  src={location.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.name} Location`}
                  className="pointer-events-none"
                />
                
                {/* Open in Maps Button */}
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-accent transition-colors shadow-md z-10"
                >
                  Open in Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
                
                {/* Location Pin Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-highlight text-primary-foreground p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8" />
                  </div>
                </div>
              </div>
              
              {/* Location Details */}
              <div className="p-6 bg-card">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  {location.name}
                </h3>
                <p className="text-muted-foreground text-sm flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-highlight flex-shrink-0" />
                  <span>{location.address}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
