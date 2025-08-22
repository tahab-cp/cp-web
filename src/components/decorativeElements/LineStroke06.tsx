"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LineStroke06 = (props: React.SVGProps<SVGSVGElement>) => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (pathRef.current && svgRef.current) {
      const length = pathRef.current.getTotalLength();

      // Set initial dash properties
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      // Tie animation to scroll
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none", // makes it smooth with scroll
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 90%  bottom", // when SVG enters bottom of viewport
          end: "bottom 70% top", // until it leaves top of viewport
          scrub: true, // sync with scroll wheel
        },
      });
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      width="1524"
      height="352"
      viewBox="0 0 1524 352"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        ref={pathRef}
        d="M1506 33.2332C1455.07 25.6454 1336.91 7.01621 1202.29 26.8484C1063.22 47.3369 969.048 129.005 998.359 196.462C1027.67 263.919 1203.7 340.492 1268.85 295.395C1305.42 270.081 1339.49 102.356 824.987 81.5357C310.486 60.7157 110.281 325.87 278.4 333.748C446.519 341.627 509.918 162.186 311.467 122.065C144.067 88.2223 51.5833 115.851 18 122.065"
        stroke="url(#paint0_linear_122_62)"
        strokeWidth="36"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_122_62"
          x1="1506"
          y1="31.8142"
          x2="397.012"
          y2="788.775"
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

export default LineStroke06;
