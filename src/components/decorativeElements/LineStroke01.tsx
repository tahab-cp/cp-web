"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LineStroke01 = (props: React.SVGProps<SVGSVGElement>) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();

      // Set up initial stroke dash
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      // Animate stroke drawing
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <svg
      width="1476"
      height="568"
      viewBox="0 0 1476 568"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        ref={pathRef}
        opacity="0.13"
        d="M18 43.6179C67.2875 30.8575 181.64 -0.47165 311.914 32.8805C446.5 67.3363 537.631 204.68 509.266 318.124C480.9 431.567 310.55 560.341 247.5 484.5C212.109 441.93 179.14 159.863 677.044 124.849C1174.95 89.8358 1368.7 535.751 1206 549C1043.3 562.249 981.95 260.481 1174 193.009C1336 136.094 1425.5 182.557 1458 193.009"
        stroke="url(#paint0_linear_121_237)"
        strokeWidth="36"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_121_237"
          x1="18"
          y1="41.2316"
          x2="1380.95"
          y2="576.576"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCC40" />
          <stop offset="0.466346" stopColor="#EC9122" />
          <stop offset="1" stopColor="#FF2CAE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LineStroke01;
