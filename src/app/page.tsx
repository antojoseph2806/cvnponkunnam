import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import InfoBar from "@/components/InfoBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[calc(2.5rem+5rem)]">
        <HeroSlider />
        <InfoBar />
        <Services />
        <About />
        <Testimonials />
        <Gallery />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}

