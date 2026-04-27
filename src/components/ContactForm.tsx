"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
    <section className="section-padding bg-section-warm">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="section-eyebrow">Contact</p>
          <h1 className="page-title mb-4 mt-3">
            Get In Touch
          </h1>
          <p className="page-lead max-w-2xl">
            Have questions about our programs or want to book a session? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Sree Rudra CVN Kalari<br />
                      Lakkoor, Kothala, Ponkunnam<br />
                      Kottayam, Kerala
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                    <a href="tel:+918075484602" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                      +91 8075 484 602
                    </a>
                    <a href="tel:+917306901750" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                      +91 73069 01750 (WhatsApp, Call)
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <a href="mailto:info@sreerudrakalari.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      info@sreerudrakalari.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl font-heading">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form and our team will get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-primary hover:bg-accent text-primary-foreground px-8"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="shadow-lg overflow-hidden">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl font-heading">Find Us on Map</CardTitle>
              <CardDescription>
                Sree Rudra CVN Kalari, Lakkoor, Kothala, Ponkunnam
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[400px] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.5!2d76.5!3d9.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzYnMDAuMCJOIDc2wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sree Rudra CVN Kalari Location"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
