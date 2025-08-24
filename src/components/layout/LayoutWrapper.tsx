"use client";

import Header from "./Header";
import Footer from "./Footer";
import Loader from "../animations/Loader";
import useLenis from "@/hooks/useLenis";
import { useLoaderStore } from "@/store/useLoader";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const setReady = useLoaderStore((state) => state.setReady);
  const isReady = useLoaderStore((state) => state.isReady);

  useLenis();

  return (
    <>
      <Loader onComplete={() => setReady(true)} />

      <div className={!isReady ? "h-screen overflow-hidden" : ""}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
