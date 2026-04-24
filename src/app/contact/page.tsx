import type { Metadata } from "next";
import Header from "@/components/Header";
import InfoBar from "@/components/InfoBar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Sree Rudra CVN Kalari",
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

