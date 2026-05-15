import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { type PageMeta } from "@/lib/seo";

export const pageMeta: PageMeta = {
  title: "Terms of Service - Joslin Preparatory School",
  description: "Terms governing enrollment and use of the Joslin Preparatory School website.",
  canonicalPath: "/terms",
};

export default function TermsPage() {
  return (
    <SiteLayout>
      <PageHero crumb="Legal" title="Terms of Service" />
      <article className="mx-auto max-w-3xl px-6 py-16 text-brand-black">
        <p className="text-sm text-brand-muted">Last updated: 8 May 2026</p>
        <div className="mt-8 space-y-6 text-base leading-relaxed">
          <p>
            By enrolling a child or using the joslinprep.ac.ke website, you agree to the following
            terms.
          </p>

          <h2 className="font-display text-2xl font-bold">1. Enrollment</h2>
          <p>
            A place is confirmed only after a signed application, payment of the registration fee,
            and acceptance by the school. Places are non-transferable.
          </p>

          <h2 className="font-display text-2xl font-bold">2. Fees</h2>
          <p>
            Fee details are shared upon request by the school office and may be updated from time to
            time.
          </p>

          <h2 className="font-display text-2xl font-bold">3. Withdrawal</h2>
          <p>
            One full term&apos;s written notice is required for withdrawal, failing which a
            term&apos;s fee is payable in lieu of notice.
          </p>

          <h2 className="font-display text-2xl font-bold">4. Code of Conduct</h2>
          <p>
            Parents, guardians, and visitors are expected to treat staff and other families with
            respect. The school reserves the right to terminate enrollment for serious or repeated
            breaches.
          </p>

          <h2 className="font-display text-2xl font-bold">5. Health & Safety</h2>
          <p>
            Immunisations must be up to date. Sick children must remain at home. The school may seek
            emergency medical care if guardians cannot be reached.
          </p>

          <h2 className="font-display text-2xl font-bold">6. Website Use</h2>
          <p>
            Content on this site is for informational purposes. You may not copy, reproduce, or
            republish material without written permission.
          </p>

          <h2 className="font-display text-2xl font-bold">7. Governing Law</h2>
          <p>
            These terms are governed by the laws of the Republic of Kenya. Disputes shall be
            resolved in Bondo courts.
          </p>

          <h2 className="font-display text-2xl font-bold">8. Contact</h2>
          <p>hello@joslinprep.ac.ke · 0712006462</p>
        </div>
      </article>
    </SiteLayout>
  );
}
