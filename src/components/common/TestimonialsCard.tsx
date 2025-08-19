import Image, { StaticImageData } from "next/image";

type TestimonialsCardProps = {
  ratingImage?: StaticImageData; // stars image
  ratingAlt?: string;
  review: string;
  authorImage: StaticImageData;
  authorName: string;
  authorRole: string;
};

const TestimonialsCard = ({
  ratingImage,
  ratingAlt = "Rating Stars",
  review,
  authorImage,
  authorName,
  authorRole,
}: TestimonialsCardProps) => {
  return (
    <div className="testimonials-card">
      {/* Rating Stars */}
      {ratingImage && (
        <div className="relative h-[2.042rem] w-[11.379rem]">
          <Image
            src={ratingImage}
            alt={ratingAlt}
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* Review Text */}
      <p className="mt-[1.958rem] mb-[4.042rem] text-[1.8rem] leading-[2.6rem] font-normal text-white/50">
        {review}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-[1.2rem]">
        <div className="relative size-[5.6rem] overflow-hidden rounded-full">
          <Image src={authorImage} alt={authorName} width={56} height={56} />
        </div>

        <div className="flex flex-col">
          <h5 className="text-[1.8rem] leading-[2.6rem] font-normal text-[#f6f6f6]">
            {authorName}
          </h5>
          <h6 className="text-[1.6rem] leading-[2.4rem] font-medium text-[#f6f6f6]/50">
            {authorRole}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
