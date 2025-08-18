import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import OfferSection from "@/components/sections/OfferSection";
import ServiceSection from "@/components/sections/ServiceSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <OfferSection />
    </main>
  );
};

export default HomePage;
