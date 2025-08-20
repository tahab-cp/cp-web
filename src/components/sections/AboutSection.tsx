import Image from "next/image";
import AboutBadge from "../common/AboutBadge";
import aboutBgElement from "../../assets/images/about-bg-element.svg";
import Link from "next/link";
import subtractDark from "../../assets/images/icons/subtract-dark.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden px-[2rem] py-[10rem] xl:px-[0rem]">
      <div className="absolute top-[3.1rem] right-0 opacity-10 md:opacity-30 xl:opacity-100">
        <Image
          src={aboutBgElement}
          alt="About background Element"
          height={275}
          width={380}
          className="object-cover"
          style={{ height: "auto", width: "auto" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[120.3rem] flex-col items-center text-center xl:block xl:text-left">
        <div>
          <AboutBadge />
        </div>

        <h5 className="mt-[3rem] mb-[2rem] max-w-[99rem] text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[3.6rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
          <span className="text-[#EE8D00]">Creative Pixels</span> is an
          independent web design and development agency based in{" "}
          <span className="text-[#FF37B3]">Manchester</span> — crafting digital
          experiences since 2014. We care deeply about our clients, build
          long-term partnerships, bring over a decade of industry expertise, and
          take pride in <span className="text-[#3078FF]">award-winning</span>,
          pixel-perfect work.
        </h5>

        <h5 className="mb-[2rem] text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[3.6rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
          We work with clients in 🇬🇧 🇦🇺 🇺🇸
        </h5>

        <div>
          <Link href="" className="inline-flex items-center">
            <span className="inline-flex h-[5rem] min-w-[25.8rem] items-center justify-center rounded-[6rem] border border-[#141414] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
              About CreativePixels
            </span>
            <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
              <Image
                src={subtractDark}
                alt="Subtract Light Icon"
                width={18}
                height={18}
              />
            </i>
            <i className="inline-flex size-[5rem] items-center justify-center rounded-full border border-[#141414] bg-[#141414]">
              <Image
                src={arrowRight}
                alt="Arrow Right Icon"
                width={14}
                height={14}
              />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
