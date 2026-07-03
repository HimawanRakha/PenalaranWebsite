import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://penalaran.its.ac.id";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
