"use client";

import CtaSection1 from "@/components/common/CtaSection1";
import TestBtn from "@/components/common/TestBtn";
import LineStroke04 from "@/components/decorativeElements/LineStroke04";
import AboutSection from "@/components/sections/AboutSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhatWeOfferSection from "@/components/sections/WhatWeOfferSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      {/* <TestBtn /> */}
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
    </main>
  );
};

export default HomePage;
