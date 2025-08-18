import Link from "next/link";
import subtractLight from "../../assets/images/icons/subtract-light.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import Image from "next/image";

const BookButton = () => {
  return (
    <Link href="" className="inline-flex items-center justify-center">
      <span className="inline-flex h-[4.6rem] min-w-[16.6rem] items-center justify-center rounded-[7rem] border border-[#d3d3d3] px-[3rem] py-[1rem] text-[2rem] font-semibold text-white">
        Book a Call
      </span>

      <i className="-mx-[.1rem] inline-flex size-[1.5rem] items-center justify-center">
        <Image
          src={subtractLight}
          alt="Subtract Light Icon"
          width={18}
          height={18}
        />
      </i>

      <i className="inline-flex size-[4.6rem] items-center justify-center rounded-full border border-[#d3d3d3]">
        <Image src={arrowRight} alt="Arrow Right Icon" width={14} height={14} />
      </i>
    </Link>
  );
};

export default BookButton;
