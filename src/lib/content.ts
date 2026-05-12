// Content loaders backed by JSON files in src/content/.
// Decap CMS edits these files directly via Git.

import hero from "@/content/homepage/hero.json";
import stats from "@/content/homepage/stats.json";
import why from "@/content/homepage/why.json";
import cta from "@/content/homepage/cta.json";
import settings from "@/content/settings/general.json";

// Eagerly load every asset so we can resolve "/src/assets/foo.jpg" strings
// stored in CMS JSON to the bundled URL.
const assetMap = import.meta.glob("/src/assets/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

/** Resolve image paths from CMS content. Supports:
 *  - /src/assets/foo.jpg  → bundled asset URL
 *  - /images/uploads/foo.jpg → public folder URL (returned as-is)
 *  - http(s)://… → external URL (returned as-is)
 */
export function resolveImage(path: string | undefined | null): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  if (assetMap[path]) return assetMap[path];
  return path;
}

// Folder collections — load every JSON file with Vite glob.
type ProgramEntry = {
  title: string;
  ageRange: string;
  hours: string;
  meals: boolean;
  ratio: string;
  fees: string;
  description: string;
  activities: string[];
  image: string;
  order: number;
};
type TestimonialEntry = {
  name: string;
  location: string;
  quote: string;
  rating: number;
  active: boolean;
};
type GalleryEntry = { title: string; image: string; category: string; alt: string };
type TeamEntry = { name: string; title: string; bio: string; photo: string; order: number };
type FaqEntry = { question: string; answer: string; order: number };

function loadFolder<T>(modules: Record<string, unknown>): T[] {
  return Object.values(modules) as T[];
}

export const programs = loadFolder<ProgramEntry>(
  import.meta.glob("/src/content/programs/*.json", { eager: true, import: "default" }),
).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const testimonials = loadFolder<TestimonialEntry>(
  import.meta.glob("/src/content/testimonials/*.json", { eager: true, import: "default" }),
).filter((t) => t.active !== false);

export const gallery = loadFolder<GalleryEntry>(
  import.meta.glob("/src/content/gallery/*.json", { eager: true, import: "default" }),
);

export const team = loadFolder<TeamEntry>(
  import.meta.glob("/src/content/team/*.json", { eager: true, import: "default" }),
).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const faqs = loadFolder<FaqEntry>(
  import.meta.glob("/src/content/faqs/*.json", { eager: true, import: "default" }),
).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const homepage = { hero, stats: stats.stats, why: why.cards, cta };
export { settings };
