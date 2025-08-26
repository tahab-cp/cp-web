"use client";
import { useEffect, useRef } from "react";
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
  const iconWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iconWrapRef.current) return;

    const el = iconWrapRef.current;

    // hide initially (clipped completely)
    gsap.set(el, { clipPath: "inset(0 100% 0 0)", x: -20 });

    const tl = gsap.timeline({ paused: true });
    tl.to(el, {
      clipPath: "inset(0 0% 0 0)",
      x: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    el.parentElement?.addEventListener("mouseenter", () => tl.play());
    el.parentElement?.addEventListener("mouseleave", () => tl.reverse());
  }, []);

  return (
    <div className="relative inline-block">
      <Link href={href} className="inline-flex items-center overflow-hidden">
        {/* Button text */}
        <span
          className="flex h-[5rem] min-w-[18rem] items-center justify-center rounded-[6rem] px-[3rem] py-[1rem] text-[2rem] font-semibold"
          style={{ background: bgColor, color: textColor }}
        >
          {label}
        </span>

        {/* Icon wrapper (clip animation happens here) */}
        <div
          ref={iconWrapRef}
          className="ml-[-0.5rem] flex items-center justify-center"
        >
          {/* Subtract Icon */}
          <i className="mr-[-.5rem]">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.47559 0C3.85901 2.39049 6.44175 4 9.40234 4C12.3629 4 14.9457 2.39049 16.3291 0H18.4023V18H16.3291C14.9457 15.6095 12.3629 14 9.40234 14C6.44175 14 3.85901 15.6095 2.47559 18H0.402344V0H2.47559Z"
                fill={bgColor}
              />
            </svg>
          </i>

          {/* Arrow Icon */}
          <i
            className="flex size-[5rem] items-center justify-center rounded-full"
            style={{ background: bgColor }}
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4023 6.36364V7.63636H13.766V8.27273H13.1296V8.90909H12.4933V9.54545H11.8569V10.1818H11.2205V10.8182H10.5842V11.4545H9.9478V12.0909H9.31143V12.7273H8.67507V13.3636H8.03871V14H7.40234V13.3636H6.76598V12.7273H6.12962V12.0909H6.76598V11.4545H7.40234V10.8182H8.03871V10.1818H8.67507V9.54545H9.31143V8.90909H9.9478V8.27273H0.402343V5.72727H9.9478V5.09091H9.31143V4.45455H8.67507V3.81818H8.03871V3.18182H7.40234V2.54545H6.76598V1.90909H6.12962V1.27273H6.76598V0.636363H7.40234V0H8.03871V0.636363H8.67507V1.27273H9.31143V1.90909H9.9478V2.54545H10.5842V3.18182H11.2205V3.81818H11.8569V4.45455H12.4933V5.09091H13.1296V5.72727H13.766V6.36364H14.4023Z"
                fill={textColor}
              />
            </svg>
          </i>
        </div>
      </Link>
    </div>
  );
};

export default CommonBtn3;
