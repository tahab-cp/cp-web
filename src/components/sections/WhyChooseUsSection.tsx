"use client";

import SectionTitle from "../common/SectionTitle";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn3 from "../common/CommonBtn3";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import WhyChooseUsCardSlider from "../common/WhyChooseUsCardSlider";

const WhyChooseUsSection = () => {
  const whyChooseUsRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const whyChooseUs = whyChooseUsRef.current;
    if (!whyChooseUs) return;

    const whyChooseUsLabel = whyChooseUs.querySelector(".who-we-are-label");
    const whyChooseUsTitle = whyChooseUs.querySelector(".why-choose-us-title");
    const whyChooseUsDesc = new SplitText(".why-choose-us-desc", {
      type: "lines",
    });
    const whyChooseUsCtaBtn = whyChooseUs.querySelectorAll(
      ".why-choose-us-cta-btn",
    );
    const whyChooseUsCard = whyChooseUs.querySelectorAll(".why-choose-us-card");

    // Label wobble
    gsap.to(whyChooseUsLabel, {
      rotate: 5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.from(whyChooseUsTitle, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: whyChooseUsTitle,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(whyChooseUsDesc.lines, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05, // animate one by one
      ease: "power2.out",
      scrollTrigger: {
        trigger: whyChooseUs, // parent element
        start: "top 40%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(whyChooseUsCtaBtn, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: whyChooseUsCtaBtn, // parent element
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    whyChooseUsCard.forEach((card) => {
      const finalRotate = gsap.getProperty(card, "rotate"); // read Tailwind’s rotate

      gsap.fromTo(
        card,
        { opacity: 0, rotate: 0 }, // start flat
        {
          opacity: 1,
          rotate: finalRotate as number, // animate into Tailwind’s rotate
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyChooseUsCard,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  return (
    <section
      ref={whyChooseUsRef}
      className="why-choose-us-sec relative px-[3rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]"
    >
      <div className="mx-auto flex max-w-[120rem] flex-col items-center gap-[3.6rem] xl:flex-row 2xl:max-w-[124rem]">
        <div className="flex flex-col items-center text-center xl:w-[58rem] xl:items-start xl:text-left">
          <div className="flex flex-col gap-[2.1rem]">
            <div className="rotate-[2deg]">
              <div className="who-we-are-label">
                <SectionLabel2
                  text="Why Choose Us"
                  bgColor="bg-[#FFE400]"
                  textColor="text-text-primary"
                />
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="why-choose-us-title">
                <SectionTitle
                  label="Why Choose Creative Pixels for your Online Presense"
                  textColor="text-white"
                />
              </div>
            </div>
          </div>

          <div className="mt-[3rem] mb-[4rem] overflow-hidden text-[1.8rem] leading-[2.6rem] font-normal text-white">
            <div className="why-choose-us-desc">
              Creative Pixels stands out as a design-driven agency dedicated to
              delivering bespoke digital solutions. Our expertise spans across a
              wide range of services, ensuring that your brand stands out &
              thrives online
            </div>
          </div>

          <div className="why-choose-us-cta-btn">
            <CommonBtn3 href="/" label="Request a Callback" />
          </div>
        </div>

        <div className="relative hidden flex-col gap-[2rem] md:flex md:h-[53rem] md:w-[62rem]">
          <div className="why-choose-us-card top-[2.2rem] left-[120.33px] z-[2] flex size-[26.964rem] flex-col justify-center gap-[1.6rem] rounded-[1.557rem] bg-[#FFC300] pl-[2.459rem] md:absolute md:rotate-[12.19deg]">
            <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">01</h5>

            <h3 className="max-w-[20.539rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]">
              Design-Driven Approach
            </h3>

            <p className="max-w-[20.207rem] text-[1.6rem] leading-[2.4rem] font-medium">
              Crafting exceptional digital experiences your premier web design
              and development partner.
            </p>
          </div>

          <div className="why-choose-us-card bottom-[1.9rem] left-[1.9rem] z-[1] flex size-[26.964rem] flex-col justify-center gap-[1.6rem] rounded-[1.557rem] bg-[#FF8630] pl-[2.459rem] md:absolute md:rotate-[-9.32deg]">
            <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">02</h5>

            <h3 className="max-w-[20.539rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]">
              Tailored Solutions
            </h3>

            <p className="max-w-[22.389rem] text-[1.6rem] leading-[2.4rem] font-medium">
              Every business is unique, and so are our solutions. We customize
              each project to align with your goals.
            </p>
          </div>

          <div className="why-choose-us-card right-[1.1rem] bottom-[1.2rem] z-[3] flex size-[26.964rem] flex-col justify-center gap-[1.6rem] rounded-[1.557rem] bg-[#F14A58] pl-[2.459rem] md:absolute md:rotate-[5.82deg]">
            <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">03</h5>

            <h3 className="max-w-[17.776rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]">
              Results You Can Trust
            </h3>

            <p className="max-w-[22.966rem] text-[1.6rem] leading-[2.4rem] font-medium">
              From boosting brand visibility to driving conversions, we are
              committed to your success.
            </p>
          </div>
        </div>

        <div className="block w-full md:hidden">
          <WhyChooseUsCardSlider />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
