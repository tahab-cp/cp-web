"use client";

import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useEffect } from "react";

const CommonBtn1 = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="15min"
      data-cal-link="hassan-iqbal-mznzu9/15min"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      className="common-btn-1-parent inline-flex cursor-pointer items-center"
    >
      <div className={`common-btn-1 overflow-hidden whitespace-nowrap`}>
        {/* Gradient Layer */}
        <div className="gradient-layer" />

        {/* Fill Layer (background animation) */}
        <div className="fill-layer" />

        {/* Text Layer */}
        <span className="relative z-10">Book a Call</span>
      </div>

      <i className="relative z-[0] mx-[-.3rem]">
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.475586 0C1.85901 2.39049 4.44175 4 7.40234 4C10.3629 4 12.9457 2.39049 14.3291 0H16.4023V18H14.3291C12.9457 15.6095 10.3629 14 7.40234 14C4.44175 14 1.85901 15.6095 0.475586 18H0.402344V0H0.475586Z"
            fill="#FF37B3"
          />
        </svg>
      </i>

      <div className={`common-btn-arrow-1 overflow-hidden`}>
        {/* Gradient Layer */}
        <div className="gradient-layer" />

        {/* Fill Layer (background animation) */}
        <div className="fill-layer" />

        <i className="relative z-10">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 6.36364L14 7.63636L13.3636 7.63636L13.3636 8.27273L12.7273 8.27273L12.7273 8.90909L12.0909 8.90909L12.0909 9.54545L11.4545 9.54545L11.4545 10.1818L10.8182 10.1818L10.8182 10.8182L10.1818 10.8182L10.1818 11.4545L9.54545 11.4545L9.54545 12.0909L8.90909 12.0909L8.90909 12.7273L8.27273 12.7273L8.27273 13.3636L7.63636 13.3636L7.63636 14L7 14L7 13.3636L6.36364 13.3636L6.36364 12.7273L5.72727 12.7273L5.72727 12.0909L6.36364 12.0909L6.36364 11.4545L7 11.4545L7 10.8182L7.63636 10.8182L7.63636 10.1818L8.27273 10.1818L8.27273 9.54545L8.90909 9.54545L8.90909 8.90909L9.54545 8.90909L9.54545 8.27273L-3.61612e-07 8.27273L-2.50347e-07 5.72727L9.54545 5.72727L9.54545 5.09091L8.90909 5.09091L8.90909 4.45455L8.27273 4.45455L8.27273 3.81818L7.63636 3.81818L7.63636 3.18182L7 3.18182L7 2.54545L6.36364 2.54545L6.36364 1.90909L5.72727 1.90909L5.72727 1.27273L6.36364 1.27273L6.36364 0.636363L7 0.636363L7 -3.0598e-07L7.63636 -2.78163e-07L7.63636 0.636363L8.27273 0.636363L8.27273 1.27273L8.90909 1.27273L8.90909 1.90909L9.54545 1.90909L9.54545 2.54545L10.1818 2.54545L10.1818 3.18182L10.8182 3.18182L10.8182 3.81818L11.4545 3.81818L11.4545 4.45455L12.0909 4.45455L12.0909 5.09091L12.7273 5.09091L12.7273 5.72727L13.3636 5.72727L13.3636 6.36364L14 6.36364Z"
              fill="white"
            />
          </svg>
        </i>
      </div>
    </button>
  );
};

export default CommonBtn1;
