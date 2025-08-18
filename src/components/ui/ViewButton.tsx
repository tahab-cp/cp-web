import Link from "next/link";
import subtractDark from "../../assets/images/icons/subtract-dark.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import Image from "next/image";

interface ViewButtonProps {
  href: string;
}

const ViewButton: React.FC<ViewButtonProps> = ({ href }) => {
  return (
    <Link href={href} className="inline-flex items-center">
      <span className="border-text-primary bg-text-primary inline-flex h-[4.4rem] min-w-[17.934rem] items-center justify-center rounded-[4.56rem] border px-[2.28rem] py-[.608rem] text-[1.6rem] font-semibold text-white">
        View Case Study
      </span>

      <i className="-mx-[.3rem] inline-flex size-[1.368rem] items-center justify-center">
        <Image
          src={subtractDark}
          alt="Subtract Light Icon"
          width={13.68}
          height={13.68}
        />
      </i>

      <i className="border-text-primary bg-text-primary inline-flex size-[4.4rem] items-center justify-center rounded-full border">
        <Image
          src={arrowRight}
          alt="Arrow Right Icon"
          width={13.68}
          height={13.68}
        />
      </i>
    </Link>
  );
};

export default ViewButton;
