import SectionLabel2 from "@/components/common/SectionLabel2";
import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";

const PrivacyPolicyPage = () => {
  return (
    <main>
      <section className="pt-[20rem] pb-[10rem]">
        <div className="mx-auto max-w-[120rem]">
          <div className="flex flex-col items-start gap-[2rem]">
            <div className="inline-flex rotate-[2deg]">
              <SectionLabel2 text="Legal | Creative Pixels" />
            </div>

            <SectionTitle label="Privacy Policy" />

            <div className="text-[2.2rem] leading-[3.2rem] font-medium">
              This Website collects some Personal Data from its Users.
            </div>

            <div className="border-y border-[#070707]/20 py-[1.5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              This document can be printed for reference by using the print
              command in the settings of any browser.
            </div>
          </div>

          <div className="mt-[6rem] flex flex-col">
            <h5 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]">
              Policy Summary
            </h5>

            <h3 className="mt-[2rem] mb-[4rem] max-w-[90rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]">
              Personal Data processed for the following purposes and using the
              following services:
            </h3>

            <div className="grid grid-cols-2">
              <div className="flex items-center gap-[2.2rem]">
                <div className="inline-flex size-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                  <Image
                    src="/images/icons/advertise-icon.svg"
                    width={26}
                    height={22}
                    alt="Icon"
                  />
                </div>

                <div className="flex flex-col gap-[1rem]">
                  <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                    Advertising
                  </h5>

                  <div className="flex flex-col gap-[.5rem]">
                    <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                      X Ads conversion tracking
                    </h6>

                    <div className="text-[1.6rem] leading-[2.4rem] font-medium">
                      Personal Data: Trackers; Usage Data
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[2.2rem]">
                <div className="inline-flex size-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                  <Image
                    src="/images/icons/advertise-icon.svg"
                    width={26}
                    height={22}
                    alt="Icon"
                  />
                </div>

                <div className="flex flex-col gap-[1rem]">
                  <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                    Advertising
                  </h5>

                  <div className="flex flex-col gap-[.5rem]">
                    <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                      X Ads conversion tracking
                    </h6>

                    <div className="text-[1.6rem] leading-[2.4rem] font-medium">
                      Personal Data: Trackers; Usage Data
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
