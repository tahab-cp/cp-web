"use client";
import BookBadge from "../common/BookBadge";
import LogoPopup from "../common/LogoPopup";
import { logoPopupsData } from "@/constants/heroSection";
import LineStroke01 from "../decorativeElements/LineStroke01";
import CommonBtn2 from "../common/CommonBtn2";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const heroLabel = hero.querySelector(".hero-label");
    const heroTitleSplit = new SplitText(".hero-title", {
      type: "lines",
    });
    const heroDescSplit = new SplitText(".hero-desc", {
      type: "chars, words",
    });
    const heroCtaBtn = hero.querySelector(".hero-cta-btn");
    const heroLogoTitle = hero.querySelector(".hero-logo-title");
    const heroLogos = hero.querySelectorAll(".hero-logos");

    // Timeline for initial load animations
    const tl = gsap.timeline();

    // Initial fade-in when site loads
    gsap.fromTo(
      hero,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" },
    );

    tl.from(heroLabel, {
      opacity: 0,
      y: 100,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.3,
    });

    tl.from(heroTitleSplit.lines, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });

    tl.from(heroDescSplit.chars, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.03,
      ease: "power2.out",
    });

    tl.from(heroCtaBtn, {
      opacity: 0,
      y: 100,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from(heroLogoTitle, {
      opacity: 0,
      y: 100,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from(heroLogos, {
      opacity: 0,
      y: 100,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });

    tl.timeScale(1.5);
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-sec relative min-h-screen w-full overflow-hidden rounded-br-[5rem] rounded-bl-[5rem] opacity-0 md:h-[79rem] md:min-h-auto"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke01 className="absolute bottom-[2.058rem] left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-[10] flex h-full w-full flex-col items-center justify-end gap-[3rem] pt-[15rem] pb-[4rem] md:gap-[5.9rem]">
        {/* Main content */}
        <div className="flex max-w-[106.5rem] flex-col items-center gap-[2rem] px-[2rem] text-center md:gap-[2.7rem] xl:px-[0rem]">
          <div className="overflow-hidden">
            <div className="hero-label">
              <BookBadge />
            </div>
          </div>

          <h1 className="text-[2.2rem] leading-[3rem] font-bold tracking-[-0.03em] text-white md:text-[4rem] md:leading-[5rem] lg:text-[6rem] lg:leading-[7rem] xl:text-[7rem] xl:leading-[8.4rem]">
            <div className="overflow-hidden">
              <div className="hero-title">
                Grow your digital presence today
              </div>{" "}
            </div>

            <div className="overflow-hidden">
              <div className="hero-title">
                with real{" "}
                <span className="bg-gradient-01 bg-clip-text text-transparent">
                  human-led
                </span>{" "}
                strategy.
              </div>
            </div>
          </h1>

          <div className="text-[1.1rem] leading-[1.8rem] font-medium text-white md:text-[1.8rem] md:leading-[2.8rem] lg:text-[2.2rem] lg:leading-[3.2rem]">
            <div className="overflow-hidden">
              <div className="hero-desc">
                Based in Manchester, we craft bespoke websites and branding
              </div>
            </div>{" "}
            <div className="overflow-hidden">
              <div className="hero-desc">
                that are as smart as they are stunning.
              </div>
            </div>
          </div>

          <div className="overflow-hidden p-[.5rem]">
            <div className="hero-cta-btn">
              <CommonBtn2 />
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="flex max-w-[120.3rem] flex-col items-center gap-[2rem] px-[2rem] text-center xl:px-[0rem]">
          <div className="overflow-hidden">
            <h6 className="hero-logo-title text-[1.8rem] leading-[2.6rem] font-normal text-white">
              Trusted by enterprises all over the world:
            </h6>
          </div>

          <ul className="grid grid-cols-1 items-center gap-[4rem] md:grid-cols-4 lg:grid-cols-7">
            {logoPopupsData.map((item, idx) => (
              <li className="hero-logos" key={idx}>
                <LogoPopup
                  logo={item.logo}
                  popupImage={item.popupImage}
                  title={item.title}
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
