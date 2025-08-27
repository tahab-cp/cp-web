import React from "react";

type SectionLabel2Props = {
  text: string;
  dotColor?: string; // Tailwind class or hex
  borderColor?: string; // Tailwind class
  textColor?: string; // Tailwind class
  bgColor?: string; // Tailwind class
  className?: string; // extra classes
};

const SectionLabel2 = ({
  text,
  dotColor = "bg-[#FFE400]",
  borderColor = "border-[#070707]",
  textColor = "text-white",
  bgColor = "bg-[#F14A58]",
  className = "",
}: SectionLabel2Props) => {
  return (
    <div
      className={`inline-flex h-[3.5rem] min-w-[13rem] items-center justify-center gap-[1rem] rounded-[.8rem] border-[1px] px-[2rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium ${borderColor} ${textColor} ${className} ${bgColor}`}
    >
      {/* Pulsing dot */}
      <span className="relative">
        <span
          className={`absolute top-1/2 left-1/2 inline-flex size-[1.8rem] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-75 ${dotColor}`}
        ></span>
        <span
          className={`relative inline-flex size-[1rem] rounded-full ${dotColor}`}
        ></span>
      </span>

      {text}
    </div>
  );
};

export default SectionLabel2;
