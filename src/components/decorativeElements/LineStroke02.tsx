"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LineStroke02 = (props: React.SVGProps<SVGSVGElement>) => {
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
      width="1489"
      height="408"
      viewBox="0 0 1489 408"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        ref={pathRef}
        d="M18 35.9327C67.7325 27.0003 183.117 5.06971 314.568 28.4164C450.368 52.5358 542.322 148.677 513.701 228.089C485.079 307.5 313.191 397.642 249.572 344.553C213.862 314.754 180.595 117.305 682.994 92.7952C1185.39 68.2855 1380.89 380.429 1216.72 389.704C1052.56 398.978 990.652 187.738 1184.44 140.507C1347.9 100.667 1438.21 133.191 1471 140.507"
        stroke="url(#paint0_linear_121_1174)"
        strokeWidth="36"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_121_1174"
          x1="18"
          y1="34.2623"
          x2="1220.09"
          y2="714.859"
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

export default LineStroke02;
