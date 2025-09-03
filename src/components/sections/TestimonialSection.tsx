"use client";

import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import TestimonialsCard from "../common/TestimonialsCard";
import { testimonialsData } from "@/constants/testimonialSection";
import LineStroke05 from "../decorativeElements/LineStroke05";
import gsap from "gsap";
import SectionLabel2 from "../common/SectionLabel2";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import TestimonialsMarquee from "../common/TestimonialsMarquee";

const TestimonialSection = () => {
  const testimonialsRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const testimonials = testimonialsRef.current;
    if (!testimonials) return;

    const testimonialsLabel = testimonials.querySelector(".testimonials-label");
    const testimonialsTitle = testimonials.querySelector(".testimonials-title");
    const testimonialsDesc = testimonials.querySelector(".testimonials-desc");
    const testimonialsCards = testimonials.querySelectorAll(
      ".testimonials-cards",
    );

    gsap.to(testimonialsLabel, {
      rotate: 5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.from(testimonialsTitle, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: testimonialsTitle,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(testimonialsDesc, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: testimonialsDesc,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(testimonialsCards, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      clearProps: "all",
      scrollTrigger: {
        trigger: testimonialsCards,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      ref={testimonialsRef}
      className="testimonials-sec relative z-[1] py-[5rem] xl:py-[8rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke05 className="absolute top-[118.4rem] left-1/2 w-full -translate-x-1/2 opacity-90" />
      </div>

      <div className="mx-auto max-w-[120.3rem] px-[3rem] xl:px-[0rem]">
        <div className="flex flex-col items-center gap-[2rem] text-center">
          <div className="rotate-[2deg]">
            <div className="testimonials-label">
              <SectionLabel2 text="Testimonials" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="testimonials-title">
              <SectionTitle
                label="Built with Pixels. Backed by People."
                textColor="text-white "
              />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="testimonials-desc max-w-[95.8rem]">
              <SectionDescription
                label="Here’s what our clients have to say after partnering with Creative Pixels — real experiences, real results, and real stories behind the pixels."
                textColor="text-white"
              />
            </div>
          </div>
        </div>

        <div className="mt-[5rem] hidden grid-cols-1 gap-[3.3rem] lg:grid-cols-3 xl:grid">
          <div className="grid gap-[3.3rem]">
            {testimonialsData.slice(0, 3).map((item, idx) => (
              <div className="testimonials-cards" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>

          <div className="grid gap-[3.3rem]">
            {testimonialsData.slice(3, 5).map((item, idx) => (
              <div className="testimonials-cards" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>

          <div className="grid gap-[3.3rem]">
            {testimonialsData.slice(5, 7).map((item, idx) => (
              <div className="testimonials-cards" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 block xl:hidden">
        <TestimonialsMarquee />
      </div>
    </section>
  );
};

export default TestimonialSection;
