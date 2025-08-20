import AboutCaseStudiesSection from "@/components/sections/AboutCaseStudiesSection";
import AboutTestimonialsSection from "@/components/sections/AboutTestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import OurStatsSection from "@/components/sections/OurStatsSection";
import OurTeamSection from "@/components/sections/OurTeamSection";
import PitchDeckSection from "@/components/sections/PitchDeckSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

const AboutPage = () => {
  return (
    <main>
      <WhoWeAreSection />
      <WhyChooseUsSection />
      <PitchDeckSection />
      <div className="dark-gradient-bg">
        <OurStatsSection />
        <AboutTestimonialsSection />
      </div>
      <OurTeamSection />
      <AboutCaseStudiesSection />
      <ContactSection />
    </main>
  );
};

export default AboutPage;
