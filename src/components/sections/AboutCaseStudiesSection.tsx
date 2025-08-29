import CaseStudiesSlider from "../common/CaseStudiesSlider";
import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import LineStroke15 from "../decorativeElements/LineStroke15";

const AboutCaseStudiesSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-[0]">
        <LineStroke15 className="absolute top-[10.6rem] left-[-23.8rem]" />
      </div>

      <div className="relative z-[3] flex flex-col items-center gap-[2rem] px-[2rem] text-center xl:px-[0rem]">
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

      <div className="relative z-[3] mx-auto mt-[5rem] max-w-[122.3rem] px-[2rem] xl:px-[0rem]">
        <CaseStudiesSlider />
      </div>
    </section>
  );
};

export default AboutCaseStudiesSection;
