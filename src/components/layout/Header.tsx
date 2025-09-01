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
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const header = headerRef.current;
    if (!header) return;

    const headerLogo = header.querySelector(".header-logo");
    const headerNavLinks = header.querySelectorAll(".header-nav-links");
    const headerCtaBtn = header.querySelectorAll(".header-cta-btn");

    // Initial fade-in when site loads
    gsap.fromTo(
      header,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" },
    );

    // Sticky scroll behavior
    gsap.to(header, {
      backgroundColor: "#00000080",
      backdropFilter: "blur(10px)",
      duration: 0.6,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: 99999,
        toggleClass: { targets: header, className: "scrolled" },
        onEnter: () =>
          gsap.to(header, {
            backgroundColor: "#00000080",
            backdropFilter: "blur(10px)",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }),
        onLeaveBack: () =>
          gsap.to(header, {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }),
      },
    });

    gsap.fromTo(
      headerLogo,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
    );

    gsap.fromTo(
      headerNavLinks,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.1,
        clearProps: "all",
      },
    );

    gsap.fromTo(
      headerCtaBtn,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      },
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 z-[100] flex w-full items-center rounded-br-[2rem] rounded-bl-[2rem] px-[2rem] py-[3rem] opacity-0 md:px-[4rem] xl:px-[0rem] ${pathname === "/" ? "" : "header-gradient-bg"}`}
    >
      <div className="relative mx-auto flex w-full max-w-[120.329rem] items-center justify-between">
        <div className="overflow-hidden">
          <Link href="/" className="header-logo relative flex">
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

        <div className="flex items-center justify-end gap-[9.2rem]">
          <nav className="hidden items-center justify-center gap-[1rem] xl:flex">
            <div className="overflow-hidden">
              <div className="header-nav-links">
                <NavigationLink href="/">Home</NavigationLink>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="header-nav-links">
                <NavigationLink href="/about">About CP</NavigationLink>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="header-nav-links">
                <NavigationDropdown />
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="header-nav-links">
                <NavigationLink href="/case-studies">
                  Case Studies
                </NavigationLink>
              </div>
            </div>
          </nav>

          <div className="hidden items-center gap-[1rem] overflow-hidden xl:flex">
            <i className="header-cta-btn relative inline-flex size-[4.6rem] items-center justify-center rounded-full bg-[#32284A]">
              <Image
                src={phoneFill}
                alt="Phone Fill Icon"
                width={16}
                height={16}
              />

              <div className="outline-text-primary absolute top-[.2rem] right-[.2rem] size-[.8rem] rounded-full bg-[#7EE972] outline-[3.5px]" />
            </i>

            <div className="header-cta-btn p-[.5rem]">
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
