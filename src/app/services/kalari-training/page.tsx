import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Kalari Training | Sree Rudra CVN Kalari",
};

export default function KalariTrainingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[calc(2.5rem+5rem)]">
        <section className="section-padding bg-section-warm">
          <div className="container-narrow">
              <div className="text-center mb-12">
                <p className="section-eyebrow mb-2">Sree Rudra CVN Kalari</p>
                <h2 className="page-title mb-4">
                  One Month Intense Kalari Training Program
                </h2>
                <p className="page-lead max-w-3xl">
                  Lakkoor, Kothala, Ponkunnam
                </p>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Image Column - Takes 1/3 width */}
                <div className="lg:col-span-1">
                  <div className="rounded-lg overflow-hidden shadow-lg lg:sticky lg:top-32">
                    <img 
                      src="/one month training.jpeg" 
                      alt="One Month Intense Kalari Training Program" 
                      className="w-full h-auto object-cover"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Content Column - Takes 2/3 width */}
                <div className="lg:col-span-2">
                  <Card className="shadow-lg">
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="text-2xl font-heading">Program Overview</CardTitle>
                      <CardDescription className="text-base">
                        Learn the most important techniques of Kalarippayattu in just 30 days
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="section-copy mb-6">
                        The One Month Intense Kalari Training Program is designed to teach the most important techniques of Kalarippayattu that would normally take nearly a year to learn. This training is beneficial for both men and women of all age groups. The 30-day program is carefully structured to help participants understand Kalarippayattu more deeply while also bringing renewed energy and balance to both body and mind.
                      </p>

                      {/* Program Highlights */}
                      <div className="mb-8">
                        <h3 className="font-heading text-xl mb-4 text-foreground">What You'll Learn</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-foreground">Basic Kalari Leg Movements</p>
                              <p className="text-sm text-muted-foreground">Foundation techniques and footwork</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-foreground">Meippayattu</p>
                              <p className="text-sm text-muted-foreground">Body control exercises</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-foreground">Weapon Training</p>
                              <p className="text-sm text-muted-foreground">Traditional Kalari weapons</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-foreground">Verum Kai</p>
                              <p className="text-sm text-muted-foreground">Bare-hand self-defence techniques</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-foreground">Basic Yoga</p>
                              <p className="text-sm text-muted-foreground">Mind-body integration practices</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-foreground">Ayurvedic Body Massage</p>
                              <p className="text-sm text-muted-foreground">For body flexibility and relaxation</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Program Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-section-warm rounded-lg">
                        <div className="flex items-center gap-3">
                          <Clock className="w-8 h-8 text-highlight" />
                          <div>
                            <p className="text-sm text-muted-foreground">Duration</p>
                            <p className="font-semibold text-foreground">30 Days</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="w-8 h-8 text-highlight" />
                          <div>
                            <p className="text-sm text-muted-foreground">Suitable For</p>
                            <p className="font-semibold text-foreground">All Age Groups</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="w-8 h-8 text-highlight" />
                          <div>
                            <p className="text-sm text-muted-foreground">Training Type</p>
                            <p className="font-semibold text-foreground">Intensive Program</p>
                          </div>
                        </div>
                      </div>

                      {/* Booking Button */}
                      <div className="text-center pt-4">
                        <a href="https://wa.me/917306901750?text=Hi%2C%20I%27m%20interested%20in%20the%20One%20Month%20Intensive%20Kalari%20Training%20Program%20at%20Sree%20Rudra%20CVN%20Kalari.%20Could%20you%20please%20share%20details%20about%20fees%2C%20schedule%2C%20and%20availability%3F%20Thank%20you." target="_blank" rel="noopener noreferrer">
                          <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-6 text-lg font-semibold">
                            Book Your Training Program
                          </Button>
                        </a>
                        <p className="text-sm text-muted-foreground mt-4">
                          Contact us to reserve your spot or learn more about the program
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
