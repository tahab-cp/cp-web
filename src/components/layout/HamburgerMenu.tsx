"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import phoneFill from "../../assets/images/icons/phone-fill.svg";
import Link from "next/link";
import Image from "next/image";
import BookButton from "../ui/BookButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setIsOpen(false); // auto-close
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-[999] inline-flex size-[4rem] items-center justify-center rounded-full border transition-all duration-300 perspective-[1000px] ${isOpen ? "border-[#ffffff]" : "border-[#C9C9C9]"}`}
      >
        <div
          className={`transition-transform duration-300 ease-in-out [transform-style:preserve-3d] ${
            isOpen ? "rotate-y-180" : ""
          } size-[2.3rem]`}
        >
          {/* Front: Hamburger Icon */}
          <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
            <Menu className="size-[2.3rem] text-white" />
          </div>

          {/* Back: Close Icon */}
          <div className="absolute inset-0 flex rotate-y-180 items-center justify-center [backface-visibility:hidden]">
            <X className="size-[2.3rem] text-white" />
          </div>
        </div>
      </button>

      <div
        className={`hamburger-menu fixed top-0 z-[100] h-screen w-full transition-all duration-300 ${isOpen ? "left-0" : "left-full"}`}
      >
        <nav className="flex h-full flex-col items-start justify-center gap-[1rem] pl-[2rem] md:pl-[4rem]">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              onClick={() => setIsOpen(false)}
              href={href}
              className="text-[4rem] leading-[6rem] font-bold text-white uppercase md:text-[7rem] md:leading-[9rem]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-[10rem] left-[2rem] flex items-center gap-[1rem] md:left-[4rem]">
          <i className="relative inline-flex size-[4.6rem] items-center justify-center rounded-full bg-[#32284A]">
            <Image
              src={phoneFill}
              alt="Phone Fill Icon"
              width={16}
              height={16}
            />

            <div className="outline-text-primary absolute top-[.2rem] right-[.2rem] size-[.8rem] rounded-full bg-[#7EE972] outline-[3.5px]" />
          </i>

          <BookButton />
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
