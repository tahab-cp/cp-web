"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Header from "./Header";
import Footer from "./Footer";
import useLenis from "@/hooks/useLenis";
import StickyHeader from "./StickyHeader";
import BackToTopBtn from "../common/BackToTopBtn";
import ScrollToTop from "../common/ScrollToTop";
import Script from "next/script";

gsap.registerPlugin(ScrollTrigger, SplitText);

<Script src="https://app.cal.com/embed/embed.js" strategy="afterInteractive" />;

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenis();
  return (
    <div className="relative">
      <ScrollToTop />
      <Header />
      <StickyHeader />
      {children}
      <Footer />

      <BackToTopBtn />
    </div>
  );
}
