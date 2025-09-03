"use client";

import { whoWeAreCardData } from "@/constants/whoWeAreSection";
import SectionDescription from "../common/SectionDescription";
import Image from "next/image";
import LineStroke13 from "../decorativeElements/LineStroke13";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SectionLabel2 from "../common/SectionLabel2";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import CommonBtn3 from "../common/CommonBtn3";

const WhoWeAreSection = () => {
  const whoWeAreRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const whoWeAre = whoWeAreRef.current;
    if (!whoWeAre) return;

    const whoWeAreLabel = whoWeAre.querySelector(".who-we-are-label");
    const whoWeAreTitle = new SplitText(".who-we-are-title", {
      type: "lines",
    });
    const whoWeAreSubtitle = new SplitText(".who-we-are-subtitle", {
      type: "lines",
    });
    const whoWeAreCards = whoWeAre.querySelectorAll(".who-we-are-cards");
    const whoWeAreDesc = new SplitText(".who-we-are-desc", {
      type: "lines",
    });
    const whoWeAreCtaBtn = whoWeAre.querySelectorAll(".who-we-are-cta-btn");

    // Timeline for initial load animations
    const tl = gsap.timeline();

    // Initial fade-in when site loads
    gsap.fromTo(
      whoWeAre,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" },
    );

    // Label wobble
    gsap.to(whoWeAreLabel, {
      rotate: 5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    tl.from(whoWeAreTitle.lines, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.3,
    });

    tl.from(whoWeAreSubtitle.lines, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });

    tl.from(whoWeAreCards, {
      opacity: 0,
      y: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });

    gsap.from(whoWeAreDesc.lines, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05, // animate one by one
      ease: "power2.out",
      scrollTrigger: {
        trigger: whoWeAre, // parent element
        start: "top -50%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(whoWeAreCtaBtn, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: whoWeAreCtaBtn, // parent element
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.timeScale(1.6);
  }, []);

  return (
    <section
      ref={whoWeAreRef}
      className="relative px-[2rem] pt-[20.6rem] pb-[9rem] xl:px-[0rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke13 className="absolute top-[14.8rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[3] mx-auto max-w-[141.6rem]">
        <div className="flex flex-col items-center gap-[2.1rem] text-center">
          <div className="rotate-[-2deg]">
            <div className="who-we-are-label">
              <SectionLabel2 text="Who We Are" />
            </div>
          </div>

          <h1 className="text-text-primary max-w-[100rem] overflow-hidden text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em]">
            <div className="who-we-are-title">
              About Creative Pixels Creative Agency based in Manchester
            </div>
          </h1>

          <div className="overflow-hidden">
            <div className="who-we-are-subtitle">
              <SectionDescription label="You end up hearing about agencies which do care, but don't. Let us change that for you today." />
            </div>
          </div>
        </div>

        <div className="mt-[8rem] mb-[10.5rem] flex flex-col gap-[1.2rem] lg:flex-row">
          {whoWeAreCardData.slice(0, 1).map((item, idx) => (
            <div
              key={idx}
              className="who-we-are-cards relative h-[25rem] overflow-hidden rounded-[2rem] md:h-[45rem] lg:h-[58.8rem] lg:w-[69.2rem]"
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
                className="who-we-are-cards relative h-[18rem] w-1/2 overflow-hidden rounded-[2rem] md:h-[28.8rem] lg:w-[35.6rem]"
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
              className="who-we-are-cards relative h-[25rem] overflow-hidden rounded-[2rem] md:h-[45rem] lg:h-[58.8rem] lg:w-[34.4rem]"
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
          <h5 className="max-w-[103.2rem] overflow-hidden text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#333333]">
            <div className="who-we-are-desc">
              At Creative Pixels, we don&apos;t just build websites—we create
              digital experiences that drive growth and make a lasting impact.
              As a Manchester-based agency, we specialize in WordPress
              development, e-commerce solutions, and creative branding. We’re
              here to make your digital journey successful.
            </div>
          </h5>

          <div className="who-we-are-cta-btn">
            <CommonBtn3
              href="/"
              label="Work With Us"
              bgColor="#FF37B3"
              textColor="#fff"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
