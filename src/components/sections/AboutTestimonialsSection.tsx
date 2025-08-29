import React from "react";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import TestimonialsMarquee from "../common/TestimonialsMarquee";

const AboutTestimonialsSection = () => {
  return (
    <section className="py-[5rem] xl:py-[10rem]">
      <div className="flex flex-col items-center gap-[2rem] px-[2rem] text-center xl:px-[0rem]">
        <SectionLabel text="Testimonials" />

        <SectionTitle
          label="Built with Pixels. Backed by People."
          textColor="text-white "
        />

        <div className="max-w-[77.9rem]">
          <SectionDescription
            label="Here’s what our clients have to say after partnering with Creative Pixels — real experiences, real results, and real stories behind the pixels."
            textColor="text-white"
          />
        </div>
      </div>

      <div className="mt-[5rem]">
        <TestimonialsMarquee />
      </div>
    </section>
  );
};

export default AboutTestimonialsSection;
