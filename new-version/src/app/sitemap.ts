import type { MetadataRoute } from "next";
import { getAllBlogPosts, getGlobalSEO } from "@/lib/content";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const seo = await getGlobalSEO();
  const baseUrl = seo.siteUrl;

  const staticPages = [
    "",
    "/ueber-uns",
    "/wahlometer",
    "/buerger",
    "/politiker",
    "/engineering",
    "/spenden",
    "/faq",
    "/presse",
    "/kontakt",
    "/blog",
    "/impressum",
    "/datenschutz",
    "/nutzungsbedingungen",
  ];

  const buildDate = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: buildDate,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path === "/spenden" ? 0.9 : 0.7,
  }));

  const blogPosts = await getAllBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.frontmatter.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
