"use client";

import Image from "next/image";
import { logoPopupsData } from "@/constants/heroSection";
import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ClientLogoSlider = () => {
  const [activePopup, setActivePopup] = useState<number | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleLogoClick = (idx: number) => {
    if (activePopup === idx) {
      // Close popup → resume autoplay
      setActivePopup(null);
      swiperInstance?.autoplay?.start();
    } else {
      // Open popup → stop autoplay
      setActivePopup(idx);
      swiperInstance?.autoplay?.stop();
    }
  };

  return (
    <>
      <Swiper
        className="mySwiper client-logo-slider"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        onSwiper={setSwiperInstance} // capture swiper instance
      >
        {logoPopupsData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative inline-flex"
              onMouseLeave={() => handleLogoClick(idx)}
            >
              {/* Logo button */}
              <button
                onClick={() => handleLogoClick(idx)}
                className={`cursor-pointer transition-all duration-300 ${
                  activePopup === idx
                    ? "opacity-100 grayscale-0"
                    : "opacity-70 grayscale-100"
                }`}
              >
                <Image
                  src={item.logo}
                  alt={`${item.title} Logo`}
                  width={item.logoWidth}
                  height={item.logoHeight}
                />
              </button>

              {/* Popup */}
              <div
                className={`absolute bottom-full left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
                  activePopup === idx
                    ? "pointer-events-auto visible pb-[1.6rem] opacity-100"
                    : "pointer-events-none invisible pb-[0rem] opacity-0"
                }`}
              >
                <div className="w-[27.5rem] overflow-hidden rounded-[1.6rem] bg-white shadow-[0px_8px_20px_0px_#00000040]">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-[1.6rem]">
                    <Image
                      src={item.popupImage}
                      alt={`${item.title} Popup Image`}
                      width={275}
                      height={194}
                    />
                  </div>

                  {/* Content */}
                  <div className="px-[1.7rem] pt-[1.8rem] pb-[2.4rem]">
                    <Link href={item.href} className="inline-flex items-center">
                      <span className="border-text-primary bg-text-primary inline-flex h-[4.4rem] min-w-[17.934rem] items-center justify-center rounded-[4.56rem] border px-[2.28rem] py-[.608rem] text-[1.6rem] font-semibold text-white">
                        View Case Study
                      </span>

                      <i className="-mx-[.3rem] inline-flex size-[1.368rem] items-center justify-center">
                        <Image
                          src="/images/icons/subtract-dark.svg"
                          alt="Subtract Light Icon"
                          width={13.68}
                          height={13.68}
                        />
                      </i>

                      <i className="border-text-primary bg-text-primary inline-flex size-[4.4rem] items-center justify-center rounded-full border">
                        <Image
                          src="/images/icons/arrow-right.svg"
                          alt="Arrow Right Icon"
                          width={13.68}
                          height={13.68}
                        />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ClientLogoSlider;
