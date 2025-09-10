import AboutTestimonialsSection from "@/components/sections/AboutTestimonialsSection";
import CaseStudiesSection02 from "@/components/sections/CaseStudiesSection02";
import ContactSection from "@/components/sections/ContactSection";
import OurStatsSection from "@/components/sections/OurStatsSection";
import OurTeamSection from "@/components/sections/OurTeamSection";
import PitchDeckSection from "@/components/sections/PitchDeckSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import LineStroke09 from "@/assets/decorative-elements/line-stroke-09.svg";

const AboutPage = () => {
  return (
    <>
      <WhoWeAreSection />
      <WhyChooseUsSection />
      <PitchDeckSection />
      <div className="dark-gradient-bg">
        <OurStatsSection />
        <AboutTestimonialsSection />
      </div>
      <OurTeamSection />
      <div className="relative">
        <div className="absolute inset-0 z-[0]">
          <LineStroke09 className="absolute top-[20rem] left-[-23.8rem] w-full xl:top-[10.6rem]" />
        </div>

        <CaseStudiesSection02 />
      </div>
      <ContactSection />
    </>
  );
};

export default AboutPage;
