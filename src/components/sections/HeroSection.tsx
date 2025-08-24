"use client";
import Image from "next/image";
import heroSecGradientBg from "@/assets/images/hero-sec-gradient-bg.png";
import BookBadge from "../common/BookBadge";
import LogoPopup from "../common/LogoPopup";
import { logoPopupsData } from "@/constants/heroSection";
import LineStroke01 from "../decorativeElements/LineStroke01";
import CommonBtn2 from "../common/CommonBtn2";

const HeroSection = () => {
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
        <LineStroke01 className="absolute bottom-[2.058rem] left-1/2 -translate-x-1/2" />
      </div>

      {/* Overlay */}
      <div className="hero-sec-overlay absolute bottom-0 left-0 h-[28.9rem] w-full" />

      <div className="relative z-[10] flex h-full w-full flex-col items-center justify-end gap-[5.9rem] pt-[15rem] pb-[4rem]">
        {/* Main content */}
        <div className="flex max-w-[106.5rem] flex-col items-center gap-[2.7rem] text-center">
          <div className="">
            <BookBadge />
          </div>

          <h1 className="text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em] text-white">
            Grow your digital presence today with real{" "}
            <span className="bg-gradient-01 bg-clip-text text-transparent">
              human-led
            </span>{" "}
            strategy.
          </h1>

          <p className="max-w-[65.3rem] text-[1.8rem] leading-[2.6rem] font-medium text-white md:text-[2.2rem] md:leading-[3.2rem]">
            Based in Manchester, we craft bespoke websites and branding that are
            as smart as they are stunning.
          </p>

          <div className="">
            <CommonBtn2 />
          </div>
        </div>

        {/* Logos */}
        <div className="flex max-w-[120.3rem] flex-col items-center gap-[2rem] text-center">
          <h6 className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
            Trusted by enterprises all over the world:
          </h6>

          <ul className="flex items-center justify-center gap-[4.423rem]">
            {logoPopupsData.map((item, idx) => (
              <li key={idx}>
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
