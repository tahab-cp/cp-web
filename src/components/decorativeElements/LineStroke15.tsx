"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const LineStroke15 = (props: React.SVGProps<SVGSVGElement>) => {
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
          start: "top 50%  bottom", // when SVG enters bottom of viewport
          end: "bottom 50% top", // until it leaves top of viewport
          scrub: true, // sync with scroll wheel
        },
      });
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      width="1078"
      height="495"
      viewBox="0 0 1078 495"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        ref={pathRef}
        d="M18.2929 26.7119C55.1323 20.7305 140.721 5.59441 233.545 38.7815C329.441 73.0668 386.644 179.56 358.249 260.499C329.854 341.439 196.788 423.957 155.91 364.29C132.965 330.798 128.025 122.537 493.812 130.695C859.599 138.853 970.78 477.685 851.132 476.34C731.485 474.994 707.163 250.42 851.912 214.148C974.012 183.552 1036.19 223.553 1059.2 233.389"
        stroke="url(#paint0_linear_171_578)"
        strokeWidth="36"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_171_578"
          x1="18.4547"
          y1="24.9689"
          x2="977.198"
          y2="507.855"
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

export default LineStroke15;
