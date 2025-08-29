"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import logo from "../../assets/images/logo.svg";
import Image from "next/image";
import NavigationLink from "../common/NavigationLink";
import NavigationDropdown from "../common/NavigationDropdown";
import phoneFill from "../../assets/images/icons/phone-fill.svg";
import CommonBtn1 from "../common/CommonBtn1";
import HamburgerMenu from "./HamburgerMenu";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 z-[100] w-full px-[2rem] pt-[2rem] transition-all duration-300 md:px-[4rem] xl:px-[0rem] ${isVisible ? "top-[0%]" : "top-[-100%]"}`}
    >
      <div className="shadow-01 relative mx-auto flex w-full max-w-[120.329rem] items-center justify-between rounded-full bg-black/30 px-[3rem] py-[1rem] backdrop-blur-[10px]">
        <Link href="/" className="relative">
          <Image
            src={logo}
            alt="Brand Logo"
            width={170}
            height={66}
            fetchPriority="high"
            className="h-[6.6rem] w-[14rem] md:w-[17rem]"
          />
        </Link>

        <div className="flex items-center justify-end gap-[9.2rem]">
          <nav className="hidden items-center justify-center gap-[1rem] xl:flex">
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/about">About CP</NavigationLink>
            <NavigationDropdown />
            <NavigationLink href="/case-studies">Case Studies</NavigationLink>
          </nav>

          <div className="hidden items-center gap-[1rem] overflow-hidden xl:flex">
            <i className="header-cta-btn-animate relative inline-flex size-[4.6rem] items-center justify-center rounded-full bg-[#32284A]">
              <Image
                src={phoneFill}
                alt="Phone Fill Icon"
                width={16}
                height={16}
              />
              <div className="outline-text-primary absolute top-[.2rem] right-[.2rem] size-[.8rem] rounded-full bg-[#7EE972] outline-[3.5px]" />
            </i>

            {/* CTA Button */}
            <CommonBtn1 />
          </div>

          {/* Hamburger Menu */}
          <div className="xl:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
