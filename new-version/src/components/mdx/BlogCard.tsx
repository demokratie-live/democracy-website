import Link from "next/link";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import type { BlogFrontmatter } from "@/lib/schemas";

interface BlogCardProps {
  post: BlogFrontmatter;
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-border transition-shadow hover:shadow-md">
      {post.image && (
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <time dateTime={new Date(post.date).toISOString()}>{formatDate(post.date)}</time>
      </div>
      <h2 className="mt-2 text-xl font-bold text-foreground group-hover:text-primary-600">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
