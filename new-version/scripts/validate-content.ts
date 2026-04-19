/**
 * Content-Validierungs-Script
 * Prüft alle Content-Dateien gegen ihre Zod-Schemas.
 * Nutzung: pnpm validate-content
 */

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import yaml from "yaml";
import { z } from "zod";

import { pageFrontmatterSchema } from "../src/lib/schemas/page";
import { blogFrontmatterSchema } from "../src/lib/schemas/blog";
import { faqListSchema } from "../src/lib/schemas/faq";
import { teamDataSchema } from "../src/lib/schemas/team";
import { navigationSchema } from "../src/lib/schemas/navigation";
import { footerSchema } from "../src/lib/schemas/footer";
import { donateConfigSchema } from "../src/lib/schemas/donate";
import { roadmapListSchema } from "../src/lib/schemas/roadmap";
import { pressListSchema } from "../src/lib/schemas/press";
import { globalSeoSchema } from "../src/lib/schemas/seo";

const CONTENT_DIR = path.join(process.cwd(), "content");

let errors = 0;
let validated = 0;

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function validateMdxFiles(dir: string, schema: z.ZodType, label: string) {
  const fullDir = path.join(CONTENT_DIR, dir);
  if (!(await fileExists(fullDir))) {
    errors++;
    console.error(`  ❌ ${label}`);
    console.error(`     → Verzeichnis fehlt: ${dir}`);
    return;
  }

  const files = await fs.readdir(fullDir);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  for (const file of mdxFiles) {
    const filePath = path.join(fullDir, file);
    try {
      const raw = await fs.readFile(filePath, "utf-8");
      const { data } = matter(raw);
      schema.parse(data);
      validated++;
      console.log(`  ✅ ${label}/${file}`);
    } catch (err) {
      errors++;
      console.error(`  ❌ ${label}/${file}`);
      if (err instanceof z.ZodError) {
        for (const issue of err.issues) {
          console.error(`     → ${issue.path.join(".")}: ${issue.message}`);
        }
      } else {
        console.error(`     → ${err}`);
      }
    }
  }
}

async function validateYamlFile(filePath: string, schema: z.ZodType, label: string) {
  const fullPath = path.join(CONTENT_DIR, filePath);
  if (!(await fileExists(fullPath))) {
    errors++;
    console.error(`  ❌ ${label}`);
    console.error(`     → Datei fehlt: ${filePath}`);
    return;
  }

  try {
    const raw = await fs.readFile(fullPath, "utf-8");
    const data = yaml.parse(raw);
    schema.parse(data);
    validated++;
    console.log(`  ✅ ${label}`);
  } catch (err) {
    errors++;
    console.error(`  ❌ ${label}`);
    if (err instanceof z.ZodError) {
      for (const issue of err.issues) {
        console.error(`     → ${issue.path.join(".")}: ${issue.message}`);
      }
    } else {
      console.error(`     → ${err}`);
    }
  }
}

async function main() {
  console.log("\n🔍 Validiere Content-Dateien...\n");

  console.log("📄 Seiten (MDX):");
  await validateMdxFiles("pages", pageFrontmatterSchema, "pages");

  console.log("\n📝 Blog-Artikel (MDX):");
  await validateMdxFiles("blog", blogFrontmatterSchema, "blog");

  console.log("\n📊 YAML-Dateien:");
  await validateYamlFile("site/navigation.yaml", navigationSchema, "site/navigation.yaml");
  await validateYamlFile("site/footer.yaml", footerSchema, "site/footer.yaml");
  await validateYamlFile("site/seo.yaml", globalSeoSchema, "site/seo.yaml");
  await validateYamlFile("faq/allgemein.yaml", faqListSchema, "faq/allgemein.yaml");
  await validateYamlFile("team/members.yaml", teamDataSchema, "team/members.yaml");
  await validateYamlFile("donate/config.yaml", donateConfigSchema, "donate/config.yaml");
  await validateYamlFile("roadmap/goals.yaml", roadmapListSchema, "roadmap/goals.yaml");
  await validateYamlFile("press/media.yaml", pressListSchema, "press/media.yaml");

  console.log(`\n📋 Ergebnis: ${validated} Dateien validiert, ${errors} Fehler\n`);

  if (errors > 0) {
    process.exit(1);
  }
}

main();
