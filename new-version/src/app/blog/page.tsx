import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/content";
import { BlogList } from "@/components/mdx/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Neuigkeiten und Artikel von DEMOCRACY Deutschland — App-Updates, Einblicke und mehr.",
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-foreground">Blog</h1>
      <p className="mb-10 text-lg text-muted-foreground">
        Neuigkeiten, Updates und Einblicke rund um DEMOCRACY.
      </p>
      <BlogList posts={posts} />
    </article>
  );
}
