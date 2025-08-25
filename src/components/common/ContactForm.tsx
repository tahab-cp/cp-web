import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
import subtractDark from "../../assets/images/icons/subtract-dark.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import ContactFormInput from "./ContactFormInput";
import { useRef, useState } from "react";
import gsap from "gsap";

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    if (open) return; // prevent double trigger
    setOpen(true);

    // Animate button disappearing
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          if (buttonRef.current) buttonRef.current.style.display = "none";
        },
      });
    }

    // Animate form expanding
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.8,
          ease: "power3.inOut",
        },
      );
    }
  };

  return (
    <div className="contact-form-bg w-full">
      <div className="flex items-center justify-between">
        <h4 className="text-[4.8rem] font-semibold tracking-[-0.02em]">
          Hello 👋
        </h4>

        <button
          ref={buttonRef}
          onClick={handleOpen}
          className="mt-[1.5rem] inline-flex cursor-pointer items-center"
        >
          <span className="border-text-primary bg-text-primary inline-flex h-[5.6rem] min-w-[21.1rem] items-center justify-center rounded-[6rem] border px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
            Submit Request
          </span>
          <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
            <Image
              src={subtractDark}
              alt="Subtract Light Icon"
              width={18}
              height={18}
            />
          </i>
          <i className="border-text-primary bg-text-primary inline-flex size-[5.6rem] items-center justify-center rounded-full border">
            <Image
              src={arrowRight}
              alt="Arrow Right Icon"
              width={14}
              height={14}
            />
          </i>
        </button>
      </div>

      <div ref={formRef} className="h-0 overflow-hidden opacity-0">
        <form action="" className="flex flex-col gap-[1.8rem]">
          <fieldset className="flex items-center gap-[1.6rem]">
            <Label htmlFor="name" className="min-w-[25rem]">
              My name is
            </Label>

            <ContactFormInput placeholder="Enter your name" type="text" />
          </fieldset>

          <fieldset className="flex items-center gap-[1.6rem]">
            <Label htmlFor="service" className="min-w-[38.9rem]">
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

          <fieldset className="flex items-center gap-[1.6rem]">
            <Label htmlFor="email" className="min-w-[35.8rem]">
              Here is my email
            </Label>

            <ContactFormInput
              placeholder="Enter your email address"
              type="email"
            />
          </fieldset>

          <fieldset className="flex items-center gap-[1.6rem]">
            <Label htmlFor="message" className="min-w-[29.7rem]">
              And message
            </Label>

            <Textarea placeholder="Enter your message" />
          </fieldset>

          <button className="mt-[1.5rem] inline-flex cursor-pointer items-center">
            <span className="border-text-primary bg-text-primary inline-flex h-[5.6rem] min-w-[21.1rem] items-center justify-center rounded-[6rem] border px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
              Submit Request
            </span>
            <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
              <Image
                src={subtractDark}
                alt="Subtract Light Icon"
                width={18}
                height={18}
              />
            </i>
            <i className="border-text-primary bg-text-primary inline-flex size-[5.6rem] items-center justify-center rounded-full border">
              <Image
                src={arrowRight}
                alt="Arrow Right Icon"
                width={14}
                height={14}
              />
            </i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
