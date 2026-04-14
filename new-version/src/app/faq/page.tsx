import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPage("faq");
  return {
    title: frontmatter.seo.title,
    description: frontmatter.seo.description,
  };
}

export default async function FAQPage() {
  const { content } = await getPage("faq");

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <MDXRemote source={content} components={mdxComponents} />
    </article>
  );
}
