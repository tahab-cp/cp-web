import Link from "next/link";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import subtractDark from "../../assets/images/icons/subtract-dark.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import Image from "next/image";
import figmaLogo from "../../assets/images/figma-logo.png";
import wordpressLogo from "../../assets/images/wordpress-logo.png";
import brainStudioImg from "../../assets/images/brain-studio-case-study.png";
import SectionDescription from "../common/SectionDescription";
import playYellowIcon from "../../assets/images/icons/play-yellow-icon.svg";
import brainStudioCardImg01 from "../../assets/images/brain-studio-card-img-01.png";
import brainStudioCardImg02 from "../../assets/images/brain-studio-card-img-02.png";
import brainStudioCardImg03 from "../../assets/images/brain-studio-card-img-03.png";
import brainStudioCardImg04 from "../../assets/images/brain-studio-card-img-04.png";
import brainStudioCardImg05 from "../../assets/images/brain-studio-card-img-05.png";
import brainStudioCardImg06 from "../../assets/images/brain-studio-card-img-06.png";
import thinkingIcon from "../../assets/images/icons/thinking-icon.svg";
import LineStroke12 from "../decorativeElements/LineStroke12";

const CaseStudyDetailSection = () => {
  return (
    <section className="pt-[20.6rem] pb-[9.8rem]">
      <div className="mx-auto max-w-[120.3rem]">
        <SectionLabel
          text="Case Study"
          textColor="text-text-primary"
          borderColor="border-text-primary"
        />

        <div className="mt-[1.5rem] mb-[2.5rem]">
          <SectionTitle label="Games Art Brain" />
        </div>

        <Link href="" className="inline-flex items-center">
          <span className="inline-flex h-[5.6rem] min-w-[17.8rem] items-center justify-center rounded-[6rem] border border-[#141414] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
            Visit Live Site
          </span>
          <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
            <Image
              src={subtractDark}
              alt="Subtract Light Icon"
              width={18}
              height={18}
            />
          </i>
          <i className="inline-flex size-[5.6rem] items-center justify-center rounded-full border border-[#141414] bg-[#141414]">
            <Image
              src={arrowRight}
              alt="Arrow Right Icon"
              width={14}
              height={14}
            />
          </i>
        </Link>

        <div className="mt-[5.5rem] mb-[5rem] flex items-center">
          <div className="flex flex-col items-start gap-[.7rem]">
            <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#FFC300] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
              Industry
            </span>

            <span className="text-[1.8rem] leading-[2.6rem] font-normal">
              Training/Licensing
            </span>
          </div>

          <div className="mr-[5rem] ml-[10rem] h-[5.5rem] w-[1px] bg-black/20" />

          <div className="flex flex-col items-start gap-[.7rem]">
            <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#FF37B3] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
              Services
            </span>

            <span className="text-[1.8rem] leading-[2.6rem] font-normal">
              Health & safety training courses
            </span>
          </div>

          <div className="mr-[5rem] ml-[10rem] h-[5.5rem] w-[1px] bg-black/20" />

          <div className="flex flex-col items-start gap-[.7rem]">
            <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#F14A58] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
              Timeline
            </span>

            <span className="text-[1.8rem] leading-[2.6rem] font-normal">
              45 Days
            </span>
          </div>

          <div className="mr-[5rem] ml-[10rem] h-[5.5rem] w-[1px] bg-black/20" />

          <div className="flex flex-col items-start gap-[.8rem]">
            <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#007BFF] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
              Tools Used
            </span>

            <div className="flex items-center gap-[3rem]">
              <div className="inline-flex items-center justify-center">
                <Image
                  src={figmaLogo}
                  alt="Figma Logo"
                  width={74}
                  height={22}
                  className="h-[2.2rem] w-[7.4rem]"
                  priority
                />
              </div>

              <div className="inline-flex items-center justify-center">
                <Image
                  src={wordpressLogo}
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

        <div className="relative h-[71.6rem] w-full overflow-hidden rounded-[2rem]">
          <Image
            src={brainStudioImg}
            alt="Case Study Image"
            height={716}
            width={1204}
            priority
          />
        </div>

        <div className="mt-[5.8rem] mb-[2.1rem]">
          <SectionTitle label="How we made a difference" />
        </div>

        <SectionDescription label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis aliquet pulvinar. Nunc viverra faucibus diam, ac ultrices ante bibendum vitae." />

        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <h3 className="text-[11rem] leading-[13rem] font-normal tracking-[-0.02em] text-[#44B276]">
              3.2x
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              Increase in page speeds
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[11rem] leading-[13rem] font-normal tracking-[-0.02em] text-[#007BFF]">
              29%
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              Higher Click Through Rates (CTR&apos;s)
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[11rem] leading-[13rem] font-normal tracking-[-0.02em] text-[#FFC300]">
              2.7%
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              Decrease in drop-off rates
            </span>
          </div>
        </div>

        <h3 className="mt-[8.6rem] mb-[3rem] text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em]">
          <span className="text-[#FF37B3]">Creative Pixels</span> focuses on
          being a design-driven agency through bespoke design and development.
        </h3>

        <p className="text-[2.6rem] leading-[4.4rem] font-medium tracking-[-1px]">
          The United Nations Children&apos;s Fund (Unicef) is a United Nations
          (UN) agency headquartered in New York City that provides humanitarian
          and developmental assistance to children and mothers in developing
          countries. It is a member of the United Nations Development Group. We
          were tasked by <span className="text-[#007BFF]">UNICEF UK</span> to
          design and create the programme for Unicef 2018 Halloween Ball, an
          annual event which has high profile celebrities and guests whom help
          Unicef raise money towards their cause of supporting children around
          the world.
        </p>

        <div className="mt-[4rem] mb-[9rem]">
          <Link href="" className="inline-flex items-center">
            <span className="inline-flex h-[5rem] min-w-[24.5rem] items-center justify-center rounded-[6rem] border border-[#141414] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
              What Howard Says
            </span>
            <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
              <Image
                src={subtractDark}
                alt="Subtract Light Icon"
                width={18}
                height={18}
              />
            </i>
            <i className="inline-flex size-[5rem] items-center justify-center rounded-full border border-[#141414] bg-[#141414]">
              <Image
                src={playYellowIcon}
                alt="Arrow Right Icon"
                width={19}
                height={14}
                className="h-[1.4rem] w-[1.9rem]"
              />
            </i>
          </Link>
        </div>

        <div className="grid w-full grid-cols-2 gap-[3.3rem]">
          <div className="h-[43.9rem] w-full overflow-hidden rounded-[2rem]">
            <Image
              src={brainStudioCardImg01}
              alt="Case Study Image"
              width={585}
              height={439}
              priority
            />
          </div>

          <div className="h-[43.9rem] w-full overflow-hidden rounded-[2rem]">
            <Image
              src={brainStudioCardImg02}
              alt="Case Study Image"
              width={585}
              height={439}
              priority
            />
          </div>
        </div>

        <div className="mt-[3.3rem] mb-[8rem] h-[61.2rem] w-full overflow-hidden rounded-[2rem]">
          <Image
            src={brainStudioCardImg03}
            alt="Case Study Image"
            width={1203}
            height={612}
            priority
          />
        </div>

        <div className="h-[56.5rem] w-full overflow-hidden rounded-[2rem]">
          <Image
            src={brainStudioCardImg04}
            alt="Case Study Image"
            width={1203}
            height={565}
            priority
          />
        </div>

        <div className="my-[8rem] flex gap-[3.3rem]">
          <div className="relative h-[53.3rem] min-w-[37.9rem] overflow-hidden rounded-[1.2rem] bg-[#FFC300] px-[4rem] py-[3rem]">
            {/* Bg Element */}
            <div className="absolute top-[32.3rem] left-1/2 h-[172] w-[379] -translate-x-1/2">
              <LineStroke12 />
            </div>

            <div className="inline-flex items-center justify-center">
              <Image
                src={thinkingIcon}
                alt="Thinking Icon"
                width={80}
                height={80}
                className="h-[8rem] w-[8rem]"
                priority
              />
            </div>

            <h3 className="mt-[4.65rem] text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em]">
              Design Thinking Process
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-[3.3rem]">
            <div className="case-study-detail-gradient-card">
              <h4 className="mb-[1.5rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]">
                Define
              </h4>

              <ul className="flex flex-wrap gap-[1.2rem]">
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

            <div className="case-study-detail-gradient-card">
              <h4 className="mb-[1.5rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]">
                Ideate
              </h4>

              <ul className="flex flex-wrap gap-[1.2rem]">
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

            <div className="case-study-detail-gradient-card">
              <h4 className="mb-[1.5rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]">
                Design
              </h4>

              <ul className="flex flex-wrap gap-[1.2rem]">
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

            <div className="case-study-detail-gradient-card">
              <h4 className="mb-[1.5rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]">
                Test
              </h4>

              <ul className="flex flex-wrap gap-[1.2rem]">
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

        <div className="grid grid-cols-2 gap-[3.3rem]">
          <div className="case-study-detail-gradient-card-02 flex flex-col gap-[4.1rem]">
            <h3 className="text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em]">
              Work Flow
            </h3>

            <div className="flex flex-col gap-[2rem]">
              <div className="flex items-center justify-between">
                <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                  Research Phase
                </span>

                <span className="text-[1.8rem] leading-[2.6rem] font-normal text-[#ED910C]">
                  2 Days*
                </span>
              </div>

              <hr className="h-[1px] w-full border-0 bg-black/25" />

              <div className="flex items-center justify-between">
                <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                  UI/UX{" "}
                  <span className="text-text-primary/70">
                    (Structure, Style Guide)
                  </span>
                </span>

                <span className="text-[1.8rem] leading-[2.6rem] font-normal text-[#ED910C]">
                  2 Weeks*
                </span>
              </div>

              <hr className="h-[1px] w-full border-0 bg-black/25" />

              <div className="flex items-center justify-between">
                <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                  WooCommerce Development{" "}
                  <span className="text-text-primary/70">(WordPress)</span>
                </span>

                <span className="text-[1.8rem] leading-[2.6rem] font-normal text-[#ED910C]">
                  1 Month*
                </span>
              </div>

              <hr className="h-[1px] w-full border-0 bg-black/25" />

              <div className="flex items-center justify-between">
                <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                  Testing
                </span>

                <span className="text-[1.8rem] leading-[2.6rem] font-normal text-[#ED910C]">
                  1 Week*
                </span>
              </div>

              <hr className="h-[1px] w-full border-0 bg-black/25" />

              <div className="flex items-center justify-between">
                <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                  Research Phase
                </span>

                <span className="text-[1.8rem] leading-[2.6rem] font-normal text-[#ED910C]">
                  2 Weekss*
                </span>
              </div>
            </div>
          </div>

          <div className="h-[52.4rem] w-full overflow-hidden rounded-[2rem]">
            <Image
              src={brainStudioCardImg05}
              alt="Case Study Image"
              width={585}
              height={524}
              priority
            />
          </div>
        </div>

        <div className="mt-[9rem] h-[61.2rem] w-full overflow-hidden rounded-[2rem]">
          <Image
            src={brainStudioCardImg06}
            alt="Case Study Image"
            width={1203}
            height={612}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetailSection;
