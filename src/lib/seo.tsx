import { useEffect } from "react";

const SITE_URL = "https://joslinprep.ac.ke";
const DEFAULT_TITLE = "Joslin Preparatory School — Daycare & Preschool in Bondo, Kenya";
const DEFAULT_DESCRIPTION =
  "Joslin Preparatory School: CBC-aligned daycare and preschool in Bondo, Kenya. Guided by Faith, Growing in Knowledge.";

export type PageMeta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalPath?: string;
};

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
}

export function RouteMeta({ meta }: { meta?: PageMeta }) {
  useEffect(() => {
    const title = meta?.title ?? DEFAULT_TITLE;
    const description = meta?.description ?? DEFAULT_DESCRIPTION;
    const ogTitle = meta?.ogTitle ?? title;
    const ogDescription = meta?.ogDescription ?? description;
    const canonicalPath = meta?.canonicalPath ?? "/";

    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: ogTitle });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: ogDescription,
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: ogTitle });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: ogDescription,
    });
    upsertLink("canonical", new URL(canonicalPath, SITE_URL).toString());
  }, [meta]);

  return null;
}
