import Image from "next/image";
import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import bgLine from "../../assets/images/line-stroke.svg";
import TestimonialsCard from "../common/TestimonialsCard";
import { testimonialsData } from "@/constants/testimonialSection";

const TestimonialSection = () => {
  return (
    <section className="testimonials-bg relative z-[1] pt-[7.2rem] pb-[9.1rem]">
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

      <div className="absolute bottom-[-10rem] left-0 z-[-1] w-full">
        <Image
          src={bgLine}
          alt="Decorative line"
          width={1453}
          height={372}
          className="pointer-events-none h-auto w-full select-none"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
