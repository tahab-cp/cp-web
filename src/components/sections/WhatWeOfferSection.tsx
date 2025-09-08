"use client";

import Image from "next/image";
import {
  offerSectionDesignData,
  offerSectionMaintenanceData,
  offerSectionWebData,
} from "@/constants/offerSection";
import Link from "next/link";
import LineStroke03 from "../decorativeElements/LineStroke03";
import gsap from "gsap";
import CommonBtn3 from "../common/CommonBtn3";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import { useGSAP } from "@gsap/react";

const WhatWeOfferSection = () => {
  const whatWeOfferRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const whatWeOffer = whatWeOfferRef.current;
    if (!whatWeOffer) return;

    const whatWeOfferLabel = whatWeOffer.querySelector(".what-we-offer-label");
    const whatWeOfferLeftCardTitle = whatWeOffer.querySelectorAll(
      ".what-we-offer-left-card-title",
    );
    const whatWeOfferLeftCardImg = whatWeOffer.querySelectorAll(
      ".what-we-offer-left-card-img",
    );
    const whatWeOfferRightCardTitle = whatWeOffer.querySelectorAll(
      ".what-we-offer-right-card-title",
    );
    const whatWeOfferRightCardList = whatWeOffer.querySelectorAll(
      ".what-we-offer-right-card-list",
    );
    const whatWeOfferRightCardCtaBtn = whatWeOffer.querySelectorAll(
      ".what-we-offer-right-card-cta-btn",
    );
    const whatWeOfferCtaCard = whatWeOffer.querySelector(
      ".what-we-offer-cta-card",
    );

    gsap.to(whatWeOfferLabel, {
      rotate: 5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    whatWeOfferLeftCardImg.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    });

    whatWeOfferLeftCardTitle.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    });

    whatWeOfferRightCardTitle.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    });

    whatWeOfferRightCardList.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    whatWeOfferRightCardCtaBtn.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.from(whatWeOfferCtaCard, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: whatWeOfferCtaCard,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      ref={whatWeOfferRef}
      className="offer-sec relative py-[5rem] xl:py-[8rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke03 className="absolute top-[345rem] left-1/2 w-full -translate-x-1/2 md:top-[320rem] lg:top-[235rem] xl:top-[180.6rem]" />
      </div>

      <div className="relative z-[2] flex flex-col items-center gap-[4rem] px-[3rem] pb-[6rem] md:gap-[7.6rem] xl:px-[0rem] xl:pb-[0rem]">
        <div className="rotate-[2deg]">
          <div className="what-we-offer-label">
            <SectionLabel2
              text="What We Offer"
              bgColor="bg-[#FFC300]"
              textColor="text-[#070707]"
            />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[120rem] flex-col gap-[2rem] lg:flex-row lg:gap-[0rem] 2xl:max-w-[130rem]">
          <div className="flex flex-col items-center gap-[3.3rem] lg:items-start">
            <h3 className="what-we-offer-left-card-title relative max-w-[33.3rem] text-center text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem] lg:text-left">
              <span>Website Development</span>

              <div className="absolute right-[-0.5rem] bottom-[-.6rem] inline-flex size-[4rem] items-center justify-center md:right-[-4rem] lg:right-[-.8rem]">
                <Image
                  src="/images/icons/click-arrow-yellow.svg"
                  alt="Click Arrow"
                  width={40}
                  height={40}
                />
              </div>
            </h3>

            <div className="what-we-offer-left-card-img md:h-[39.5rem] md:w-[65.5rem]">
              <Image
                src="/images/offer-web-img.png"
                alt="offer web image"
                height={395}
                width={655}
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-[4.5rem] xl:ml-[-10rem]">
            <div className="flex flex-col justify-between gap-[5rem] md:flex-row lg:flex-col lg:justify-start xl:flex-row xl:gap-[10rem]">
              {offerSectionWebData.columns.map((col, idx) => (
                <div key={idx} className={`flex flex-col gap-[3.1rem]`}>
                  <div className="overflow-hidden">
                    <h5 className="what-we-offer-right-card-title text-[2.2rem] leading-[3.2rem] font-medium text-[#FFE400]">
                      {col.title}
                    </h5>
                  </div>

                  <ul className="flex flex-col gap-[1.4rem]">
                    {col.links.map((link, idx) => (
                      <li key={idx} className="overflow-hidden">
                        <Link
                          href={link.href}
                          className="group flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-white transition-all duration-200"
                        >
                          <div className="size-[1rem] rounded-full border-2 border-[#FFE400]" />{" "}
                          <span className="what-we-offer-right-card-list relative">
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

            <div className="flex flex-col justify-center gap-[2rem] md:flex-row lg:flex-col lg:justify-start xl:flex-row">
              <div className="what-we-offer-right-card-cta-btn">
                <CommonBtn3
                  href="/"
                  label="Book a Call"
                  bgColor="#3078FF"
                  textColor="#fff"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] bg-white px-[3rem] py-[5rem] xl:mt-[-6rem] xl:h-[58.3rem] xl:px-[0rem] xl:py-[0rem]">
        <div className="relative mx-auto flex w-full max-w-[120rem] flex-col-reverse gap-[5rem] lg:flex-row lg:gap-[12.9rem] 2xl:max-w-[130rem]">
          <div className="flex flex-col gap-[4.5rem] xl:pt-[10rem]">
            <div className="flex flex-col justify-between gap-[5rem] md:flex-row lg:flex-col lg:justify-start xl:flex-row xl:gap-[10rem]">
              {offerSectionDesignData.columns.map((col, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-[3.1rem] xl:pt-[3.5rem]`}
                >
                  <div className="overflow-hidden">
                    <h5 className="what-we-offer-right-card-title text-[2.2rem] leading-[3.2rem] font-medium text-[#FF37B3]">
                      {col.title}
                    </h5>
                  </div>

                  <ul className="flex flex-col gap-[1.4rem]">
                    {col.links.map((link, idx) => (
                      <li className="overflow-hidden" key={idx}>
                        <Link
                          href={link.href}
                          className="text-text-primary group flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium transition-all duration-200"
                        >
                          <div className="size-[1rem] rounded-full border-2 border-[#EE8D00]" />{" "}
                          <span className="what-we-offer-right-card-list relative">
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

            <div className="flex flex-col justify-center gap-[2rem] md:flex-row lg:flex-col lg:justify-start xl:flex-row">
              <div className="what-we-offer-right-card-cta-btn">
                <CommonBtn3
                  href="/"
                  label="Book a Call"
                  bgColor="#44B276"
                  textColor="#fff"
                />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-[4rem] lg:items-start lg:gap-[0rem] xl:top-[10.8rem]">
            <h3 className="what-we-offer-left-card-title text-text-primary relative max-w-[30.8rem] text-center text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem] lg:text-left">
              <span>Design and Branding</span>

              <div className="absolute right-[2rem] bottom-[-.4rem] inline-flex size-[4rem] items-center justify-center md:right-[0.5rem] lg:right-[5.3rem]">
                <Image
                  src="/images/icons/click-arrow-pink.svg"
                  alt="Click Arrow"
                  width={40}
                  height={40}
                />
              </div>
            </h3>

            <div className="what-we-offer-left-card-title pointer-events-none relative select-none md:w-[44.248rem] lg:h-[55.18rem]">
              <Image
                src="/images/offer-design-img-01.png"
                alt="offer design image"
                height={551.8}
                width={442.48}
                priority
              />

              <Image
                src="/images/offer-design-img-02.png"
                alt="offer design image"
                height={203.3}
                width={200.88}
                priority
                className="absolute right-[0rem] bottom-[0rem] md:right-[-5.194rem] md:bottom-[13.405rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[120rem] flex-col px-[3rem] pt-[5rem] lg:flex-row xl:px-[0rem] xl:pt-[10rem] 2xl:max-w-[133rem]">
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="what-we-offer-left-card-title relative max-w-[30.8rem] text-center text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem] lg:text-left">
            <span>Maintenance and Growth</span>

            <div className="absolute right-[4rem] bottom-[-0.5rem] inline-flex size-[4rem] items-center justify-center md:right-[-3rem] md:bottom-[-1rem] lg:right-[-1.8rem] lg:bottom-[1.6rem]">
              <Image
                src="/images/icons/click-arrow-green.svg"
                alt="Click Arrow"
                width={40}
                height={40}
              />
            </div>
          </h3>

          <div className="what-we-offer-left-card-img pointer-events-none relative select-none md:top-[-5rem] lg:h-[49.819rem] lg:w-[57.12rem]">
            <Image
              src="/images/offer-maintenance-img.png"
              alt="offer maintenance image"
              height={498.19}
              width={571.2}
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-[4.5rem]">
          <div className="flex flex-col justify-between gap-[5rem] md:flex-row lg:flex-col lg:justify-start xl:flex-row xl:gap-[10rem]">
            {offerSectionMaintenanceData.columns.map((col, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-[3.1rem] xl:pt-[2.1rem]`}
              >
                <div className="overflow-hidden">
                  <h5 className="what-we-offer-right-card-title text-[2.2rem] leading-[3.2rem] font-medium text-[#81F2B4]">
                    {col.title}
                  </h5>
                </div>

                <ul className="flex flex-col gap-[1.4rem]">
                  {col.links.map((link, idx) => (
                    <li className="overflow-hidden" key={idx}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-white"
                      >
                        <div className="size-[1rem] rounded-full border-2 border-[#FFE400]" />{" "}
                        <span className="what-we-offer-right-card-list relative">
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

          <div className="flex flex-col justify-center gap-[2rem] md:flex-row lg:flex-col lg:justify-start xl:flex-row">
            <div className="what-we-offer-right-card-cta-btn">
              <CommonBtn3
                href="/"
                label="Book a Call"
                bgColor="#EE8D00"
                textColor="#fff"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="what-we-offer-cta-card px-[3rem] xl:px-[0rem]">
        <div className="offer-cta-card mx-auto mt-[4rem] flex max-w-[120rem] rounded-[2rem] xl:mt-[-9rem]">
          <div className="flex flex-col items-center justify-center gap-[2.2rem] text-center md:flex-row md:text-left">
            <p className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
              Need bold design or reliable code or both? You’re in the right
              place.
            </p>

            <div className="min-w-max">
              <CommonBtn3
                href="/"
                label="Book a Call"
                bgColor="#EE8D00"
                textColor="#fff"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
