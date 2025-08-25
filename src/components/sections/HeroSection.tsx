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

  useEffect(() => {
    if (isReady && heroContentRef.current) {
      const badge = heroContentRef.current.querySelectorAll(
        ".hero-badge-animate",
      );
      const heading =
        heroContentRef.current.querySelector<HTMLElement>(".hero-heading");
      const desc =
        heroContentRef.current.querySelector<HTMLElement>(".hero-desc");
      const ctaBtn = heroContentRef.current.querySelector(".hero-cta-btn");
      const logosHeading = heroContentRef.current.querySelector(
        ".hero-logos-heading",
      );
      const logos = heroContentRef.current.querySelectorAll(".hero-logos");

      const tl = gsap.timeline();

      // Step 1: fade in whole hero smoothly
      tl.to(heroContentRef.current, { autoAlpha: 1, duration: 0.3 });

      // Step 2: drop-like stagger animation
      if (badge) {
        tl.fromTo(
          badge,
          { scale: 0, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.6,
            ease: "back.out(1.7)", // nice bounce curve
            clearProps: "all",
          },
        );
      }

      // Step 3: split text animation
      if (heading) {
        const split = new SplitType(heading, {
          types: "lines",
          tagName: "span",
        });

        tl.from(split.lines, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "back.inOut",
        });
      }

      // Step 4 split text animation for description
      if (desc) {
        const split = new SplitType(desc, {
          types: "words",
          tagName: "span",
        });

        tl.from(split.words, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.15,
          duration: 0.4,
          ease: "back.out(1.7)",
        });
      }

      // Step 5: fade in cta button
      tl.fromTo(
        ctaBtn,
        { opacity: 0, autoAlpha: 0 },
        {
          opacity: 1,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power3.out", // nice bounce curve
          clearProps: "all",
        },
      );

      // Step 6: fade in logos heading
      tl.fromTo(
        logosHeading,
        { opacity: 0, autoAlpha: 0 },
        {
          opacity: 1,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power3.out", // nice bounce curve
          clearProps: "all",
        },
      );

      // Step 7: staggered fade in logos
      tl.from(logos, {
        opacity: 0,
        y: 40, // slide up
        stagger: 0.15, // one by one
        duration: 0.6,
        ease: "power3.out",
      });

      tl.timeScale(1.3);
    }
  }, [isReady]);

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
          <div className="hero-badge-animate">
            <BookBadge />
          </div>

          <h1 className="hero-heading text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em] text-white">
            Grow your digital presence today with real{" "}
            <span className="bg-gradient-01 bg-clip-text text-transparent">
              human-led
            </span>{" "}
            strategy.
          </h1>

          <p className="hero-desc max-w-[65.3rem] text-[1.8rem] leading-[2.6rem] font-medium text-white md:text-[2.2rem] md:leading-[3.2rem]">
            Based in Manchester, we craft bespoke websites and branding that are
            as smart as they are stunning.
          </p>

          <div className="hero-cta-btn">
            <CommonBtn2 />
          </div>
        </div>

        {/* Logos */}
        <div className="flex max-w-[120.3rem] flex-col items-center gap-[2rem] text-center">
          <h6 className="hero-logos-heading text-[1.8rem] leading-[2.6rem] font-normal text-white">
            Trusted by enterprises all over the world:
          </h6>

          <ul className="flex items-center justify-center gap-[4.423rem]">
            {logoPopupsData.map((item, idx) => (
              <li className="hero-logos" key={idx}>
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
