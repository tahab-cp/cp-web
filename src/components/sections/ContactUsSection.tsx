import Image from "next/image";
import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../common/ContactForm";
import TextMarquee from "../common/TextMarquee";
import CtaSection2 from "../common/CtaSection2";
import LineStroke25 from "../decorativeElements/LineStroke25";
import SectionLabel2 from "../common/SectionLabel2";

const ContactUsSection = () => {
  return (
    <section className="relative px-[3rem] pt-[18rem] pb-[5rem] md:pt-[20.6rem] xl:px-[0rem] xl:pb-[10rem]">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke25 className="absolute top-[15.4rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="mx-auto flex max-w-[120.3rem] flex-col items-center xl:items-start">
        <div className="text-center xl:text-left">
          <div className="inline-flex rotate-[2deg]">
            <SectionLabel2 text="Contact Us" />
          </div>

          <h2 className="my-[1rem] text-[3rem] leading-[5rem] font-semibold tracking-[-0.03em] md:my-[2rem] md:text-[7rem] md:leading-[8.4rem] md:font-bold">
            Get in Touch with us!
          </h2>

          <SectionDescription label="Reach out to us to discuss business opportunities or simply to say hello. " />
        </div>

        <div className="mt-[4rem] grid w-full grid-cols-1 gap-[3.3rem] md:grid-cols-2 xl:grid-cols-3">
          <div className="contact-us-card">
            <h3 className="flex items-center gap-[1rem] text-[2.8rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#FFC300] md:text-[3.4rem] md:leading-[4.8rem]">
              <div className="relative size-[1.8rem]">
                <Image
                  src="/images/icons/phone-yellow-icon.svg"
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
                <div className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.6rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  <span>Phone:</span>{" "}
                  <Link href="" className="hover:underline">
                    0161 820 2667
                  </Link>
                </div>

                <Image
                  src="/images/icons/arrow-right-dark.svg"
                  alt="Arrow Right Icon"
                  width={14.14}
                  height={14.14}
                  priority
                  className="opacity-40"
                />
              </li>

              <li className="flex items-center justify-between">
                <div className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.6rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  <span>Email:</span>{" "}
                  <Link href="" className="hover:underline">
                    hello@cp.agency
                  </Link>
                </div>

                <Image
                  src="/images/icons/arrow-right-dark.svg"
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
            <h3 className="flex items-center gap-[1rem] text-[2.8rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#FF37B3] md:text-[3.4rem] md:leading-[4.8rem]">
              <div className="relative h-[2.041rem] w-[1.6rem]">
                <Image
                  src="/images/icons/location-pink-icon.svg"
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
                <p className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.6rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  Location: UseSpace, Paddock Street, Manchester, M12 6PN
                </p>

                <Image
                  src="/images/icons/arrow-right-dark.svg"
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
            <h3 className="flex items-center gap-[1rem] text-[2.8rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#F14A58] md:text-[3.4rem] md:leading-[4.8rem]">
              <div className="relative h-[2rem] w-[2.4rem]">
                <Image
                  src="/images/icons/breifcase-red-icon.svg"
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
                <span className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.6rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  Monday-Friday:
                </span>

                <span className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.6rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  09:am-05:00pm
                </span>
              </li>

              <li className="flex items-center justify-between">
                <span className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.6rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  Saturday-Sunday:
                </span>

                <span className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.6rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[5rem] flex max-w-[122.3rem] flex-col gap-[3rem] md:gap-[4.8rem] lg:mt-[8.1rem]">
        <div className="text-center xl:text-left">
          <SectionTitle label="Ready to Start Working With Us?" />
        </div>

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
