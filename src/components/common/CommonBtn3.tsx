"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

type CommonBtn3Props = {
  href: string;
  label: string;
  bgColor?: string;
  textColor?: string;
};

const CommonBtn3 = ({
  href,
  label,
  bgColor = "#141414",
  textColor = "white",
}: CommonBtn3Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isSafari, setIsSafari] = useState(false);
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    // Detect browser for specific fixes
    const userAgent = navigator.userAgent;
    setIsSafari(/^((?!chrome|android).)*safari/i.test(userAgent));
    setIsFirefox(userAgent.includes("Firefox"));
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const icons = wrapperRef.current.querySelectorAll(".gooey-icon");

    gsap.set(icons, { x: -40, opacity: 0 }); // hidden state

    wrapperRef.current.addEventListener("mouseenter", () => {
      gsap.to(icons, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.05,
      });
    });

    wrapperRef.current.addEventListener("mouseleave", () => {
      gsap.to(icons, {
        x: -40,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    });
  }, []);

  return (
    <>
      {/* Gooey filter defs - improved for cross-browser compatibility */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter
            id="gooey"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey" />
            {/* Additional filter primitive for better Safari support */}
            {isSafari && (
              <feComponentTransfer result="glow">
                <feFuncA type="linear" slope="3" intercept="-0.8" />
              </feComponentTransfer>
            )}
          </filter>
        </defs>
      </svg>

      <div
        ref={wrapperRef}
        className="relative inline-block"
        style={{
          filter: "url(#gooey)",
          // Firefox specific transform to fix filter rendering
          transform: isFirefox ? "translateZ(0)" : "none",
        }}
      >
        <Link href={href} className="inline-flex items-center">
          {/* Text Button */}
          <span
            className="relative z-10 flex h-[5rem] min-w-[18rem] items-center justify-center rounded-[6rem] px-[3rem] py-[1rem] text-[2rem] font-semibold"
            style={{
              background: bgColor,
              color: textColor,
              // Safari border fix to prevent bleeding
              border: isSafari ? `2px solid ${bgColor}` : "none",
            }}
          >
            {label}
          </span>

          {/* Gooey Icons Wrapper */}
          <div className="relative ml-[-1rem] flex items-center justify-center">
            {/* Subtract Icon */}
            <i className="gooey-icon" style={{ zIndex: 9 }}>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // Prevent flash of unstyled content in Safari
                style={{ display: "block" }}
              >
                <path
                  d="M2.47559 0C3.85901 2.39049 6.44175 4 9.40234 4C12.3629 4 14.9457 2.39049 16.3291 0H18.4023V18H16.3291C14.9457 15.6095 12.3629 14 9.40234 14C6.44175 14 3.85901 15.6095 2.47559 18H0.402344V0H2.47559Z"
                  fill={bgColor}
                />
              </svg>
            </i>

            {/* Arrow Icon */}
            <i
              className="gooey-icon flex size-[5rem] items-center justify-center rounded-full"
              style={{
                background: bgColor,
                // Ensure proper stacking in all browsers
                zIndex: 10,
              }}
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // Prevent flash of unstyled content in Safari
                style={{ display: "block" }}
              >
                <path
                  d="M14.4023 6.36364L14.4023 7.63636L13.766 7.63636L13.766 8.27273L13.1296 8.27273L13.1296 8.90909L12.4933 8.90909L12.4933 9.54545L11.8569 9.54545L11.8569 10.1818L11.2205 10.1818L11.2205 10.8182L10.5842 10.8182L10.5842 11.4545L9.9478 11.4545L9.9478 12.0909L9.31143 12.0909L9.31143 12.7273L8.67507 12.7273L8.67507 13.3636L8.03871 13.3636L8.03871 14L7.40234 14L7.40234 13.3636L6.76598 13.3636L6.76598 12.7273L6.12962 12.7273L6.12962 12.0909L6.76598 12.0909L6.76598 11.4545L7.40234 11.4545L7.40234 10.8182L8.03871 10.8182L8.03871 10.1818L8.67507 10.1818L8.67507 9.54545L9.31143 9.54545L9.31143 8.90909L9.9478 8.90909L9.9478 8.27273L0.402343 8.27273L0.402343 5.72727L9.9478 5.72727L9.9478 5.09091L9.31143 5.09091L9.31143 4.45455L8.67507 4.45455L8.67507 3.81818L8.03871 3.81818L8.03871 3.18182L7.40234 3.18182L7.40234 2.54545L6.76598 2.54545L6.76598 1.90909L6.12962 1.90909L6.12962 1.27273L6.76598 1.27273L6.76598 0.636363L7.40234 0.636363L7.40234 -3.0598e-07L8.03871 -2.78163e-07L8.03871 0.636363L8.67507 0.636363L8.67507 1.27273L9.31143 1.27273L9.31143 1.90909L9.9478 1.90909L9.9478 2.54545L10.5842 2.54545L10.5842 3.18182L11.2205 3.18182L11.2205 3.81818L11.8569 3.81818L11.8569 4.45455L12.4933 4.45455L12.4933 5.09091L13.1296 5.09091L13.1296 5.72727L13.766 5.72727L13.766 6.36364L14.4023 6.36364Z"
                  fill={textColor}
                />
              </svg>
            </i>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CommonBtn3;
