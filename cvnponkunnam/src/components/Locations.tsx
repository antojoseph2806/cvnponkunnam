"use client";

import { MapPin, ExternalLink, Phone, Mail, ArrowRight } from "lucide-react";

const locations = [
  {
    name: "Sree Rudra CVN Kalari",
    address: "Lakkattoor",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sree+Rudra+CVN+Kalari+Lakkattoor",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.5!2d76.5!3d9.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzYnMDAuMCJOIDc2wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890",
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
          <p className="mt-4 text-muted-foreground">
            Find us in the heart of Kerala, where tradition meets transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Left Side - Quick Links */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 shadow-lg h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
                <div className="bg-white/20 p-2.5 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Quick Links</h3>
              </div>
              <ul className="space-y-4 flex-1">
                <li>
                  <a href="/services/kalari-training" className="flex items-center gap-3 text-white/90 hover:text-white hover:translate-x-1 transition-all group py-2">
                    <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-base font-medium">Kalaripayattu Training</span>
                  </a>
                </li>
                <li>
                  <a href="/services/marma-chikilsa" className="flex items-center gap-3 text-white/90 hover:text-white hover:translate-x-1 transition-all group py-2">
                    <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-base font-medium">Marma Chikitsa</span>
                  </a>
                </li>
                <li>
                  <a href="/services/kalari-rejuvenation" className="flex items-center gap-3 text-white/90 hover:text-white hover:translate-x-1 transition-all group py-2">
                    <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-base font-medium">Kalari Rejuvenation</span>
                  </a>
                </li>
                <li>
                  <a href="/about" className="flex items-center gap-3 text-white/90 hover:text-white hover:translate-x-1 transition-all group py-2">
                    <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-base font-medium">About Us</span>
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="flex items-center gap-3 text-white/90 hover:text-white hover:translate-x-1 transition-all group py-2">
                    <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-base font-medium">Gallery</span>
                  </a>
                </li>
                <li>
                  <a href="/contact" className="flex items-center gap-3 text-white/90 hover:text-white hover:translate-x-1 transition-all group py-2">
                    <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-base font-medium">Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Center - Map */}
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
                {/* Map Preview */}
                <div className="relative h-80 bg-muted overflow-hidden flex-shrink-0">
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
                    className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-accent transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Open in Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  
                  {/* Location Pin Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-highlight text-primary-foreground p-5 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-10 h-10" />
                    </div>
                  </div>
                </div>
                
                {/* Location Details */}
                <div className="p-6 bg-white flex-1 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {location.name}
                  </h3>
                  <p className="text-muted-foreground text-base flex items-start gap-2">
                    <MapPin className="w-5 h-5 mt-0.5 text-highlight flex-shrink-0" />
                    <span>{location.address}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Right Side - Location Info */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 shadow-lg h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
                <div className="bg-white/20 p-2.5 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Location</h3>
              </div>
              <div className="space-y-6 flex-1">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/70 mb-3 font-bold">Address</p>
                  <p className="text-base font-semibold text-white leading-relaxed">
                    Sree Rudra CVN Kalari<br />
                    Lakkattoor, Kottayam<br />
                    Kerala, India
                  </p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-xs uppercase tracking-wider text-white/70 mb-3 font-bold">Phone</p>
                  <a 
                    href="tel:+91XXXXXXXXXX" 
                    className="flex items-center gap-3 text-base font-semibold text-white hover:text-highlight-light transition-colors group"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                    +91-XXXXXXXXXX
                  </a>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-xs uppercase tracking-wider text-white/70 mb-3 font-bold">Email</p>
                  <a 
                    href="mailto:info@akmsreerudra.com" 
                    className="flex items-center gap-3 text-base font-semibold text-white hover:text-highlight-light transition-colors break-all group"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    info@akmsreerudra.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
