import SectionDescription from "../common/SectionDescription";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import TeamCardMarquee from "../common/TeamCardMarquee";

const OurTeamSection = () => {
  return (
    <section className="pt-[6.4rem] pb-[9.8rem]">
      <div className="flex flex-col items-center gap-[2rem] text-center">
        <SectionLabel
          text="Our Team"
          textColor="text-text-primary"
          borderColor="border-text-primary"
        />

        <div className="max-w-[60.3rem]">
          <SectionTitle label="We're a Team of People Who Care" />
        </div>

        <div className="max-w-[83.6rem]">
          <SectionDescription label="All of the people who work for us, have been working with us for a minimum of 2 years, with 50% of our team being the same since we were founded." />
        </div>
      </div>

      <div className="mt-[5rem]">
        <TeamCardMarquee />
      </div>
    </section>
  );
};

export default OurTeamSection;
