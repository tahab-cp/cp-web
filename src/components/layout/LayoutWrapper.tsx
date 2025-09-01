"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Header from "./Header";
import Footer from "./Footer";
import useLenis from "@/hooks/useLenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenis();
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
