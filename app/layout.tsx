import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const mainFont = Space_Grotesk({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Vageesh G N",
  description: "Oh... Hello there!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${mainFont.className} antialiased bg-slate-200 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
