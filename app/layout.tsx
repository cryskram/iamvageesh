import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const mainFont = Space_Grotesk({ subsets: ["latin"], weight: ["400"] });
const url = process.env.BASE_URL || "https://iamvageesh.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Vageesh G N - Full-Stack Developer & Problem Solver",
    template: "%s | Vageesh G N",
  },
  description:
    "Full-stack developer building beautiful frontends and powerful backends. Explore projects, skills, and open-source work.",

  metadataBase: new URL("https://iamvageesh.vercel.app"),

  alternates: {
    canonical: url,
  },

  openGraph: {
    title: "Vageesh G N - Full-Stack Developer",
    description:
      "Full-stack developer building beautiful frontends and powerful backends. Explore projects, skills, and open-source work.",
    url: url,
    siteName: "Vageesh G N",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Vageesh G N - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vageesh G N - Full-Stack Developer",
    description:
      "Full-stack developer building beautiful frontends and powerful backends.",
    images: ["/images/hero.png"],
    creator: "@gn_vageesh",
  },

  verification: {
    google: "w5AEpKTK4j7WT2iTr-uW4B__Q29_Vxk27xneiA4XahY",
  },

  keywords: [
    "Vageesh G N",
    "full-stack developer",
    "web developer",
    "Next.js",
    "React",
    "TypeScript",
    "portfolio",
    "open source",
  ],

  authors: [{ name: "Vageesh G N", url: "https://iamvageesh.vercel.app" }],
  creator: "Vageesh G N",
  publisher: "Vageesh G N",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vageesh G N",
    url: "https://iamvageesh.vercel.app",
    image: "https://iamvageesh.vercel.app/images/hero.png",
    jobTitle: "Full-Stack Developer",
    sameAs: [
      "https://github.com/cryskram",
      "https://linkedin.com/in/vageeshgn",
      "https://x.com/gn_vageesh",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
    ],
  };

  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body
        className={`${mainFont.className} bg-slate-200 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-200`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <div className="fixed top-4 right-4 z-40">
            <ThemeToggle />
          </div>
          <div id="main-content">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
