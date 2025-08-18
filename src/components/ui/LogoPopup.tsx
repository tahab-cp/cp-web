"use client";

import Image, { StaticImageData } from "next/image";
import ViewButton from "./ViewButton";
import { useState } from "react";

interface LogoPopupProps {
  logo: StaticImageData;
  popupImage: StaticImageData;
  title: string;
  description: string;
  href: string;

  logoWidth: number;
  logoHeight: number;
}

const LogoPopup: React.FC<LogoPopupProps> = ({
  logo,
  popupImage,
  title,
  description,
  href,
  logoWidth,
  logoHeight,
}) => {
  const [activePopup, setActivePopup] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setActivePopup(true)}
      onMouseLeave={() => setActivePopup(false)}
    >
      {/* Logo button */}
      <button
        onClick={() => setActivePopup(!activePopup)}
        className={`cursor-pointer transition-all duration-300 ${activePopup ? "opacity-100 grayscale-0" : "opacity-70 grayscale-100"}`}
      >
        <Image
          src={logo}
          alt={`${title} Logo`}
          width={logoWidth}
          height={logoHeight}
        />
      </button>

      {/* Popup */}
      <div
        className={`absolute bottom-full left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
          activePopup
            ? "pointer-events-auto visible pb-[1.6rem] opacity-100"
            : "pointer-events-none invisible pb-[0rem] opacity-0"
        }`}
      >
        <div className="w-[27.5rem] overflow-hidden rounded-[1.6rem] bg-white shadow-[0px_8px_20px_0px_#00000040]">
          {/* Image */}
          <div className="relative h-[19.4rem] w-full overflow-hidden rounded-[1.6rem]">
            <Image
              src={popupImage}
              alt={`${title} Popup Image`}
              fill
              sizes="(max-width: 768px) 100vw, 275px"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[3.4rem] px-[1.7rem] pt-[1.8rem] pb-[2.4rem]">
            <div className="flex w-full flex-col items-start gap-[.6rem] text-left">
              <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]">
                {title}
              </h4>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                {description}
              </p>
            </div>
            <ViewButton href={href} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoPopup;
