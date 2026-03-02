import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const mainFont = Space_Grotesk({ subsets: ["latin"], weight: ["400"] });
const url = process.env.BASE_URL as string;

export const metadata: Metadata = {
  title: "Vageesh G N",
  description: "Oh... Hello there!",

  metadataBase: new URL("https://iamvageesh.vercel.app"),

  alternates: {
    canonical: url,
  },

  openGraph: {
    title: "Vageesh G N",
    description: "Oh... Hello there!",
    url: url,
    siteName: "Vageesh G N",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Website cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vageesh G N",
    description: "Oh... Hello there!",
    images: ["/images/hero.png"],
  },

  verification: {
    google: "w5AEpKTK4j7WT2iTr-uW4B__Q29_Vxk27xneiA4XahY",
  },
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
        <Footer />
      </body>
    </html>
  );
}
