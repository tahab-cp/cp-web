import designTabImg from "../assets/images/design-tab-img.png";
import type { StaticImageData } from "next/image";
import clickArrowBlack from "../assets/images/icons/click-arrow-black.svg";
import clickArrowPink from "../assets/images/icons/click-arrow-pink.svg";
import clickArrowGreen from "../assets/images/icons/click-arrow-green.svg";

export interface ServiceLink {
  label: string;
  href: string;
}

export interface ServiceColumn {
  title: string;
  links: ServiceLink[];
}

export interface ServiceTab {
  name: string; // Tab label
  icon: string;
  columns: ServiceColumn[];
  image: string | StaticImageData;
}

export const serviceTabs: ServiceTab[] = [
  {
    name: "Design & Branding",
    icon: clickArrowBlack,
    columns: [
      {
        title: "Designing",
        links: [
          { label: "UI / UX Design", href: "" },
          { label: "Website Design", href: "" },
          { label: "Mobile App Design", href: "" },
          { label: "Landing Page Design", href: "" },
          { label: "Dashboards", href: "" },
        ],
      },
      {
        title: "Branding",
        links: [
          { label: "Logo Design", href: "" },
          { label: "Brand Guidelines", href: "" },
          { label: "Social Media Branding", href: "" },
          { label: "Infographics", href: "" },
          { label: "Business Cards", href: "" },
        ],
      },
    ],
    image: designTabImg,
  },
  {
    name: "Website Development",
    icon: clickArrowPink,
    columns: [
      {
        title: "Web Design",
        links: [
          { label: "UI / UX Design", href: "" },
          { label: "Website Design", href: "" },
          { label: "Mobile App Design", href: "" },
          { label: "Landing Page Design", href: "" },
          { label: "Dashboards", href: "" },
        ],
      },
      {
        title: "SEO Optimization",
        links: [
          { label: "Logo ", href: "" },
          { label: "Brand Guidelines", href: "" },
          { label: "Social Media Branding", href: "" },
          { label: "Infographics", href: "" },
          { label: "Business ", href: "" },
        ],
      },
    ],
    image: designTabImg,
  },
  {
    name: "Maintenance and Growth",
    icon: clickArrowGreen,
    columns: [
      {
        title: "Optimization",
        links: [
          { label: "UI / UX Design", href: "" },
          { label: "Website Design", href: "" },
          { label: "Mobile App", href: "" },
          { label: "Landing Page Design", href: "" },
          { label: "Dashboards", href: "" },
        ],
      },
      {
        title: "Branding",
        links: [
          { label: "Logo Design", href: "" },
          { label: "Brand Guidelines", href: "" },
          { label: "Social Media Branding", href: "" },
          { label: "Infographics", href: "" },
          { label: "Business Cards", href: "" },
        ],
      },
    ],
    image: designTabImg,
  },
];
