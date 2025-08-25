import Image from "next/image";
import AboutBadge from "../common/AboutBadge";
import { aboutCardData } from "@/constants/aboutSection";
import cpStroke from "../../assets/images/cp-stroke.svg";
import report from "../../assets/images/report.svg";
import message from "../../assets/images/message.svg";
import analyst from "../../assets/images/analyst.svg";
import LineStroke02 from "../decorativeElements/LineStroke02";
import CommonBtn3 from "../common/CommonBtn3";
import CLetter from "../decorativeElements/CLetter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const aboutCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aboutContentRef.current) return;

    const paras = aboutContentRef.current.querySelectorAll(".about-para");
    const allWords: HTMLElement[] = [];

    paras.forEach((p) => {
      const split = new SplitType(p as HTMLElement, { types: "words" });
      gsap.set(split.words, { opacity: 0.1 });
      allWords.push(...(split.words as HTMLElement[]));
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: aboutContentRef.current,
          start: "top 80%", // start when section enters viewport
          end: "bottom 50%", // animation length based on words
          scrub: true, // follow scroll
        },
      })
      .to(allWords, {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
      });

    if (aboutCardRef.current) {
      const cards = aboutCardRef.current.querySelectorAll(".about-card-item");
      gsap.set(cards, { opacity: 0, y: 50 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutCardRef.current,
          start: "top 80%", // when cards section enters viewport
          toggleActions: "play none none none", // play only once
        },
      });
    }
  }, []);

  return (
    <section className="relative py-[10rem]">
      {/* Bg Element */}
      <div className="absolute inset-0 z-[0] overflow-hidden">
        <CLetter className="absolute top-[3.1rem] right-[-18.341rem]" />
      </div>

      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke02 className="absolute top-[135.1rem] left-1/2 -translate-x-1/2" />
      </div>

      <div
        ref={aboutContentRef}
        className="relative z-10 mx-auto flex w-full max-w-[120.3rem] flex-col items-center text-center xl:block xl:text-left"
      >
        <div className="">
          <AboutBadge />
        </div>

        <h5 className="about-para mt-[3rem] mb-[2rem] max-w-[99rem] text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[3.6rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
          <span className="text-[#EE8D00]">Creative Pixels</span> is an
          independent web design and development agency based in{" "}
          <span className="text-[#FF37B3]">Manchester</span> — crafting digital
          experiences since 2014. We care deeply about our clients, build
          long-term partnerships, bring over a decade of industry expertise, and
          take pride in <span className="text-[#3078FF]">award-winning</span>,
          pixel-perfect work.
        </h5>

        <h5 className="about-para mb-[2rem] text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[3.6rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
          We work with clients in 🇬🇧 🇦🇺 🇺🇸
        </h5>

        <div className="">
          <CommonBtn3 />
        </div>
      </div>

      <div
        ref={aboutCardRef}
        className="relative z-10 mx-auto mt-[10rem] flex max-w-[135.2rem] flex-col gap-[1.8rem] xl:flex-row"
      >
        <div className="about-card-item about-card-gradient relative h-[50rem] w-full overflow-hidden md:h-[84.6rem] md:min-w-[62.9rem]">
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
            <div className="about-card-item" key={idx}>
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
