"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.svg";
import NavigationLink from "../common/NavigationLink";
import NavigationDropdown from "../common/NavigationDropdown";
import phoneFill from "../../assets/images/icons/phone-fill.svg";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname } from "next/navigation";
import CommonBtn1 from "../common/CommonBtn1";
import { useLoaderStore } from "@/store/useLoader";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const pathname = usePathname();
  const isReady = useLoaderStore((state) => state.isReady);

  const headerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReady && headerContentRef.current) {
      const elements =
        headerContentRef.current.querySelectorAll(".header-animate");

      const tl = gsap.timeline();

      // Step 1: fade in whole header smoothly
      tl.to(headerContentRef.current, { autoAlpha: 1, duration: 0.1 });

      // Step 2: drop-like stagger animation
      tl.from(
        elements,
        {
          y: -40, // start higher, feels more "drop"
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(3)", // 👈 gives a nice curve/drop effect
          clearProps: "all", // 👈 removes inline styles after animation finishes
        },
        "-=0.2",
      );
    }
  }, [isReady]);

  return (
    <header
      className={`absolute top-0 left-0 z-[100] flex h-[12.6rem] w-full items-center rounded-br-[2rem] rounded-bl-[2rem] px-[2rem] transition-all duration-300 xl:px-[0rem] ${pathname === "/" ? "" : "header-gradient-bg"}`}
    >
      <div
        ref={headerContentRef}
        className="relative mx-auto flex w-full max-w-[120.329rem] items-center justify-between opacity-0"
      >
        <Link href="/" className="header-animate relative z-[999]">
          <Image
            src={logo}
            alt="Brand Logo"
            width={170}
            height={66}
            fetchPriority="high"
          />
        </Link>

        <div className="flex items-center justify-end gap-[9.2rem]">
          <nav className="hidden items-center justify-center gap-[1rem] xl:flex">
            <div className="header-animate">
              <NavigationLink href="/">Home</NavigationLink>
            </div>
            <div className="header-animate">
              <NavigationLink href="/about">About CP</NavigationLink>
            </div>
            <div className="header-animate">
              <NavigationDropdown />
            </div>
            <div className="header-animate">
              <NavigationLink href="/case-studies">Case Studies</NavigationLink>
            </div>
          </nav>

          <div className="hidden items-center gap-[1rem] xl:flex">
            <i className="header-animate relative inline-flex size-[4.6rem] items-center justify-center rounded-full bg-[#32284A]">
              <Image
                src={phoneFill}
                alt="Phone Fill Icon"
                width={16}
                height={16}
              />

              <div className="outline-text-primary absolute top-[.2rem] right-[.2rem] size-[.8rem] rounded-full bg-[#7EE972] outline-[3.5px]" />
            </i>

            <div className="header-animate">
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

export default Header;
