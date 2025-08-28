"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import HamburgerAccordion from "../common/HamburgerAccordion";

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
        className={`hamburger-menu fixed top-0 z-[100] flex h-screen w-full flex-col transition-all duration-300 ${isOpen ? "left-0" : "left-full"}`}
      >
        <div className="flex h-[12.6rem] items-center px-[2rem] md:px-[4rem]">
          <Link
            onClick={() => setIsOpen(false)}
            href="/"
            className="relative overflow-hidden"
          >
            <Image
              src={logo}
              alt="Brand Logo"
              width={170}
              height={66}
              fetchPriority="high"
              className="w-[14rem] md:w-[17rem]"
            />
          </Link>
        </div>

        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <nav className="flex flex-col gap-[2rem] py-[2rem] text-white md:py-[4rem]">
            <div className="border-b border-white px-[2rem] pb-[2rem] md:px-[4rem]">
              <Link
                href=""
                className="text-[3rem] leading-[4rem] font-semibold uppercase md:text-[4rem] md:leading-[5rem]"
              >
                Home
              </Link>
            </div>

            <div className="border-b border-white px-[2rem] pb-[2rem] md:px-[4rem]">
              <Link
                href=""
                className="text-[3rem] leading-[4rem] font-semibold uppercase md:text-[4rem] md:leading-[5rem]"
              >
                About
              </Link>
            </div>

            <div className="border-b border-white px-[2rem] pb-[2rem] md:px-[4rem]">
              <HamburgerAccordion setIsOpen={setIsOpen} />
            </div>

            <div className="border-b border-white px-[2rem] pb-[2rem] md:px-[4rem]">
              <Link
                href=""
                className="text-[3rem] leading-[4rem] font-semibold uppercase md:text-[4rem] md:leading-[5rem]"
              >
                Case Studies
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
