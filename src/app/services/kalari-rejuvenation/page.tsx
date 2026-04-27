import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Droplets, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Kalari Rejuvenation | Sree Rudra CVN Kalari",
};

export default function KalariRejuvenationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[calc(2.5rem+5rem)]">
        <section className="section-padding bg-section-warm">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <Droplets className="w-16 h-16 text-highlight mx-auto mb-4" />
              <h1 className="page-title mb-4">
                Kalari Rejuvenation
              </h1>
              <p className="page-lead">
                Traditional massage therapy for complete wellness
              </p>
            </div>

            <Card className="max-w-4xl mx-auto shadow-lg">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl font-heading">Therapeutic Kalari Massage</CardTitle>
                <CardDescription className="text-base">
                  Herbal oils applied according to body structure and nerve points
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="section-copy mb-6">
                  Kalari massage with herbal oils is applied according to a person's body structure and nerve points in order to enhance mind-strength, joy, health and flexibility of muscles. This ancient practice combines therapeutic touch with specially prepared herbal oils for complete rejuvenation.
                </p>

                <div className="mb-8">
                  <h3 className="font-heading text-2xl mb-4 text-foreground">Benefits of Kalari Massage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Enhanced Flexibility</p>
                        <p className="text-sm text-muted-foreground">Improved muscle elasticity</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Mind Strength</p>
                        <p className="text-sm text-muted-foreground">Mental clarity and focus</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Stress Relief</p>
                        <p className="text-sm text-muted-foreground">Deep relaxation and joy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Nerve Point Therapy</p>
                        <p className="text-sm text-muted-foreground">Targeted healing approach</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <a href="https://wa.me/917306901750?text=Hi,%20I%20would%20like%20to%20book%20a%20Kalari%20Rejuvenation%20massage%20session" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-6 text-lg font-semibold">
                      Book Your Massage Session
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    Contact us to schedule your rejuvenation therapy
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
