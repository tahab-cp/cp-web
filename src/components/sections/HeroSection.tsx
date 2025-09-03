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
import ClientLogoSlider from "../common/ClientLogoSlider";

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
      type: "lines",
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

    tl.from(heroDescSplit.lines, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.3,
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

    tl.timeScale(1.6);
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-sec relative h-[79rem] w-full overflow-hidden rounded-br-[5rem] rounded-bl-[5rem] opacity-0"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke01 className="absolute bottom-[2.058rem] left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-[10] flex h-full w-full flex-col items-center justify-end gap-[4rem] pt-[15rem] pb-[4rem] xl:gap-[6rem]">
        {/* Main content */}
        <div className="flex max-w-[106.5rem] flex-col items-center gap-[2rem] px-[2rem] text-center md:gap-[2.7rem] xl:px-[0rem]">
          <div className="overflow-hidden">
            <div className="hero-label">
              <BookBadge />
            </div>
          </div>

          <h1 className="overflow-hidden text-[2.8rem] leading-[3.7rem] font-semibold tracking-[-0.03em] text-white md:text-[4.5rem] md:leading-[5.5rem] md:font-bold lg:text-[6rem] lg:leading-[7rem] xl:text-[7rem] xl:leading-[8.4rem]">
            <div className="hero-title">
              Grow your digital presence today with real{" "}
              <span className="bg-gradient-01 bg-clip-text text-transparent">
                human-led
              </span>{" "}
              strategy.
            </div>
          </h1>

          <h5 className="max-w-[70rem] overflow-hidden text-[1.4rem] leading-[2.4rem] font-normal text-white md:text-[2.2rem] md:leading-[3.2rem] md:font-medium">
            <div className="hero-desc">
              Based in Manchester, we craft bespoke websites and branding that
              are as smart as they are stunning.
            </div>
          </h5>

          <div className="overflow-hidden p-[.5rem]">
            <div className="hero-cta-btn">
              <CommonBtn2 />
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="flex max-w-[120.3rem] flex-col items-center gap-[2rem] px-[2rem] text-center xl:px-[0rem]">
          <div className="overflow-hidden">
            <h6 className="hero-logo-title text-[1.4rem] leading-[2.4rem] font-normal text-white md:text-[1.8rem] md:leading-[2.6rem]">
              Trusted by enterprises all over the world:
            </h6>
          </div>

          <ul className="hidden grid-cols-1 items-center gap-[4rem] md:grid-cols-4 lg:grid-cols-7 xl:grid">
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

        {/* Mobile Logos */}
        <div className="block w-full xl:hidden">
          <ClientLogoSlider />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
