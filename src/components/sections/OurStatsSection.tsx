import SectionLabel from "../common/SectionLabel";
import Image from "next/image";
import bgLine from "../../assets/images/line-stroke-03.svg";

const OurStatsSection = () => {
  return (
    <section className="relative pt-[8.5rem] pb-[9.732rem]">
      <div className="absolute inset-0 z-[0]">
        <Image
          src={bgLine}
          alt="Background line"
          width={1453}
          height={372}
          className="absolute top-[14.2rem] left-1/2 -translate-x-1/2 opacity-50"
          priority
        />
      </div>

      <div className="relative z-[1] mx-auto flex max-w-[120.3rem] flex-col items-center gap-[4.4rem]">
        <SectionLabel text="Our Stats" />

        <div className="flex h-[31rem] items-start gap-[3rem]">
          <div className="our-stats-card">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              200+
            </h4>

            <h6 className="text-[2rem] font-medium text-[#FFC300]">
              Web Projects
            </h6>
          </div>

          <div className="our-stats-card top-[8rem]">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              15+
            </h4>

            <h6 className="text-[2rem] font-medium text-[#FF37B3]">
              Years of Experience
            </h6>
          </div>

          <div className="our-stats-card">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              150+
            </h4>

            <h6 className="text-[2rem] font-medium text-[#FF8630]">
              Trusted Clients
            </h6>
          </div>

          <div className="our-stats-card top-[8rem]">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              20+
            </h4>

            <h6 className="text-[2rem] font-medium text-[#F14A58]">
              Skillful Team Members
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStatsSection;
