"use client";

import React, { useRef } from "react";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import TestimonialsMarquee from "../common/TestimonialsMarquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionLabel2 from "../common/SectionLabel2";

const AboutTestimonialsSection = () => {
  const aboutTestimonialsRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const aboutTestimonials = aboutTestimonialsRef.current;
    if (!aboutTestimonials) return;

    const aboutTestimonialsLabel = aboutTestimonials.querySelector(
      ".about-testimonials-label",
    );
    const aboutTestimonialsTitle = aboutTestimonials.querySelector(
      ".about-testimonials-title",
    );
    const aboutTestimonialsDesc = aboutTestimonials.querySelector(
      ".about-testimonials-desc",
    );

    // Label wobble
    gsap.to(aboutTestimonialsLabel, {
      rotate: 5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.from(aboutTestimonialsTitle, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: aboutTestimonialsTitle,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(aboutTestimonialsDesc, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: aboutTestimonialsDesc,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section ref={aboutTestimonialsRef} className="py-[5rem] lg:py-[10rem]">
      <div className="flex flex-col items-center gap-[2rem] px-[3rem] text-center xl:px-[0rem]">
        <div className="rotate-[-2deg]">
          <div className="about-testimonials-label">
            <SectionLabel2 text="Testimonials" bgColor="bg-[#F14A58]" />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="about-testimonials-title">
            <SectionTitle
              label="Built with Pixels. Backed by People."
              textColor="text-white "
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="about-testimonials-desc max-w-[77.9rem]">
            <SectionDescription
              label="Here’s what our clients have to say after partnering with Creative Pixels — real experiences, real results, and real stories behind the pixels."
              textColor="text-white"
            />
          </div>
        </div>
      </div>

      <div className="mt-[5rem]">
        <TestimonialsMarquee />
      </div>
    </section>
  );
};

export default AboutTestimonialsSection;
