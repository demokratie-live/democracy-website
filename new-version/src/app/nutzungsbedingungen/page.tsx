import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { ContentPage } from "@/components/blocks/ContentPage";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPage("nutzungsbedingungen");
  return {
    title: frontmatter.seo.title,
    description: frontmatter.seo.description,
  };
}

export default async function NutzungsbedingungenPage() {
  const { frontmatter, content } = await getPage("nutzungsbedingungen");
  return <ContentPage frontmatter={frontmatter} content={content} />;
}
