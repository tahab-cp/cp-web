import Image from "next/image";
import whyChooseUsBg from "../../assets/images/why-choose-us-section-bg.png";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import subtractDark from "../../assets/images/icons/subtract-dark.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import Link from "next/link";

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-[10rem]">
      <Image
        src={whyChooseUsBg}
        alt="Why Choose Us Background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="relative z-[1] mx-auto flex max-w-[124.067rem] items-center gap-[3.6rem]">
        <div className="w-[58.2rem]">
          <div className="flex flex-col items-start gap-[2.1rem]">
            <SectionLabel text="Why Choose Us" />

            <SectionTitle
              label="Why Choose Creative Pixels for your Online Presense"
              textColor="text-white"
            />
          </div>

          <p className="mt-[3rem] mb-[4rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
            Creative Pixels stands out as a design-driven agency dedicated to
            delivering bespoke digital solutions. Our expertise spans across a
            wide range of services, ensuring that your brand stands out &
            thrives online
          </p>

          <Link href="" className="inline-flex items-center">
            <span className="inline-flex h-[5.6rem] min-w-[22.4rem] items-center justify-center rounded-[6rem] border border-[#141414] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
              Request a Callback
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
        </div>

        <div className="relative h-[53.129rem] w-[62.267rem]">
          <div className="absolute top-[2.2rem] left-[120.33px] z-[2] flex size-[26.964rem] rotate-[12.19deg] flex-col justify-center gap-[1.6rem] rounded-[1.557rem] bg-[#FFC300] pl-[2.459rem]">
            <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">01</h5>

            <h3 className="max-w-[20.539rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]">
              Design-Driven Approach
            </h3>

            <p className="max-w-[20.207rem] text-[1.6rem] leading-[2.4rem] font-medium">
              Crafting exceptional digital experiences your premier web design
              and development partner.
            </p>
          </div>

          <div className="absolute bottom-[1.9rem] left-[1.9rem] z-[1] flex size-[26.964rem] rotate-[-9.32deg] flex-col justify-center gap-[1.6rem] rounded-[1.557rem] bg-[#FF8630] pl-[2.459rem]">
            <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">02</h5>

            <h3 className="max-w-[20.539rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]">
              Tailored Solutions
            </h3>

            <p className="max-w-[22.389rem] text-[1.6rem] leading-[2.4rem] font-medium">
              Every business is unique, and so are our solutions. We customize
              each project to align with your goals.
            </p>
          </div>

          <div className="absolute right-[1.1rem] bottom-[1.2rem] z-[3] flex size-[26.964rem] rotate-[5.82deg] flex-col justify-center gap-[1.6rem] rounded-[1.557rem] bg-[#F14A58] pl-[2.459rem]">
            <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">03</h5>

            <h3 className="max-w-[17.776rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]">
              Results You Can Trust
            </h3>

            <p className="max-w-[22.966rem] text-[1.6rem] leading-[2.4rem] font-medium">
              From boosting brand visibility to driving conversions, we are
              committed to your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
