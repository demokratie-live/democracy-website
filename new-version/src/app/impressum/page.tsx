import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { ContentPage } from "@/components/blocks/ContentPage";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPage("impressum");
  return {
    title: frontmatter.seo.title,
    description: frontmatter.seo.description,
  };
}

export default async function ImpressumPage() {
  const { frontmatter, content } = await getPage("impressum");
  return <ContentPage frontmatter={frontmatter} content={content} />;
}
