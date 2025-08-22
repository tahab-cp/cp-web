import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { faqData } from "@/constants/generalQASection";

const FaqTab = () => {
  return (
    <Tabs defaultValue="general" className="gap-[8rem]">
      {/* Tab buttons */}
      <TabsList className="mx-auto flex w-full max-w-[121.3rem] gap-[1rem]">
        {faqData.map((faq) => (
          <TabsTrigger
            key={faq.tab}
            value={faq.tab}
            className="border-text-primary inline-flex h-[3.8rem] min-w-[11.4rem] cursor-pointer items-center justify-center rounded-full border px-[2rem] py-[.6rem] text-[2rem] font-semibold transition-all duration-300 hover:bg-[#FF37B3] hover:text-white data-[state=active]:bg-[#FF37B3] data-[state=active]:text-white"
          >
            {faq.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab content */}
      {faqData.map((faq) => (
        <TabsContent key={faq.tab} value={faq.tab}>
          <div className={`${faq.style} flex flex-col gap-[5rem]`}>
            <h3 className="text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em]">
              {faq.title}
            </h3>

            <div className="grid grid-cols-2 gap-x-[4.3rem] gap-y-[5rem]">
              {faq.items.map((item, i) => (
                <div key={i} className="flex gap-[2.2rem]">
                  <div className="inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={24}
                      height={24}
                      className="h-[2.4rem] w-[2.4rem]"
                      priority
                    />
                  </div>

                  <div className="flex flex-col gap-[.5rem]">
                    <h4 className="text-[2.2rem] leading-[3.2rem] font-medium">
                      {item.question}
                    </h4>
                    <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default FaqTab;
