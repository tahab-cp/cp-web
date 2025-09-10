import "../styles/globals.css";
import { Onest } from "next/font/google";
import { Metadata } from "next";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "CreativePixels | Creative Design Agency Manchester",
    template: "CreativePixels | %s",
  },
  description:
    "We focus on being a design-driven creative agency through bespoke design and development, specialising in all things design and making businesses stand out.",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${onest.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
