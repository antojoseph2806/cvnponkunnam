"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { CONTACT_PHONE_DISPLAY, CONTACT_TEL_HREF, CONTACT_WHATSAPP_HREF } from "@/lib/contact";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-section-warm">
      <div className="container-narrow">
        <div className="motion-reveal motion-fade-up motion-delay-1 text-center mb-12">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title mt-3 mb-4">
            Contact <span className="text-highlight">Us</span>
          </h2>
          <p className="page-lead max-w-2xl mx-auto">
            Have questions about our programs? We're here to help you begin your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="motion-reveal motion-fade-up motion-delay-2 pest-contact-card bg-gradient-to-br from-primary to-accent rounded-xl p-6 shadow-lg text-white">
            <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Sree Rudra CVN Kalari<br />
              Lakkattoor<br />
              Kottayam, Kerala
            </p>
          </div>

          <div className="motion-reveal motion-fade-up motion-delay-3 pest-contact-card bg-gradient-to-br from-primary to-accent rounded-xl p-6 shadow-lg text-white">
            <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Call Us</h3>
            <a href={CONTACT_TEL_HREF} className="text-white/90 hover:text-white transition-colors block text-sm mb-1">
              {CONTACT_PHONE_DISPLAY}
            </a>
            <a href={CONTACT_WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors block text-sm">
              WhatsApp Available
            </a>
          </div>

          <div className="motion-reveal motion-fade-up motion-delay-4 pest-contact-card bg-gradient-to-br from-primary to-accent rounded-xl p-6 shadow-lg text-white">
            <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Training Hours</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Mon - Sat: 7:00 AM - 7:30 PM<br />
              Sunday: 7:00 AM - 12:00 PM
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="motion-reveal motion-fade-left motion-delay-2">
            <Card className="shadow-xl border-primary/10">
              <CardHeader className="bg-gradient-to-br from-section-warm to-white border-b border-primary/10">
                <CardTitle className="text-2xl font-heading text-foreground">Send Us a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-11 border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-11 border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-11 border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-11 border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none border-primary/20 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="pest-btn-sweep w-full bg-primary text-primary-foreground font-bold h-12"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div className="motion-reveal motion-fade-right motion-delay-3 space-y-6">
            <Card className="shadow-xl border-primary/10 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-section-warm to-white border-b border-primary/10">
                <CardTitle className="text-2xl font-heading text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-highlight" />
                  Find Us on Map
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Sree Rudra CVN Kalari, Lakkattoor
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-[300px] bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.5!2d76.5!3d9.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzYnMDAuMCJOIDc2wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sree Rudra CVN Kalari Location"
                  />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Sree+Rudra+CVN+Kalari+Lakkattoor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-accent transition-all hover:scale-105"
                  >
                    Open in Maps
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-primary/10">
              <div className="flex items-start gap-3 mb-4">
                <Mail className="w-5 h-5 text-highlight mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">Email Us</h3>
                  <a href="mailto:info@akmsreerudra.com" className="text-muted-foreground hover:text-highlight transition-colors text-sm break-all">
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

export default ContactForm;
