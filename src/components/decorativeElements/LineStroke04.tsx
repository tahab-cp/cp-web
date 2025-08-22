"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LineStroke04 = (props: React.SVGProps<SVGSVGElement>) => {
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
      width="1674"
      height="758"
      viewBox="0 0 1674 758"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        ref={pathRef}
        d="M18.916 32.419C76.8353 23.0151 211.399 -0.782105 357.338 51.3951C508.107 105.299 598.043 272.728 553.4 399.983C508.757 527.238 299.548 656.973 235.28 563.164C199.206 510.507 191.439 183.076 766.534 195.902C1341.63 208.728 1516.43 741.444 1328.32 739.33C1140.21 737.215 1101.97 384.136 1329.54 327.109C1521.51 279.005 1619.26 341.896 1655.44 357.359"
        stroke="url(#paint0_linear_122_60)"
        strokeWidth="36"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_122_60"
          x1="19.1704"
          y1="29.6787"
          x2="1526.52"
          y2="788.879"
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

export default LineStroke04;
