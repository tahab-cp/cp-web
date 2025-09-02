import Image from "next/image";
import PitchDeckInput from "../common/PitchDeckInput";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { pitchDeckBrandData } from "@/constants/pitchDeckSection";
import Link from "next/link";

const PitchDeckSection = () => {
  return (
    <section className="relative mx-auto flex max-w-[152rem] justify-end">
      <div className="flex w-full max-w-[132.1rem] flex-col justify-between lg:flex-row">
        <div className="flex w-full flex-col items-center px-[2rem] py-[6rem] text-center lg:max-w-[55.6rem] lg:items-start lg:py-[8.9rem] lg:text-left xl:px-[0rem]">
          <SectionLabel
            text="Pitch Deck"
            textColor="text-text-primary"
            borderColor="border-text-primary"
          />

          <div className="mt-[1.1rem] lg:max-w-[54.2rem]">
            <SectionTitle label="Send yourself or a colleague our Pitch Deck." />
          </div>

          <p className="mt-[2rem] mb-[2.6rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#333333] lg:max-w-[51.2rem]">
            Want to learn more about us? Our company deck offers an in-depth
            look at our agency, the projects we&apos;ve handled, the solutions
            we provide, and the culture we foster.
          </p>

          <form
            action=""
            className="flex w-full flex-col gap-[1rem] md:flex-row"
          >
            <PitchDeckInput placeholder="Full Name" type="text" />

            <PitchDeckInput placeholder="Email Address" type="text" />

            <button
              type="submit"
              className="inline-flex h-[6.2rem] min-w-[6.2rem] cursor-pointer items-center justify-center rounded-[1.6rem] bg-black/15"
            >
              <Image
                src="/images/icons/filled-mail-icon.svg"
                alt="Mail Icon"
                width={24}
                height={16}
              />
            </button>
          </form>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-[3rem] bg-[#EAD9FB] p-[2rem] pr-[4rem] lg:max-w-[48.7rem] lg:items-end lg:gap-[4.3rem] lg:p-[0rem] lg:pr-[6rem]">
          <h5 className="text-[1.8rem] font-semibold text-[#FF37B3]">
            Trusted by:
          </h5>

          <div className="flex flex-wrap items-end justify-center gap-[6rem] md:flex-row lg:flex-col">
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

      <div className="pointer-events-none absolute right-[18rem] bottom-0 hidden size-[45rem] select-none lg:block xl:right-[24.3rem] xl:size-[58.2rem]">
        <Image
          src="/images/pitch-deck-phone-element.png"
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
