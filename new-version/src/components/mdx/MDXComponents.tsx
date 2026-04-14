import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

function isInternalLink(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

type AnchorProps = ComponentPropsWithoutRef<"a">;

function MdxLink({ href, children, ...props }: AnchorProps) {
  if (href && isInternalLink(href)) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

export const mdxComponents = {
  a: MdxLink,
};
