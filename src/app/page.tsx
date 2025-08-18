"use client";

import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      once: true, // animate only once
    });
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
    </main>
  );
};

export default HomePage;
