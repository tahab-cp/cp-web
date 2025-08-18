import Image from "next/image";
import cpStroke from "../../assets/images/cp-stroke.svg";
import report from "../../assets/images/report.png";
import message from "../../assets/images/message.png";
import analyst from "../../assets/images/analyst.png";
import bgLine from "../../assets/images/line-stroke.svg";
import { serviceCardsData } from "@/constants/serviceSection";

const ServiceSection = () => {
  return (
    <section className="relative px-[2rem] pb-[10rem] lg:pb-[32rem] xl:px-[0rem]">
      <div className="absolute bottom-[9.5rem] left-0 w-full">
        <Image
          src={bgLine}
          alt="Decorative line"
          width={1453}
          height={372}
          className="pointer-events-none h-auto w-full select-none"
        />
      </div>

      <div className="mx-auto flex max-w-[135.2rem] flex-col gap-[1.8rem] xl:flex-row">
        <div
          data-aos="fade-up"
          className="service-card-gradient relative z-[1] h-[50rem] w-full overflow-hidden md:h-[84.6rem] md:min-w-[62.9rem]"
        >
          <div className="absolute top-[-6rem] left-[-6rem] z-[-1] size-[30rem] bg-[#1534B699] blur-[100px]" />

          <div className="absolute right-0 bottom-[-25rem] z-[-1] size-[30rem] bg-[#DFDFDF99] blur-[100px]" />

          <h2 className="px-[2rem] pt-[3rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:px-[4.5rem] md:pt-[6rem] md:text-[5.6rem] md:leading-[6.4rem]">
            We create{" "}
            <span className="text-[#FF37B3]">exceptional websites</span>
          </h2>

          {/* Elements */}
          <div className="absolute top-[15rem] left-0 z-[-1] md:top-[25rem]">
            <Image
              src={cpStroke}
              alt="Stroke"
              height={245}
              width={430}
              priority
              style={{ height: "auto", width: "100%" }} // maintains aspect ratio
            />
          </div>

          <div className="absolute top-[30rem] left-[3.4rem] z-[-1] md:top-[47rem]">
            <Image
              src={report}
              alt="Report"
              height={209}
              width={219}
              priority
            />
          </div>

          <div className="absolute top-[28rem] right-[9rem] z-[-1] md:top-[43.5rem]">
            <Image
              src={message}
              alt="Message"
              height={109}
              width={298}
              priority
            />
          </div>

          <div className="absolute right-[2.4rem] bottom-[3.4rem] z-[-1]">
            <Image
              src={analyst}
              alt="Message"
              height={247}
              width={393}
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-[1.5rem] gap-y-[3rem] md:grid-cols-2">
          {serviceCardsData.map((item, idx) => (
            <div data-aos="fade-up" data-aos-delay={idx * 100} key={idx}>
              <div className="service-card">
                <Image
                  src={item.icon}
                  alt="Pencil Icon"
                  width={52}
                  height={52}
                  className="size-[4.8rem] md:size-[5.2rem]"
                />

                <h4 className="mt-[2rem] mb-[6.2rem] text-[2.8rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
                  {item.title}
                </h4>

                <p className="text-[1.8rem] leading-[2.6rem] text-[#333333]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
