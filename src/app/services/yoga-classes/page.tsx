import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sun, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buildWhatsAppHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Yoga Classes | Sree Rudra CVN Kalari",
};

export default function YogaClassesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[calc(2.5rem+5rem)]">
        <section className="section-padding bg-section-warm">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <Sun className="w-16 h-16 text-highlight mx-auto mb-4" />
              <h1 className="page-title mb-4">
                Yoga Classes
              </h1>
              <p className="page-lead">
                Ancient practices for modern wellness
              </p>
            </div>

            <Card className="max-w-4xl mx-auto shadow-lg">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl font-heading">Traditional Yoga Practice</CardTitle>
                <CardDescription className="text-base">
                  Physical, mental, and spiritual practices from ancient India
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="section-copy mb-6">
                  Yoga comprises physical, mental, and spiritual practices originating from ancient India. Its goal is to control the mind and achieve stillness, acknowledging a detached witness-consciousness. Our yoga classes integrate traditional techniques with modern understanding to help you achieve balance and inner peace.
                </p>

                <div className="mb-8">
                  <h3 className="font-heading text-2xl mb-4 text-foreground">Benefits of Yoga Practice</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Mind Control</p>
                        <p className="text-sm text-muted-foreground">Achieve mental stillness and clarity</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Physical Wellness</p>
                        <p className="text-sm text-muted-foreground">Improved flexibility and strength</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Spiritual Growth</p>
                        <p className="text-sm text-muted-foreground">Develop witness-consciousness</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Stress Management</p>
                        <p className="text-sm text-muted-foreground">Natural relaxation techniques</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <a href={buildWhatsAppHref("Hi, I would like to join the Yoga Classes")} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-6 text-lg font-semibold">
                      Join Our Yoga Classes
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    Contact us to start your yoga journey
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
