import type { MetadataRoute } from "next";
import { getGlobalSEO } from "@/lib/content";

export const dynamic = "force-static";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const seo = await getGlobalSEO();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${seo.siteUrl}/sitemap.xml`,
  };
}
