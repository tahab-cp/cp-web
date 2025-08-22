import Link from "next/link";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import subtractDark from "../../assets/images/icons/subtract-dark.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import Image from "next/image";
import figmaLogo from "../../assets/images/figma-logo.png";
import wordpressLogo from "../../assets/images/wordpress-logo.png";
import brainStudioImg from "../../assets/images/brain-studio-case-study.png";

const CaseStudyDetailSection = () => {
  return (
    <section className="pt-[20.6rem] pb-[9.8rem]">
      <div className="mx-auto max-w-[120.3rem]">
        <SectionLabel
          text="Case Study"
          textColor="text-text-primary"
          borderColor="border-text-primary"
        />

        <div className="mt-[1.5rem] mb-[2.5rem]">
          <SectionTitle label="Games Art Brain" />
        </div>

        <Link href="" className="inline-flex items-center">
          <span className="inline-flex h-[5.6rem] min-w-[17.8rem] items-center justify-center rounded-[6rem] border border-[#141414] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
            Visit Live Site
          </span>
          <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
            <Image
              src={subtractDark}
              alt="Subtract Light Icon"
              width={18}
              height={18}
            />
          </i>
          <i className="inline-flex size-[5.6rem] items-center justify-center rounded-full border border-[#141414] bg-[#141414]">
            <Image
              src={arrowRight}
              alt="Arrow Right Icon"
              width={14}
              height={14}
            />
          </i>
        </Link>

        <div className="mt-[5.5rem] mb-[5rem] flex items-center">
          <div className="flex flex-col items-start gap-[.7rem]">
            <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#FFC300] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
              Industry
            </span>

            <span className="text-[1.8rem] leading-[2.6rem] font-normal">
              Training/Licensing
            </span>
          </div>

          <div className="mr-[5rem] ml-[10rem] h-[5.5rem] w-[1px] bg-black/20" />

          <div className="flex flex-col items-start gap-[.7rem]">
            <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#FF37B3] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
              Services
            </span>

            <span className="text-[1.8rem] leading-[2.6rem] font-normal">
              Health & safety training courses
            </span>
          </div>

          <div className="mr-[5rem] ml-[10rem] h-[5.5rem] w-[1px] bg-black/20" />

          <div className="flex flex-col items-start gap-[.7rem]">
            <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#F14A58] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
              Timeline
            </span>

            <span className="text-[1.8rem] leading-[2.6rem] font-normal">
              45 Days
            </span>
          </div>

          <div className="mr-[5rem] ml-[10rem] h-[5.5rem] w-[1px] bg-black/20" />

          <div className="flex flex-col items-start gap-[.8rem]">
            <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#007BFF] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
              Tools Used
            </span>

            <div className="flex items-center gap-[3rem]">
              <div className="inline-flex items-center justify-center">
                <Image
                  src={figmaLogo}
                  alt="Figma Logo"
                  width={74}
                  height={22}
                  className="h-[2.2rem] w-[7.4rem]"
                  priority
                />
              </div>

              <div className="inline-flex items-center justify-center">
                <Image
                  src={wordpressLogo}
                  alt="Wordpress Logo"
                  width={114}
                  height={22}
                  className="h-[2.2rem] w-[11.4rem]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[71.6rem] w-full overflow-hidden rounded-[2rem]">
          <Image
            src={brainStudioImg}
            alt="Case Study Image"
            height={716}
            width={1204}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetailSection;
