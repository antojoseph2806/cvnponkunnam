import type { Metadata } from "next";
import { HeritageSiteLayout, HeritagePageHero, HeritageContact } from "@/components/heritage";

export const metadata: Metadata = {
  title: "Contact | Book Consultation | AKM Sree Rudra Kottayam",
  description:
    "Contact AKM Sree Rudra for Kalaripayattu training, Marma Chikilsa, and wellness programs in Lakkattoor, Kottayam, Kerala.",
};

export default function ContactPage() {
  return (
    <HeritageSiteLayout>
      <main>
        <HeritagePageHero title="Contact Us" subtitle="We welcome inquiries from India and around the world" />
        <HeritageContact />
      </main>
    </HeritageSiteLayout>
  );
}
