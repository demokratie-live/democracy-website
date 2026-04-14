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
  seoSchema,
  type SEO,
  footerSchema,
  type FooterData,
} from "../schemas";
import { loadMdx, loadAllMdx } from "./load-mdx";
import { loadYaml } from "./load-yaml";

// --- Pages ---

export async function getPage(slug: string) {
  return loadMdx<PageFrontmatter>(`pages/${slug}.mdx`, pageFrontmatterSchema);
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

export async function getDonateConfig(): Promise<DonateConfig> {
  return loadYaml("donate/config.yaml", donateConfigSchema);
}

// --- Roadmap ---

export async function getRoadmap(): Promise<RoadmapGoal[]> {
  return loadYaml("roadmap/goals.yaml", roadmapListSchema);
}

// --- Press ---

export async function getPressEntries(): Promise<PressEntry[]> {
  return loadYaml("press/media.yaml", pressListSchema);
}

// --- Global SEO ---

export async function getGlobalSEO(): Promise<SEO> {
  return loadYaml("site/seo.yaml", seoSchema);
}

// --- Footer ---

export async function getFooter(): Promise<FooterData> {
  return loadYaml("site/footer.yaml", footerSchema);
}
