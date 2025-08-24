import Image from "next/image";
import Link from "next/link";
import avatar from "../../assets/images/consultation-avatar.svg";

const CommonBtn2 = () => {
  return (
    <Link href="" className="inline-flex items-center">
      <div className="common-btn-2">
        {/* Gradient Layer */}
        <div className="gradient-layer" />

        {/* Text Layer */}
        <span>Get Free Consultation</span>
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

      <i className="common-btn-avatar-2">
        <Image src={avatar} alt="Avatar" width={50} height={50} priority />
      </i>
    </Link>
  );
};

export default CommonBtn2;
