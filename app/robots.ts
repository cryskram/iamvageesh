import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/files/", "/api/"],
    },
    sitemap: "https://iamvageesh.vercel.app/sitemap.xml",
  };
}
