import Image from "next/image";
import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import phoneYellowIcon from "../../assets/images/icons/phone-yellow-icon.svg";
import locationPinkIcon from "../../assets/images/icons/location-pink-icon.svg";
import breifcaseRedIcon from "../../assets/images/icons/breifcase-red-icon.svg";
import arrowRightDark from "../../assets/images/icons/arrow-right-dark.svg";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../common/ContactForm";
import TextMarquee from "../common/TextMarquee";
import CtaSection2 from "../common/CtaSection2";
import bgLine from "../../assets/images/line-stroke-08.svg";
import bgLine2 from "../../assets/images/line-stroke-05.svg";

const ContactUsSection = () => {
  return (
    <section className="relative pt-[20.6rem] pb-[10rem]">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <Image
          src={bgLine}
          alt="Background line"
          width={1440}
          height={531.42}
          className="absolute top-[15.4rem] left-1/2 -translate-x-1/2 opacity-10"
          priority
        />
      </div>

      <div className="absolute inset-0 z-[1]">
        <Image
          src={bgLine2}
          alt="Background line"
          width={1488}
          height={316}
          className="absolute top-[211.2rem] left-1/2 -translate-x-1/2"
          priority
        />
      </div>

      <div className="mx-auto flex max-w-[120.3rem] flex-col items-start">
        <SectionLabel
          text="Contact Us"
          textColor="text-text-primary"
          borderColor="border-text-primary"
        />

        <h2 className="my-[2rem] text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em]">
          Get in Touch with us!
        </h2>

        <SectionDescription label="Reach out to us to discuss business opportunities or simply to say hello. " />

        <div className="mt-[4rem] grid w-full grid-cols-3 gap-[3.3rem]">
          <div className="contact-us-card">
            <h3 className="flex items-center gap-[1rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]">
              <div className="relative size-[1.8rem]">
                <Image
                  src={phoneYellowIcon}
                  alt="Phone Icon"
                  width={18}
                  height={18}
                  priority
                />
              </div>
              <span>Contact</span>
            </h3>

            <ul className="mt-[1.7rem] flex flex-col gap-[.5rem]">
              <li className="flex items-center justify-between">
                <div className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.8rem] leading-[2.6rem] font-normal">
                  <span>Phone:</span>{" "}
                  <Link href="" className="hover:underline">
                    0161 820 2667
                  </Link>
                </div>

                <Image
                  src={arrowRightDark}
                  alt="Arrow Right Icon"
                  width={14.14}
                  height={14.14}
                  priority
                  className="opacity-40"
                />
              </li>

              <li className="flex items-center justify-between">
                <div className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.8rem] leading-[2.6rem] font-normal">
                  <span>Email:</span>{" "}
                  <Link href="" className="hover:underline">
                    hello@cp.agency
                  </Link>
                </div>

                <Image
                  src={arrowRightDark}
                  alt="Arrow Right Icon"
                  width={14.14}
                  height={14.14}
                  priority
                  className="opacity-40"
                />
              </li>
            </ul>
          </div>

          <div className="contact-us-card">
            <h3 className="flex items-center gap-[1rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FF37B3]">
              <div className="relative h-[2.041rem] w-[1.6rem]">
                <Image
                  src={locationPinkIcon}
                  alt="Phone Icon"
                  width={16}
                  height={20.41}
                  priority
                />
              </div>
              <span>Location</span>
            </h3>

            <ul className="mt-[1.7rem] flex flex-col gap-[.5rem]">
              <li className="flex items-start justify-between">
                <p className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.8rem] leading-[2.6rem] font-normal">
                  Location: UseSpace, Paddock Street, Manchester, M12 6PN
                </p>

                <Image
                  src={arrowRightDark}
                  alt="Arrow Right Icon"
                  width={14.14}
                  height={14.14}
                  priority
                  className="opacity-40"
                />
              </li>
            </ul>
          </div>

          <div className="contact-us-card">
            <h3 className="flex items-center gap-[1rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#F14A58]">
              <div className="relative h-[2rem] w-[2.4rem]">
                <Image
                  src={breifcaseRedIcon}
                  alt="Phone Icon"
                  width={24}
                  height={20}
                  priority
                />
              </div>
              <span>Business Hours</span>
            </h3>

            <ul className="mt-[1.7rem] flex flex-col gap-[.5rem]">
              <li className="flex items-center justify-between">
                <span className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.8rem] leading-[2.6rem] font-normal">
                  Monday-Friday:
                </span>

                <span className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.8rem] leading-[2.6rem] font-normal">
                  09:am-05:00pm
                </span>
              </li>

              <li className="flex items-center justify-between">
                <span className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.8rem] leading-[2.6rem] font-normal">
                  Saturday-Sunday:
                </span>

                <span className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.8rem] leading-[2.6rem] font-normal">
                  Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[8.1rem] flex max-w-[122.3rem] flex-col gap-[4.8rem]">
        <SectionTitle label="Ready to Start Working With Us?" />

        <ContactForm />
      </div>

      <div className="mt-[7.8rem] mb-[6.7rem]">
        <TextMarquee />
      </div>

      <div className="relative z-[1] mx-auto max-w-[120.3rem]">
        <CtaSection2 />
      </div>
    </section>
  );
};

export default ContactUsSection;
