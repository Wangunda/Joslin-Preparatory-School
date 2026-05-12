import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { programs, resolveImage } from "@/lib/content";
import { type PageMeta } from "@/lib/seo";

export const pageMeta: PageMeta = {
  title: "Programs — Joslin Preparatory School Bondo Daycare & Preschool",
  description: "Baby Nest, Wobbler, Pre-Primary 1 and 2 — programs for ages 3 months to 6 years.",
  ogTitle: "Joslin Preparatory School Programs",
  ogDescription: "Play-based programs for every stage from baby class to PP2.",
  canonicalPath: "/programs",
};

export default function ProgramsPage() {
  return (
    <SiteLayout>
      <PageHero title="Our Programs" crumb="Home / Programs" />

      <div className="bg-brand-white">
        {programs.map((p, i) => (
          <section
            key={p.title}
            className={i % 2 === 0 ? "bg-brand-white py-20" : "bg-brand-surface py-20"}
          >
            <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
              <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={resolveImage(p.image)}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <span className="inline-block rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-brand-white">
                  {p.ageRange}
                </span>
                <h2 className="mt-4 font-display text-4xl font-bold text-brand-black md:text-5xl">
                  {p.title}
                </h2>
                <p className="mt-3 text-brand-muted">{p.hours}</p>
                <ul className="mt-6 space-y-2">
                  {p.activities.map((a) => (
                    <li key={a} className="flex gap-3 text-brand-black">
                      <span className="mt-2 inline-block h-2 w-2 shrink-0 bg-brand-red" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-display text-2xl font-bold text-brand-red">{p.fees}</p>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-brand-black">Program Comparison</h2>
          </Reveal>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-brand-black text-brand-white">
                  {["Program", "Age Range", "Daily Hours", "Meals Included", "Teacher : Child"].map(
                    (h) => (
                      <th key={h} className="px-5 py-4 text-sm font-semibold">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Baby Nest", "3–12 months", "9 hrs", "3 + bottles", "1 : 4"],
                  ["Wobbler", "1–2 years", "9 hrs", "3 meals", "1 : 6"],
                  ["Pre-Primary 1", "3–4 years", "9 hrs", "3 meals", "1 : 8"],
                  ["Pre-Primary 2", "5–6 years", "9 hrs", "3 meals", "1 : 10"],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? "bg-brand-white" : "bg-brand-surface"}>
                    {row.map((c, k) => (
                      <td
                        key={k}
                        className={`border-b border-brand-border px-5 py-4 text-sm ${k === 0 ? "font-bold text-brand-red" : "text-brand-black"}`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
