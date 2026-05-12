import { motion } from "framer-motion";
import { Sparkles, BookOpen, Users, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { homepage, programs, testimonials, gallery, resolveImage } from "@/lib/content";
import { Link } from "@/lib/router";
import { type PageMeta } from "@/lib/seo";

const iconMap = { Sparkles, BookOpen, Users, Star } as const;

export const pageMeta: PageMeta = {
  title: "Joslin Preparatory School — Daycare & Preschool in Bondo, Kenya",
  description:
    "CBC-aligned daycare and preschool in Bondo, Kenya. Guided by Faith, Growing in Knowledge.",
  ogTitle: "Joslin Preparatory School",
  ogDescription:
    "Guided by Faith, Growing in Knowledge — CBC-aligned early childhood education in Bondo.",
  canonicalPath: "/",
};

export default function Index() {
  const { hero, stats, why, cta } = homepage;
  const heroImg = resolveImage(hero.heroImage);
  return (
    <SiteLayout>
      <section className="relative flex min-h-[90vh] items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-brand-black/65" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-brand-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl font-display text-5xl font-bold leading-[1.05] md:text-7xl"
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-white/80"
          >
            {hero.subheading}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/admissions"
              className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-brand-white transition-transform hover:scale-105"
            >
              {hero.primaryBtn}
            </Link>
            <Link
              to="/gallery"
              className="rounded-full border-2 border-brand-white px-7 py-3.5 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-white hover:text-brand-black"
            >
              {hero.secondaryBtn}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-black py-14 text-brand-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-brand-red md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Why Choose Us
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold text-brand-black md:text-5xl">
              Built for Kenyan Children
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {why.map((c, i) => {
              const Icon = iconMap[c.icon as keyof typeof iconMap] ?? Sparkles;
              return (
                <Reveal key={c.title} delay={i * 0.1}>
                  <div className="h-full border-t-4 border-brand-red bg-brand-white p-8 shadow-sm ring-1 ring-brand-border">
                    <div className="inline-flex h-12 w-12 items-center justify-center bg-brand-red/10 text-brand-red">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-brand-black">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-brand-muted">{c.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-brand-black md:text-5xl">
              Programs for Every Stage
            </h2>
            <p className="mt-3 max-w-2xl text-brand-muted">
              From baby class to PP2 — nurturing your child at every milestone.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="overflow-hidden bg-brand-white shadow-sm ring-1 ring-brand-border">
                  <div className="h-2 bg-brand-red" />
                  <div className="p-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-2xl font-bold text-brand-black">
                        {p.title}
                      </h3>
                      <span className="rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-brand-white">
                        {p.ageRange}
                      </span>
                    </div>
                    <p className="mt-4 text-brand-muted">{p.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-24">
        <div className="mx-auto mb-24 max-w-7xl px-6">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Watch</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-black md:text-5xl">
              A Glimpse of Joslin
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-lg ring-1 ring-brand-border shadow-lg">
              <video
                src="/joslin-school.mp4"
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full object-contain bg-brand-black"
              />
            </div>
          </Reveal>
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-brand-black md:text-5xl">
              Loved by Bondo Families
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="h-full border border-brand-black bg-brand-white p-7">
                  <div className="flex gap-1 text-brand-red">
                    {Array.from({ length: t.rating ?? 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 italic text-brand-muted">"{t.quote}"</p>
                  <div className="mt-6">
                    <p className="font-bold text-brand-black">{t.name}</p>
                    <p className="text-xs text-brand-muted">{t.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-brand-black md:text-5xl">
              Life at Joslin
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
            {gallery.slice(0, 5).map((g, i) => (
              <Reveal key={g.image} delay={i * 0.05}>
                <div className="group relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={resolveImage(g.image)}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-black/0 transition-colors group-hover:bg-brand-black/30" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-red py-20 text-brand-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">{cta.heading}</h2>
          <p className="mt-4 text-white/90">{cta.subtext}</p>
          <Link
            to="/admissions"
            className="mt-8 inline-block rounded-full bg-brand-white px-8 py-4 text-sm font-bold text-brand-red transition-transform hover:scale-105"
          >
            {cta.buttonText}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
