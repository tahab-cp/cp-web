import type { Metadata } from "next";
import "../styles/globals.css";
import { Onest } from "next/font/google";
import Header from "@/components/layout/Header";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CreativePixels | Creative Design Agency Manchester",
  description:
    "We focus on being a design-driven creative agency through bespoke design and development, specialising in all things design and making businesses stand out.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={onest.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
