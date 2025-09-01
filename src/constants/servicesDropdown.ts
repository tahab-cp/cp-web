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
  image: string;
}

export const serviceTabs: ServiceTab[] = [
  {
    name: "Design & Branding",
    icon: "/images/icons/click-arrow-yellow-2.svg",
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
    image: "/images/services-dropdown-tab-img-1.png",
  },
  {
    name: "Website Development",
    icon: "/images/icons/click-arrow-pink.svg",
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
    image: "/images/services-dropdown-tab-img-1.png",
  },
  {
    name: "Maintenance and Growth",
    icon: "/images/icons/click-arrow-green.svg",
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
    image: "/images/services-dropdown-tab-img-1.png",
  },
];
