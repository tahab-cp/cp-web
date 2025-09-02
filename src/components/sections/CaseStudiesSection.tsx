"use client";

import CaseStudiesGrid from "../common/CaseStudiesGrid";
import CtaSection1 from "../common/CtaSection1";
import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import { caseStudiesData } from "@/constants/caseStudiesSection";
import LineStroke04 from "../decorativeElements/LineStroke04";
import gsap from "gsap";
import SectionLabel2 from "../common/SectionLabel2";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const CaseStudiesSection = () => {
  const caseStudiesRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const caseStudies = caseStudiesRef.current;
    if (!caseStudies) return;

    const caseStudiesLabel = caseStudies.querySelector(".case-studies-label");
    const caseStudiesCtaCard = caseStudies.querySelector(
      ".case-studies-cta-card",
    );
    const caseStudiesCards = gsap.utils.toArray<HTMLElement>(".case-card");

    // Label wobble
    gsap.to(caseStudiesLabel, {
      rotate: 5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    // CTA fade-in
    gsap.from(caseStudiesCtaCard, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: caseStudiesCtaCard,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Stack effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".case-studies-wrapper",
        start: "top top",
        end: "+=" + 500 * caseStudiesCards.length, // control scroll distance
        scrub: true,
        pin: true,
      },
    });

    caseStudiesCards.forEach((card, i) => {
      if (i === 0) return; // skip first card since it's already visible
      tl.to(
        card,
        {
          opacity: 1,
          duration: 0.5,
        },
        i,
      ); // each card fades in one by one
    });
  }, []);

  return (
    <section
      ref={caseStudiesRef}
      className="relative px-[2rem] pb-[10.8rem] xl:px-[0rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0] overflow-hidden">
        <LineStroke04 className="absolute bottom-0 left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-[1] mx-auto max-w-[120.3rem]">
        {/* Wrapper */}
        <div className="case-studies-wrapper">
          {/* Header */}
          <div className="flex flex-col items-center gap-[2rem] pt-[5rem] pb-[3rem] text-center">
            <div className="rotate-[-2deg]">
              <div className="case-studies-label">
                <SectionLabel2 text="Case Studies" />
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="case-studies-title">
                <SectionTitle label="Pixel-Perfect Projects by Creative Pixels" />
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="case-studies-desc max-w-[76.5rem]">
                <SectionDescription label="Based in Manchester, we craft bespoke websites and branding that are as smart as they are stunning." />
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="relative h-[160vh] md:h-[150vh] lg:h-[100vh] xl:h-[80vh]">
            {caseStudiesData.map((caseStudy, index) => (
              <div
                key={index}
                className={`case-card absolute inset-0 ${
                  index === 0 ? "opacity-100" : "opacity-0"
                }`}
                style={{ zIndex: index + 1 }}
              >
                <CaseStudiesGrid
                  {...caseStudy}
                  className={`${
                    index % 2 === 1 ? "lg:case-studies-grid-reverse" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="case-studies-cta-card">
          <CtaSection1 />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
