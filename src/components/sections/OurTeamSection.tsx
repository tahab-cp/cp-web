"use client";

import { useRef } from "react";
import SectionDescription from "../common/SectionDescription";
import SectionLabel2 from "../common/SectionLabel2";
import SectionTitle from "../common/SectionTitle";
import TeamCardMarquee from "../common/TeamCardMarquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OurTeamSection = () => {
  const ourTeamRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ourTeam = ourTeamRef.current;
    if (!ourTeam) return;

    const ourTeamLabel = ourTeam.querySelector(".our-team-label");
    const ourTeamTitle = ourTeam.querySelector(".our-team-title");
    const ourTeamDesc = ourTeam.querySelector(".our-team-desc");

    // Label wobble
    gsap.to(ourTeamLabel, {
      rotate: 5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.from(ourTeamTitle, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ourTeamTitle,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(ourTeamDesc, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ourTeamDesc,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      ref={ourTeamRef}
      className="py-[5rem] xl:pt-[6.4rem] xl:pb-[9.8rem]"
    >
      <div className="flex flex-col items-center gap-[2rem] px-[3rem] text-center xl:px-[0rem]">
        <div className="rotate-[2deg]">
          <div className="our-team-label">
            <SectionLabel2
              text="Our Team"
              bgColor="bg-[#81f2b4]"
              textColor="text-text-primary"
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="our-team-title max-w-[60.3rem]">
            <SectionTitle label="We're a Team of People Who Care" />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="our-team-desc max-w-[83.6rem]">
            <SectionDescription label="All of the people who work for us, have been working with us for a minimum of 2 years, with 50% of our team being the same since we were founded." />
          </div>
        </div>
      </div>

      <div className="mt-[5rem]">
        <TeamCardMarquee />
      </div>
    </section>
  );
};

export default OurTeamSection;
