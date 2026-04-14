import fs from "fs/promises";
import path from "path";
import yaml from "yaml";
import { z } from "zod";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function loadYaml<T>(filePath: string, schema: z.ZodType<T>): Promise<T> {
  const fullPath = path.join(CONTENT_DIR, filePath);
  const raw = await fs.readFile(fullPath, "utf-8");
  const data = yaml.parse(raw);
  return schema.parse(data);
}
