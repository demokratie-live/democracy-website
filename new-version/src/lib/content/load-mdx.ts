import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function loadMdx<T>(
  filePath: string,
  schema: z.ZodType<T>,
): Promise<{ frontmatter: T; content: string }> {
  const fullPath = path.join(CONTENT_DIR, filePath);
  const raw = await fs.readFile(fullPath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = schema.parse(data);
  return { frontmatter, content };
}

export async function loadAllMdx<T>(
  dirPath: string,
  schema: z.ZodType<T>,
): Promise<Array<{ frontmatter: T; content: string; fileName: string }>> {
  const fullDir = path.join(CONTENT_DIR, dirPath);
  const files = await fs.readdir(fullDir);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const results = await Promise.all(
    mdxFiles.map(async (fileName) => {
      const { frontmatter, content } = await loadMdx(path.join(dirPath, fileName), schema);
      return { frontmatter, content, fileName };
    }),
  );

  return results;
}
