import Image from "next/image";
import heroSecGradientBg from "@/assets/images/hero-sec-gradient-bg.png";
import BookBadge from "../common/BookBadge";
import LogoPopup from "../common/LogoPopup";
import { logoPopupsData } from "@/constants/heroSection";
import subtractPink from "../../assets/images/icons/subtract-pink.svg";
import consultationAvatar from "../../assets/images/consultation-avatar.svg";
import Link from "next/link";
import LineStroke01 from "../decorativeElements/LineStroke01";

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
        <div className="flex max-w-[106.5rem] flex-col items-center gap-[2.7rem] text-center">
          <div>
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

          <div>
            <Link href="" className="inline-flex items-center justify-center">
              <div className="relative inline-flex h-[5rem] min-w-[26.9rem] items-center justify-center rounded-[6rem] px-[3rem] py-[1rem] text-[1.8rem] font-semibold md:text-[2rem]">
                {/* Border layer */}
                <div className="gradient-border-mask absolute inset-0 rounded-[6rem]"></div>

                {/* Text layer */}
                <span className="relative z-10 text-white">
                  Get Free Consultation
                </span>
              </div>

              <i className="relative -mx-[.3rem] inline-flex size-[1.8rem] items-center justify-center">
                <Image
                  src={subtractPink}
                  alt="Subtract Pink Icon"
                  fill
                  className="object-contain"
                />
              </i>

              <i className="relative inline-flex size-[5rem] items-center justify-center rounded-full">
                <Image
                  src={consultationAvatar}
                  alt="Consultation Avatar"
                  width={50}
                  height={50}
                />

                <div className="absolute top-[.1rem] right-[.1rem] size-[.9rem] rounded-full bg-[#7EE972] outline-[3.5px] outline-[#25014A]" />
              </i>
            </Link>
          </div>
        </div>

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
