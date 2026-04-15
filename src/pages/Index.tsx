import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import InfoBar from "@/components/InfoBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";

const Index = () => (
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
      <Packages />
    </main>
    <Footer />
  </div>
);

export default Index;
