"use client";

import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import Loader from "../animations/Loader";
import useLenis from "@/hooks/useLenis";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useLenis();

  return (
    <>
      <Loader onComplete={() => setIsLoading(false)} />

      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
