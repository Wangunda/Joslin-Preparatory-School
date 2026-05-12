import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { X, ChevronLeft, ChevronRight, Instagram, Facebook } from "lucide-react";
import { gallery as galleryItems, resolveImage } from "@/lib/content";
import { type PageMeta } from "@/lib/seo";

export const pageMeta: PageMeta = {
  title: "Gallery — Joslin Preparatory School Bondo",
  description:
    "Moments from classroom, outdoor play, arts and events at Joslin Preparatory School.",
  ogTitle: "Gallery — Joslin Preparatory School",
  ogDescription: "Life inside our Bondo early learning centre.",
  canonicalPath: "/gallery",
};

const items = galleryItems.map((g) => ({
  src: resolveImage(g.image),
  cat: g.category,
  alt: g.alt,
}));
const cats = ["All", "Classroom", "Outdoor Play", "Arts and Crafts", "Events"] as const;

export default function GalleryPage() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const [idx, setIdx] = useState<number | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <SiteLayout>
      <PageHero title="Our Gallery" crumb="Home / Gallery" />
      <section className="bg-brand-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-3">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border-2 border-brand-red px-5 py-2 text-sm font-semibold transition-colors ${
                  active === c
                    ? "bg-brand-red text-brand-white"
                    : "text-brand-red hover:bg-brand-red/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((it, i) => (
              <Reveal key={it.src + i} delay={(i % 4) * 0.05}>
                <button
                  onClick={() => setIdx(i)}
                  className="group relative block aspect-square w-full overflow-hidden"
                >
                  <img
                    src={it.src}
                    alt={it.alt || it.cat}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-black/0 transition-colors group-hover:bg-brand-black/40" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {idx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black/95 p-6">
          <button onClick={() => setIdx(null)} className="absolute right-6 top-6 text-brand-white">
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={() => setIdx((idx - 1 + filtered.length) % filtered.length)}
            className="absolute left-4 text-brand-red md:left-8"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <img src={filtered[idx].src} alt="" className="max-h-[85vh] max-w-full object-contain" />
          <button
            onClick={() => setIdx((idx + 1) % filtered.length)}
            className="absolute right-4 text-brand-red md:right-8"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
      <section className="bg-brand-red py-16 text-brand-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Share Your Moments</h2>
          <p className="mt-3 text-white/90">Tag us @JoslinPrep on Instagram and Facebook</p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-white text-brand-red"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-white text-brand-red"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
