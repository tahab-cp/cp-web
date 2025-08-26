"use client";
import Image from "next/image";
import heroSecGradientBg from "@/assets/images/hero-sec-gradient-bg.png";
import BookBadge from "../common/BookBadge";
import LogoPopup from "../common/LogoPopup";
import { logoPopupsData } from "@/constants/heroSection";
import LineStroke01 from "../decorativeElements/LineStroke01";
import CommonBtn2 from "../common/CommonBtn2";
import { useEffect, useRef } from "react";
import { useLoaderStore } from "@/store/useLoader";
import gsap from "gsap";
import SplitType from "split-type";

const HeroSection = () => {
  const isReady = useLoaderStore((state) => state.isReady);
  const heroContentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (isReady && heroContentRef.current) {
  //     const heroBadge = heroContentRef.current.querySelectorAll(
  //       ".hero-badge-animate",
  //     );
  //     const heroHeadingSplit1 = new SplitType(
  //       heroContentRef.current.querySelectorAll(
  //         ".heading-part",
  //       )[0] as HTMLElement,
  //       { types: "chars" },
  //     );
  //     const heroHeadingSplit2 = new SplitType(
  //       heroContentRef.current.querySelectorAll(
  //         ".heading-part",
  //       )[1] as HTMLElement,
  //       { types: "chars" },
  //     );
  //     const heroDescSplit1 = new SplitType(
  //       heroContentRef.current.querySelectorAll(".desc-part")[0] as HTMLElement,
  //       { types: "lines" },
  //     );
  //     const heroDescSplit2 = new SplitType(
  //       heroContentRef.current.querySelectorAll(".desc-part")[1] as HTMLElement,
  //       { types: "lines" },
  //     );
  //     const heroCtaBtn = heroContentRef.current.querySelectorAll(
  //       ".hero-cta-btn-animate",
  //     );
  //     const heroLogoHeading = heroContentRef.current.querySelectorAll(
  //       ".hero-logo-heading-animate",
  //     );
  //     const heroLogo =
  //       heroContentRef.current.querySelectorAll(".hero-logo-animate");

  //     // make parent visible
  //     gsap.to(heroContentRef.current, { autoAlpha: 1, duration: 0.1 });

  //     // animate badge
  //     gsap.from(heroBadge, {
  //       y: 100,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power2.out",
  //     });

  //     // Animate first line
  //     gsap.from(heroHeadingSplit1.chars, {
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.03,
  //       ease: "power2.out",
  //     });

  //     // Animate second line
  //     gsap.from(heroHeadingSplit2.chars, {
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.03,
  //       ease: "power2.out",
  //     });

  //     // Animate desc first line
  //     gsap.from(heroDescSplit1.lines, {
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.03,
  //       ease: "power2.out",
  //     });

  //     // Animate desc second line
  //     gsap.from(heroDescSplit2.lines, {
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.03,
  //       ease: "power2.out",
  //     });

  //     // animate cta btn
  //     gsap.from(heroCtaBtn, {
  //       y: 100,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power2.out",
  //     });

  //     // animate hero logo heading
  //     gsap.from(heroLogoHeading, {
  //       y: 100,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power2.out",
  //     });

  //     // animate logos (with stagger)
  //     gsap.from(heroLogo, {
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.1,
  //       ease: "power2.out",
  //       clearProps: "all",
  //     });
  //   }
  // }, [isReady]);

  useEffect(() => {
    if (heroContentRef.current) {
      const heroBadge = heroContentRef.current.querySelectorAll(
        ".hero-badge-animate",
      );
      const heroHeadingSplit1 = new SplitType(
        heroContentRef.current.querySelectorAll(
          ".heading-part",
        )[0] as HTMLElement,
        { types: "chars" },
      );
      const heroHeadingSplit2 = new SplitType(
        heroContentRef.current.querySelectorAll(
          ".heading-part",
        )[1] as HTMLElement,
        { types: "chars" },
      );
      const heroDescSplit1 = new SplitType(
        heroContentRef.current.querySelectorAll(".desc-part")[0] as HTMLElement,
        { types: "lines" },
      );
      const heroDescSplit2 = new SplitType(
        heroContentRef.current.querySelectorAll(".desc-part")[1] as HTMLElement,
        { types: "lines" },
      );
      const heroCtaBtn = heroContentRef.current.querySelectorAll(
        ".hero-cta-btn-animate",
      );
      const heroLogoHeading = heroContentRef.current.querySelectorAll(
        ".hero-logo-heading-animate",
      );
      const heroLogo =
        heroContentRef.current.querySelectorAll(".hero-logo-animate");

      // make parent visible
      gsap.to(heroContentRef.current, { autoAlpha: 1, duration: 0.1 });

      // animate badge
      gsap.from(heroBadge, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Animate first line
      gsap.from(heroHeadingSplit1.chars, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: "power2.out",
      });

      // Animate second line
      gsap.from(heroHeadingSplit2.chars, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: "power2.out",
        delay: 0.2,
      });

      // Animate desc first line
      gsap.from(heroDescSplit1.lines, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: "power2.out",
      });

      // Animate desc second line
      gsap.from(heroDescSplit2.lines, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: "power2.out",
        delay: 0.2,
      });

      // animate cta btn
      gsap.from(heroCtaBtn, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // animate hero logo heading
      gsap.from(heroLogoHeading, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // animate logos (with stagger)
      gsap.from(heroLogo, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
      });
    }
  }, []);

  return (
    <section className="relative h-[79rem] w-full overflow-hidden rounded-br-[5rem] rounded-bl-[5rem]">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroSecGradientBg}
          alt="Hero Gradient Background"
          fill
          className="pointer-events-none object-cover"
          priority
        />
      </div>

      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke01 className="absolute bottom-[2.058rem] left-1/2 -translate-x-1/2 opacity-0" />
      </div>

      {/* Overlay */}
      <div className="hero-sec-overlay absolute bottom-0 left-0 h-[28.9rem] w-full" />

      <div
        ref={heroContentRef}
        className="relative z-[10] flex h-full w-full flex-col items-center justify-end gap-[5.9rem] pt-[15rem] pb-[4rem] opacity-0"
      >
        {/* Main content */}
        <div className="flex max-w-[106.5rem] flex-col items-center gap-[2.7rem] text-center">
          <div className="overflow-hidden">
            <div className="hero-badge-animate">
              <BookBadge />
            </div>
          </div>

          <h1 className="text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em] text-white">
            <div className="overflow-hidden">
              <div className="heading-part">
                Grow your digital presence today
              </div>{" "}
            </div>

            <div className="overflow-hidden">
              <div className="heading-part">
                with real <span className="text-[#ee8d00]">human-led</span>{" "}
                strategy.
              </div>
            </div>

            {/* <div className="overflow-hidden">
              <div className="heading-part">
                with real{" "}
                <span className="bg-gradient-01 bg-clip-text text-transparent">
                  human-led
                </span>{" "}
                strategy.
              </div>
            </div> */}
          </h1>

          <div className="text-[1.8rem] leading-[2.6rem] font-medium text-white md:text-[2.2rem] md:leading-[3.2rem]">
            <div className="overflow-hidden">
              <div className="desc-part">
                Based in Manchester, we craft bespoke websites and branding
              </div>
            </div>{" "}
            <div className="overflow-hidden">
              <div className="desc-part">
                that are as smart as they are stunning.
              </div>
            </div>
          </div>

          <div className="overflow-hidden p-[.5rem]">
            <div className="hero-cta-btn-animate">
              <CommonBtn2 />
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="flex max-w-[120.3rem] flex-col items-center gap-[2rem] text-center">
          <div className="overflow-hidden">
            <h6 className="hero-logo-heading-animate text-[1.8rem] leading-[2.6rem] font-normal text-white">
              Trusted by enterprises all over the world:
            </h6>
          </div>

          <ul className="flex items-center justify-center gap-[4.423rem]">
            {logoPopupsData.map((item, idx) => (
              <li className="hero-logo-animate" key={idx}>
                <LogoPopup
                  logo={item.logo}
                  popupImage={item.popupImage}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  logoWidth={item.logoWidth}
                  logoHeight={item.logoHeight}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
