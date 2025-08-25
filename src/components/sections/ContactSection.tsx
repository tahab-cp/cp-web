"use client";

import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../common/ContactForm";
import CtaSection2 from "../common/CtaSection2";
import TextMarquee from "../common/TextMarquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const contactContentRef = useRef<HTMLDivElement>(null);
  const contactCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contactContentRef.current) {
      const contactAnimateItem = contactContentRef.current.querySelectorAll(
        ".contact-animate-item",
      );
      gsap.set(contactAnimateItem, { opacity: 0, y: 30 });

      gsap.to(contactAnimateItem, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactContentRef.current,
          start: "top 60%", // when cards section enters viewport
          toggleActions: "play none none none", // play only once
        },
      });
    }

    if (contactCtaRef.current) {
      const contactCtaRefAnimateItem = contactCtaRef.current.querySelectorAll(
        ".contact-cta-animate-item",
      );
      gsap.set(contactCtaRefAnimateItem, { opacity: 0, y: 30 });

      gsap.to(contactCtaRefAnimateItem, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",

        scrollTrigger: {
          trigger: contactCtaRef.current,
          start: "top 70%", // when cards section enters viewport
          toggleActions: "play none none none", // play only once
        },
      });
    }
  }, []);

  return (
    <section ref={contactContentRef} className="relative py-[10rem]">
      <div className="relative mx-auto flex max-w-[112.3rem] flex-col items-center">
        <div className="contact-animate-item">
          <SectionTitle label="Ready to Start Working With Us?" />
        </div>

        <div className="contact-details-bg mt-[4.5rem] mb-[3.7rem] flex w-full items-center justify-between px-[4rem] py-[3.5rem]">
          <div className="contact-animate-item flex flex-col">
            <h6 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] uppercase">
              GIVE US A CALL
            </h6>

            <Link
              href=""
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
            >
              0161 820 2667
            </Link>
          </div>

          <div className="contact-animate-item flex flex-col">
            <h6 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] uppercase">
              EMAIL US
            </h6>

            <Link
              href=""
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FF37B3]"
            >
              hello@cp.agency
            </Link>
          </div>

          <div className="contact-animate-item flex flex-col">
            <h6 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] uppercase">
              LOCATION
            </h6>

            <Link
              href=""
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#3078FF]"
            >
              Manchester, M12 6PN
            </Link>
          </div>
        </div>

        <ContactForm />
      </div>

      <div className="relative mt-[4rem] mb-[6.7rem]">
        <TextMarquee />
      </div>

      <div
        ref={contactCtaRef}
        className="relative z-[3] mx-auto max-w-[120.3rem]"
      >
        <div className="contact-cta-animate-item">
          <CtaSection2 />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
