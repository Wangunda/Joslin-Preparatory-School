import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { type PageMeta } from "@/lib/seo";

export const pageMeta: PageMeta = {
  title: "Privacy Policy — Joslin Preparatory School",
  description: "How Joslin Preparatory School collects, uses, and protects family information.",
  canonicalPath: "/privacy",
};

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero crumb="Legal" title="Privacy Policy" />
      <article className="mx-auto max-w-3xl px-6 py-16 text-brand-black">
        <p className="text-sm text-brand-muted">Last updated: 8 May 2026</p>
        <div className="prose prose-neutral mt-8 space-y-6 text-base leading-relaxed">
          <p>
            Joslin Preparatory School ("we", "us", "our") is committed to protecting the privacy of
            children, parents, guardians, and staff. This policy explains what information we
            collect, how we use it, and your rights under the Kenya Data Protection Act, 2019.
          </p>

          <h2 className="font-display text-2xl font-bold">1. Information We Collect</h2>
          <ul className="list-disc pl-6">
            <li>
              Child details: full name, date of birth, photo, medical and dietary information.
            </li>
            <li>
              Parent/guardian details: names, ID number, phone, email, residential address,
              employer.
            </li>
            <li>Emergency contacts and authorised pick-up persons.</li>
            <li>Payment and billing records.</li>
            <li>Website usage data via cookies (see our Cookies notice).</li>
          </ul>

          <h2 className="font-display text-2xl font-bold">2. How We Use Your Information</h2>
          <p>
            We use information to provide childcare and education services, communicate with
            families, process fees, ensure child safety, comply with regulators (NACECE, Ministry of
            Education), and improve our website.
          </p>

          <h2 className="font-display text-2xl font-bold">3. Sharing</h2>
          <p>
            We never sell your data. We share only with: licensed regulators when required by law,
            our payment processor, and IT service providers under strict confidentiality.
          </p>

          <h2 className="font-display text-2xl font-bold">4. Storage & Security</h2>
          <p>
            Records are kept in encrypted digital systems and locked physical files. Access is
            restricted to authorised staff. Data is retained for the period required by Kenyan
            education law.
          </p>

          <h2 className="font-display text-2xl font-bold">5. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal data, withdraw consent,
            or lodge a complaint with the Office of the Data Protection Commissioner of Kenya.
          </p>

          <h2 className="font-display text-2xl font-bold">6. Contact</h2>
          <p>
            Data Protection Officer — privacy@joslinprep.ac.ke · +254 700 000 000 · Bondo, Siaya.
          </p>
        </div>
      </article>
    </SiteLayout>
  );
}
