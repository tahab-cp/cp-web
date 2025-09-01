"use client";

import CaseStudiesGrid from "../common/CaseStudiesGrid";
import CtaSection1 from "../common/CtaSection1";
import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import { caseStudiesData } from "@/constants/caseStudiesSection";
import LineStroke04 from "../decorativeElements/LineStroke04";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SectionLabel2 from "../common/SectionLabel2";

const CaseStudiesSection = () => {
  const caseStudiesContentRef = useRef<HTMLDivElement>(null);
  const caseStudiesCtaContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (caseStudiesContentRef.current) {
      const caseStudiesLabel = caseStudiesContentRef.current.querySelectorAll(
        ".case-studies-label-animate",
      );
      const caseStudiesHeading = caseStudiesContentRef.current.querySelectorAll(
        ".case-studies-heading-animate",
      );
      const caseStudiesDesc = caseStudiesContentRef.current.querySelectorAll(
        ".case-studies-desc-animate",
      );

      // Badge Animation
      gsap.to(caseStudiesLabel, {
        rotate: 5, // tilt slightly
        duration: 0.6,
        yoyo: true, // go back
        repeat: -1, // loop forever
        ease: "power1.inOut",
      });

      // Heading Animation
      gsap.from(caseStudiesHeading, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: caseStudiesContentRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Desc Animation
      gsap.from(caseStudiesDesc, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: caseStudiesContentRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }

    if (caseStudiesCtaContentRef.current) {
      const caseStudiesCta = caseStudiesCtaContentRef.current.querySelectorAll(
        ".case-studies-cta-animate",
      );

      // Cta Card Animation
      gsap.from(caseStudiesCta, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: caseStudiesCtaContentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section className="relative px-[2rem] pt-[10rem] pb-[10.8rem] xl:px-[0rem]">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0] overflow-hidden">
        <LineStroke04 className="absolute bottom-0 left-1/2 -translate-x-1/2" />
      </div>

      <div
        ref={caseStudiesContentRef}
        className="relative z-[1] mx-auto max-w-[120.3rem]"
      >
        <div className="flex flex-col items-center gap-[2rem] text-center">
          <div className="rotate-[-2deg]">
            <div className="case-studies-label-animate">
              <SectionLabel2 text="Case Studies" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="case-studies-heading-animate">
              <SectionTitle label="Pixel-Perfect Projects by Creative Pixels" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="case-studies-desc-animate max-w-[76.5rem]">
              <SectionDescription label="Based in Manchester, we craft bespoke websites and branding that are as smart as they are stunning." />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[5rem] pt-[5.1rem] pb-[9rem]">
          {caseStudiesData.map((caseStudy, index) => (
            <div key={index} className="top-[15rem] lg:sticky">
              <CaseStudiesGrid
                {...caseStudy}
                className={` ${index % 2 === 1 ? "lg:case-studies-grid-reverse" : ""}`}
              />
            </div>
          ))}
        </div>

        <div ref={caseStudiesCtaContentRef}>
          <div className="case-studies-cta-animate">
            <CtaSection1 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
