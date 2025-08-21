import { caseStudiesData } from "@/constants/caseStudiesSection";
import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import CaseStudiesGrid from "../common/CaseStudiesGrid";
import Image from "next/image";
import subtractDark from "../../assets/images/icons/subtract-dark.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";

const OurWorkSection = () => {
  return (
    <section className="pt-[20.6rem]">
      <div className="mx-auto max-w-[120.3rem]">
        <div className="flex flex-col items-start gap-[2rem]">
          <SectionLabel
            text="Our Work"
            textColor="text-text-primary"
            borderColor="border-text-primary"
          />

          <div className="flex items-center justify-between">
            <div className="max-w-[72.1rem]">
              <SectionTitle label="We design and build to make an impact." />
            </div>

            <div className="max-w-[37.9rem]">
              <SectionDescription label="We help the world's leading brands create standout ads and campaigns at speed—from concept to execution to results." />
            </div>
          </div>
        </div>

        <div className="mt-[6.8rem] grid grid-cols-3 gap-[3.3rem]">
          <div className="rounded-[3rem] bg-[#FFC300]">
            <h3 className="inline-flex items-start pt-[3.4rem] pb-[.7rem] pl-[5rem] text-[11rem] leading-[13rem] font-bold tracking-[-0.02em]">
              95 <span className="text-[5rem] leading-[8rem]">%</span>
            </h3>

            <hr className="h-[1px] w-full border-0 bg-black/40" />

            <p className="max-w-[220px] pt-[2rem] pb-[3.1rem] pl-[5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              Increase in CTR for PointCard
            </p>
          </div>

          <div className="rounded-[3rem] bg-[#FF37B3]">
            <h3 className="inline-flex items-start pt-[3.4rem] pb-[.7rem] pl-[5rem] text-[11rem] leading-[13rem] font-bold tracking-[-0.02em]">
              30 <span className="text-[5rem] leading-[8rem]">%</span>
            </h3>

            <hr className="h-[1px] w-full border-0 bg-black/40" />

            <p className="max-w-[27.3rem] pt-[2rem] pb-[3.1rem] pl-[5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              Reduction in cost for asset for Amazon
            </p>
          </div>

          <div className="rounded-[3rem] bg-[#F14A58]">
            <h3 className="inline-flex items-start pt-[3.4rem] pb-[.7rem] pl-[5rem] text-[11rem] leading-[13rem] font-bold tracking-[-0.02em]">
              65 <span className="text-[5rem] leading-[8rem]">%</span>
            </h3>

            <hr className="h-[1px] w-full border-0 bg-black/40" />

            <p className="max-w-[32rem] pt-[2rem] pb-[3.1rem] pl-[5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              Reduction in turnaround time for Salesforce
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[10rem] max-w-[120.3rem]">
        <div className="mx-auto max-w-[82.6rem] text-center">
          <SectionTitle label="Trusted by business across the UK, US and Australia." />
        </div>

        <div className="mt-[4rem] flex flex-col gap-[5rem]">
          {caseStudiesData.map((caseStudy, index) => (
            <CaseStudiesGrid
              key={index}
              {...caseStudy}
              className={index % 2 === 1 ? "case-studies-grid-reverse" : ""}
            />
          ))}
        </div>

        <button className="mt-[5rem] inline-flex w-full cursor-pointer items-center">
          <span className="inline-flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-[#141414] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
            Load More
          </span>
          <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
            <Image
              src={subtractDark}
              alt="Subtract Light Icon"
              width={18}
              height={18}
            />
          </i>
          <i className="inline-flex size-[5.6rem] rotate-90 items-center justify-center rounded-full border border-[#141414] bg-[#141414]">
            <Image
              src={arrowRight}
              alt="Arrow Right Icon"
              width={18}
              height={18}
            />
          </i>
        </button>
      </div>
    </section>
  );
};

export default OurWorkSection;
