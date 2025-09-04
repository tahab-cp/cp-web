"use client";

import Image from "next/image";
import OurServiesMarquee from "../common/OurServicesMarquee";
import Link from "next/link";
import {
  offerSectionDesignData,
  offerSectionMaintenanceData,
  offerSectionWebData,
} from "@/constants/offerSection";
import CLetter from "../decorativeElements/CLetter";
import SectionLabel2 from "../common/SectionLabel2";
import LineStroke16 from "../decorativeElements/LineStroke16";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LineStroke17 from "../decorativeElements/LineStroke17";
import CommonBtn3 from "../common/CommonBtn3";
import LineStroke18 from "../decorativeElements/LineStroke18";

const OurServicesSection = () => {
  const ourServicesRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ourServices = ourServicesRef.current;
    if (!ourServices) return;

    const ourServicesLabel = ourServices.querySelector(".our-services-label");

    // Label wobble
    gsap.to(ourServicesLabel, {
      rotate: 5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      ref={ourServicesRef}
      className="relative overflow-hidden pt-[20.6rem]"
    >
      {/* Bg Element */}
      <div className="absolute inset-0 z-[0] overflow-hidden">
        <CLetter className="absolute top-[-10rem] right-[-2rem] w-[10rem] rotate-[-80deg] md:top-[5rem] md:w-[20rem]" />
      </div>

      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke16 className="absolute top-[15.4rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[1] mx-auto flex max-w-[120rem] flex-col items-center gap-[2rem] px-[3rem] text-center xl:items-start xl:px-[0rem] xl:text-left">
        <div className="rotate-[-2deg]">
          <div className="our-services-label">
            <SectionLabel2
              text="Our Services"
              bgColor="bg-[#EE8D00]"
              textColor="text-white"
            />
          </div>
        </div>

        <h2 className="text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.03em] md:text-[7rem] md:leading-[8.4rem] md:font-bold">
          Our <span className="text-[#EE8D00]">design</span>,{" "}
          <span className="text-[#FF37B3]">web</span> and{" "}
          <span className="text-[#3078FF]">support services.</span>
        </h2>
      </div>

      <div className="mt-[4.3rem] mb-[8rem]">
        <OurServiesMarquee />
      </div>

      <div className="our-services-sec relative px-[3rem] py-[5rem] xl:px-[0rem] xl:pt-[6.3rem] xl:pb-[7.063rem]">
        <div className="absolute inset-0 z-[0]">
          <LineStroke17 className="absolute top-[59rem] left-1/2 w-full -translate-x-1/2" />
        </div>

        <div className="relative z-[1] mx-auto flex max-w-[120rem] flex-col gap-[4.9rem] 2xl:max-w-[121.6rem]">
          <div className="flex flex-col items-center gap-[2rem] text-center xl:items-start xl:text-left">
            <h3 className="relative max-w-[66.4rem] text-[4rem] leading-[5rem] font-semibold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.4rem] md:font-bold">
              Design and Branding{" "}
              <div className="absolute top-[-1.2rem] right-[1rem] inline-flex size-[4rem] items-center justify-center md:right-[-3.3rem]">
                <Image
                  src="/images/icons/click-arrow-pink.svg"
                  alt="Click Arrow"
                  width={40}
                  height={40}
                />
              </div>
            </h3>

            <p className="max-w-[90rem] text-[1.8rem] leading-[2.8rem] font-medium text-white md:text-[2.2rem] md:leading-[3.2rem] 2xl:max-w-[113.9rem]">
              At Creative Pixels, our strength lies in our team. We have a
              large, diverse group of designers and developers who are
              passionate about creating digital solutions that combine
              aesthetics with functionality.
            </p>
          </div>

          <div className="flex flex-col gap-[2rem] xl:flex-row xl:gap-[4.8rem]">
            <div className="relative h-[25rem] w-full overflow-hidden rounded-[2rem] md:h-[45rem] lg:h-[60rem] xl:h-[45rem] xl:w-[57.4rem]">
              <Image
                src="/images/design-branding-img.png"
                alt="Design Branding Image"
                width={574}
                height={461.37}
                priority
                className="size-full"
              />
            </div>

            <div className="flex flex-col items-center gap-[4.463rem] xl:items-start">
              <div className="flex w-full flex-col justify-between md:flex-row lg:w-auto lg:gap-[20rem] xl:gap-[10rem]">
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
                            className="group flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-white"
                          >
                            <div className="size-[1rem] rounded-full border-2 border-[#EE8D00]" />{" "}
                            <span className="relative">
                              {link.label}

                              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ffe400] to-[#ff37b3] transition-all duration-200 group-hover:w-full" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <CommonBtn3
                label="See how we helped Unicef?"
                href=""
                bgColor="#FF37B3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-[3rem] pt-[10rem] pb-[5rem] xl:px-[0rem] xl:pt-[18.8rem] xl:pb-[8rem]">
        <div className="mx-auto max-w-[120.6rem]">
          <div className="flex flex-col items-center gap-[2rem] text-center xl:items-end xl:text-right">
            <h3 className="relative max-w-[70.2rem] text-[4rem] leading-[5rem] font-semibold tracking-[-0.03em] md:text-[7rem] md:leading-[8.4rem] md:font-bold">
              Website Development
              <div className="absolute bottom-full left-1/2 inline-flex size-[4rem] -translate-x-1/2 items-center justify-center">
                <Image
                  src="/images/icons/click-arrow-yellow.svg"
                  alt="Click Arrow"
                  width={40}
                  height={40}
                />
              </div>
            </h3>

            <p className="max-w-[92.7rem] text-[1.8rem] leading-[2.8rem] font-medium md:text-[2.2rem] md:leading-[3.2rem]">
              At Creative Pixels, our strength lies in our team. We have a
              large, diverse group of designers and developers who are
              passionate about creating digital solutions that combine
              aesthetics with functionality.
            </p>
          </div>

          <div className="mt-[4rem] flex flex-col items-center gap-[2rem] md:gap-[4.7rem] xl:mt-[1rem] xl:flex-row xl:items-start">
            <div className="relative h-[35rem] w-full md:h-[60rem] lg:h-[80rem] xl:h-[51.7rem] xl:w-[59.5rem]">
              <Image
                src="/images/website-development-img.png"
                alt="Website Development Image"
                width={595}
                height={517}
                priority
                className="size-full"
              />
            </div>

            <div className="flex w-full flex-col items-center gap-[4.463rem] lg:w-auto xl:items-start">
              <div className="flex w-full flex-col justify-between md:flex-row lg:justify-start lg:gap-[20rem] xl:gap-[10rem]">
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
                            className="group flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium"
                          >
                            <div className="size-[1rem] rounded-full border-2 border-[#FED202]" />{" "}
                            <span className="relative">
                              {link.label}{" "}
                              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ffe400] to-[#ff37b3] transition-all duration-200 group-hover:w-full" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="whitespace-nowrap">
                <CommonBtn3
                  label="See how we helped Games Art Talent"
                  href=""
                  bgColor="#FFE400"
                  textColor="#070707"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="our-services-sec relative pt-[9rem] pb-[7.882rem]">
        <div className="absolute inset-0 z-[0]">
          <LineStroke18 className="absolute -top-[23.7rem] right-[-89.294rem]" />
        </div>

        <div className="relative z-[1] mx-auto max-w-[120.3rem]">
          <div className="flex flex-col gap-[2rem]">
            <h3 className="relative max-w-[80.7rem] text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em] text-white">
              Maintenance and Growth
              <div className="absolute top-[-2rem] right-[-2.6rem] inline-flex size-[4rem] items-center justify-center">
                <Image
                  src="/images/icons/click-arrow-green.svg"
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
                src="/images/maintainance-growth-img.png"
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
                            className="group flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-white"
                          >
                            <div className="size-[1rem] rounded-full border-2 border-[#FED202]" />{" "}
                            <span className="relative">
                              {link.label}{" "}
                              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ffe400] to-[#ff37b3] transition-all duration-200 group-hover:w-full" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <CommonBtn3
                label="See how we helped Fliplet"
                href=""
                bgColor="#81F2B4"
                textColor="#070707"
              />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default OurServicesSection;
