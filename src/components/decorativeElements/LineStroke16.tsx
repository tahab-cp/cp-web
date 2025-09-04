"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const LineStroke16 = (props: React.SVGProps<SVGSVGElement>) => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (pathRef.current && svgRef.current) {
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
  }, []);

  return (
    <svg
      ref={svgRef}
      width="1477"
      height="568"
      viewBox="0 0 1477 568"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        ref={pathRef}
        opacity="0.1"
        d="M18.4023 43.6179C67.6898 30.8575 182.042 -0.47165 312.317 32.8805C446.902 67.3363 538.033 204.68 509.668 318.124C481.303 431.567 310.952 560.341 247.902 484.5C212.512 441.93 179.542 159.863 677.447 124.849C1175.35 89.8358 1369.1 535.751 1206.4 549C1043.71 562.249 982.353 260.481 1174.4 193.009C1336.4 136.094 1425.9 182.557 1458.4 193.009"
        stroke="url(#paint0_linear_220_2)"
        strokeOpacity="0.5"
        strokeWidth="36"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_220_2"
          x1="18.4024"
          y1="41.2316"
          x2="1381.35"
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

export default LineStroke16;
