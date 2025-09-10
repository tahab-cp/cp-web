import CaseStudiesSection02 from "@/components/sections/CaseStudiesSection02";
import ContactSection from "@/components/sections/ContactSection";
import OurServicesSection from "@/components/sections/OurServicesSection";
import LineStroke13 from "@/assets/decorative-elements/line-stroke-13.svg";

const ServicesPage = () => {
  return (
    <>
      <OurServicesSection />
      <div className="relative pt-[6.3rem]">
        <div className="absolute inset-0 z-[0]">
          <LineStroke13 className="absolute top-[-2rem] left-[-96.8rem] w-full" />
        </div>

        <CaseStudiesSection02 />
      </div>
      <ContactSection />
    </>
  );
};

export default ServicesPage;
