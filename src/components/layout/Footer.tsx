import Image from "next/image";
import footerBg from "../../assets/images/footer-bg.png";

const Footer = () => {
  return (
    <footer className="relative h-[121.7rem] w-full">
      <Image
        src={footerBg}
        alt="Footer Background"
        fill
        className="object-cover object-center"
        priority
      />
    </footer>
  );
};

export default Footer;
