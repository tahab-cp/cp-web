import Image from "next/image";
import ctaSectionBg from "../../assets/images/cta-section-bg.png";
import flashIcon from "../../assets/images/icons/3d-flash-icon.svg";
import SectionLabel from "./SectionLabel";
import consultationAvatar from "../../assets/images/consultation-avatar.svg";
import subtractPink from "../../assets/images/icons/subtract-pink.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import contactArrow from "../../assets/images/icons/contact-arrow.svg";
import Link from "next/link";

const CtaSection2 = () => {
  return (
    <div className="relative w-full rounded-[5rem] px-[7rem] pt-[8.1rem] pb-[5.1rem] backdrop-blur-[10px]">
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

      <div className="relative z-[1] flex items-center gap-[3.4rem]">
        <div className="flex flex-col items-start">
          <SectionLabel text="Contact us Today" />

          <h3 className="mt-[2rem] max-w-[72.1rem] text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em] text-white">
            Book a 15-minute call and see how we can help you.
          </h3>
        </div>

        <div className="relative flex h-[26.1rem] w-[30.8rem] items-center justify-center rounded-[3.2rem] bg-white">
          <div className="bg-text-primary/30 absolute bottom-[-1.5rem] left-1/2 z-[-1] h-[26.4rem] w-[25.8rem] -translate-x-1/2 rounded-[3.2rem] backdrop-blur-[10px]" />

          <div className="flex flex-col items-center gap-[2rem] text-center">
            <i className="absolute top-[-5.1rem] right-[1.794rem] inline-flex h-[9.827rem] w-[5.653rem] items-center justify-center">
              <Image
                src={flashIcon}
                alt="Flash Icon"
                fill
                className="object-contain"
              />
            </i>

            <i className="absolute top-[-5.3rem] inline-flex size-[10.5rem] items-center justify-center rounded-full">
              <Image
                src={consultationAvatar}
                alt="Consultation Avatar"
                width={105}
                height={105}
              />

              <div className="absolute top-[0.177rem] right-[0.177rem] size-[2rem] rounded-full bg-[#7EE972] outline-[4px] outline-[#25014A]" />
            </i>

            <h4 className="mt-[2.5rem] max-w-[24rem] text-[2.6rem] leading-[3.3rem] font-semibold tracking-[-0.02em]">
              Book a FREE strategy call with Hassan.
            </h4>

            <Link href="" className="inline-flex items-center">
              <span className="inline-flex h-[5rem] min-w-[16.6rem] items-center justify-center rounded-[6rem] border border-[#FF37B3] bg-[#FF37B3] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
                Book a Call
              </span>
              <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
                <Image
                  src={subtractPink}
                  alt="Subtract Light Icon"
                  width={18}
                  height={18}
                />
              </i>
              <i className="inline-flex size-[5rem] items-center justify-center rounded-full border border-[#FF37B3] bg-[#FF37B3]">
                <Image
                  src={arrowRight}
                  alt="Arrow Right Icon"
                  width={14}
                  height={14}
                />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection2;
