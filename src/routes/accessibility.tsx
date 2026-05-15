import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { type PageMeta } from "@/lib/seo";

export const pageMeta: PageMeta = {
  title: "Accessibility - Joslin Preparatory School",
  description: "Our commitment to digital and physical accessibility for every family.",
  canonicalPath: "/accessibility",
};

export default function AccessibilityPage() {
  return (
    <SiteLayout>
      <PageHero crumb="Legal" title="Accessibility Statement" />
      <article className="mx-auto max-w-3xl px-6 py-16 text-brand-black">
        <p className="text-sm text-brand-muted">Last updated: 8 May 2026</p>
        <div className="mt-8 space-y-6 text-base leading-relaxed">
          <p>
            Joslin Preparatory School is committed to making learning - and our website - accessible
            to every child, parent, and visitor regardless of ability.
          </p>

          <h2 className="font-display text-2xl font-bold">Our Standards</h2>
          <p>
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. Our
            site is regularly tested with screen readers, keyboard-only navigation, and against
            colour-contrast standards.
          </p>

          <h2 className="font-display text-2xl font-bold">Features</h2>
          <ul className="list-disc pl-6">
            <li>Semantic HTML and ARIA landmarks for screen-reader users.</li>
            <li>Keyboard-navigable menus, forms, and interactive elements.</li>
            <li>High contrast between text and background.</li>
            <li>Descriptive alternative text for meaningful imagery.</li>
            <li>Responsive layouts that scale to 200% without loss of content.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold">Physical Campus</h2>
          <p>
            Our Bondo campus offers ramped entrances, accessible washrooms, and inclusive classroom
            design. Tours can be arranged with mobility, sensory, or communication accommodations.
          </p>

          <h2 className="font-display text-2xl font-bold">Feedback</h2>
          <p>
            If you encounter an accessibility barrier, please contact us at access@joslinprep.ac.ke
            or 0712006462. We aim to respond within 5 working days.
          </p>
        </div>
      </article>
    </SiteLayout>
  );
}
