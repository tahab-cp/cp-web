"use client";

import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import TestimonialsCard from "../common/TestimonialsCard";
import { testimonialsData } from "@/constants/testimonialSection";
import LineStroke05 from "../decorativeElements/LineStroke05";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialSection = () => {
  const testimonialsContentRef = useRef<HTMLDivElement>(null);
  const testimonialsCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (testimonialsContentRef.current) {
      const caseStudiesAnimateItem =
        testimonialsContentRef.current.querySelectorAll(
          ".testimonials-animate-item",
        );
      gsap.set(caseStudiesAnimateItem, { opacity: 0, y: 30 });

      gsap.to(caseStudiesAnimateItem, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialsContentRef.current,
          start: "top 60%", // when cards section enters viewport
          toggleActions: "play none none none", // play only once
        },
      });
    }

    if (testimonialsCardRef.current) {
      const items = testimonialsCardRef.current.querySelectorAll(
        ".testimonials-card-animate-item",
      );
      gsap.set(items, { opacity: 0, y: 50 });

      items.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item, // 👈 each card triggers itself
            start: "top 85%", // when that card enters viewport
            toggleActions: "play none none none", // play once
          },
        });
      });
    }
  }, []);

  return (
    <section
      ref={testimonialsContentRef}
      className="testimonials-sec relative z-[1] pt-[7.2rem] pb-[9.1rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke05 className="absolute top-[118.4rem] left-1/2 -translate-x-1/2 opacity-90" />
      </div>

      <div className="mx-auto max-w-[120.3rem]">
        <div className="flex flex-col items-center gap-[2rem] text-center">
          <div className="testimonials-animate-item">
            <SectionLabel text="Testimonials" />
          </div>

          <div className="testimonials-animate-item">
            <SectionTitle
              label="Built with Pixels. Backed by People."
              textColor="text-white "
            />
          </div>

          <div className="testimonials-animate-item max-w-[95.8rem]">
            <SectionDescription
              label="Here’s what our clients have to say after partnering with Creative Pixels — real experiences, real results, and real stories behind the pixels."
              textColor="text-white"
            />
          </div>
        </div>

        <div
          ref={testimonialsCardRef}
          className="mt-[5rem] grid grid-cols-3 gap-[3.3rem]"
        >
          <div className="grid gap-[3.3rem]">
            {testimonialsData.slice(0, 3).map((item, idx) => (
              <div className="testimonials-card-animate-item" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>

          <div className="grid gap-[3.3rem]">
            {testimonialsData.slice(3, 5).map((item, idx) => (
              <div className="testimonials-card-animate-item" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>

          <div className="grid gap-[3.3rem]">
            {testimonialsData.slice(5, 7).map((item, idx) => (
              <div className="testimonials-card-animate-item" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
