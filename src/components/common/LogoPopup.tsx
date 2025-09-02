"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

interface LogoPopupProps {
  logo: string;
  popupImage: string;
  title: string;
  href: string;
  logoWidth: number;
  logoHeight: number;
}

const LogoPopup: React.FC<LogoPopupProps> = ({
  logo,
  popupImage,
  title,
  href,
  logoWidth,
  logoHeight,
}) => {
  const [activePopup, setActivePopup] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // mouse X inside card
      const y = e.clientY - rect.top; // mouse Y inside card
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Rotation values
      const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
      const rotateY = ((x - centerX) / centerX) * -10;

      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
        duration: 0.6,
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setActivePopup(true)}
      onMouseLeave={() => setActivePopup(false)}
    >
      {/* Logo button */}
      <button
        onClick={() => setActivePopup(!activePopup)}
        className={`cursor-pointer transition-all duration-300 ${
          activePopup ? "opacity-100 grayscale-0" : "opacity-70 grayscale-100"
        }`}
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
        <div
          ref={cardRef}
          className="w-[27.5rem] overflow-hidden rounded-[1.6rem] bg-white shadow-[0px_8px_20px_0px_#00000040]"
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-[1.6rem]">
            <Image
              src={popupImage}
              alt={`${title} Popup Image`}
              width={275}
              height={194}
            />
          </div>

          {/* Content */}
          <div className="px-[1.7rem] pt-[1.8rem] pb-[2.4rem]">
            <Link href={href} className="inline-flex items-center">
              <span className="border-text-primary bg-text-primary inline-flex h-[4.4rem] min-w-[17.934rem] items-center justify-center rounded-[4.56rem] border px-[2.28rem] py-[.608rem] text-[1.6rem] font-semibold text-white">
                View Case Study
              </span>

              <i className="-mx-[.3rem] inline-flex size-[1.368rem] items-center justify-center">
                <Image
                  src="/images/icons/subtract-dark.svg"
                  alt="Subtract Light Icon"
                  width={13.68}
                  height={13.68}
                />
              </i>

              <i className="border-text-primary bg-text-primary inline-flex size-[4.4rem] items-center justify-center rounded-full border">
                <Image
                  src="/images/icons/arrow-right.svg"
                  alt="Arrow Right Icon"
                  width={13.68}
                  height={13.68}
                />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoPopup;
