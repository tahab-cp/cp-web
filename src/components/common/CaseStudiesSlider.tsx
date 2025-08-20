import { caseStudiesData } from "@/constants/caseStudiesSection";
import Image from "next/image";
import contactArrow from "../../assets/images/icons/contact-arrow.svg";

const CaseStudiesSlider = () => {
  return (
    <div className="flex flex-col items-start">
      {caseStudiesData.map((item, idx) => (
        <div
          key={idx}
          className="case-studies-card flex flex-col items-center pt-[2rem] pr-[2.7rem] pb-[.87rem] pl-[2rem] text-center"
        >
          <div className="relative h-[44rem] w-full">
            <Image
              src={item.image}
              alt="Case Study Image"
              height={440}
              width={555}
              priority
            />
          </div>

          <h4 className="mt-[2rem] mb-[4rem] max-w-[50rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]">
            {item.title}
          </h4>

          <div className="mb-[2rem] flex w-full items-center justify-between px-[2rem]">
            <div className="flex items-center gap-[1.1rem]">
              <span className="text-text-primary/60 text-[1.6rem] leading-[2.4rem] font-medium uppercase">
                TECHNOLOGY USED
              </span>

              <ul className="flex flex-wrap items-center gap-[2rem]">
                {item.technologies.slice(0, 2).map((tech, index) => (
                  <li key={index}>
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      width={tech.width}
                      height={tech.height}
                      priority
                    />
                  </li>
                ))}
              </ul>
            </div>

            <i className="inline-flex size-[4.9rem] rotate-45 items-center justify-center">
              <Image
                src={contactArrow}
                alt="Contact Arrow"
                width={49}
                height={49}
              />
            </i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudiesSlider;
