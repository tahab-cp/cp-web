import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Tag = {
  label: string;
  color?: string; // Tailwind color classes
  icon?: StaticImageData;
};

type Technology = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
};

type CaseStudiesGridProps = {
  image: StaticImageData;
  title: string;
  description: string;
  tags: Tag[];
  technologies: Technology[];
  className?: string; // 👈 new
  slug: string; // Slug for the case study detail page
};

const CaseStudiesGrid = ({
  image,
  title,
  description,
  tags,
  technologies,
  className = "",
  slug,
}: CaseStudiesGridProps) => {
  return (
    <div
      className={`case-studies-grid grid w-full grid-cols-1 items-center gap-[4.3rem] lg:grid-cols-2 ${className}`}
    >
      {/* Left Image */}
      <Link
        href={`/case-studies/${slug}`}
        className="relative w-full md:h-[44rem]"
      >
        <Image
          src={image}
          alt="Case Study Image"
          height={440}
          width={555}
          priority
          className="size-full"
        />
      </Link>

      {/* Right Content */}
      <div className="flex flex-col">
        {/* Tags */}
        <ul className="flex flex-wrap gap-[1rem]">
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`inline-flex h-[4rem] min-w-[6.3rem] items-center justify-center gap-[.8rem] rounded-[.4rem] px-[1.2rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase ${
                tag.color || "bg-text-primary"
              }`}
            >
              {tag.icon && (
                <i className="relative inline-flex size-[2rem] items-center justify-center">
                  <Image
                    src={tag.icon}
                    alt={`${tag.label} Icon`}
                    fill
                    className="object-contain"
                  />
                </i>
              )}
              <span>{tag.label}</span>
            </li>
          ))}
        </ul>

        {/* Title */}
        <h3 className="text-text-primary my-[1.8rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-primary text-[1.8rem] leading-[2.6rem] font-normal">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-[2rem] flex flex-col gap-[2rem]">
          <span className="text-text-primary/60 text-[1.6rem] leading-[2.4rem] font-medium uppercase">
            TECHNOLOGY USED
          </span>

          <ul className="flex flex-wrap items-center gap-[3.3rem] border-y border-[#424242]/50 py-[1.8rem] md:flex-row">
            {technologies.map((tech, index) => (
              <li key={index}>
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={tech.width}
                  height={tech.height}
                  priority
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesGrid;
