import AboutCaseStudiesSection from "@/components/sections/AboutCaseStudiesSection";
import ContactSection from "@/components/sections/ContactSection";
import OurServicesSection from "@/components/sections/OurServicesSection";

const ServicesPage = () => {
  return (
    <main>
      <OurServicesSection />
      <div className="pt-[6.3rem]">
        <AboutCaseStudiesSection />
      </div>
      <ContactSection />
    </main>
  );
};

export default ServicesPage;
