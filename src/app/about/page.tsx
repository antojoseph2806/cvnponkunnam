import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | CVN Kalari Kaduthuruthy",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}

