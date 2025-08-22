import React from "react";
import SectionLabel from "../common/SectionLabel";
import SectionDescription from "../common/SectionDescription";
import FaqTab from "../common/FaqTab";
import TextMarquee from "../common/TextMarquee";
import CtaSection2 from "../common/CtaSection2";

const GeneralQASection = () => {
  return (
    <section className="pt-[20.6rem] pb-[10rem]">
      <div className="mx-auto flex max-w-[121.3rem] flex-col items-start gap-[2rem]">
        <SectionLabel
          text="General Question & Answers"
          textColor="text-text-primary"
          borderColor="border-text-primary"
        />

        <h2 className="text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em]">
          Answers to all your questions!
        </h2>

        <SectionDescription label="Reach out to us to discuss business opportunities or simply to say hello." />
      </div>

      <div className="mt-[3rem] mb-[10.1rem]">
        <FaqTab />
      </div>

      <TextMarquee />

      <div className="mx-auto mt-[6.7rem] max-w-[120.3rem]">
        <CtaSection2 />
      </div>
    </section>
  );
};

export default GeneralQASection;
