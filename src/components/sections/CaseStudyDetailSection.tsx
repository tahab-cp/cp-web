import Link from "next/link";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import Image from "next/image";
import SectionDescription from "../common/SectionDescription";
import LineStroke12 from "../decorativeElements/LineStroke12";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn3 from "../common/CommonBtn3";
import LineStroke22 from "../decorativeElements/LineStroke22";
import LineStroke23 from "../decorativeElements/LineStroke23";
import LineStroke24 from "../decorativeElements/LineStroke24";

const CaseStudyDetailSection = () => {
  return (
    <section className="relative px-[3rem] pt-[15rem] pb-[5rem] md:pt-[20.6rem] xl:px-[0rem] xl:pb-[9.8rem]">
      <div className="absolute inset-0 z-[0]">
        <LineStroke22 className="absolute top-[15.4rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="absolute inset-0 z-[0]">
        <LineStroke23 className="absolute top-[552rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[1] mx-auto max-w-[120.3rem]">
        <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
          <div className="inline-flex rotate-[2deg]">
            <SectionLabel2 text="Case Study" />
          </div>

          <div className="mt-[1.5rem] mb-[2.5rem]">
            <SectionTitle label="Games Art Brain" />
          </div>

          <CommonBtn3 label="Visit Live Site" href="" />

          <div className="mt-[5.5rem] mb-[5rem] grid w-full grid-cols-1 items-center gap-[4rem] md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-[.7rem] text-center xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#FFC300] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                Industry
              </span>

              <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                Training/Licensing
              </span>
            </div>

            <div className="flex flex-col items-center gap-[.7rem] text-center xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#FF37B3] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                Services
              </span>

              <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                Health & safety training courses
              </span>
            </div>

            <div className="flex flex-col items-center gap-[.7rem] text-center xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#F14A58] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                Timeline
              </span>

              <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                45 Days
              </span>
            </div>

            <div className="flex flex-col items-center gap-[.8rem] text-center xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#007BFF] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                Tools Used
              </span>

              <div className="flex items-center gap-[3rem]">
                <div className="inline-flex items-center justify-center">
                  <Image
                    src="/images/figma-logo.png"
                    alt="Figma Logo"
                    width={74}
                    height={22}
                    className="h-[2.2rem] w-[7.4rem]"
                    priority
                  />
                </div>

                <div className="inline-flex items-center justify-center">
                  <Image
                    src="/images/wordpress-logo.png"
                    alt="Wordpress Logo"
                    width={114}
                    height={22}
                    className="h-[2.2rem] w-[11.4rem]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-[2rem] xl:h-[71.6rem]">
          <Image
            src="/images/brain-studio-case-study.png"
            alt="Case Study Image"
            height={716}
            width={1204}
            priority
            className="size-full object-cover object-top"
          />
        </div>

        <div className="my-[3rem] flex flex-col items-center gap-[2rem] text-center md:my-[5rem] md:mt-[5.8rem] xl:items-start xl:text-left">
          <SectionTitle label="How we made a difference" />

          <SectionDescription label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis aliquet pulvinar. Nunc viverra faucibus diam, ac ultrices ante bibendum vitae." />
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-[4rem] text-center md:grid-cols-3 xl:justify-items-start xl:text-left">
          <div className="flex flex-col">
            <h3 className="text-[6rem] leading-[8rem] font-normal tracking-[-0.02em] text-[#44B276] md:text-[8rem] md:leading-[10rem] lg:text-[11rem] lg:leading-[13rem]">
              3.2x
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              Increase in page speeds
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[6rem] leading-[8rem] font-normal tracking-[-0.02em] text-[#007BFF] md:text-[8rem] md:leading-[10rem] lg:text-[11rem] lg:leading-[13rem]">
              29%
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              Higher Click Through Rates (CTR&apos;s)
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[6rem] leading-[8rem] font-normal tracking-[-0.02em] text-[#FFC300] md:text-[8rem] md:leading-[10rem] lg:text-[11rem] lg:leading-[13rem]">
              2.7%
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              Decrease in drop-off rates
            </span>
          </div>
        </div>

        <div className="my-[5rem] flex flex-col items-center text-center lg:my-[9rem] xl:items-start xl:text-left">
          <h3 className="mb-[3rem] text-[2.5rem] leading-[3.5rem] font-semibold tracking-[-0.02em] md:text-[4rem] md:leading-[5rem] lg:text-[4.8rem] lg:leading-[6rem]">
            <span className="text-[#FF37B3]">Creative Pixels</span> focuses on
            being a design-driven agency through bespoke design and development.
          </h3>

          <p className="text-[2rem] leading-[3.5rem] font-medium tracking-[-1px] md:text-[2.6rem] md:leading-[4.4rem]">
            The United Nations Children&apos;s Fund (Unicef) is a United Nations
            (UN) agency headquartered in New York City that provides
            humanitarian and developmental assistance to children and mothers in
            developing countries. It is a member of the United Nations
            Development Group. We were tasked by{" "}
            <span className="text-[#007BFF]">UNICEF UK</span> to design and
            create the programme for Unicef 2018 Halloween Ball, an annual event
            which has high profile celebrities and guests whom help Unicef raise
            money towards their cause of supporting children around the world.
          </p>

          <div className="mt-[4rem]">
            <Link href="" className="inline-flex items-center">
              <span className="inline-flex h-[5rem] min-w-[24.5rem] items-center justify-center rounded-[6rem] border border-[#141414] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
                What Howard Says
              </span>
              <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
                <Image
                  src="/images/icons/subtract-dark.svg"
                  alt="Subtract Light Icon"
                  width={18}
                  height={18}
                />
              </i>
              <i className="inline-flex size-[5rem] items-center justify-center rounded-full border border-[#141414] bg-[#141414]">
                <Image
                  src="/images/icons/play-yellow-icon.svg"
                  alt="Arrow Right Icon"
                  width={19}
                  height={14}
                  className="h-[1.4rem] w-[1.9rem]"
                />
              </i>
            </Link>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-[1rem] md:grid-cols-2 lg:gap-[3.3rem]">
          <div className="w-full overflow-hidden rounded-[2rem] lg:h-[43.9rem]">
            <Image
              src="/images/brain-studio-card-img-01.png"
              alt="Case Study Image"
              width={585}
              height={439}
              priority
              className="size-full object-cover"
            />
          </div>

          <div className="w-full overflow-hidden rounded-[2rem] lg:h-[43.9rem]">
            <Image
              src="/images/brain-studio-card-img-02.png"
              alt="Case Study Image"
              width={585}
              height={439}
              priority
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="mt-[2rem] mb-[5rem] h-[25rem] w-full overflow-hidden rounded-[2rem] md:h-[40rem] lg:mt-[3.3rem] lg:mb-[8rem] lg:h-[61.2rem]">
          <Image
            src="/images/brain-studio-card-img-03.png"
            alt="Case Study Image"
            width={1203}
            height={612}
            priority
            className="size-full object-cover"
          />
        </div>

        <div className="h-[25rem] w-full overflow-hidden rounded-[2rem] md:h-[40rem] lg:h-[56.5rem]">
          <Image
            src="/images/brain-studio-card-img-04.png"
            alt="Case Study Image"
            width={1203}
            height={565}
            priority
            className="size-full object-cover"
          />
        </div>

        <div className="my-[5rem] flex flex-col gap-[3.3rem] lg:my-[8rem] xl:flex-row">
          <div className="relative flex h-[30rem] items-center justify-center overflow-hidden rounded-[1.2rem] bg-[#FFC300] px-[4rem] py-[3rem] text-center xl:block xl:h-[53.3rem] xl:min-w-[37.9rem] xl:text-left">
            <div className="absolute inset-0 z-[0]">
              <LineStroke24 className="absolute top-[10rem] left-1/2 w-full -translate-x-1/2 xl:top-[32.3rem]" />
            </div>

            <div className="relative z-[1]">
              <div className="inline-flex items-center justify-center">
                <Image
                  src="/images/icons/thinking-icon.svg"
                  alt="Thinking Icon"
                  width={80}
                  height={80}
                  className="size-[6rem] md:size-[8rem]"
                  priority
                />
              </div>

              <h3 className="mt-[2rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem] xl:mt-[4.65rem]">
                Design Thinking Process
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[3.3rem] md:grid-cols-2">
            <div className="case-study-detail-gradient-card flex flex-col items-center justify-center text-center xl:items-start xl:text-left">
              <h4 className="mb-[1.5rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]">
                Define
              </h4>

              <ul className="flex flex-wrap justify-center gap-[1.2rem] xl:justify-start">
                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -Design Strategy
                </li>

                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -User Persona
                </li>

                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -Empathy Map
                </li>

                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -User Journey
                </li>
              </ul>
            </div>

            <div className="case-study-detail-gradient-card flex flex-col items-center justify-center text-center xl:items-start xl:text-left">
              <h4 className="mb-[1.5rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]">
                Ideate
              </h4>

              <ul className="flex flex-wrap justify-center gap-[1.2rem] xl:justify-start">
                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -Brainstorming
                </li>

                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -User Flow
                </li>

                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -Card Sorting
                </li>

                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -Info. Architecture
                </li>
              </ul>
            </div>

            <div className="case-study-detail-gradient-card flex flex-col items-center justify-center text-center xl:items-start xl:text-left">
              <h4 className="mb-[1.5rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]">
                Design
              </h4>

              <ul className="flex flex-wrap justify-center gap-[1.2rem] xl:justify-start">
                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -Low fi. Wireframes
                </li>

                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -Color Scheme
                </li>

                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -High fi. Wireframes
                </li>

                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -Prototype
                </li>
              </ul>
            </div>

            <div className="case-study-detail-gradient-card flex flex-col items-center justify-center text-center xl:items-start xl:text-left">
              <h4 className="mb-[1.5rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]">
                Test
              </h4>

              <ul className="flex flex-wrap justify-center gap-[1.2rem] xl:justify-start">
                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -Usability Testing
                </li>

                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -A/B Testing
                </li>

                <li className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium">
                  -A/B Testing
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[3.3rem] xl:grid-cols-2">
          <div className="case-study-detail-gradient-card-02 flex flex-col justify-center gap-[4.1rem]">
            <h3 className="text-center text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem] xl:text-left">
              Work Flow
            </h3>

            <div className="flex flex-col gap-[2rem]">
              <div className="flex items-center justify-between">
                <span className="text-[1.4rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  Research Phase
                </span>

                <span className="text-[1.4rem] leading-[2.4rem] font-normal text-[#ED910C] md:text-[1.8rem] md:leading-[2.6rem]">
                  2 Days*
                </span>
              </div>

              <hr className="h-[1px] w-full border-0 bg-black/25" />

              <div className="flex items-center justify-between">
                <span className="text-[1.4rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  UI/UX{" "}
                  <span className="text-text-primary/70">
                    (Structure, Style Guide)
                  </span>
                </span>

                <span className="text-[1.4rem] leading-[2.4rem] font-normal text-[#ED910C] md:text-[1.8rem] md:leading-[2.6rem]">
                  2 Weeks*
                </span>
              </div>

              <hr className="h-[1px] w-full border-0 bg-black/25" />

              <div className="flex items-center justify-between">
                <span className="text-[1.4rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  WooCommerce Development{" "}
                  <span className="text-text-primary/70">(WordPress)</span>
                </span>

                <span className="text-[1.4rem] leading-[2.4rem] font-normal text-[#ED910C] md:text-[1.8rem] md:leading-[2.6rem]">
                  1 Month*
                </span>
              </div>

              <hr className="h-[1px] w-full border-0 bg-black/25" />

              <div className="flex items-center justify-between">
                <span className="text-[1.4rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  Testing
                </span>

                <span className="text-[1.4rem] leading-[2.4rem] font-normal text-[#ED910C] md:text-[1.8rem] md:leading-[2.6rem]">
                  1 Week*
                </span>
              </div>

              <hr className="h-[1px] w-full border-0 bg-black/25" />

              <div className="flex items-center justify-between">
                <span className="text-[1.4rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  Research Phase
                </span>

                <span className="text-[1.4rem] leading-[2.4rem] font-normal text-[#ED910C] md:text-[1.8rem] md:leading-[2.6rem]">
                  2 Weekss*
                </span>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-[2rem] md:h-[52.4rem]">
            <Image
              src="/images/brain-studio-card-img-05.png"
              alt="Case Study Image"
              width={585}
              height={524}
              priority
              className="size-full object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-[5rem] h-[25rem] w-full overflow-hidden rounded-[2rem] md:h-[40rem] lg:mt-[9rem] lg:h-[61.2rem]">
          <Image
            src="/images/brain-studio-card-img-06.png"
            alt="Case Study Image"
            width={1203}
            height={612}
            priority
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetailSection;
