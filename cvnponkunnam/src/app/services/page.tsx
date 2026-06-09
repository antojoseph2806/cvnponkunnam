import type { Metadata } from "next";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | CVN Kalari Kaduthuruthy",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[calc(2.5rem+5rem)]">
        <Services />
      </main>
      <Footer />
    </div>
  );
}

