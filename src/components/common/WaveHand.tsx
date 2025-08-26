import { useEffect, useRef } from "react";
import gsap from "gsap";

const WaveHand = () => {
  const handRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (handRef.current) {
      gsap.to(handRef.current, {
        rotation: 20, // tilt right
        transformOrigin: "70% 70%", // pivot around lower part of hand
        duration: 0.3,
        yoyo: true,
        repeat: -1, // infinite wave
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <span ref={handRef} style={{ display: "inline-block" }}>
      👋
    </span>
  );
};

export default WaveHand;
