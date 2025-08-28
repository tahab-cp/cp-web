"use client";

import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import ContactFormInput from "./ContactFormInput";
import CommonBtn4 from "./CommonBtn4";
import WaveHand from "./WaveHand";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonBtn3 from "./CommonBtn3";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.8,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 60%", // adjust as needed
            toggleActions: "play none none none",
            // "play none none none" → plays only once
          },
        },
      );
    }
  }, []);

  return (
    <div className="contact-form-bg w-full">
      <h4 className="inline-flex items-center gap-[.5rem] text-[4.8rem] font-semibold tracking-[-0.02em]">
        Hello <WaveHand />
      </h4>

      <div ref={formRef} className="h-0 overflow-hidden opacity-0">
        <form action="" className="flex flex-col gap-[1.8rem]">
          <fieldset className="flex flex-col items-start gap-[1.6rem] md:flex-row md:items-center">
            <Label htmlFor="name" className="md:min-w-[25rem]">
              My name is
            </Label>

            <ContactFormInput placeholder="Enter your name" type="text" />
          </fieldset>

          <fieldset className="flex flex-col items-start gap-[1.6rem] md:flex-row md:items-center">
            <Label htmlFor="service" className="md:min-w-[38.9rem]">
              I need a help with
            </Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select desired service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </fieldset>

          <fieldset className="flex flex-col items-start gap-[1.6rem] md:flex-row md:items-center">
            <Label htmlFor="email" className="md:min-w-[35.8rem]">
              Here is my email
            </Label>

            <ContactFormInput
              placeholder="Enter your email address"
              type="email"
            />
          </fieldset>

          <fieldset className="flex flex-col items-start gap-[1.6rem] md:flex-row md:items-center">
            <Label htmlFor="message" className="md:min-w-[29.7rem]">
              And message
            </Label>

            <Textarea placeholder="Enter your message" />
          </fieldset>

          <div className="mt-[1.5rem] mb-[1rem]">
            {/* <CommonBtn4 label="Submit Request" /> */}
            <CommonBtn3 href="" label="Submit Request" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
