import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | AKM Sree Rudra CVN Kalari | Traditional Kalaripayattu & Healing Center",
  description:
    "Learn about AKM Sree Rudra CVN Kalari, a premier center for authentic Kalaripayattu training and traditional healing in Kerala. Guided by experienced Gurukkals in the CVN tradition, we preserve ancient martial arts and healing wisdom for modern practitioners.",
  keywords:
    "about CVN Kalari, Kalari Gurukkal, CVN tradition, Kalaripayattu history, traditional martial arts Kerala, Kalari lineage, authentic Kalaripayattu center, Kerala martial arts heritage",
  openGraph: {
    title: "About Us | AKM Sree Rudra CVN Kalari",
    description: "Discover our tradition of authentic Kalaripayattu training and healing in Kerala.",
    images: [
      {
        url: "/assets/about.png",
        width: 1200,
        height: 630,
        alt: "About AKM Sree Rudra CVN Kalari",
      },
    ],
  },
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

