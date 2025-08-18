import Image from "next/image";
import heroBg from "@/assets/images/hero-bg.png";
import BookBadge from "../ui/BookBadge";
import ConsultationButton from "../ui/ConsultationButton";
import LogoPopup from "../ui/LogoPopup";
import { logoPopupsData } from "@/constants/heroSection";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden rounded-br-[5rem] rounded-bl-[5rem] px-[2rem] md:h-[79rem] md:min-h-auto xl:px-[0rem]">
      <Image
        src={heroBg}
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end gap-[3rem] pt-[15rem] pb-[2rem] md:gap-[5.9rem] md:pt-[0rem] md:pb-[4rem]">
        <div className="flex max-w-[106.5rem] flex-col items-center gap-[1.8rem] text-center md:gap-[2.7rem]">
          <div data-aos="fade">
            <BookBadge />
          </div>

          <h1
            data-aos="fade"
            className="w-full text-center text-[2.5rem] leading-[3.5rem] font-bold tracking-[-0.03em] text-white md:text-[4.5rem] md:leading-[5.5rem] lg:text-[6rem] lg:leading-[7rem] xl:text-[7rem] xl:leading-[8.4rem]"
          >
            Grow your digital presence today with real{" "}
            <span className="bg-gradient-01 bg-clip-text text-transparent">
              human-led
            </span>{" "}
            strategy.
          </h1>

          <p
            data-aos="fade"
            className="max-w-[65.3rem] text-[1.8rem] leading-[2.6rem] font-medium text-white md:text-[2.2rem] md:leading-[3.2rem]"
          >
            Based in Manchester, we craft bespoke websites and branding that are
            as smart as they are stunning.
          </p>

          <div data-aos="fade">
            <ConsultationButton />
          </div>
        </div>

        <div className="flex max-w-[120.3rem] flex-col items-center gap-[2rem] text-center">
          <h6
            data-aos="fade"
            className="text-[1.8rem] leading-[2.6rem] font-normal text-white"
          >
            Trusted by enterprises all over the world:
          </h6>

          <ul className="flex flex-wrap items-center justify-center gap-[3rem] md:gap-[4.423rem]">
            {logoPopupsData.map((item, idx) => (
              <li data-aos="fade-up" data-aos-delay={idx * 100} key={idx}>
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
