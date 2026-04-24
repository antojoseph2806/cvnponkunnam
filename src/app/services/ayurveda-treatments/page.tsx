import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Ayurveda Treatments | Sree Rudra CVN Kalari",
};

export default function AyurvedaTreatmentsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[calc(2.5rem+5rem)]">
        <section className="section-padding bg-section-warm">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <Leaf className="w-16 h-16 text-highlight mx-auto mb-4" />
              <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
                Ayurveda Treatments
              </h1>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Traditional healing through nature's wisdom
              </p>
            </div>

            <Card className="max-w-4xl mx-auto shadow-lg">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl font-heading">Authentic Ayurvedic Care</CardTitle>
                <CardDescription className="text-base">
                  Hand-picked herbs and traditional preparation methods
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At EP Vasudeva Gurukkal's CVN Ayurveda Kalari, we have an exclusive section for Ayurvedic Treatments. All the medicaments are prepared out of herbs hand-picked from the plant kingdom, ensuring the highest quality and authenticity in every treatment.
                </p>

                <div className="mb-8">
                  <h3 className="font-heading text-xl mb-4 text-foreground">Treatment Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Natural Healing</p>
                        <p className="text-sm text-muted-foreground">Pure herbal medicaments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Holistic Approach</p>
                        <p className="text-sm text-muted-foreground">Mind, body, and spirit balance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Traditional Methods</p>
                        <p className="text-sm text-muted-foreground">Time-tested Ayurvedic practices</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Expert Care</p>
                        <p className="text-sm text-muted-foreground">Experienced practitioners</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <a href="https://wa.me/917306901750?text=Hi,%20I%20would%20like%20to%20book%20an%20Ayurveda%20Treatment" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-6 text-lg font-semibold">
                      Book Your Treatment
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    Contact us to schedule your Ayurvedic treatment
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
