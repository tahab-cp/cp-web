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
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CommonBtn3 from "../common/CommonBtn3";

const Header = () => {
  const pathname = usePathname();
  const isReady = useLoaderStore((state) => state.isReady);
  const [isVisible, setIsVisible] = useState(false);

  const headerContentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (isReady && headerContentRef.current) {
  //     const headerLogo = headerContentRef.current.querySelectorAll(
  //       ".header-logo-animate",
  //     );
  //     const headerNav = headerContentRef.current.querySelectorAll(
  //       ".header-nav-animate",
  //     );
  //     const headerCtaBtn = headerContentRef.current.querySelectorAll(
  //       ".header-cta-btn-animate",
  //     );

  //     // make parent visible
  //     gsap.to(headerContentRef.current, { autoAlpha: 1, duration: 0.1 });

  //     // animate logo
  //     gsap.from(headerLogo, {
  //       y: 100,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power2.out",
  //     });

  //     // animate nav items (with stagger)
  //     gsap.from(headerNav, {
  //       y: 100,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.1,
  //       ease: "power2.out",
  //       clearProps: "all",
  //     });

  //     // animate cta btn
  //     gsap.from(headerCtaBtn, {
  //       y: 100,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power2.out",
  //     });
  //   }
  // }, [isReady]);

  useEffect(() => {
    if (headerContentRef.current) {
      const headerLogo = headerContentRef.current.querySelectorAll(
        ".header-logo-animate",
      );
      const headerNav = headerContentRef.current.querySelectorAll(
        ".header-nav-animate",
      );
      const headerCtaBtn = headerContentRef.current.querySelectorAll(
        ".header-cta-btn-animate",
      );

      // make parent visible
      gsap.to(headerContentRef.current, { autoAlpha: 1, duration: 0.1 });

      // animate logo
      gsap.from(headerLogo, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // animate nav items (with stagger)
      gsap.from(headerNav, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
      });

      // animate cta btn
      gsap.from(headerCtaBtn, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }

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
      className={`absolute left-0 z-[100] flex h-[12.6rem] w-full items-center rounded-br-[2rem] rounded-bl-[2rem] px-[2rem] transition-all duration-300 xl:px-[0rem] ${isVisible ? "-top-full" : "top-0"} ${pathname === "/" ? "" : "header-gradient-bg"}`}
    >
      <div
        ref={headerContentRef}
        className="relative mx-auto flex w-full max-w-[120.329rem] items-center justify-between opacity-0"
      >
        <Link href="/" className="relative z-[999] overflow-hidden">
          <Image
            src={logo}
            alt="Brand Logo"
            width={170}
            height={66}
            fetchPriority="high"
            className="header-logo-animate"
          />
        </Link>

        <div className="flex items-center justify-end gap-[9.2rem]">
          <nav className="hidden items-center justify-center gap-[1rem] xl:flex">
            <div className="overflow-hidden">
              <div className="header-nav-animate">
                <NavigationLink href="/">Home</NavigationLink>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="header-nav-animate">
                <NavigationLink href="/about">About CP</NavigationLink>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="header-nav-animate">
                <NavigationDropdown />
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="header-nav-animate">
                <NavigationLink href="/case-studies">
                  Case Studies
                </NavigationLink>
              </div>
            </div>
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

            <div className="header-cta-btn-animate p-[.5rem]">
              <CommonBtn1 />
              {/* <CommonBtn3 href="" label="Book a Call" /> */}
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
