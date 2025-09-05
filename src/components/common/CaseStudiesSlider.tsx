"use client";

import { caseStudiesData } from "@/constants/caseStudiesSection";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

const CaseStudiesSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      slidesPerView={1}
      spaceBetween={10}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
      className="mySwiper case-studies-slider"
    >
      {caseStudiesData.map((item, idx) => (
        <SwiperSlide key={idx}>
          <Link
            href={`/case-studies/${item.slug}`}
            className="case-studies-card flex flex-col items-center p-[2rem] text-center"
          >
            <div className="relative h-[22rem] w-full overflow-hidden rounded-[2rem] md:h-[40rem] lg:h-[30rem] xl:h-[40rem]">
              <Image
                src={item.image}
                alt="Case Study Image"
                height={440}
                width={555}
                priority
                className="size-full object-cover"
              />
            </div>

            <div className="flex h-full flex-col justify-between">
              <h4 className="mt-[2rem] mb-[4rem] line-clamp-2 max-w-[50rem] text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
                {item.title}
              </h4>

              <div className="mb-[2rem] flex w-full flex-col items-center justify-between gap-[2rem] px-[2rem] xl:flex-row">
                <div className="flex flex-col items-center gap-[1.1rem] xl:flex-row">
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
                    src="/images/icons/contact-arrow.svg"
                    alt="Contact Arrow"
                    width={49}
                    height={49}
                  />
                </i>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CaseStudiesSlider;
