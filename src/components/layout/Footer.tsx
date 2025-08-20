import Image from "next/image";
import footerBg from "../../assets/images/footer-bg.png";
import Link from "next/link";
import fbWhiteIcon from "../../assets/images/icons/facebook-white-icon.svg";
import igWhiteIcon from "../../assets/images/icons/instagram-white-icon.svg";
import linkedinWhiteIcon from "../../assets/images/icons/linkedin-white-icon.svg";
import FooterLinkCard from "../common/FooterLinkCard";
import { footerLinkCardData } from "@/constants/footerLinks";
import { logoPopupsData } from "@/constants/heroSection";
import LogoPopup from "../common/LogoPopup";
import creativeHostingLogo from "../../assets/images/creative-hosting-logo.svg";
import wpFixedLogo from "../../assets/images/wp-fixed-logo.svg";
import monthlyDesignsLogo from "../../assets/images/monthly-designs-logo.svg";
import cElement from "../../assets/images/c-element.svg";
import pElement from "../../assets/images/p-element.svg";

const socialLinks = [
  {
    src: fbWhiteIcon,
    alt: "Facebook Icon",
    href: "",
  },
  {
    src: igWhiteIcon,
    alt: "Instagram Icon",
    href: "",
  },
  {
    src: linkedinWhiteIcon,
    alt: "Linkedin Icon",
    href: "",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden pt-[6.2rem] pb-[2.764rem]">
      <Image
        src={footerBg}
        alt="Footer Background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="pointer-events-none absolute bottom-[6.034rem] left-[-2.5rem] h-[17.757rem] w-[8.358rem] -rotate-45 select-none">
        <Image
          src={cElement}
          alt="C Element"
          height={177.57}
          width={83.58}
          priority
        />
      </div>

      <div className="pointer-events-none absolute right-[-2.5rem] bottom-[58.49rem] h-[17.821rem] w-[9.644rem] rotate-[-15deg] select-none">
        <Image
          src={pElement}
          alt="P Element"
          height={178.21}
          width={96.44}
          priority
        />
      </div>

      <div className="relative z-[3] mx-auto flex max-w-[120.3rem] items-center justify-between rounded-[1.6rem] border-[2px] border-white bg-white/20 px-[1.69rem] pt-[2.3rem] pb-[3rem] backdrop-blur-[30px]">
        <div className="flex flex-col">
          <Link
            href="tel:01618202667"
            className="text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em] text-white"
          >
            0161 820 2667
          </Link>

          <h5 className="max-w-[32.4rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
            UseSpace, Paddock Street, Manchester, M12 6PN
          </h5>
        </div>

        <div className="flex flex-col gap-[.658rem]">
          <Link
            href="mailto:hello@cp.agency"
            className="text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em] text-white"
          >
            hello@cp.agency
          </Link>

          <div className="flex items-center justify-end gap-[.768rem]">
            {socialLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="inline-flex size-[5.319rem] items-center justify-center rounded-[1.6rem] bg-white/15"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={31.91}
                  height={31.91}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-[3] mx-auto mt-[5.7rem] flex max-w-[118.4rem] justify-between">
        <div className="flex flex-col gap-[8.7rem]">
          {footerLinkCardData
            .filter((item) => item.title === "Design" || item.title === "Links")
            .map((item, idx) => (
              <FooterLinkCard key={idx} title={item.title} links={item.links} />
            ))}
        </div>

        <div className="flex flex-col gap-[8.7rem]">
          {footerLinkCardData
            .filter(
              (item) => item.title === "Branding" || item.title === "Others",
            )
            .map((item, idx) => (
              <FooterLinkCard key={idx} title={item.title} links={item.links} />
            ))}
        </div>

        <div className="flex flex-col gap-[8.7rem]">
          {footerLinkCardData
            .filter((item) => item.title === "Website Development")
            .map((item, idx) => (
              <FooterLinkCard key={idx} title={item.title} links={item.links} />
            ))}
        </div>

        <div className="flex flex-col gap-[8.7rem]">
          {footerLinkCardData
            .filter(
              (item) =>
                item.title === "Maintenance & Growth" || item.title === "Legal",
            )
            .map((item, idx) => (
              <FooterLinkCard key={idx} title={item.title} links={item.links} />
            ))}
        </div>
      </div>

      <ul className="relative z-3 mx-auto mt-[5.7rem] mb-[4.6rem] flex max-w-[120.3rem] items-center justify-center gap-[4rem] rounded-[1.6rem] bg-white/15 px-[2.4rem] py-[.8rem]">
        {logoPopupsData.map((item, idx) => (
          <li key={idx}>
            <LogoPopup
              logo={item.logo}
              popupImage={item.popupImage}
              title={item.title}
              description={item.description}
              href={item.href}
              logoWidth={item.logoWidth}
              logoHeight={item.logoHeight}
            />
          </li>
        ))}
      </ul>

      <div className="relative z-3 mx-auto flex max-w-[120.3rem] items-center justify-between">
        <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white/70">
          Copyright © 2025 Creativepixels Inc. All rights reserved.
        </p>

        <ul className="flex items-center justify-end">
          <li>
            <Image
              src={creativeHostingLogo}
              width={73.11}
              height={34.03}
              alt=""
            />
          </li>

          <li className="mx-[2rem] h-[3.293rem] w-[0.5px] bg-white" />

          <li>
            <Image src={wpFixedLogo} width={75.48} height={31.7} alt="" />
          </li>

          <li className="mx-[2rem] h-[3.293rem] w-[0.5px] bg-white" />

          <li>
            <Image
              src={monthlyDesignsLogo}
              width={137.95}
              height={23.91}
              alt=""
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
