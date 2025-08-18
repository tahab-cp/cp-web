"use client";

import Image from "next/image";
import arrowDown from "../../assets/images/icons/arrow-down.svg";
import Link from "next/link";
import { useState } from "react";
import { serviceTabs } from "@/constants/servicesDropdown";

const NavigationDropdown = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(false);

  return (
    <div
      onMouseEnter={() => setActiveDropdown(true)}
      onMouseLeave={() => setActiveDropdown(false)}
    >
      <button
        onClick={() => setActiveDropdown(!activeDropdown)}
        className={`inline-flex h-[4.6rem] min-w-[12.4rem] cursor-pointer items-center justify-center gap-[1rem] rounded-[6rem] px-[1.6rem] py-[1.1rem] text-[1.6rem] leading-[2.4rem] font-medium transition-all duration-300 ${activeDropdown ? "text-text-primary bg-white" : "bg-white/15 text-white"}`}
      >
        <span>Services</span>

        <div
          className={`inline-flex size-[2.2rem] items-center justify-center rounded-full transition-all duration-300 ${activeDropdown ? "bg-text-primary -rotate-180" : "-rotate-0 bg-white/15"}`}
        >
          <Image src={arrowDown} alt="Dropdown arrow" width={12} height={12} />
        </div>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 z-50 w-full transition-all duration-300 ${
          activeDropdown
            ? "pointer-events-auto visible pt-[1.6rem] opacity-100"
            : "pointer-events-none invisible pt-[0rem] opacity-0"
        }`}
      >
        <div className="dropdown-menu flex w-full py-[3rem] pr-[4.659rem] pl-[3.4rem]">
          {/* Tab list */}
          <div className="flex flex-col gap-[4.5rem] border-r border-white/80 pt-[1.7rem] pr-[3.2rem]">
            {serviceTabs.map((tab, idx) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(idx)}
                className={`dropdown-tab group inline-flex h-[10rem] w-[20rem] cursor-pointer items-center px-[2rem] py-[1.8rem] ${
                  activeTab === idx ? "!bg-[#ffe500]" : ""
                }`}
              >
                <span
                  className={`group-hover:text-text-primary text-left text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] transition-all duration-300 ${
                    activeTab === idx ? "text-text-primary" : "text-white"
                  }`}
                >
                  {tab.name}
                </span>

                <div className="absolute right-[-.4rem] bottom-[-.4rem] inline-flex size-[2.4rem] items-center justify-center">
                  <Image
                    src={tab.icon}
                    alt="Click Arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div className="flex flex-col">
            <div className="flex pb-[3.5rem] pl-[6rem]">
              {/* Columns */}
              {serviceTabs[activeTab].columns.map((col, idx) => (
                <div
                  key={col.title}
                  className={`flex flex-col gap-[3.1rem] pt-[3.5rem] ${idx === 1 && "mr-[4.5rem] ml-[6rem]"}`}
                >
                  <h5 className="text-[1.8rem] leading-[2.6rem] font-normal text-[#FED202]">
                    {col.title}
                  </h5>

                  <ul className="flex flex-col gap-[1.4rem]">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-[1.2rem] text-[1.8rem] leading-[2.6rem] font-normal text-white"
                        >
                          <div className="size-[1rem] rounded-full border-2 border-[#FFE400]" />{" "}
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex items-center justify-center">
                <Image
                  src={serviceTabs[activeTab].image}
                  alt="Showcase Image"
                  width={299.41}
                  height={337.12}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-[5.9rem] border-t border-white/80 pt-[3.2rem] pl-[6rem]">
              <div className="flex flex-col">
                <h6 className="text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                  GIVE US A CALL
                </h6>

                <Link
                  href=""
                  className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
                >
                  0161 820 2667
                </Link>
              </div>

              <div className="flex flex-col">
                <h6 className="text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                  EMAIL US
                </h6>

                <Link
                  href=""
                  className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FF37B3]"
                >
                  hello@cp.agency
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationDropdown;
