import Link from "next/link";
import subtractPink from "../../assets/images/icons/subtract-pink.svg";
import consultationAvatar from "../../assets/images/consultation-avatar.svg";
import Image from "next/image";

const ConsultationButton = () => {
  return (
    <Link href="" className="inline-flex items-center justify-center">
      <div className="relative inline-flex h-[5rem] min-w-[26.9rem] items-center justify-center rounded-[6rem] px-[3rem] py-[1rem] text-[1.8rem] font-semibold md:text-[2rem]">
        {/* Border layer */}
        <div className="gradient-border-mask absolute inset-0 rounded-[6rem]"></div>

        {/* Text layer */}
        <span className="relative z-10 text-white">Get Free Consultation</span>
      </div>

      <i className="relative -mx-[.3rem] inline-flex size-[1.8rem] items-center justify-center">
        <Image
          src={subtractPink}
          alt="Subtract Pink Icon"
          fill
          className="object-contain"
        />
      </i>

      <i className="relative inline-flex size-[5rem] items-center justify-center rounded-full">
        <Image
          src={consultationAvatar}
          alt="Consultation Avatar"
          width={50}
          height={50}
        />

        <div className="absolute top-[.1rem] right-[.1rem] size-[.9rem] rounded-full bg-[#7EE972] outline-[3.5px] outline-[#25014A]" />
      </i>
    </Link>
  );
};

export default ConsultationButton;
