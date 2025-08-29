import SectionLabel from "../common/SectionLabel";
import LineStroke14 from "../decorativeElements/LineStroke14";

const OurStatsSection = () => {
  return (
    <section className="relative px-[2rem] pt-[8.5rem] pb-[5rem] xl:px-[0rem] xl:pb-[9.732rem]">
      <div className="absolute inset-0 z-[0]">
        <LineStroke14 className="absolute top-[14.2rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[3] mx-auto flex max-w-[130rem] flex-col items-center gap-[4.4rem]">
        <SectionLabel text="Our Stats" />

        <div className="grid grid-cols-1 gap-[2rem] md:grid-cols-2 xl:grid-cols-4">
          <div className="our-stats-card">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              200+
            </h4>

            <h6 className="text-[2rem] font-medium text-[#FFC300]">
              Web Projects
            </h6>
          </div>

          <div className="our-stats-card xl:top-[8rem]">
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

          <div className="our-stats-card xl:top-[8rem]">
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
