import Image from "next/image";
import AboutBadge from "../ui/AboutBadge";
import AboutButton from "../ui/AboutButton";
import aboutBgElement from "../../assets/images/about-bg-element.svg";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden px-[2rem] py-[10rem] xl:px-[0rem]">
      <div className="absolute top-[3.1rem] right-0 opacity-10 md:opacity-30 xl:opacity-100">
        <Image
          src={aboutBgElement}
          alt="About background Element"
          height={275}
          width={380}
          className="object-cover"
          style={{ height: "auto", width: "auto" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[120.3rem] flex-col items-center text-center xl:block xl:text-left">
        <div data-aos="fade-up">
          <AboutBadge />
        </div>

        <h5
          data-aos="fade-up"
          className="mt-[3rem] mb-[2rem] max-w-[99rem] text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[3.6rem] lg:text-[3.4rem] lg:leading-[4.8rem]"
        >
          <span className="text-[#EE8D00]">Creative Pixels</span> is an
          independent web design and development agency based in{" "}
          <span className="text-[#FF37B3]">Manchester</span> — crafting digital
          experiences since 2014. We care deeply about our clients, build
          long-term partnerships, bring over a decade of industry expertise, and
          take pride in <span className="text-[#3078FF]">award-winning</span>,
          pixel-perfect work.
        </h5>

        <h5
          data-aos="fade-up"
          className="mb-[2rem] text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[3.6rem] lg:text-[3.4rem] lg:leading-[4.8rem]"
        >
          We work with clients in 🇬🇧 🇦🇺 🇺🇸
        </h5>

        <div data-aos="fade-up">
          <AboutButton />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
