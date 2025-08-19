import AboutSection from "@/components/sections/AboutSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import OfferSection from "@/components/sections/OfferSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <OfferSection />
      <CaseStudiesSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
