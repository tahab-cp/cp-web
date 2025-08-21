import CaseStudiesSlider from "../common/CaseStudiesSlider";
import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import Image from "next/image";
import bgLine from "../../assets/images/line-stroke-07.svg";

const AboutCaseStudiesSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-[0]">
        <Image
          src={bgLine}
          alt="Background line"
          width={1055.55}
          height={389.83}
          className="absolute top-[10.6rem] left-[-23.8rem]"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-[2rem] text-center">
        <SectionLabel
          text="Case Studies"
          textColor="text-text-primary"
          borderColor="border-text-primary"
        />

        <SectionTitle label="Pixel-Perfect Projects by Creative Pixels" />

        <div className="max-w-[76.5rem]">
          <SectionDescription label="Based in Manchester, we craft bespoke websites and branding that are as smart as they are stunning." />
        </div>
      </div>

      <div className="mx-auto mt-[5rem] max-w-[122.3rem]">
        <CaseStudiesSlider />
      </div>
    </section>
  );
};

export default AboutCaseStudiesSection;
