import type { Metadata } from "next";
import Header from "@/components/Header";
import InfoBar from "@/components/InfoBar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | AKM Sree Rudra CVN Kalari | Kalaripayattu Training Center in Kottayam",
  description:
    "Contact AKM Sree Rudra CVN Kalari for Kalaripayattu training, Marma Chikitsa, and Kalari rejuvenation therapy. Located in Lakkattoor, Kottayam, Kerala. Call us or visit our center for authentic traditional healing and martial arts training.",
  keywords:
    "contact CVN Kalari, Kalari center Kottayam, Kalaripayattu training contact, Marma Chikitsa appointment, Kalari location Kerala, CVN Kalari address, Ponkunnam Kalari center",
  openGraph: {
    title: "Contact Us | AKM Sree Rudra CVN Kalari",
    description: "Get in touch with us for Kalaripayattu training and traditional healing services in Kerala.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[calc(2.5rem+5rem)]">
        <InfoBar />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

