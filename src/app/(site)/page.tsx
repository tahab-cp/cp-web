import CtaSection1 from "@/components/common/CtaSection1";
import LineStroke04 from "@/assets/decorative-elements/line-stroke-04.svg";
import AboutSection from "@/components/sections/AboutSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhatWeOfferSection from "@/components/sections/WhatWeOfferSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover the story of CreativePixels, our vision, and how we help businesses stand out with cutting-edge design.",
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatWeOfferSection />
      <CaseStudiesSection />
      <section className="relative px-[2rem] py-[5rem] xl:py-[10rem]">
        {/* Decorative stroke line */}
        <div className="absolute inset-0 z-[0]">
          <LineStroke04 className="absolute bottom-0 left-1/2 w-full -translate-x-1/2" />
        </div>

        <div className="mx-auto max-w-[120rem]">
          <CtaSection1 />
        </div>
      </section>
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
