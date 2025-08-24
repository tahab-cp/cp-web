"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLoaderStore } from "@/store/useLoader";

const LineStroke01 = (props: React.SVGProps<SVGSVGElement>) => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const isReady = useLoaderStore((state) => state.isReady);

  useEffect(() => {
    if (isReady && pathRef.current && svgRef.current) {
      const length = pathRef.current.getTotalLength();

      // reset initial state
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
      gsap.set(svgRef.current, { autoAlpha: 0 }); // 👈 start invisible

      const tl = gsap.timeline();

      // Step 1: fade in SVG
      tl.to(svgRef.current, {
        autoAlpha: 1,
        duration: 0.8,
        ease: "power2.out",
      });

      // Step 2: draw stroke
      tl.to(
        pathRef.current,
        {
          strokeDashoffset: 0,
          duration: 4,
          ease: "power2.inOut",
        },
        "-=0.2",
      ); // small overlap so fade + draw feel smooth
    }
  }, [isReady]);

  return (
    <svg
      ref={svgRef}
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
