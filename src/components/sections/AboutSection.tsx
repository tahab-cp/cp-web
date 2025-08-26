"use client";

import Image from "next/image";
import AboutBadge from "../common/AboutBadge";
import { aboutCardData } from "@/constants/aboutSection";
import cpStroke from "../../assets/images/cp-stroke.svg";
import report from "../../assets/images/report.svg";
import message from "../../assets/images/message.svg";
import analyst from "../../assets/images/analyst.svg";
import LineStroke02 from "../decorativeElements/LineStroke02";
import CommonBtn3 from "../common/CommonBtn3";
import CLetter from "../decorativeElements/CLetter";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const aboutGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutContentRef.current) {
      const aboutBadge = aboutContentRef.current.querySelectorAll(
        ".about-badge-animate",
      );

      const aboutDescSplit1 = new SplitType(
        aboutContentRef.current.querySelectorAll(
          ".desc-part",
        )[0] as HTMLElement,
        { types: "lines" },
      );
      const aboutDescSplit2 = new SplitType(
        aboutContentRef.current.querySelectorAll(
          ".desc-part",
        )[1] as HTMLElement,
        { types: "lines" },
      );
      const aboutDescSplit3 = new SplitType(
        aboutContentRef.current.querySelectorAll(
          ".desc-part",
        )[2] as HTMLElement,
        { types: "lines" },
      );
      const aboutDescSplit4 = new SplitType(
        aboutContentRef.current.querySelectorAll(
          ".desc-part",
        )[3] as HTMLElement,
        { types: "lines" },
      );
      const aboutDescSplit5 = new SplitType(
        aboutContentRef.current.querySelectorAll(
          ".desc-part",
        )[4] as HTMLElement,
        { types: "lines" },
      );
      const aboutDescSplit6 = new SplitType(
        aboutContentRef.current.querySelectorAll(
          ".desc-part",
        )[5] as HTMLElement,
        { types: "lines" },
      );

      const aboutCtaBtn = aboutContentRef.current.querySelectorAll(
        ".about-cta-btn-animate",
      );

      // animate badge
      gsap.from(aboutBadge, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutContentRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Animate desc first line
      gsap.from(aboutDescSplit1.lines, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutContentRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });

      // Animate desc second line
      gsap.from(aboutDescSplit2.lines, {
        y: 100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: aboutContentRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });

      // Animate desc third line
      gsap.from(aboutDescSplit3.lines, {
        y: 100,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutContentRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });

      // Animate desc fourth line
      gsap.from(aboutDescSplit4.lines, {
        y: 100,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutContentRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });

      // Animate desc fifth line
      gsap.from(aboutDescSplit5.lines, {
        y: 100,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutContentRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });

      // Animate desc six line
      gsap.from(aboutDescSplit6.lines, {
        y: 100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: aboutContentRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });

      // animate cta btn
      gsap.from(aboutCtaBtn, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutContentRef.current,
          start: "top 30%",
          toggleActions: "play none none none",
        },
      });
    }

    if (aboutGridRef.current) {
      const aboutCard1 = aboutGridRef.current.querySelectorAll(
        ".about-card-1-animate",
      );
      const aboutCard2 = aboutGridRef.current.querySelectorAll(
        ".about-card-2-animate",
      );

      // animate card 1
      gsap.from(aboutCard1, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutGridRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // animate card 2 (Staggered)
      {
        aboutCard2.forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        });
      }
    }
  }, []);

  return (
    <section className="relative py-[10rem]">
      {/* Bg Element */}
      <div className="absolute inset-0 z-[0] overflow-hidden">
        <CLetter className="absolute top-[3.1rem] right-[-18.341rem]" />
      </div>

      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke02 className="absolute top-[135.1rem] left-1/2 -translate-x-1/2" />
      </div>

      <div
        ref={aboutContentRef}
        className="relative z-10 mx-auto flex w-full max-w-[120.3rem] flex-col items-center text-center xl:block xl:text-left"
      >
        <div className="about-badge-animate">
          <AboutBadge />
        </div>

        <h5 className="mt-[3rem] mb-[2rem] text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[3.6rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
          <div className="overflow-hidden">
            <div className="desc-part">
              <span className="text-[#EE8D00]">Creative Pixels</span> is an
              independent web design and development
            </div>
          </div>{" "}
          <div className="overflow-hidden">
            <div className="desc-part">
              agency based in <span className="text-[#FF37B3]">Manchester</span>{" "}
              — crafting digital experiences
            </div>
          </div>{" "}
          <div className="overflow-hidden">
            <div className="desc-part">
              since 2014. We care deeply about our clients, build long-term
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="desc-part">
              partnerships, bring over a decade of industry expertise, and
            </div>
          </div>{" "}
          <div className="overflow-hidden">
            <div className="desc-part">
              take pride in{" "}
              <span className="text-[#3078FF]">award-winning</span>,
              pixel-perfect work.
            </div>
          </div>
        </h5>

        <h5 className="mb-[2rem] overflow-hidden text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[3.6rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
          <div className="desc-part">We work with clients in 🇬🇧 🇦🇺 🇺🇸</div>
        </h5>

        <div className="about-cta-btn-animate">
          <CommonBtn3 href="/about" label="About CreativePixels" />
        </div>
      </div>

      <div
        ref={aboutGridRef}
        className="relative z-10 mx-auto mt-[10rem] flex max-w-[135.2rem] flex-col gap-[1.8rem] xl:flex-row"
      >
        <div className="about-card-1-animate about-card-gradient relative h-[50rem] w-full overflow-hidden md:h-[84.6rem] md:min-w-[62.9rem]">
          {/* Gradient */}
          <div className="absolute top-[-11.9rem] left-[-10.5rem] z-[0] size-[30rem] bg-[#1534B699] blur-[100px]" />
          <div className="absolute right-0 bottom-[-26.656rem] z-[0] size-[30rem] bg-[#DFDFDF99] blur-[100px]" />

          <h2 className="relative z-[1] px-[2rem] pt-[3rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:px-[4.5rem] md:pt-[6rem] md:text-[5.6rem] md:leading-[6.4rem]">
            We create{" "}
            <span className="text-[#FF37B3]">exceptional websites</span>
          </h2>

          {/* Elements */}
          <div className="absolute inset-0 z-[0]">
            <Image
              src={cpStroke}
              alt="Stroke"
              height={244.4}
              width={429.04}
              priority
              className="absolute top-[24.4rem] left-0"
            />
          </div>

          <div className="absolute inset-0 z-[0]">
            <Image
              src={report}
              alt="Report"
              height={209}
              width={219}
              priority
              className="absolute top-[46.2rem] left-[3.4rem]"
            />
          </div>

          <div className="absolute inset-0 z-[0]">
            <Image
              src={message}
              alt="Message"
              height={109}
              width={298}
              priority
              className="absolute top-[42.9rem] left-[24.011rem]"
            />
          </div>

          <div className="absolute inset-0 z-[0]">
            <Image
              src={analyst}
              alt="Message"
              height={247}
              width={393}
              priority
              className="absolute top-[56.5rem] left-[21.2rem] rounded-[2rem] backdrop-blur-[10px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-[1.5rem] gap-y-[3rem] md:grid-cols-2">
          {aboutCardData.map((item, idx) => (
            <div className="about-card-2-animate" key={idx}>
              <div className="about-card">
                <Image
                  src={item.icon}
                  alt="Pencil Icon"
                  width={52}
                  height={52}
                  className="size-[4.8rem] md:size-[5.2rem]"
                />

                <h4 className="mt-[2rem] mb-[6.2rem] text-[2.8rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
                  {item.title}
                </h4>

                <p className="text-[1.8rem] leading-[2.6rem] text-[#333333]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
