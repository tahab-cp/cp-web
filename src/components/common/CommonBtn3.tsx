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
  return (
    <div className="relative inline-block">
      <Link href={href} className="inline-flex items-center">
        {/* Text */}
        <span
          className="flex h-[5rem] min-w-[18rem] items-center justify-center rounded-[6rem] px-[3rem] py-[1rem] text-[2rem] font-semibold"
          style={{ background: bgColor, color: textColor }}
        >
          {label}
        </span>

        {/* Wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Subtract Icon */}
          <i className="mx-[-.5rem]">
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
                d="M14.4023 6.36364L14.4023 7.63636L13.766 7.63636L13.766 8.27273L13.1296 8.27273L13.1296 8.90909L12.4933 8.90909L12.4933 9.54545L11.8569 9.54545L11.8569 10.1818L11.2205 10.1818L11.2205 10.8182L10.5842 10.8182L10.5842 11.4545L9.9478 11.4545L9.9478 12.0909L9.31143 12.0909L9.31143 12.7273L8.67507 12.7273L8.67507 13.3636L8.03871 13.3636L8.03871 14L7.40234 14L7.40234 13.3636L6.76598 13.3636L6.76598 12.7273L6.12962 12.7273L6.12962 12.0909L6.76598 12.0909L6.76598 11.4545L7.40234 11.4545L7.40234 10.8182L8.03871 10.8182L8.03871 10.1818L8.67507 10.1818L8.67507 9.54545L9.31143 9.54545L9.31143 8.90909L9.9478 8.90909L9.9478 8.27273L0.402343 8.27273L0.402343 5.72727L9.9478 5.72727L9.9478 5.09091L9.31143 5.09091L9.31143 4.45455L8.67507 4.45455L8.67507 3.81818L8.03871 3.81818L8.03871 3.18182L7.40234 3.18182L7.40234 2.54545L6.76598 2.54545L6.76598 1.90909L6.12962 1.90909L6.12962 1.27273L6.76598 1.27273L6.76598 0.636363L7.40234 0.636363L7.40234 -3.0598e-07L8.03871 -2.78163e-07L8.03871 0.636363L8.67507 0.636363L8.67507 1.27273L9.31143 1.27273L9.31143 1.90909L9.9478 1.90909L9.9478 2.54545L10.5842 2.54545L10.5842 3.18182L11.2205 3.18182L11.2205 3.81818L11.8569 3.81818L11.8569 4.45455L12.4933 4.45455L12.4933 5.09091L13.1296 5.09091L13.1296 5.72727L13.766 5.72727L13.766 6.36364L14.4023 6.36364Z"
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
