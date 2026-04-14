import type { BlogFrontmatter } from "@/lib/schemas";
import { BlogCard } from "./BlogCard";

interface BlogListProps {
  posts: Array<{ frontmatter: BlogFrontmatter }>;
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return <p className="text-center text-muted-foreground">Noch keine Artikel vorhanden.</p>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.frontmatter.slug} post={post.frontmatter} />
      ))}
    </div>
  );
}
