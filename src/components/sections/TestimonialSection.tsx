"use client";

import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import TestimonialsCard from "../common/TestimonialsCard";
import { testimonialsData } from "@/constants/testimonialSection";
import LineStroke05 from "../decorativeElements/LineStroke05";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SectionLabel2 from "../common/SectionLabel2";

const TestimonialSection = () => {
  const testimonialContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (testimonialContentRef.current) {
      const testimonialLabel = testimonialContentRef.current.querySelectorAll(
        ".testimonial-label-animate",
      );
      const testimonialHeading = testimonialContentRef.current.querySelectorAll(
        ".testimonial-heading-animate",
      );
      const testimonialDesc = testimonialContentRef.current.querySelectorAll(
        ".testimonial-desc-animate",
      );
      const testimonialCard = testimonialContentRef.current.querySelectorAll(
        ".testimonial-card-animate",
      );

      // Badge Animation
      gsap.to(testimonialLabel, {
        rotate: 5, // tilt slightly
        duration: 0.6,
        yoyo: true, // go back
        repeat: -1, // loop forever
        ease: "power1.inOut",
      });

      // Heading Animation
      gsap.from(testimonialHeading, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: testimonialContentRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Desc Animation
      gsap.from(testimonialDesc, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: testimonialContentRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Grid Card Animation
      {
        testimonialCard.forEach((item) => {
          gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        });
      }
    }
  }, []);

  return (
    <section className="testimonials-sec relative z-[1] px-[2rem] pt-[7.2rem] pb-[9.1rem] xl:px-[0rem]">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke05 className="absolute top-[118.4rem] left-1/2 w-full -translate-x-1/2 opacity-90" />
      </div>

      <div ref={testimonialContentRef} className="mx-auto max-w-[120.3rem]">
        <div className="flex flex-col items-center gap-[2rem] text-center">
          <div className="rotate-[2deg]">
            <div className="testimonial-label-animate">
              <SectionLabel2 text="Testimonials" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="testimonial-heading-animate">
              <SectionTitle
                label="Built with Pixels. Backed by People."
                textColor="text-white "
              />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="testimonial-desc-animate max-w-[95.8rem]">
              <SectionDescription
                label="Here’s what our clients have to say after partnering with Creative Pixels — real experiences, real results, and real stories behind the pixels."
                textColor="text-white"
              />
            </div>
          </div>
        </div>

        <div className="mt-[5rem] grid grid-cols-1 gap-[3.3rem] lg:grid-cols-3">
          <div className="grid gap-[3.3rem]">
            {testimonialsData.slice(0, 3).map((item, idx) => (
              <div className="testimonial-card-animate" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>

          <div className="grid gap-[3.3rem]">
            {testimonialsData.slice(3, 5).map((item, idx) => (
              <div className="testimonial-card-animate" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>

          <div className="grid gap-[3.3rem]">
            {testimonialsData.slice(5, 7).map((item, idx) => (
              <div className="testimonial-card-animate" key={idx}>
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
