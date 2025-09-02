"use client";

import CaseStudiesGrid from "../common/CaseStudiesGrid";
import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import { caseStudiesData } from "@/constants/caseStudiesSection";
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

    // Label wobble
    gsap.to(caseStudiesLabel, {
      rotate: 5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      ref={caseStudiesRef}
      className="relative px-[3rem] pt-[10rem] xl:px-[0rem]"
    >
      <div className="relative mx-auto max-w-[120rem]">
        {/* Header */}
        <div className="sticky top-[6rem] flex flex-col items-center gap-[2rem] text-center">
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
        <div className="mt-20 flex flex-col gap-[4rem]">
          {caseStudiesData.map((caseStudy, index) => (
            <div
              key={index}
              className="sticky top-[35rem] xl:top-[28rem]" // 👈 adjust this to your header height
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
    </section>
  );
};

export default CaseStudiesSection;
