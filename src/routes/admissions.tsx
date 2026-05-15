import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { type PageMeta } from "@/lib/seo";

export const pageMeta: PageMeta = {
  title: "Admissions - Apply to Joslin Preparatory School Bondo",
  description:
    "Apply for a place at Joslin Preparatory School. Simple 4-step admissions process for Bondo families.",
  ogTitle: "Joslin Preparatory School Admissions",
  ogDescription: "Enquire, tour, apply and enrol - admissions are open.",
  canonicalPath: "/admissions",
};

const steps = [
  { n: 1, t: "Enquire", d: "Reach out via WhatsApp, email or phone. We'll answer your questions." },
  { n: 2, t: "Book a Tour", d: "Visit the school and meet our educators in person." },
  { n: 3, t: "Submit Application", d: "Complete the form below with your child's details." },
  {
    n: 4,
    t: "Enrolment",
    d: "Receive the fee structure on request and complete enrolment with the school office.",
  },
];

const faqs = [
  {
    q: "What is the daily school schedule?",
    a: "Our day runs Mon-Fri 7:30 AM to 4:30 PM, with structured learning, play, meals and rest woven into every day.",
  },
  {
    q: "Do you provide meals and snacks?",
    a: "Yes - three nutritious meals plus snacks daily, prepared on-site by our trained kitchen staff.",
  },
  {
    q: "Is the school CBC accredited?",
    a: "Yes. We follow Kenya's Competency Based Curriculum and are NACECE registered.",
  },
  {
    q: "What languages are taught?",
    a: "English and Kiswahili side by side from baby class onwards.",
  },
  {
    q: "How do I get the fee structure?",
    a: "The fee structure is available upon request. Please contact the school office by phone, WhatsApp, or email and we will share the current details with you.",
  },
  {
    q: "Is there a waiting list?",
    a: "Spaces are limited each term. We recommend applying at least one term in advance.",
  },
];

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteLayout>
      <PageHero title="Admissions" crumb="Home / Admissions" />

      <section className="bg-brand-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-brand-black">Admissions Process</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-red font-display text-2xl font-bold text-brand-white">
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-black">{s.t}</h3>
                  <p className="mt-2 text-sm text-brand-muted">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="bg-brand-white p-8 ring-1 ring-brand-border md:p-12">
              <h2 className="font-display text-3xl font-bold text-brand-black">
                Apply for a Place
              </h2>
              {submitted ? (
                <div className="mt-8 flex flex-col items-center gap-3 border border-brand-border bg-brand-surface p-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-brand-red" />
                  <p className="font-display text-xl font-bold text-brand-black">Thank you!</p>
                  <p className="text-brand-muted">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-6 space-y-5"
                >
                  {[
                    { label: "Parent Full Name", type: "text", placeholder: "Jane Atieno" },
                    { label: "Child's Full Name", type: "text", placeholder: "Amani Achieng" },
                    { label: "Child's Date of Birth", type: "date" },
                    { label: "Phone Number", type: "tel", placeholder: "+254 7XX XXX XXX" },
                    { label: "Email Address", type: "email", placeholder: "you@email.com" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-sm font-semibold text-brand-black">
                        {f.label}
                      </label>
                      <input
                        required
                        type={f.type}
                        placeholder={f.placeholder}
                        className="mt-2 w-full border border-brand-border bg-brand-white px-4 py-3 outline-none focus:border-brand-red"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-semibold text-brand-black">
                      Program Interested In
                    </label>
                    <select
                      required
                      className="mt-2 w-full border border-brand-border bg-brand-white px-4 py-3 outline-none focus:border-brand-red"
                    >
                      <option value="">Select a program</option>
                      <option>Baby Nest (3-12 months)</option>
                      <option>Wobbler Class (1-2 years)</option>
                      <option>Pre-Primary 1 (3-4 years)</option>
                      <option>Pre-Primary 2 (5-6 years)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-black">
                      Additional Message
                    </label>
                    <textarea
                      rows={4}
                      className="mt-2 w-full border border-brand-border bg-brand-white px-4 py-3 outline-none focus:border-brand-red"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand-red py-4 font-semibold text-brand-white transition-transform hover:scale-[1.02]"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="border border-brand-black bg-brand-white p-8 text-center md:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
                Fee Structure
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-brand-black">
                Available Upon Request
              </h2>
              <p className="mt-4 text-brand-muted">
                Please contact the school office by phone, WhatsApp, or email to receive the current
                fee structure and payment guidance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-brand-black">Frequently Asked</h2>
          </Reveal>
          <div className="mt-8 divide-y divide-brand-border border-y border-brand-border">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-semibold text-brand-black">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-red transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && <p className="pb-5 text-brand-muted">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
