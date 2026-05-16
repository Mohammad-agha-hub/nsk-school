import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all well-behaved crawlers
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Block all API routes
          "/admin/", // Block any admin pages (if added later)
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
