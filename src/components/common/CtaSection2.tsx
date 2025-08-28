import Image from "next/image";
import ctaSectionBg from "../../assets/images/cta-section-bg.png";
import flashIcon from "../../assets/images/icons/3d-flash-icon.svg";
import SectionLabel from "./SectionLabel";
import avatar from "../../assets/images/consultation-avatar.svg";
import subtractPink from "../../assets/images/icons/subtract-pink.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import contactArrow from "../../assets/images/icons/contact-arrow.svg";
import Link from "next/link";
import CommonBtn3 from "./CommonBtn3";

const CtaSection2 = () => {
  return (
    <div className="relative w-full rounded-[5rem] p-[2rem] backdrop-blur-[10px] md:p-[0rem] md:px-[7rem] md:pt-[8.1rem] md:pb-[5.1rem]">
      <Image
        src={ctaSectionBg}
        alt="Cta Background"
        fill
        className="rounded-[5rem] object-cover object-center"
        priority
      />

      <i className="absolute top-[-4.3rem] right-0 inline-flex size-[8rem] items-center justify-center">
        <Image src={contactArrow} alt="Contact Arrow" width={80} height={80} />
      </i>

      <div className="relative z-[1] flex flex-col items-center gap-[8rem] lg:flex-row lg:gap-[3.4rem]">
        <div className="flex flex-col items-start">
          <SectionLabel text="Contact us Today" />

          <h3 className="mt-[2rem] max-w-[72.1rem] text-[3.2rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
            Book a 15-minute call and see how we can help you.
          </h3>
        </div>

        <div className="relative flex h-[26.1rem] w-full items-center justify-center rounded-[3.2rem] bg-white lg:w-[30.8rem]">
          <div className="bg-text-primary/30 absolute bottom-[-1.5rem] left-1/2 z-[-1] h-[26.4rem] w-full -translate-x-1/2 rounded-[3.2rem] backdrop-blur-[10px] md:w-[25.8rem]" />

          <div className="flex flex-col items-center gap-[2rem] text-center">
            <i className="absolute top-[-5.3rem] right-[1.794rem] inline-flex h-[9.827rem] w-[5.653rem] rotate-[16.79deg] items-center justify-center">
              <Image
                src={flashIcon}
                alt="Flash Icon"
                fill
                className="object-contain"
              />
            </i>

            <i className="absolute top-[-5.3rem] flex size-[9.9rem] items-center justify-center">
              <Image
                src={avatar}
                alt="Avatar"
                width={99}
                height={99}
                priority
              />
            </i>

            <h4 className="mt-[2.5rem] max-w-[24rem] text-[2.6rem] leading-[3.3rem] font-semibold tracking-[-0.02em]">
              Book a FREE strategy call with Hassan.
            </h4>

            <CommonBtn3
              href="/"
              label="Book a Call"
              bgColor="#FF37B3"
              textColor="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection2;
