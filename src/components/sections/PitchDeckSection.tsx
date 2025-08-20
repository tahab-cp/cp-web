import Image from "next/image";
import PitchDeckInput from "../common/PitchDeckInput";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import mailIcon from "../../assets/images/icons/filled-mail-icon.svg";
import { pitchDeckBrandData } from "@/constants/pitchDeckSection";
import pitchDeckPhoneElement from "../../assets/images/pitch-deck-phone-element.png";
import Link from "next/link";

const PitchDeckSection = () => {
  return (
    <section className="relative mx-auto flex max-w-[152rem] justify-end">
      <div className="flex w-full max-w-[132.1rem] justify-between">
        <div className="flex w-full max-w-[55.6rem] flex-col items-start py-[8.9rem]">
          <SectionLabel
            text="Pitch Deck"
            textColor="text-text-primary"
            borderColor="border-text-primary"
          />

          <div className="mt-[1.1rem] max-w-[54.2rem]">
            <SectionTitle label="Send yourself or a colleague our Pitch Deck." />
          </div>

          <p className="mt-[2rem] mb-[2.6rem] max-w-[51.2rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#333333]">
            Want to learn more about us? Our company deck offers an in-depth
            look at our agency, the projects we&apos;ve handled, the solutions
            we provide, and the culture we foster.
          </p>

          <form action="" className="flex gap-[1rem]">
            <PitchDeckInput placeholder="Full Name" type="text" />

            <PitchDeckInput placeholder="Email Address" type="text" />

            <button
              type="submit"
              className="inline-flex h-[6.2rem] min-w-[6.2rem] cursor-pointer items-center justify-center rounded-[1.6rem] bg-black/15"
            >
              <Image src={mailIcon} alt="Mail Icon" width={24} height={16} />
            </button>
          </form>
        </div>

        <div className="flex w-full max-w-[48.7rem] flex-col items-end justify-center gap-[4.3rem] bg-[#EAD9FB] pr-[6rem]">
          <h5 className="text-[1.8rem] font-semibold text-[#FF37B3]">
            Trusted by:
          </h5>

          <div className="flex flex-col items-end gap-[6rem]">
            {pitchDeckBrandData.map((item, idx) => (
              <Link href={item.link} key={idx}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-[24.3rem] bottom-0 h-[58.2rem] w-[58.3rem] select-none">
        <Image
          src={pitchDeckPhoneElement}
          alt="Pitch Deck Phone Element"
          height={582}
          width={583}
          priority
        />
      </div>
    </section>
  );
};

export default PitchDeckSection;
