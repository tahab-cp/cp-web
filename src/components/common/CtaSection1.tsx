import Image from "next/image";
import ctaSectionBg from "../../assets/images/cta-section-bg.png";
import userAvatar from "../../assets/images/user-avatar.svg";
import handIcon from "../../assets/images/icons/hand-icon.svg";
import flashIcon from "../../assets/images/icons/3d-flash-icon.svg";
import SectionLabel from "./SectionLabel";
import avatar from "../../assets/images/consultation-avatar.svg";
import subtractPink from "../../assets/images/icons/subtract-pink.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import Link from "next/link";
import CommonBtn3 from "./CommonBtn3";
import WaveHand from "./WaveHand";

const CtaSection1 = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-[5rem] p-[2rem] backdrop-blur-[10px] md:p-0 md:pt-[7.1rem] md:pr-[11.4rem] md:pb-[7.2rem] md:pl-[8.3rem]">
      <Image
        src={ctaSectionBg}
        alt="Cta Background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="relative z-[1] flex flex-col items-center gap-[5.3rem] lg:flex-row">
        <div className="flex flex-col items-start">
          <SectionLabel text="Contact us Today" />

          <h3 className="mt-[2rem] mb-[3rem] max-w-[50rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4rem] md:leading-[5rem] xl:max-w-[64.5rem] xl:text-[4.8rem] xl:leading-[6rem]">
            Ready to see how we can help grow your business?
          </h3>

          <p className="max-w-[55.8rem] text-[1.8rem] leading-[2.8rem] font-medium text-white md:text-[2.2rem] md:leading-[3.2rem]">
            Partner with Creative Pixels for bespoke web design that delivers
            real results.
          </p>

          <div className="mt-[4rem] flex flex-col items-start gap-[.531rem] md:flex-row md:items-center">
            <Link
              href=""
              className="relative inline-flex h-[6.4rem] items-center gap-[1rem] px-[3rem] py-[1.223rem] text-[1.6rem] font-semibold text-white md:text-[2rem]"
            >
              {/* Border layer */}
              <div className="contact-btn-gradient absolute inset-0 rounded-[6rem]"></div>

              {/* Text layer */}
              <span className="relative z-10 text-white">Get in Touch</span>
              <Image
                src={userAvatar}
                alt="User Avatar"
                width={107.69}
                height={39.54}
              />
            </Link>

            <i className="relative flex items-center justify-center text-[4rem]">
              <WaveHand />
            </i>
          </div>
        </div>

        <div className="relative flex h-[36.3rem] w-full items-center justify-center rounded-[3.2rem] bg-white lg:w-[30.8rem]">
          <div className="bg-text-primary/30 absolute bottom-[-1.5rem] left-1/2 z-[-1] h-[36.3rem] w-full -translate-x-1/2 rounded-[3.2rem] backdrop-blur-[10px] lg:w-[25.8rem]" />

          <div className="flex flex-col items-center gap-[2rem] text-center">
            <i className="absolute top-[-3rem] left-[2rem] inline-flex h-[9.827rem] w-[5.653rem] rotate-[16.79deg] items-center justify-center">
              <Image
                src={flashIcon}
                alt="Flash Icon"
                fill
                className="object-contain"
              />
            </i>

            <i className="relative flex size-[9.9rem] items-center justify-center">
              <Image
                src={avatar}
                alt="Avatar"
                width={99}
                height={99}
                priority
              />
            </i>

            <h4 className="max-w-[24rem] text-[2.6rem] leading-[3.3rem] font-semibold tracking-[-0.02em]">
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

export default CtaSection1;
