import { whoWeAreCardData } from "@/constants/whoWeAreSection";
import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import Image from "next/image";
import subtractPink from "../../assets/images/icons/subtract-pink.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import Link from "next/link";
import LineStroke13 from "../decorativeElements/LineStroke13";

const WhoWeAreSection = () => {
  return (
    <section className="relative px-[2rem] pt-[20.6rem] pb-[9rem] xl:px-[0rem]">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke13 className="absolute top-[14.8rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[3] mx-auto max-w-[141.6rem]">
        <div className="flex flex-col items-center gap-[2.1rem] text-center">
          <SectionLabel
            text="Who We Are"
            textColor="text-text-primary"
            borderColor="text-text-primary"
          />

          <h1 className="text-text-primary text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] md:text-[4rem] md:leading-[5rem] lg:text-[5rem] lg:leading-[6rem] xl:text-[7rem] xl:leading-[8.4rem]">
            About Creative Pixels <br /> Creative Agency based in Manchester
          </h1>

          <div className="max-w-[60rem] lg:max-w-full">
            <SectionDescription label="You end up hearing about agencies which do care, but don't. Let us change that for you today." />
          </div>
        </div>

        <div className="mt-[8rem] mb-[10.5rem] flex flex-col gap-[1.2rem] lg:flex-row">
          {whoWeAreCardData.slice(0, 1).map((item, idx) => (
            <div
              key={idx}
              className="relative h-[25rem] overflow-hidden rounded-[2rem] md:h-[45rem] lg:h-[58.8rem] lg:w-[69.2rem]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={692}
                height={588}
                className="size-full object-cover object-center"
              />
            </div>
          ))}

          <div className="flex flex-row gap-[1.2rem] lg:flex-col">
            {whoWeAreCardData.slice(1, 3).map((item, idx) => (
              <div
                key={idx}
                className="relative h-[18rem] w-1/2 overflow-hidden rounded-[2rem] md:h-[28.8rem] lg:w-[35.6rem]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={356}
                  height={288}
                  className="size-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {whoWeAreCardData.slice(3, 4).map((item, idx) => (
            <div
              key={idx}
              className="relative h-[25rem] overflow-hidden rounded-[2rem] md:h-[45rem] lg:h-[58.8rem] lg:w-[34.4rem]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={344}
                height={588}
                className="size-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-[4rem] text-center">
          <p className="max-w-[103.2rem] text-[2.5rem] leading-[3.5rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[3.4rem] md:leading-[4.8rem]">
            At Creative Pixels, we don&apos;t just build websites—we create
            digital experiences that drive growth and make a lasting impact. As
            a Manchester-based agency, we specialize in WordPress development,
            e-commerce solutions, and creative branding. We’re here to make your
            digital journey successful.
          </p>

          <Link href="" className="inline-flex items-center">
            <span className="inline-flex h-[5rem] min-w-[19rem] items-center justify-center rounded-[6rem] border border-[#FF37B3] bg-[#FF37B3] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
              Work With Us
            </span>
            <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
              <Image
                src={subtractPink}
                alt="Subtract Light Icon"
                width={18}
                height={18}
              />
            </i>
            <i className="inline-flex size-[5rem] items-center justify-center rounded-full border border-[#FF37B3] bg-[#FF37B3]">
              <Image
                src={arrowRight}
                alt="Arrow Right Icon"
                width={14}
                height={14}
              />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
