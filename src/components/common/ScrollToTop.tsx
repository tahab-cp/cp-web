"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    }
  }, [pathname]); // runs whenever the route changes

  return null;
}
