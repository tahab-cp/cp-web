import Image from "next/image";
import offerSectionBg from "../../assets/images/artistic-gradient-bg.png";
import SectionLabel from "../common/SectionLabel";
import clickArrowYellow from "../../assets/images/icons/click-arrow-yellow.svg";
import clickArrowPink from "../../assets/images/icons/click-arrow-pink.svg";
import clickArrowGreen from "../../assets/images/icons/click-arrow-green.svg";
import offerWebImg from "../../assets/images/offer-web-img.png";
import {
  offerSectionDesignData,
  offerSectionMaintenanceData,
  offerSectionWebData,
} from "@/constants/offerSection";
import Link from "next/link";
import subtractBlue from "../../assets/images/icons/subtract-blue.svg";
import subtractPink from "../../assets/images/icons/subtract-pink.svg";
import subtractGreen from "../../assets/images/icons/subtract-green.svg";
import subtractOrange from "../../assets/images/icons/subtract-orange.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import offerDesignImg01 from "../../assets/images/offer-design-img-01.png";
import offerDesignImg02 from "../../assets/images/offer-design-img-02.png";
import offerMaintenanceImg from "../../assets/images/offer-maintenance-img.png";
import LineStroke03 from "../decorativeElements/LineStroke03";

const WhatWeOfferSection = () => {
  return (
    <section className="relative pt-[8rem] pb-[10.1rem]">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={offerSectionBg}
          alt="Offer Section Background"
          fill
          className="pointer-events-none object-cover"
          priority
        />
      </div>

      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke03 className="absolute top-[180.6rem] left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-[2] flex flex-col items-center gap-[7.6rem]">
        <SectionLabel text="What We Offer" />

        <div className="mx-auto flex w-full max-w-[130rem]">
          <div className="flex flex-col gap-[3.3rem]">
            <h3 className="relative max-w-[33.3rem] text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em] text-white">
              <span>Website Development</span>

              <div className="absolute right-[-.8rem] bottom-[-.6rem] inline-flex size-[4rem] items-center justify-center">
                <Image
                  src={clickArrowYellow}
                  alt="Click Arrow"
                  width={40}
                  height={40}
                />
              </div>
            </h3>

            <div className="h-[39.5rem] w-[65.5rem]">
              <Image
                src={offerWebImg}
                alt="offer web image"
                height={395}
                width={655}
                priority
              />
            </div>
          </div>

          <div className="ml-[-10rem] flex flex-col gap-[4.5rem]">
            <div className="flex gap-[10rem]">
              {offerSectionWebData.columns.map((col, idx) => (
                <div key={idx} className={`flex flex-col gap-[3.1rem]`}>
                  <h5 className="text-[2.2rem] leading-[3.2rem] font-medium text-[#FFE400]">
                    {col.title}
                  </h5>

                  <ul className="flex flex-col gap-[1.4rem]">
                    {col.links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-white"
                        >
                          <div className="size-[1rem] rounded-full border-2 border-[#FFE400]" />{" "}
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex gap-[2.2rem]">
              <Link href="" className="inline-flex items-center">
                <span className="inline-flex h-[5rem] min-w-[18rem] items-center justify-center rounded-[6rem] border border-[#3078FF] bg-[#3078FF] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
                  Book a Call
                </span>
                <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
                  <Image
                    src={subtractBlue}
                    alt="Subtract Light Icon"
                    width={18}
                    height={18}
                  />
                </i>
                <i className="inline-flex size-[5rem] items-center justify-center rounded-full border border-[#3078FF] bg-[#3078FF]">
                  <Image
                    src={arrowRight}
                    alt="Arrow Right Icon"
                    width={14}
                    height={14}
                  />
                </i>
              </Link>

              <Link href="" className="inline-flex items-center">
                <span className="inline-flex h-[5rem] min-w-[23.8rem] items-center justify-center rounded-[6rem] border border-[#FF37B3] bg-[#FF37B3] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
                  View Case Studies
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
        </div>
      </div>

      <div className="relative z-[1] mt-[-6rem] h-[58.3rem] bg-white">
        <div className="relative mx-auto flex w-full max-w-[130rem] gap-[12.9rem]">
          <div className="flex flex-col gap-[4.5rem] pt-[10rem]">
            <div className="flex gap-[10rem]">
              {offerSectionDesignData.columns.map((col, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-[3.1rem] pt-[3.5rem]`}
                >
                  <h5 className="text-[2.2rem] leading-[3.2rem] font-medium text-[#FF37B3]">
                    {col.title}
                  </h5>

                  <ul className="flex flex-col gap-[1.4rem]">
                    {col.links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href={link.href}
                          className="text-text-primary flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium"
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

            <div className="flex gap-[2.2rem]">
              <Link href="" className="inline-flex items-center">
                <span className="inline-flex h-[5rem] min-w-[18rem] items-center justify-center rounded-[6rem] border border-[#44B276] bg-[#44B276] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
                  Book a Call
                </span>
                <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
                  <Image
                    src={subtractGreen}
                    alt="Subtract Light Icon"
                    width={18}
                    height={18}
                  />
                </i>
                <i className="inline-flex size-[5rem] items-center justify-center rounded-full border border-[#44B276] bg-[#44B276]">
                  <Image
                    src={arrowRight}
                    alt="Arrow Right Icon"
                    width={14}
                    height={14}
                  />
                </i>
              </Link>

              <Link href="" className="inline-flex items-center">
                <span className="inline-flex h-[5rem] min-w-[23.8rem] items-center justify-center rounded-[6rem] border border-[#FF37B3] bg-[#FF37B3] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
                  View Case Studies
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

          <div className="relative top-[10.8rem] flex flex-col">
            <h3 className="text-text-primary relative max-w-[30.8rem] text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em]">
              <span>Design and Branding</span>

              <div className="absolute right-[5.3rem] bottom-[-.4rem] inline-flex size-[4rem] items-center justify-center">
                <Image
                  src={clickArrowPink}
                  alt="Click Arrow"
                  width={40}
                  height={40}
                />
              </div>
            </h3>

            <div className="pointer-events-none relative h-[55.18rem] w-[44.248rem] select-none">
              <Image
                src={offerDesignImg01}
                alt="offer design image"
                height={551.8}
                width={442.48}
                priority
              />

              <Image
                src={offerDesignImg02}
                alt="offer design image"
                height={203.3}
                width={200.88}
                priority
                className="absolute right-[-5.194rem] bottom-[13.405rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[1] mx-auto flex w-full max-w-[133rem] pt-[10rem]">
        <div className="flex flex-col">
          <h3 className="relative max-w-[30.8rem] text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em] text-white">
            <span>Maintenance and Growth</span>

            <div className="absolute right-[-1.8rem] bottom-[1.6rem] inline-flex size-[4rem] items-center justify-center">
              <Image
                src={clickArrowGreen}
                alt="Click Arrow"
                width={40}
                height={40}
              />
            </div>
          </h3>

          <div className="pointer-events-none relative top-[-5rem] h-[49.819rem] w-[57.12rem] select-none">
            <Image
              src={offerMaintenanceImg}
              alt="offer maintenance image"
              height={498.19}
              width={571.2}
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-[4.5rem]">
          <div className="flex gap-[10rem]">
            {offerSectionMaintenanceData.columns.map((col, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-[3.1rem] pt-[2.1rem]`}
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
                        <div className="size-[1rem] rounded-full border-2 border-[#FFE400]" />{" "}
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex gap-[2.2rem]">
            <Link href="" className="inline-flex items-center">
              <span className="inline-flex h-[5rem] min-w-[18rem] items-center justify-center rounded-[6rem] border border-[#EE8D00] bg-[#EE8D00] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
                Book a Call
              </span>
              <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
                <Image
                  src={subtractOrange}
                  alt="Subtract Light Icon"
                  width={18}
                  height={18}
                />
              </i>
              <i className="inline-flex size-[5rem] items-center justify-center rounded-full border border-[#EE8D00] bg-[#EE8D00]">
                <Image
                  src={arrowRight}
                  alt="Arrow Right Icon"
                  width={14}
                  height={14}
                />
              </i>
            </Link>

            <Link href="" className="inline-flex items-center">
              <span className="inline-flex h-[5rem] min-w-[23.8rem] items-center justify-center rounded-[6rem] border border-[#FF37B3] bg-[#FF37B3] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
                View Case Studies
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
      </div>

      <div className="offer-cta-card mx-auto mt-[-9rem] flex h-[12rem] max-w-[120.3rem] items-center justify-center gap-[2.2rem] rounded-[2rem]">
        <p className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
          Need bold design or reliable code or both? You’re in the right place.
        </p>

        <Link href="" className="inline-flex items-center">
          <span className="inline-flex h-[4.6rem] min-w-[16.6rem] items-center justify-center rounded-[6rem] border border-[#EE8D00] bg-[#EE8D00] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
            Book a Call
          </span>
          <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
            <Image
              src={subtractOrange}
              alt="Subtract Light Icon"
              width={18}
              height={18}
            />
          </i>
          <i className="inline-flex size-[4.6rem] items-center justify-center rounded-full border border-[#EE8D00] bg-[#EE8D00]">
            <Image
              src={arrowRight}
              alt="Arrow Right Icon"
              width={14}
              height={14}
            />
          </i>
        </Link>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
