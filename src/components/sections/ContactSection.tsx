import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../common/ContactForm";
import CtaSection2 from "../common/CtaSection2";
import bgLine from "../../assets/images/line-stroke-02.svg";
import Image from "next/image";
import TextMarquee from "../common/TextMarquee";

const ContactSection = () => {
  return (
    <section className="relative py-[10rem]">
      <div className="relative z-[3] mx-auto flex max-w-[112.3rem] flex-col items-center">
        <SectionTitle label="Ready to Start Working With Us?" />

        <div className="contact-details-bg mt-[4.5rem] mb-[3.7rem] flex w-full items-center justify-between px-[4rem] py-[3.5rem]">
          <div className="flex flex-col">
            <h6 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] uppercase">
              GIVE US A CALL
            </h6>

            <Link
              href=""
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
            >
              0161 820 2667
            </Link>
          </div>

          <div className="flex flex-col">
            <h6 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] uppercase">
              EMAIL US
            </h6>

            <Link
              href=""
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FF37B3]"
            >
              hello@cp.agency
            </Link>
          </div>

          <div className="flex flex-col">
            <h6 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] uppercase">
              LOCATION
            </h6>

            <Link
              href=""
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#3078FF]"
            >
              Manchester, M12 6PN
            </Link>
          </div>
        </div>

        <ContactForm />
      </div>

      <div className="relative z-[3] mt-[4rem] mb-[6.7rem]">
        <TextMarquee />
      </div>

      <div className="relative z-[3] mx-auto max-w-[120.3rem]">
        <CtaSection2 />
      </div>

      <div className="absolute bottom-[-18rem] left-0 z-[2] w-full">
        <Image
          src={bgLine}
          alt="Decorative line"
          width={1488}
          height={316}
          className="pointer-events-none h-auto w-full select-none"
        />
      </div>
    </section>
  );
};

export default ContactSection;
