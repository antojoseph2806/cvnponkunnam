import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import InfoBar from "@/components/InfoBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import StickyContactButtons from "@/components/StickyContactButtons";
import { getGalleryImages } from "@/lib/gallery";

export default async function HomePage() {
  const images = await getGalleryImages();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSlider />
        <InfoBar />
        <Services />
        <About variant="home" />
        <Testimonials />
        <Gallery images={images} previewCount={6} />
        <Locations />
        <Stats />
      </main>
      <Footer />
      <StickyContactButtons />
    </div>
  );
}

