"use client";

import Image from "next/image";
import { aboutCardData } from "@/constants/aboutSection";
import LineStroke02 from "../decorativeElements/LineStroke02";
import CommonBtn3 from "../common/CommonBtn3";
import CLetter from "../decorativeElements/CLetter";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const AboutSection = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const about = aboutRef.current;
    if (!about) return;

    const aboutLabel = about.querySelector(".about-label");
    const aboutDescSplit = new SplitText(".about-desc", {
      type: "lines",
    });
    const aboutCtaBtn = about.querySelector(".about-cta-btn");
    const aboutCardGradient = about.querySelector(".about-card-gradient");
    const aboutCard = about.querySelectorAll(".about-card");

    gsap.from(aboutLabel, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutLabel,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(aboutDescSplit.lines, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05, // animate one by one
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-desc", // parent element
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(aboutCtaBtn, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutCtaBtn,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(aboutCardGradient, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutCardGradient,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(aboutCard, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.5,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutCard,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section ref={aboutRef} className="relative py-[10rem]">
      {/* Bg Element */}
      <div className="absolute inset-0 z-[0] hidden overflow-hidden md:block">
        <CLetter className="absolute top-[3.1rem] right-[-18.341rem]" />
      </div>

      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke02 className="absolute top-[90rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[120.3rem] flex-col px-[2rem] xl:px-[0rem]">
        <h5 className="mt-[3rem] mb-[2rem] text-[1.8rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.4rem] md:leading-[4rem] lg:text-[3rem] lg:leading-[4.4rem] xl:text-[3.4rem] xl:leading-[4.8rem]">
          <div className="overflow-hidden">
            <div className="about-desc">
              <span className="text-[#EE8D00]">Creative Pixels</span> is an
              independent web design and development
            </div>
          </div>{" "}
          <div className="overflow-hidden">
            <div className="about-desc">
              agency based in <span className="text-[#FF37B3]">Manchester</span>{" "}
              — crafting digital experiences
            </div>
          </div>{" "}
          <div className="overflow-hidden">
            <div className="about-desc">
              since 2014. We care deeply about our clients, build long-term
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="about-desc">
              partnerships, bring over a decade of industry expertise, and
            </div>
          </div>{" "}
          <div className="overflow-hidden">
            <div className="about-desc">
              take pride in{" "}
              <span className="text-[#3078FF]">award-winning</span>,
              pixel-perfect work.
            </div>
          </div>
        </h5>

        <h5 className="mb-[2rem] overflow-hidden text-[1.8rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.4rem] md:leading-[4rem] lg:text-[3rem] lg:leading-[4.4rem] xl:text-[3.4rem] xl:leading-[4.8rem]">
          <div className="about-desc">We work with clients in 🇬🇧 🇦🇺 🇺🇸</div>
        </h5>

        <div className="about-cta-btn">
          <CommonBtn3 href="/about" label="About CreativePixels" />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-[5rem] flex flex-col gap-[1.8rem] px-[2rem] md:mt-[10rem] lg:max-w-[75rem] xl:max-w-[135.2rem] xl:flex-row xl:px-[0rem]">
        <div className="about-card-gradient relative w-[60%] overflow-hidden px-[2rem] py-[3rem]">
          <div className="absolute top-[-11.9rem] left-[-10.5rem] z-[0] size-[30rem] bg-[#1534B699] blur-[100px]" />
          <div className="absolute right-0 bottom-[-26.656rem] z-[0] size-[30rem] bg-[#DFDFDF99] blur-[100px]" />

          <div className="relative z-[1] flex flex-col items-start gap-[2rem]">
            <button className="inline-flex h-[4.4rem] cursor-pointer items-center justify-center gap-[1.2rem] rounded-[.8rem] border-[0.5px] border-dashed border-white px-[2rem] py-[.6rem] text-[1.6rem] leading-[2.4rem] font-medium text-white">
              <Image
                src="/images/about-play-btn-img.svg"
                alt="Avatar"
                width={58}
                height={32}
              />

              <span>Hear From Founder</span>
            </button>

            <div className="h-[40rem] w-full overflow-hidden rounded-[2rem] bg-amber-300">
              <video loop muted playsInline className="size-full object-cover">
                <source src="/videos/about-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="grid w-[40%] grid-cols-1 gap-[2rem] md:grid-cols-2">
          {aboutCardData.map((item, idx) => (
            <div
              key={idx}
              className="about-card flex flex-col justify-between gap-[2rem] transition-colors duration-300"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = item.hoverColor)
              }
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              <Image
                src={item.icon}
                alt="Pencil Icon"
                width={40}
                height={40}
                className="size-[3rem] md:size-[4rem]"
              />

              <h4 className="text-[2.8rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[2.5rem] md:leading-[3.5rem]">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
