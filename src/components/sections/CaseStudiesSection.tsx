"use client";

import CaseStudiesGrid from "../common/CaseStudiesGrid";
import CtaSection1 from "../common/CtaSection1";
import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { caseStudiesData } from "@/constants/caseStudiesSection";
import LineStroke04 from "../decorativeElements/LineStroke04";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CaseStudiesSection = () => {
  const caseStudiesContentRef = useRef<HTMLDivElement>(null);
  const caseStudiesGridRef = useRef<HTMLDivElement>(null);
  const caseStudiesCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (caseStudiesContentRef.current) {
      const caseStudiesAnimateItem =
        caseStudiesContentRef.current.querySelectorAll(
          ".case-studies-animate-item",
        );
      gsap.set(caseStudiesAnimateItem, { opacity: 0, y: 30 });

      gsap.to(caseStudiesAnimateItem, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: caseStudiesContentRef.current,
          start: "top 60%", // when cards section enters viewport
          toggleActions: "play none none none", // play only once
        },
      });
    }

    if (caseStudiesGridRef.current) {
      const items = caseStudiesGridRef.current.querySelectorAll(
        ".case-studies-grid-animate-item",
      );
      gsap.set(items, { opacity: 0, y: 50 });

      items.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item, // 👈 each card triggers itself
            start: "top 85%", // when that card enters viewport
            toggleActions: "play none none none", // play once
          },
        });
      });
    }

    if (caseStudiesCtaRef.current) {
      const caseStudiesCtaAnimateItem =
        caseStudiesCtaRef.current.querySelectorAll(
          ".case-studies-cta-animate-item",
        );
      gsap.set(caseStudiesCtaAnimateItem, { opacity: 0, y: 30 });

      gsap.to(caseStudiesCtaAnimateItem, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",

        scrollTrigger: {
          trigger: caseStudiesCtaRef.current,
          start: "top 80%", // when cards section enters viewport
          toggleActions: "play none none none", // play only once
        },
      });
    }
  }, []);

  return (
    <section
      ref={caseStudiesContentRef}
      className="relative pt-[10rem] pb-[10.8rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0] overflow-hidden">
        <LineStroke04 className="absolute bottom-0 left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-[1] mx-auto max-w-[120.3rem]">
        <div className="case-studies-animate-item flex flex-col items-center gap-[2rem] text-center">
          <SectionLabel
            text="Case Studies"
            borderColor="border-text-primary"
            textColor="text-text-primary"
          />

          <div className="case-studies-animate-item">
            <SectionTitle label="Pixel-Perfect Projects by Creative Pixels" />
          </div>

          <div className="case-studies-animate-item max-w-[76.5rem]">
            <SectionDescription label="Based in Manchester, we craft bespoke websites and branding that are as smart as they are stunning." />
          </div>
        </div>

        <div
          ref={caseStudiesGridRef}
          className="mt-[5.1rem] mb-[9rem] flex flex-col gap-[5rem]"
        >
          {caseStudiesData.map((caseStudy, index) => (
            <CaseStudiesGrid
              key={index}
              {...caseStudy}
              className={`case-studies-grid-animate-item ${index % 2 === 1 ? "case-studies-grid-reverse" : ""}`}
            />
          ))}
        </div>

        <div ref={caseStudiesCtaRef}>
          <div className="case-studies-cta-animate-item">
            <CtaSection1 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
