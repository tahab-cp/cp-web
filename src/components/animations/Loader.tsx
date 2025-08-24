// src/components/Loader.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import cpLogoIcon from "../../assets/images/cp-logo-icon.png";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counterObj = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => onComplete(),
    });

    // Step 1: Fade in BOTH content + counter at same time
    tl.fromTo(
      [contentRef.current, counterRef.current],
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out", stagger: 0 },
    );

    // Step 2: Start counter animation
    tl.to(counterObj, {
      value: 100,
      duration: 2,
      ease: "power1.out",
      onUpdate: () => setCount(Math.floor(counterObj.value)),
    });

    // Step 3: Fade out loader
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.inOut",
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center gap-[1.5rem] bg-[#070707] px-[2rem]"
    >
      {/* Logo + text */}
      <div
        ref={contentRef}
        className="flex items-center justify-center gap-[1rem]"
      >
        <Image
          src={cpLogoIcon}
          width={66}
          height={66}
          alt="Logo icon"
          className="size-[3.8rem]"
        />
        <p className="text-[2.2rem] leading-[3.2rem] font-normal text-[#7e8087]">
          Good things take time… almost there!
        </p>
      </div>

      {/* Counter */}
      <div
        ref={counterRef}
        className="min-w-[17rem] text-[6rem] leading-[7rem] font-semibold text-white opacity-0"
      >
        {count}%
      </div>
    </div>
  );
};

export default Loader;
