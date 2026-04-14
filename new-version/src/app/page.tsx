import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPage("home");
  return {
    title: frontmatter.seo.title,
    description: frontmatter.seo.description,
  };
}

export default async function Home() {
  const { content } = await getPage("home");

  return <MDXRemote source={content} components={mdxComponents} />;
}
