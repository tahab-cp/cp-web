import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import TestimonialsCard from "../common/TestimonialsCard";
import { testimonialsData } from "@/constants/testimonialSection";
import LineStroke05 from "../decorativeElements/LineStroke05";

const TestimonialSection = () => {
  return (
    <section className="testimonials-sec relative z-[1] pt-[7.2rem] pb-[9.1rem]">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke05 className="absolute top-[118.4rem] left-1/2 -translate-x-1/2 opacity-90" />
      </div>

      <div className="mx-auto max-w-[120.3rem]">
        <div className="flex flex-col items-center gap-[2rem] text-center">
          <SectionLabel text="Testimonials" />

          <SectionTitle
            label="Built with Pixels. Backed by People."
            textColor="text-white "
          />

          <div className="max-w-[95.8rem]">
            <SectionDescription
              label="Here’s what our clients have to say after partnering with Creative Pixels — real experiences, real results, and real stories behind the pixels."
              textColor="text-white"
            />
          </div>
        </div>

        <div className="mt-[5rem] grid grid-cols-3 gap-[3.3rem]">
          <div className="grid gap-[3.3rem]">
            {testimonialsData.slice(0, 3).map((item, idx) => (
              <TestimonialsCard key={idx} {...item} />
            ))}
          </div>

          <div className="grid gap-[3.3rem]">
            {testimonialsData.slice(3, 5).map((item, idx) => (
              <TestimonialsCard key={idx} {...item} />
            ))}
          </div>

          <div className="grid gap-[3.3rem]">
            {testimonialsData.slice(5, 7).map((item, idx) => (
              <TestimonialsCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
