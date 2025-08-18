"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.svg";
import NavigationLink from "../ui/NavigationLink";
import NavigationDropdown from "../ui/NavigationDropdown";
import phoneFill from "../../assets/images/icons/phone-fill.svg";
import BookButton from "../ui/BookButton";
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

            <BookButton />
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
