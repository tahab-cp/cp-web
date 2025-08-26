"use client";

import Image from "next/image";
import aboutAvatar from "../../assets/images/about-avatar.svg";
import { useEffect } from "react";
import gsap from "gsap";

const AboutBadge = () => {
  useEffect(() => {
    gsap.to(".about-badge", {
      boxShadow: "0 0 12px rgba(255,230,0,0.5)",
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="about-badge border-text-primary inline-flex h-[4.4rem] min-w-[25.6rem] items-center justify-center gap-[1.2rem] rounded-[.8rem] border-[0.5px] border-dashed px-[2rem] py-[.6rem] text-[1.6rem] leading-[2.4rem] font-medium">
      <Image src={aboutAvatar} alt="Avatar" width={58} height={32} />

      <span>Hear From Founder</span>
    </div>
  );
};

export default AboutBadge;
