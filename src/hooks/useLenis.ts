"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1, // adjust for scroll feel
      wheelMultiplier: 1.0,
    });

    // connect Lenis to GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // GSAP uses seconds, Lenis wants ms
    });

    // update ScrollTrigger on scroll
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);
}
