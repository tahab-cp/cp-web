"use client";

import { useRef } from "react";
import CaseStudiesSlider from "../common/CaseStudiesSlider";
import SectionDescription from "../common/SectionDescription";
import SectionLabel2 from "../common/SectionLabel2";
import SectionTitle from "../common/SectionTitle";
import LineStroke15 from "../decorativeElements/LineStroke15";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutCaseStudiesSection = () => {
  const aboutCaseStudiesRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const aboutCaseStudies = aboutCaseStudiesRef.current;
    if (!aboutCaseStudies) return;

    const aboutCaseStudiesLabel = aboutCaseStudies.querySelector(
      ".about-case-studies-label",
    );
    const aboutCaseStudiesTitle = aboutCaseStudies.querySelector(
      ".about-case-studies-title",
    );
    const aboutCaseStudiesDesc = aboutCaseStudies.querySelector(
      ".about-case-studies-desc",
    );

    // Label wobble
    gsap.to(aboutCaseStudiesLabel, {
      rotate: 5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.from(aboutCaseStudiesTitle, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: aboutCaseStudiesTitle,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(aboutCaseStudiesDesc, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: aboutCaseStudiesDesc,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section ref={aboutCaseStudiesRef} className="relative">
      <div className="absolute inset-0 z-[0]">
        <LineStroke15 className="absolute top-[20rem] left-[-23.8rem] w-full xl:top-[10.6rem]" />
      </div>

      <div className="relative z-[3] flex flex-col items-center gap-[2rem] px-[2rem] text-center xl:px-[0rem]">
        <div className="rotate-[-2deg]">
          <div className="about-case-studies-label">
            <SectionLabel2
              text="Case Studies"
              bgColor="bg-[#81f2b4]"
              textColor="text-text-primary"
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="about-case-studies-title">
            <SectionTitle label="Pixel-Perfect Projects by Creative Pixels" />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="about-case-studies-desc max-w-[76.5rem]">
            <SectionDescription label="Based in Manchester, we craft bespoke websites and branding that are as smart as they are stunning." />
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="relative z-[3] mx-auto mt-[2rem] max-w-[122.3rem] px-[2rem] md:mt-[5rem] xl:px-[0rem]">
          <CaseStudiesSlider />
        </div>
      </div>
    </section>
  );
};

export default AboutCaseStudiesSection;
