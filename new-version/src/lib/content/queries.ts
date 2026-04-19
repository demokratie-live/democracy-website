import {
  blogFrontmatterSchema,
  type BlogFrontmatter,
  navigationSchema,
  type Navigation,
  pageFrontmatterSchema,
  type PageFrontmatter,
  faqListSchema,
  type FAQEntry,
  teamDataSchema,
  type TeamData,
  donateConfigSchema,
  type DonateConfig,
  roadmapListSchema,
  type RoadmapGoal,
  pressListSchema,
  type PressEntry,
  globalSeoSchema,
  type GlobalSEO,
  footerSchema,
  type FooterData,
} from "../schemas";
import { loadMdx, loadAllMdx } from "./load-mdx";
import { loadYaml } from "./load-yaml";

// --- Pages ---

/**
 * Load a page by its file identifier (the MDX filename without extension),
 * e.g. `"home"`, `"wahlometer"`. This is **not** the frontmatter `slug` field
 * (which is a user-facing URL path).
 */
export async function getPage(pageId: string) {
  return loadMdx<PageFrontmatter>(`pages/${pageId}.mdx`, pageFrontmatterSchema);
}

// --- Blog ---

export async function getAllBlogPosts() {
  const posts = await loadAllMdx<BlogFrontmatter>("blog", blogFrontmatterSchema);
  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
  );
}

export async function getBlogPost(slug: string) {
  const posts = await getAllBlogPosts();
  const post = posts.find((p) => p.frontmatter.slug === slug);
  if (!post) throw new Error(`Blog post not found: ${slug}`);
  return post;
}

export async function getBlogPostsByTag(tag: string) {
  const posts = await getAllBlogPosts();
  return posts.filter((p) => p.frontmatter.tags.includes(tag));
}

// --- Navigation ---

export async function getNavigation(): Promise<Navigation> {
  return loadYaml("site/navigation.yaml", navigationSchema);
}

// --- FAQ ---

export async function getFAQ(): Promise<FAQEntry[]> {
  return loadYaml("faq/allgemein.yaml", faqListSchema);
}

// --- Team ---

export async function getTeam(): Promise<TeamData> {
  return loadYaml("team/members.yaml", teamDataSchema);
}

// --- Donate ---

/**
 * Returned donate config with derived `progress.goal` = sum of category amounts.
 * `goal` is NOT part of the YAML (see donateProgressSchema) — categories are the
 * single source of truth.
 */
export type DonateConfigWithGoal = DonateConfig & {
  progress: DonateConfig["progress"] & { goal: number };
};

export async function getDonateConfig(): Promise<DonateConfigWithGoal> {
  const config = await loadYaml("donate/config.yaml", donateConfigSchema);
  const goal = config.categories.reduce((sum, c) => sum + c.amount, 0);
  return {
    ...config,
    progress: { ...config.progress, goal },
  };
}

// --- Roadmap ---

export async function getRoadmap(): Promise<RoadmapGoal[]> {
  return loadYaml("roadmap/goals.yaml", roadmapListSchema);
}

// --- Press ---

export async function getPressEntries(): Promise<PressEntry[]> {
  const entries = await loadYaml("press/media.yaml", pressListSchema);
  return [...entries].sort((a, b) => {
    if (a.date && b.date) return b.date.getTime() - a.date.getTime();
    if (a.date) return -1;
    if (b.date) return 1;
    return 0;
  });
}

// --- Global SEO ---

export async function getGlobalSEO(): Promise<GlobalSEO> {
  return loadYaml("site/seo.yaml", globalSeoSchema);
}

// --- Footer ---

export async function getFooter(): Promise<FooterData> {
  return loadYaml("site/footer.yaml", footerSchema);
}
