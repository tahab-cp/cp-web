import Image from "next/image";
import offerSectionBg from "../../assets/images/offer-section-bg.png";

const OfferSection = () => {
  return (
    <section className="relative h-[210.7rem] pt-[8rem] pb-[10.1rem]">
      <Image
        src={offerSectionBg}
        alt="Offer Section Background"
        fill
        className="object-cover object-center"
        priority
      />
    </section>
  );
};

export default OfferSection;
