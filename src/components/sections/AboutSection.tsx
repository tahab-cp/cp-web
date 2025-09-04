"use client";

import Image from "next/image";
import { aboutCardData } from "@/constants/aboutSection";
import LineStroke02 from "../decorativeElements/LineStroke02";
import CommonBtn3 from "../common/CommonBtn3";
import CLetter from "../decorativeElements/CLetter";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const AboutSection = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

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
    <section ref={aboutRef} className="relative py-[5rem] xl:py-[10rem]">
      {/* Bg Element */}
      <div className="absolute inset-0 z-[0] hidden overflow-hidden xl:block">
        <CLetter className="absolute top-[3.1rem] right-[-18.341rem]" />
      </div>

      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke02 className="absolute top-[90rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col items-center px-[3rem] xl:items-start xl:px-[0rem]">
        <h5 className="mb-[2rem] max-w-[99rem] overflow-hidden text-center text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[3.4rem] md:leading-[4.8rem] xl:text-left">
          <div className="about-desc">
            <span className="text-[#EE8D00]">Creative Pixels</span> is an
            independent web design and development agency based in{" "}
            <span className="text-[#FF37B3]">Manchester</span> — crafting
            digital experiences since 2014. We care deeply about our clients,
            build long-term partnerships, bring over a decade of industry
            expertise, and take pride in{" "}
            <span className="text-[#3078FF]">award-winning</span>, pixel-perfect
            work.
          </div>

          <div className="about-desc mt-[2rem]">
            We work with clients in 🇬🇧 🇦🇺 🇺🇸
          </div>
        </h5>

        <div className="about-cta-btn">
          <CommonBtn3 href="/about" label="About CreativePixels" />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-[5rem] flex max-w-[120rem] flex-col gap-[1.8rem] px-[3rem] lg:mt-[10rem] xl:flex-row xl:px-[0rem] 2xl:max-w-[135rem]">
        <div className="about-card-gradient relative overflow-hidden px-[2rem] py-[3rem] xl:w-[55%] 2xl:w-[60%]">
          <div className="absolute top-[-11.9rem] left-[-10.5rem] z-[0] size-[30rem] bg-[#1534B699] blur-[100px]" />
          <div className="absolute right-0 bottom-[-26.656rem] z-[0] size-[30rem] bg-[#DFDFDF99] blur-[100px]" />

          <div className="relative z-[1] flex flex-col items-center gap-[2rem] xl:items-start">
            <button
              onClick={handleTogglePlay}
              className="inline-flex h-[4.4rem] cursor-pointer items-center justify-center gap-[1.2rem] rounded-[.8rem] border-[0.5px] border-dashed border-white px-[2rem] py-[.6rem] text-[1.6rem] leading-[2.4rem] font-medium text-white"
            >
              <Image
                src="/images/about-play-btn-img.svg"
                alt="Avatar"
                width={58}
                height={32}
              />

              <span>Hear From Founder</span>
            </button>

            <div className="h-[30rem] w-full overflow-hidden rounded-[2rem] md:h-[50rem] xl:h-[40rem]">
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                autoPlay
                className="size-full object-cover"
              >
                <source src="/videos/about-video.mp4" type="video/mp4" />
                Your browser does not support the video.
              </video>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[2rem] md:grid-cols-2 xl:w-[45%] 2xl:w-[40%]">
          {aboutCardData.map((item, idx) => (
            <div
              key={idx}
              className="about-card flex flex-col items-center justify-between gap-[2rem] transition-colors duration-300 xl:items-start"
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

              <h4 className="text-center text-[2.8rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[2.5rem] md:leading-[3.5rem] xl:text-left">
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
