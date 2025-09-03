"use client";

import CaseStudiesGrid from "../common/CaseStudiesGrid";
import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import { caseStudiesData } from "@/constants/caseStudiesSection";
import gsap from "gsap";
import SectionLabel2 from "../common/SectionLabel2";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import CaseStudiesMarquee from "../common/CaseStudiesMarquee";

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
    <section ref={caseStudiesRef} className="relative pt-[5rem] xl:pt-[10rem]">
      <div className="relative mx-auto max-w-[120rem] px-[3rem] xl:px-[0rem]">
        {/* Header */}
        <div className="top-[6rem] flex flex-col items-center gap-[2rem] text-center xl:sticky">
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
        <div className="mt-20 hidden flex-col gap-[4rem] xl:flex">
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

      {/* Responsive Cards */}
      <div className="mt-10 block w-full overflow-hidden lg:mt-20 xl:hidden">
        <CaseStudiesMarquee />
      </div>
    </section>
  );
};

export default CaseStudiesSection;
