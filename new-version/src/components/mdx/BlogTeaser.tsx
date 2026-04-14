import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/content";

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function BlogTeaser() {
  const posts = await getAllBlogPosts();
  const latest = posts.slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((post) => (
          <Link
            key={post.frontmatter.slug}
            href={`/blog/${post.frontmatter.slug}`}
            className="group rounded-xl bg-white p-5 shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <time dateTime={new Date(post.frontmatter.date).toISOString()}>
                {formatDate(post.frontmatter.date)}
              </time>
            </div>
            <h3 className="mt-2 font-bold text-foreground group-hover:text-primary-600">
              {post.frontmatter.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{post.frontmatter.excerpt}</p>
          </Link>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600"
        >
          Alle Artikel anzeigen
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
