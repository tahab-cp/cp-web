import CaseStudiesGrid from "../common/CaseStudiesGrid";
import CtaSection1 from "../common/CtaSection1";
import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { caseStudiesData } from "@/constants/caseStudiesSection";
import bgLine from "../../assets/images/line-stroke-03.svg";
import Image from "next/image";

const CaseStudiesSection = () => {
  return (
    <section className="relative pt-[10rem] pb-[10.8rem]">
      <div className="mx-auto max-w-[120.3rem]">
        <div className="flex flex-col items-center gap-[2rem] text-center">
          <SectionLabel
            text="Case Studies"
            borderColor="border-text-primary"
            textColor="text-text-primary"
          />

          <SectionTitle label="Pixel-Perfect Projects by Creative Pixels" />

          <div className="max-w-[76.5rem]">
            <SectionDescription label="Based in Manchester, we craft bespoke websites and branding that are as smart as they are stunning." />
          </div>
        </div>

        <div className="mt-[5.1rem] mb-[9rem] flex flex-col gap-[5rem]">
          {caseStudiesData.map((caseStudy, index) => (
            <CaseStudiesGrid
              key={index}
              {...caseStudy}
              className={index % 2 === 1 ? "case-studies-grid-reverse" : ""}
            />
          ))}
        </div>

        <CtaSection1 />
      </div>

      <div className="absolute bottom-[0rem] left-0 z-[-1] w-full">
        <Image
          src={bgLine}
          alt="Decorative line"
          width={1659.55}
          height={612.9}
          className="pointer-events-none h-auto w-full select-none"
        />
      </div>
    </section>
  );
};

export default CaseStudiesSection;
