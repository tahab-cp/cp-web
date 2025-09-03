"use client";

import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../common/ContactForm";
import CtaSection2 from "../common/CtaSection2";
import TextMarquee from "../common/TextMarquee";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const ContactSection = () => {
  const contactRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const contact = contactRef.current;
    if (!contact) return;

    const contactTitle = contact.querySelector(".contact-title");
    const contactCard1 = contact.querySelector(".contact-card-1");
    const contactCard2 = contact.querySelector(".contact-card-2");
    const contactCtaCard = contact.querySelector(".contact-cta-card");

    gsap.from(contactTitle, {
      opacity: 0,
      y: 100,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contactTitle,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(contactCard1, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contactCard1,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(contactCard2, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contactCard2,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(contactCtaCard, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contactCtaCard,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <section
      ref={contactRef}
      className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]"
    >
      <div className="relative mx-auto flex max-w-[112.3rem] flex-col items-center">
        <div className="overflow-hidden">
          <div className="contact-title text-center">
            <SectionTitle label="Ready to Start Working With Us?" />
          </div>
        </div>

        <div className="contact-card-1 w-full">
          <div className="contact-details-bg mt-[4.5rem] mb-[3.7rem] flex w-full flex-col items-center justify-between gap-[4rem] px-[4rem] py-[3.5rem] text-center lg:flex-row lg:gap-[0rem] lg:text-left">
            <div className="flex flex-col">
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

            <div className="flex flex-col">
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

            <div className="flex flex-col">
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
        </div>

        <div className="contact-card-2 w-full">
          <ContactForm />
        </div>
      </div>

      <div className="relative mt-[4rem] mb-[6.7rem]">
        <TextMarquee />
      </div>

      <div className="relative z-[3] mx-auto max-w-[120.3rem]">
        <div className="contact-cta-card">
          <CtaSection2 />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
