"use client";

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
import offerDesignImg01 from "../../assets/images/offer-design-img-01.png";
import offerDesignImg02 from "../../assets/images/offer-design-img-02.png";
import offerMaintenanceImg from "../../assets/images/offer-maintenance-img.png";
import LineStroke03 from "../decorativeElements/LineStroke03";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonBtn3 from "../common/CommonBtn3";
import { useEffect, useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";

gsap.registerPlugin(ScrollTrigger);

const WhatWeOfferSection = () => {
  const webContentRef = useRef<HTMLDivElement>(null);
  const designContentRef = useRef<HTMLDivElement>(null);
  const maintenanceContentRef = useRef<HTMLDivElement>(null);
  const offerCtaContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (webContentRef.current) {
      const webBadge =
        webContentRef.current.querySelectorAll(".web-badge-animate");
      const webGridImg = webContentRef.current.querySelectorAll(
        ".web-grid-img-animate",
      );
      const webGridHeading = webContentRef.current.querySelectorAll(
        ".web-grid-heading-animate",
      );
      const webGridList = webContentRef.current.querySelectorAll(
        ".web-grid-list-animate",
      );
      const webGridCtaBtn = webContentRef.current.querySelectorAll(
        ".web-grid-cta-animate",
      );

      // badge
      gsap.to(webBadge, {
        rotate: 5, // tilt slightly
        duration: 0.6,
        yoyo: true, // go back
        repeat: -1, // loop forever
        ease: "power1.inOut",
      });

      //  Grid Image
      gsap.from(webGridImg, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: webContentRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      // Grid Heading
      gsap.from(webGridHeading, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: webContentRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      // Grid  List
      gsap.from(webGridList, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: webContentRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Grid  Cta Button
      gsap.from(webGridCtaBtn, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: webContentRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }

    if (designContentRef.current) {
      const designGridImg = designContentRef.current.querySelectorAll(
        ".design-grid-img-animate",
      );
      const designGridHeading = designContentRef.current.querySelectorAll(
        ".design-grid-heading-animate",
      );
      const designGridList = designContentRef.current.querySelectorAll(
        ".design-grid-list-animate",
      );
      const designGridCtaBtn = designContentRef.current.querySelectorAll(
        ".design-grid-cta-animate",
      );

      //  Grid Image
      gsap.from(designGridImg, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: designContentRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      // Grid Heading
      gsap.from(designGridHeading, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: designContentRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      // Grid  List
      gsap.from(designGridList, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: designContentRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Grid  Cta Button
      gsap.from(designGridCtaBtn, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: designContentRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }

    if (maintenanceContentRef.current) {
      const maintenanceGridImg = maintenanceContentRef.current.querySelectorAll(
        ".maintenance-grid-img-animate",
      );
      const maintenanceGridHeading =
        maintenanceContentRef.current.querySelectorAll(
          ".maintenance-grid-heading-animate",
        );
      const maintenanceGridList =
        maintenanceContentRef.current.querySelectorAll(
          ".maintenance-grid-list-animate",
        );
      const maintenanceGridCtaBtn =
        maintenanceContentRef.current.querySelectorAll(
          ".maintenance-grid-cta-animate",
        );

      //  Grid Image
      gsap.from(maintenanceGridImg, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: maintenanceContentRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      // Grid Heading
      gsap.from(maintenanceGridHeading, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: maintenanceContentRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      // Grid  List
      gsap.from(maintenanceGridList, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: maintenanceContentRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Grid  Cta Button
      gsap.from(maintenanceGridCtaBtn, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: maintenanceContentRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }

    if (offerCtaContentRef.current) {
      const offerCtaCard = offerCtaContentRef.current.querySelectorAll(
        ".offer-cta-card-animate",
      );

      // Offer Cta Card
      gsap.from(offerCtaCard, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: offerCtaContentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section className="relative pt-[8rem] pb-[8rem] md:pb-[10.1rem]">
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
        <LineStroke03 className="absolute top-[180.6rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div
        ref={webContentRef}
        className="relative z-[2] flex flex-col items-center gap-[7.6rem] px-[2rem] pb-[6rem] xl:px-[0rem] xl:pb-[0rem]"
      >
        <div className="rotate-[2deg]">
          <div className="web-badge-animate">
            <SectionLabel2
              text="What We Offer"
              bgColor="bg-[#FFC300]"
              textColor="text-[#070707]"
            />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[130rem] flex-col gap-[2rem] lg:flex-row lg:gap-[0rem]">
          <div className="flex flex-col gap-[3.3rem]">
            <h3 className="web-grid-img-animate relative max-w-[33.3rem] text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
              <span>Website Development</span>

              <div className="absolute right-[6rem] bottom-[-.6rem] inline-flex size-[4rem] items-center justify-center md:right-[-.8rem]">
                <Image
                  src={clickArrowYellow}
                  alt="Click Arrow"
                  width={40}
                  height={40}
                />
              </div>
            </h3>

            <div className="web-grid-img-animate md:h-[39.5rem] md:w-[65.5rem]">
              <Image
                src={offerWebImg}
                alt="offer web image"
                height={395}
                width={655}
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-[4.5rem] xl:ml-[-10rem]">
            <div className="flex flex-col gap-[5rem] md:flex-row lg:flex-col xl:flex-row xl:gap-[10rem]">
              {offerSectionWebData.columns.map((col, idx) => (
                <div key={idx} className={`flex flex-col gap-[3.1rem]`}>
                  <div className="overflow-hidden">
                    <h5 className="web-grid-heading-animate text-[2.2rem] leading-[3.2rem] font-medium text-[#FFE400]">
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
                          <span className="web-grid-list-animate relative">
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

            <div className="flex flex-col gap-[2rem] xl:flex-row">
              <div className="overflow-hidden">
                <div className="web-grid-cta-animate">
                  <CommonBtn3
                    href="/"
                    label="Book a Call"
                    bgColor="#3078FF"
                    textColor="#fff"
                  />
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="web-grid-cta-animate">
                  <CommonBtn3
                    href="/"
                    label="View Case Studies"
                    bgColor="#FF37B3"
                    textColor="#fff"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={designContentRef}
        className="relative z-[1] bg-white px-[2rem] lg:pb-[8rem] xl:mt-[-6rem] xl:h-[58.3rem] xl:px-[0rem] xl:pb-[0rem]"
      >
        <div className="relative mx-auto flex w-full max-w-[130rem] flex-col gap-[5rem] lg:flex-row lg:gap-[12.9rem]">
          <div className="flex flex-col gap-[4.5rem] pt-[5rem] lg:pt-[10rem]">
            <div className="flex flex-col gap-[5rem] md:flex-row lg:flex-col xl:flex-row xl:gap-[10rem]">
              {offerSectionDesignData.columns.map((col, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-[3.1rem] pt-[3.5rem]`}
                >
                  <div className="overflow-hidden">
                    <h5 className="design-grid-heading-animate text-[2.2rem] leading-[3.2rem] font-medium text-[#FF37B3]">
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
                          <span className="design-grid-list-animate relative">
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

            <div className="flex flex-col gap-[2rem] xl:flex-row">
              <div className="overflow-hidden p-[.5rem]">
                <div className="design-grid-cta-animate">
                  <CommonBtn3
                    href="/"
                    label="Book a Call"
                    bgColor="#44B276"
                    textColor="#fff"
                  />
                </div>
              </div>

              <div className="overflow-hidden p-[.5rem]">
                <div className="design-grid-cta-animate">
                  <CommonBtn3
                    href="/"
                    label="View Case Studies"
                    bgColor="#FF37B3"
                    textColor="#fff"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col lg:top-[10.8rem]">
            <h3 className="design-grid-img-animate text-text-primary relative max-w-[30.8rem] text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem]">
              <span>Design and Branding</span>

              <div className="absolute right-[10rem] bottom-[-.4rem] inline-flex size-[4rem] items-center justify-center md:right-[5.3rem]">
                <Image
                  src={clickArrowPink}
                  alt="Click Arrow"
                  width={40}
                  height={40}
                />
              </div>
            </h3>

            <div className="design-grid-img-animate pointer-events-none relative select-none md:h-[55.18rem] md:w-[44.248rem]">
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
                className="absolute right-[0rem] bottom-[0rem] md:right-[-5.194rem] md:bottom-[13.405rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={maintenanceContentRef}
        className="relative z-[1] mx-auto flex w-full max-w-[133rem] flex-col px-[2rem] pt-[6rem] md:pt-[10rem] lg:flex-row xl:px-[0rem]"
      >
        <div className="flex flex-col">
          <h3 className="maintenance-grid-img-animate relative max-w-[30.8rem] text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
            <span>Maintenance and Growth</span>

            <div className="absolute right-[13rem] bottom-[-.5rem] inline-flex size-[4rem] items-center justify-center md:right-[-1.8rem] md:bottom-[1.6rem]">
              <Image
                src={clickArrowGreen}
                alt="Click Arrow"
                width={40}
                height={40}
              />
            </div>
          </h3>

          <div className="maintenance-grid-img-animate pointer-events-none relative select-none md:top-[-5rem] md:h-[49.819rem] md:w-[57.12rem]">
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
          <div className="flex flex-col gap-[5rem] md:flex-row lg:flex-col xl:flex-row xl:gap-[10rem]">
            {offerSectionMaintenanceData.columns.map((col, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-[3.1rem] pt-[2.1rem]`}
              >
                <div className="overflow-hidden">
                  <h5 className="maintenance-grid-heading-animate text-[2.2rem] leading-[3.2rem] font-medium text-[#81F2B4]">
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
                        <span className="maintenance-grid-list-animate relative">
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

          <div className="flex flex-col gap-[2rem] xl:flex-row">
            <div className="overflow-hidden p-[.5rem]">
              <div className="maintenance-grid-cta-animate">
                <CommonBtn3
                  href="/"
                  label="Book a Call"
                  bgColor="#EE8D00"
                  textColor="#fff"
                />
              </div>
            </div>

            <div className="overflow-hidden p-[.5rem]">
              <div className="maintenance-grid-cta-animate">
                <CommonBtn3
                  href="/"
                  label="View Case Studies"
                  bgColor="#FF37B3"
                  textColor="#fff"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[2rem] xl:px-[0rem]">
        <div
          ref={offerCtaContentRef}
          className="offer-cta-card mx-auto mt-[4rem] flex max-w-[120.3rem] rounded-[2rem] md:mt-[-9rem]"
        >
          <div className="offer-cta-card-animate flex flex-col items-center justify-center gap-[2.2rem] md:flex-row">
            <p className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
              Need bold design or reliable code or both? You’re in the right
              place.
            </p>

            <CommonBtn3
              href="/"
              label="Book a Call"
              bgColor="#EE8D00"
              textColor="#fff"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
