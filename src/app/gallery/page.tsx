import type { Metadata } from "next";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | CVN Kalari Kaduthuruthy",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Gallery showViewAllLink={false} />
      </main>
      <Footer />
    </div>
  );
}

