import Link from "next/link";
import subtractDark from "../../assets/images/icons/subtract-dark.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import Image from "next/image";

const AboutButton = () => {
  return (
    <Link href="" className="inline-flex items-center">
      <span className="border-text-primary bg-text-primary inline-flex h-[5rem] min-w-[25.8rem] items-center justify-center rounded-[6rem] border px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
        About CreativePixels
      </span>

      <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
        <Image
          src={subtractDark}
          alt="Subtract Light Icon"
          width={18}
          height={18}
        />
      </i>

      <i className="border-text-primary bg-text-primary inline-flex size-[5rem] items-center justify-center rounded-full border">
        <Image src={arrowRight} alt="Arrow Right Icon" width={14} height={14} />
      </i>
    </Link>
  );
};

export default AboutButton;
