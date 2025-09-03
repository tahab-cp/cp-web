"use client";

import Image from "next/image";
import PitchDeckInput from "../common/PitchDeckInput";
import SectionTitle from "../common/SectionTitle";
import { pitchDeckBrandData } from "@/constants/pitchDeckSection";
import Link from "next/link";
import SectionLabel2 from "../common/SectionLabel2";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const PitchDeckSection = () => {
  const pitchDeckRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const pitchDeck = pitchDeckRef.current;
    if (!pitchDeck) return;

    const pitchDeckLabel = pitchDeck.querySelector(".pitch-deck-label");
    const pitchDeckTitle = pitchDeck.querySelector(".pitch-deck-title");
    const pitchDeckDesc = new SplitText(".pitch-deck-desc", {
      type: "lines",
    });
    const pitchDeckForm = pitchDeck.querySelector(".pitch-deck-form");
    const pitchDeckElem = pitchDeck.querySelector(".pitch-deck-elem");
    const pitchDeckLogoTitle = pitchDeck.querySelector(
      ".pitch-deck-logo-title",
    );
    const pitchDeckLogo = pitchDeck.querySelectorAll(".pitch-deck-logo");

    // Label wobble
    gsap.to(pitchDeckLabel, {
      rotate: 5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.from(pitchDeckTitle, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: pitchDeckTitle,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(pitchDeckDesc.lines, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05, // animate one by one
      ease: "power2.out",
      scrollTrigger: {
        trigger: pitchDeck, // parent element
        start: "top 40%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(pitchDeckForm, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: pitchDeckForm,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(pitchDeckElem, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: pitchDeckElem,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(pitchDeckLogoTitle, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: pitchDeckLogoTitle,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(pitchDeckLogo, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: pitchDeckLogo,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      ref={pitchDeckRef}
      className="relative mx-auto flex max-w-[152rem] justify-end overflow-hidden"
    >
      <div className="flex w-full max-w-[132.1rem] flex-col justify-between lg:flex-row">
        <div className="flex w-full flex-col items-center px-[2rem] py-[6rem] text-center lg:max-w-[55.6rem] lg:items-start lg:py-[8.9rem] lg:text-left xl:px-[0rem]">
          <div className="rotate-[-2deg]">
            <div className="pitch-deck-label">
              <SectionLabel2 text="Pitch Deck" bgColor="bg-[#FF37B3]" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="pitch-deck-title mt-[1.1rem] lg:max-w-[54rem]">
              <SectionTitle label="Send yourself or a colleague our Pitch Deck." />
            </div>
          </div>

          <div className="mt-[2rem] mb-[2.6rem] overflow-hidden text-[1.8rem] leading-[2.6rem] font-normal text-[#333333] lg:max-w-[51rem]">
            <div className="pitch-deck-desc">
              Want to learn more about us? Our company deck offers an in-depth
              look at our agency, the projects we&apos;ve handled, the solutions
              we provide, and the culture we foster.
            </div>
          </div>

          <form
            action=""
            className="pitch-deck-form flex w-full flex-col gap-[1rem] md:flex-row"
          >
            <PitchDeckInput placeholder="Full Name" type="text" />

            <PitchDeckInput placeholder="Email Address" type="text" />

            <button
              type="submit"
              className="inline-flex h-[6.2rem] min-w-[6.2rem] cursor-pointer items-center justify-center rounded-[1.6rem] bg-black/15"
            >
              <Image
                src="/images/icons/filled-mail-icon.svg"
                alt="Mail Icon"
                width={24}
                height={16}
              />
            </button>
          </form>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-[3rem] bg-[#EAD9FB] p-[2rem] pr-[4rem] lg:max-w-[48.7rem] lg:items-end lg:gap-[4.3rem] lg:p-[0rem] lg:pr-[6rem]">
          <h5 className="overflow-hidden text-[1.8rem] font-semibold text-[#FF37B3]">
            <div className="pitch-deck-logo-title">Trusted by:</div>
          </h5>

          <div className="flex flex-wrap items-end justify-center gap-[6rem] md:flex-row lg:flex-col">
            {pitchDeckBrandData.map((item, idx) => (
              <div key={idx} className="pitch-deck-logo">
                <Link href={item.link}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pitch-deck-elem pointer-events-none absolute right-[18rem] bottom-[-0.2rem] hidden size-[45rem] select-none lg:block xl:right-[24.3rem] xl:size-[58rem]">
        <Image
          src="/images/pitch-deck-phone-element.png"
          alt="Pitch Deck Phone Element"
          height={580}
          width={580}
          priority
        />
      </div>
    </section>
  );
};

export default PitchDeckSection;
