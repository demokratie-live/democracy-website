import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import type { PageFrontmatter } from "@/lib/schemas";

interface ContentPageProps {
  frontmatter: PageFrontmatter;
  content: string;
}

export function ContentPage({ frontmatter, content }: ContentPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">{frontmatter.title}</h1>
      <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-a:text-primary-500 prose-a:no-underline prose-a:hover:underline">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </article>
  );
}
