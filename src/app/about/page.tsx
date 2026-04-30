import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | AKM Sree Rudra Kalari",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <About variant="full" />
      </main>
      <Footer />
    </div>
  );
}

