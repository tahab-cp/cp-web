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
          { label: "UI / UX Design", href: "/services" },
          { label: "Website Design", href: "/services" },
          { label: "Mobile App Design", href: "/services" },
          { label: "Landing Page Design", href: "/services" },
          { label: "Dashboards", href: "/services" },
        ],
      },
      {
        title: "Branding",
        links: [
          { label: "Logo Design", href: "/services" },
          { label: "Brand Guidelines", href: "/services" },
          { label: "Social Media Branding", href: "/services" },
          { label: "Infographics", href: "/services" },
          { label: "Business Cards", href: "/services" },
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
          { label: "UI / UX Design", href: "/services" },
          { label: "Website Design", href: "/services" },
          { label: "Mobile App Design", href: "/services" },
          { label: "Landing Page Design", href: "/services" },
          { label: "Dashboards", href: "/services" },
        ],
      },
      {
        title: "SEO Optimization",
        links: [
          { label: "Logo ", href: "/services" },
          { label: "Brand Guidelines", href: "/services" },
          { label: "Social Media Branding", href: "/services" },
          { label: "Infographics", href: "/services" },
          { label: "Business ", href: "/services" },
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
          { label: "UI / UX Design", href: "/services" },
          { label: "Website Design", href: "/services" },
          { label: "Mobile App", href: "/services" },
          { label: "Landing Page Design", href: "/services" },
          { label: "Dashboards", href: "/services" },
        ],
      },
      {
        title: "Branding",
        links: [
          { label: "Logo Design", href: "/services" },
          { label: "Brand Guidelines", href: "/services" },
          { label: "Social Media Branding", href: "/services" },
          { label: "Infographics", href: "/services" },
          { label: "Business Cards", href: "/services" },
        ],
      },
    ],
    image: "/images/services-dropdown-tab-img-1.png",
  },
];
