import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { ContentPage } from "@/components/blocks/ContentPage";
import { AppBadges } from "@/components/blocks/AppBadges";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPage("politiker");
  return {
    title: frontmatter.seo.title,
    description: frontmatter.seo.description,
  };
}

export default async function PolitikerPage() {
  const { frontmatter, content } = await getPage("politiker");

  return (
    <>
      <ContentPage frontmatter={frontmatter} content={content} />
      <div className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <AppBadges className="justify-center" />
        </div>
      </div>
    </>
  );
}
