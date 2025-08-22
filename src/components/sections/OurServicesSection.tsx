import Image from "next/image";
import SectionLabel from "../common/SectionLabel";
import OurServiesMarquee from "../common/OurServicesMarquee";
import cElement from "../../assets/images/c-element.svg";
import ourServicesBg from "../../assets/images/artistic-gradient-bg.png";
import clickArrowYellow from "../../assets/images/icons/click-arrow-yellow.svg";
import clickArrowPink from "../../assets/images/icons/click-arrow-pink.svg";
import clickArrowGreen from "../../assets/images/icons/click-arrow-green.svg";
import designBrandingImg from "../../assets/images/design-branding-img.png";
import Link from "next/link";
import {
  offerSectionDesignData,
  offerSectionMaintenanceData,
  offerSectionWebData,
} from "@/constants/offerSection";
import subtractPink from "../../assets/images/icons/subtract-pink.svg";
import subtractYellow from "../../assets/images/icons/subtract-yellow.svg";
import subtractSeaGreen from "../../assets/images/icons/subtract-seagreen.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import arrowRightDark from "../../assets/images/icons/arrow-right-dark.svg";
import websiteDevelopmentImg from "../../assets/images/website-development-img.png";
import maintanenceGrowthImg from "../../assets/images/maintainance-growth-img.png";
import bgLine from "../../assets/images/line-stroke-08.svg";
import bgLine2 from "../../assets/images/line-stroke-02.svg";
import bgLine3 from "../../assets/images/line-stroke-09.svg";

const OurServicesSection = () => {
  return (
    <section className="relative overflow-hidden pt-[20.6rem]">
      {/* Bg Element */}
      <div className="absolute inset-0 z-[0] overflow-hidden">
        <Image
          src={cElement}
          alt="Background Element"
          width={218.37}
          height={102.78}
          className="absolute top-[21rem] right-[-1rem] rotate-[-30deg]"
          priority
        />
      </div>

      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <Image
          src={bgLine}
          alt="Background line"
          width={1440}
          height={531.42}
          className="absolute top-[15.4rem] left-1/2 -translate-x-1/2 opacity-10"
          priority
        />
      </div>

      <div className="relative z-[1] mx-auto flex max-w-[120.3rem] flex-col items-start gap-[2rem]">
        <SectionLabel
          text="Our Services"
          textColor="text-text-primary"
          borderColor="border-text-primary"
        />

        <h2 className="text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em]">
          Our <span className="text-[#EE8D00]">design</span>,{" "}
          <span className="text-[#FF37B3]">web</span> and{" "}
          <span className="text-[#3078FF]">support services.</span>
        </h2>
      </div>

      <div className="mt-[4.3rem] mb-[8rem]">
        <OurServiesMarquee />
      </div>

      <div className="relative pt-[6.3rem] pb-[7.063rem]">
        <div className="absolute inset-0 z-[0]">
          <Image
            src={ourServicesBg}
            alt="Our Services Section Background"
            fill
            className="pointer-events-none object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 z-[0]">
          <Image
            src={bgLine2}
            alt="Background line"
            width={1440}
            height={531.42}
            className="absolute top-[59rem] left-1/2 -translate-x-1/2"
            priority
          />
        </div>

        <div className="relative z-[1] mx-auto flex max-w-[121.6rem] flex-col gap-[4.9rem]">
          <div className="flex flex-col gap-[2rem]">
            <h3 className="relative max-w-[66.4rem] text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em] text-white">
              Design and Branding{" "}
              <div className="absolute top-[-1.2rem] right-[-3.3rem] inline-flex size-[4rem] items-center justify-center">
                <Image
                  src={clickArrowPink}
                  alt="Click Arrow"
                  width={40}
                  height={40}
                />
              </div>
            </h3>

            <p className="max-w-[113.9rem] text-[2.2rem] leading-[3.2rem] font-medium text-white">
              At Creative Pixels, our strength lies in our team. We have a
              large, diverse group of designers and developers who are
              passionate about creating digital solutions that combine
              aesthetics with functionality.
            </p>
          </div>

          <div className="flex gap-[4.8rem]">
            <div className="relative h-[46.137rem] w-[57.4rem]">
              <Image
                src={designBrandingImg}
                alt="Design Branding Image"
                width={574}
                height={461.37}
                priority
              />
            </div>

            <div className="flex flex-col gap-[4.463rem]">
              <div className="flex gap-[10rem]">
                {offerSectionDesignData.columns.map((col, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col gap-[3.1rem] pt-[4rem]`}
                  >
                    <h5 className="text-[2.2rem] leading-[3.2rem] font-medium text-[#FF37B3]">
                      {col.title}
                    </h5>

                    <ul className="flex flex-col gap-[1.4rem]">
                      {col.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            href={link.href}
                            className="flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-white"
                          >
                            <div className="size-[1rem] rounded-full border-2 border-[#EE8D00]" />{" "}
                            <span>{link.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link href="" className="inline-flex items-center">
                <span className="inline-flex h-[5.6rem] min-w-[32.5rem] items-center justify-center rounded-[6rem] border border-[#FF37B3] bg-[#FF37B3] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
                  See how we helped Unicef?
                </span>
                <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
                  <Image
                    src={subtractPink}
                    alt="Subtract Light Icon"
                    width={18}
                    height={18}
                  />
                </i>
                <i className="inline-flex size-[5.6rem] items-center justify-center rounded-full border border-[#FF37B3] bg-[#FF37B3]">
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
        </div>

        {/* <CtaButton01 /> */}
      </div>

      <div className="relative pt-[18.8rem] pb-[8rem]">
        <div className="mx-auto max-w-[120.6rem]">
          <div className="flex flex-col items-end gap-[2rem] text-right">
            <h3 className="relative max-w-[70.2rem] text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em]">
              Website Development
              <div className="absolute bottom-full left-1/2 inline-flex size-[4rem] -translate-x-1/2 items-center justify-center">
                <Image
                  src={clickArrowYellow}
                  alt="Click Arrow"
                  width={40}
                  height={40}
                />
              </div>
            </h3>

            <p className="max-w-[92.7rem] text-[2.2rem] leading-[3.2rem] font-medium">
              At Creative Pixels, our strength lies in our team. We have a
              large, diverse group of designers and developers who are
              passionate about creating digital solutions that combine
              aesthetics with functionality.
            </p>
          </div>

          <div className="mt-[1rem] flex gap-[4.7rem]">
            <div className="relative h-[51.7rem] w-[59.5rem]">
              <Image
                src={websiteDevelopmentImg}
                alt="Website Development Image"
                width={595}
                height={517}
                priority
              />
            </div>

            <div className="flex flex-col gap-[4.463rem]">
              <div className="flex gap-[10rem]">
                {offerSectionWebData.columns.map((col, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col gap-[3.1rem] pt-[4rem]`}
                  >
                    <h5 className="text-[2.2rem] leading-[3.2rem] font-medium text-[#FED202]">
                      {col.title}
                    </h5>

                    <ul className="flex flex-col gap-[1.4rem]">
                      {col.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            href={link.href}
                            className="flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium"
                          >
                            <div className="size-[1rem] rounded-full border-2 border-[#FED202]" />{" "}
                            <span>{link.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link href="" className="inline-flex items-center">
                <span className="inline-flex h-[5.6rem] min-w-[41.6rem] items-center justify-center rounded-[6rem] border border-[#FFE400] bg-[#FFE400] px-[3rem] py-[1rem] text-[1.8rem] font-semibold md:text-[2rem]">
                  See how we helped Games Art Talent
                </span>
                <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
                  <Image
                    src={subtractYellow}
                    alt="Subtract Light Icon"
                    width={18}
                    height={18}
                  />
                </i>
                <i className="inline-flex size-[5.6rem] items-center justify-center rounded-full border border-[#FFE400] bg-[#FFE400]">
                  <Image
                    src={arrowRightDark}
                    alt="Arrow Right Icon"
                    width={14}
                    height={14}
                  />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-[9rem] pb-[7.882rem]">
        <div className="absolute inset-0 z-[0]">
          <Image
            src={ourServicesBg}
            alt="Our Services Section Background"
            fill
            className="pointer-events-none object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 z-[0]">
          <Image
            src={bgLine3}
            alt="Background line"
            width={1419.66}
            height={371.16}
            className="absolute -top-[23.7rem] right-[-89.294rem]"
            priority
          />
        </div>

        <div className="relative z-[1] mx-auto max-w-[120.3rem]">
          <div className="flex flex-col gap-[2rem]">
            <h3 className="relative max-w-[80.7rem] text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em] text-white">
              Maintenance and Growth
              <div className="absolute top-[-2rem] right-[-2.6rem] inline-flex size-[4rem] items-center justify-center">
                <Image
                  src={clickArrowGreen}
                  alt="Click Arrow"
                  width={40}
                  height={40}
                />
              </div>
            </h3>

            <p className="max-w-[82.4rem] text-[2.2rem] leading-[3.2rem] font-medium text-white">
              At Creative Pixels, our strength lies in our team. We have a
              large, diverse group of designers and developers who are
              passionate about creating digital solutions that combine
              aesthetics with functionality.
            </p>
          </div>

          <div className="mt-[3.6rem] flex gap-[4.6rem]">
            <div className="relative h-[48.318rem] w-[45.4rem]">
              <Image
                src={maintanenceGrowthImg}
                alt="Maintanence Growth Image"
                width={454}
                height={483.18}
                priority
              />
            </div>

            <div className="flex flex-col gap-[4.463rem]">
              <div className="flex gap-[5rem]">
                {offerSectionMaintenanceData.columns.map((col, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col gap-[3.1rem] pt-[2.4rem]`}
                  >
                    <h5 className="text-[2.2rem] leading-[3.2rem] font-medium text-[#81F2B4]">
                      {col.title}
                    </h5>

                    <ul className="flex flex-col gap-[1.4rem]">
                      {col.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            href={link.href}
                            className="flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-white"
                          >
                            <div className="size-[1rem] rounded-full border-2 border-[#FED202]" />{" "}
                            <span>{link.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link href="" className="inline-flex items-center">
                <span className="inline-flex h-[5.6rem] min-w-[31.1rem] items-center justify-center rounded-[6rem] border border-[#81F2B4] bg-[#81F2B4] px-[3rem] py-[1rem] text-[1.8rem] font-semibold md:text-[2rem]">
                  See how we helped Fliplet
                </span>
                <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
                  <Image
                    src={subtractSeaGreen}
                    alt="Subtract Light Icon"
                    width={18}
                    height={18}
                  />
                </i>
                <i className="inline-flex size-[5.6rem] items-center justify-center rounded-full border border-[#81F2B4] bg-[#81F2B4]">
                  <Image
                    src={arrowRightDark}
                    alt="Arrow Right Icon"
                    width={14}
                    height={14}
                  />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
