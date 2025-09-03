"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import { caseStudiesData } from "@/constants/caseStudiesSection";

const CaseStudiesMarquee = () => {
  return (
    <>
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        direction="right"
        className="case-studies-marquee"
      >
        {caseStudiesData.map((caseStudy, index) => (
          <div
            key={index}
            className={`case-studies-grid mx-[2rem] h-full w-[40rem] !p-[1rem] md:w-[50rem] md:!p-[3rem]`}
          >
            <Link
              href={`/case-studies/${caseStudy.slug}`}
              className="flex size-full flex-col gap-[4rem]"
            >
              <div className="relative h-[30rem] w-full overflow-hidden md:h-[35rem]">
                <Image
                  src={caseStudy.image}
                  alt="Case Study Image"
                  height={440}
                  width={555}
                  priority
                  className="size-full object-cover object-center"
                />
              </div>

              <div className="flex flex-col items-center text-center">
                {/* Tags */}
                <ul className="flex flex-wrap justify-center gap-[1rem]">
                  {caseStudy.tags.map((tag, index) => (
                    <li
                      key={index}
                      className={`inline-flex h-[4rem] items-center justify-center gap-[.8rem] rounded-[.4rem] px-[1.2rem] py-[.8rem] text-[1.4rem] leading-[2.2rem] font-medium text-white uppercase md:text-[1.6rem] md:leading-[2.4rem] ${
                        tag.color || "bg-text-primary"
                      }`}
                    >
                      {tag.icon && (
                        <i className="relative inline-flex size-[2rem] items-center justify-center">
                          <Image
                            src={tag.icon}
                            alt={`${tag.label} Icon`}
                            fill
                            className="object-contain"
                          />
                        </i>
                      )}
                      <span>{tag.label}</span>
                    </li>
                  ))}
                </ul>

                {/* Title */}
                <h3 className="text-text-primary mt-[1.4rem] line-clamp-2 text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] md:text-[3rem] md:leading-[4rem] xl:text-[3.4rem] xl:leading-[4.8rem]">
                  {caseStudy.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default CaseStudiesMarquee;
