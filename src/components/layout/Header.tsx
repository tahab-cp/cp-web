"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.svg";
import NavigationLink from "../common/NavigationLink";
import NavigationDropdown from "../common/NavigationDropdown";
import phoneFill from "../../assets/images/icons/phone-fill.svg";
import subtractLight from "../../assets/images/icons/subtract-light.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="absolute top-[3rem] left-0 z-[100] w-full px-[2rem] transition-all duration-300 xl:px-[0rem]">
      <div className="relative mx-auto flex h-[6.6rem] max-w-[120.329rem] items-center justify-between">
        <Link href="/" className="relative z-[999]">
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
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/about">About CP</NavigationLink>
            <NavigationDropdown />
            <NavigationLink href="/case-studies">Case Studies</NavigationLink>
          </nav>

          <div className="hidden items-center gap-[1rem] xl:flex">
            <i className="relative inline-flex size-[4.6rem] items-center justify-center rounded-full bg-[#32284A]">
              <Image
                src={phoneFill}
                alt="Phone Fill Icon"
                width={16}
                height={16}
              />

              <div className="outline-text-primary absolute top-[.2rem] right-[.2rem] size-[.8rem] rounded-full bg-[#7EE972] outline-[3.5px]" />
            </i>

            <Link href="" className="inline-flex items-center justify-center">
              <span className="inline-flex h-[4.6rem] min-w-[16.6rem] items-center justify-center rounded-[7rem] border border-[#d3d3d3] px-[3rem] py-[1rem] text-[2rem] font-semibold text-white">
                Book a Call
              </span>

              <i className="-mx-[.1rem] inline-flex size-[1.5rem] items-center justify-center">
                <Image
                  src={subtractLight}
                  alt="Subtract Light Icon"
                  width={18}
                  height={18}
                />
              </i>

              <i className="inline-flex size-[4.6rem] items-center justify-center rounded-full border border-[#d3d3d3]">
                <Image
                  src={arrowRight}
                  alt="Arrow Right Icon"
                  width={14}
                  height={14}
                />
              </i>
            </Link>
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
