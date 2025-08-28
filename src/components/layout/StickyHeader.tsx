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
  const headerRef = useRef(null);
  const ctaRef = useRef(null);

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

  useEffect(() => {
    if (isVisible) {
      // Animate header in
      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      // Animate CTA button in (slight delay for nicer effect)
      gsap.to(ctaRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 0.2,
      });
    } else {
      // Animate header out
      gsap.to(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });

      // Animate CTA out
      gsap.to(ctaRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isVisible]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 z-[100] w-full -translate-y-full px-[2rem] pt-[2rem] opacity-0 md:px-[4rem] xl:px-[0rem]"
    >
      <div className="header-gradient-bg relative mx-auto flex w-full max-w-[120.329rem] items-center justify-between rounded-full px-[2rem] py-[3rem]">
        <Link href="/" className="relative">
          <Image
            src={logo}
            alt="Brand Logo"
            width={170}
            height={66}
            fetchPriority="high"
            className="h-[3.9rem] w-[12.9rem]"
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
            <div ref={ctaRef} className="translate-x-12 p-[.5rem] opacity-0">
              <CommonBtn1 />
            </div>
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
