"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LineStroke03 = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M1471 35.9327C1421.27 27.0003 1305.88 5.06971 1174.43 28.4164C1038.63 52.5358 946.678 148.677 975.299 228.089C1003.92 307.5 1175.81 397.642 1239.43 344.553C1275.14 314.754 1308.41 117.305 806.006 92.7952C303.607 68.2855 108.11 380.429 272.275 389.704C436.44 398.978 498.348 187.738 304.564 140.507C141.101 100.667 50.7935 133.191 18.0001 140.507"
        stroke="url(#paint0_linear_122_2)"
        strokeWidth="36"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_122_2"
          x1="1471"
          y1="34.2623"
          x2="268.912"
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

export default LineStroke03;
