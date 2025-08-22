import Image from "next/image";
import AboutBadge from "../common/AboutBadge";
import Link from "next/link";
import subtractDark from "../../assets/images/icons/subtract-dark.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import cElement from "../../assets/images/c-element.svg";
import { aboutCardData } from "@/constants/aboutSection";
import cpStroke from "../../assets/images/cp-stroke.svg";
import report from "../../assets/images/report.svg";
import message from "../../assets/images/message.svg";
import analyst from "../../assets/images/analyst.svg";
import bgLine from "../../assets/images/line-stroke-02.svg";
import LineStroke02 from "../decorativeElements/LineStroke02";

const AboutSection = () => {
  return (
    <section className="relative py-[10rem]">
      {/* Bg Element */}
      <div className="absolute inset-0 z-[0] overflow-hidden">
        <Image
          src={cElement}
          alt="Background Element"
          width={550.94}
          height={275.78}
          className="absolute top-[19rem] right-[-18.341rem] rotate-[51.36deg]"
          priority
        />
      </div>

      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke02 className="absolute top-[135.1rem] left-1/2 -translate-x-1/2" />
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

      <div className="relative z-10 mx-auto mt-[10rem] flex max-w-[135.2rem] flex-col gap-[1.8rem] xl:flex-row">
        <div className="about-card-gradient relative h-[50rem] w-full overflow-hidden md:h-[84.6rem] md:min-w-[62.9rem]">
          {/* Gradient */}
          <div className="absolute top-[-11.9rem] left-[-10.5rem] z-[0] size-[30rem] bg-[#1534B699] blur-[100px]" />
          <div className="absolute right-0 bottom-[-26.656rem] z-[0] size-[30rem] bg-[#DFDFDF99] blur-[100px]" />

          <h2 className="relative z-[1] px-[2rem] pt-[3rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:px-[4.5rem] md:pt-[6rem] md:text-[5.6rem] md:leading-[6.4rem]">
            We create{" "}
            <span className="text-[#FF37B3]">exceptional websites</span>
          </h2>

          {/* Elements */}
          <div className="absolute inset-0 z-[0]">
            <Image
              src={cpStroke}
              alt="Stroke"
              height={244.4}
              width={429.04}
              priority
              className="absolute top-[24.4rem] left-0"
            />
          </div>

          <div className="absolute inset-0 z-[0]">
            <Image
              src={report}
              alt="Report"
              height={209}
              width={219}
              priority
              className="absolute top-[46.2rem] left-[3.4rem]"
            />
          </div>

          <div className="absolute inset-0 z-[0]">
            <Image
              src={message}
              alt="Message"
              height={109}
              width={298}
              priority
              className="absolute top-[42.9rem] left-[24.011rem]"
            />
          </div>

          <div className="absolute inset-0 z-[0]">
            <Image
              src={analyst}
              alt="Message"
              height={247}
              width={393}
              priority
              className="absolute top-[56.5rem] left-[21.2rem] rounded-[2rem] backdrop-blur-[10px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-[1.5rem] gap-y-[3rem] md:grid-cols-2">
          {aboutCardData.map((item, idx) => (
            <div key={idx}>
              <div className="about-card">
                <Image
                  src={item.icon}
                  alt="Pencil Icon"
                  width={52}
                  height={52}
                  className="size-[4.8rem] md:size-[5.2rem]"
                />

                <h4 className="mt-[2rem] mb-[6.2rem] text-[2.8rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
                  {item.title}
                </h4>

                <p className="text-[1.8rem] leading-[2.6rem] text-[#333333]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
