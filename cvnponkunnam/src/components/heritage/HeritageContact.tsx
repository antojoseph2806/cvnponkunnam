"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "./motion";
import { useSiteContent } from "@/lib/content-store";
import { SectionHeader } from "./SectionHeader";

export function HeritageContact() {
  const { content } = useSiteContent();
  const contact = content.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\n\n${formData.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Consultation Request - AKM Sree Rudra")}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-heritage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Begin Your Journey"
          description="Book a consultation for training, Marma therapy, or wellness programs. We welcome inquiries from India and abroad."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: MapPin, title: "Location", text: `AKM Sree Rudra\n${contact.address}` },
              { icon: Phone, title: "Phone", text: contact.phoneDisplay, href: `tel:${contact.phone}` },
              { icon: Mail, title: "Email", text: contact.email, href: `mailto:${contact.email}` },
              { icon: Clock, title: "Hours", text: contact.hours },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 bg-white rounded-lg border border-heritage-green/10 shadow-sm"
              >
                <item.icon className="w-6 h-6 text-temple-gold shrink-0" aria-hidden />
                <div>
                  <h3 className="font-display text-heritage-green font-semibold mb-1">{item.title}</h3>
                  {"href" in item && item.href ? (
                    <a href={item.href} className="text-bronze text-sm whitespace-pre-line hover:text-heritage-green">
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-bronze text-sm whitespace-pre-line">{item.text}</p>
                  )}
                </div>
              </div>
            ))}
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 bg-[#25D366] text-white rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-lg border border-heritage-green/10 shadow-sm hover:border-temple-gold/30 transition-colors"
            >
              <img
                src="/assets/instagram-qr.png"
                alt="Follow us on Instagram"
                className="w-20 h-20 rounded-md object-cover shrink-0"
              />
              <div>
                <h3 className="font-display text-heritage-green font-semibold mb-1">Follow us on Instagram</h3>
                <p className="text-bronze text-xs leading-relaxed">
                  Scan the QR code or tap here to visit our Instagram page for training updates, events, and daily Kalari life.
                </p>
              </div>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white p-8 rounded-lg border border-heritage-green/10 shadow-lg space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-heritage-green">Name *</span>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 w-full px-4 py-3 border border-heritage-green/20 rounded-md focus:ring-2 focus:ring-temple-gold/50 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-heritage-green">Email *</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full px-4 py-3 border border-heritage-green/20 rounded-md focus:ring-2 focus:ring-temple-gold/50 outline-none"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-medium text-heritage-green">Phone</span>
              <input
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1 w-full px-4 py-3 border border-heritage-green/20 rounded-md focus:ring-2 focus:ring-temple-gold/50 outline-none"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-heritage-green">Program Interest</span>
              <select
                name="interest"
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="mt-1 w-full px-4 py-3 border border-heritage-green/20 rounded-md focus:ring-2 focus:ring-temple-gold/50 outline-none bg-white"
              >
                <option value="">Select a program</option>
                <option value="Kalaripayattu Training">Kalaripayattu Training</option>
                <option value="Marma Chikilsa">Marma Chikilsa</option>
                <option value="Wellness & Rejuvenation">Wellness & Rejuvenation</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-heritage-green">Message *</span>
              <textarea
                required
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 w-full px-4 py-3 border border-heritage-green/20 rounded-md focus:ring-2 focus:ring-temple-gold/50 outline-none resize-none"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-heritage-green text-heritage-cream rounded-md font-display hover:bg-heritage-green-light transition-colors w-full sm:w-auto justify-center"
            >
              <Send className="w-5 h-5" aria-hidden />
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
