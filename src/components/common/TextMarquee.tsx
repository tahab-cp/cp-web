"use client";

import Marquee from "react-fast-marquee";

const texts = Array(15).fill("Let’s work together.");

const TextMarquee = () => {
  return (
    <>
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        direction="right"
        className="overflow-hidden text-[11rem] leading-[13rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
      >
        {texts.map((text, index) => (
          <span key={index} className="mx-[1rem]">
            {text}
          </span>
        ))}
      </Marquee>

      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        direction="left"
        className="overflow-hidden text-[11rem] leading-[13rem] font-semibold tracking-[-0.02em] text-[#FF37B3]"
      >
        {texts.map((text, index) => (
          <span key={index} className="mx-[1rem]">
            {text}
          </span>
        ))}
      </Marquee>
    </>
  );
};

export default TextMarquee;
