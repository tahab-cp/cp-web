"use client";

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
      <AboutSection />
      <WhatWeOfferSection />
      <CaseStudiesSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
