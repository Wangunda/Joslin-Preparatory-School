import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { settings } from "@/lib/content";
import { type PageMeta } from "@/lib/seo";

export const pageMeta: PageMeta = {
  title: "Contact Joslin Preparatory School — Bondo, Siaya",
  description: "Visit, call or message Joslin Preparatory School in Bondo, Siaya.",
  ogTitle: "Contact Joslin Preparatory School",
  ogDescription: "Get in touch — we reply within 24 hours.",
  canonicalPath: "/contact",
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero title="Get In Touch" crumb="Home / Contact" />
      <section className="bg-brand-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full bg-brand-black p-8 text-brand-white md:p-10">
              <h2 className="font-display text-3xl font-bold">Visit & Reach Us</h2>
              <ul className="mt-8 space-y-6 text-sm">
                <li className="flex gap-4">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-red" />
                  <span>{settings.address}</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="h-5 w-5 shrink-0 text-brand-red" />
                  <span>{settings.phone}</span>
                </li>
                <li className="flex gap-4">
                  <Mail className="h-5 w-5 shrink-0 text-brand-red" />
                  <span>{settings.email}</span>
                </li>
                <li className="flex gap-4">
                  <Clock className="h-5 w-5 shrink-0 text-brand-red" />
                  <span>
                    Mon–Fri 7:00 AM – 5:30 PM
                    <br />
                    Sat 8:00 AM – 12:00 PM
                  </span>
                </li>
              </ul>
              <a
                href={`https://wa.me/${settings.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-brand-white"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-brand-border bg-brand-white p-8 md:p-10">
              <h2 className="font-display text-3xl font-bold text-brand-black">Send a Message</h2>
              {sent && (
                <div className="mt-5 bg-brand-red px-4 py-3 text-sm font-semibold text-brand-white">
                  Message received! We&apos;ll reply within 24 hours.
                </div>
              )}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-6 space-y-5"
              >
                {[
                  { label: "Name", type: "text" },
                  { label: "Email", type: "email" },
                  { label: "Phone", type: "tel" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-sm font-semibold text-brand-black">
                      {f.label}
                    </label>
                    <input
                      required
                      type={f.type}
                      className="mt-2 w-full border border-brand-border bg-brand-white px-4 py-3 outline-none focus:border-brand-red"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-brand-black">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="mt-2 w-full border border-brand-border bg-brand-white px-4 py-3 outline-none focus:border-brand-red"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-red py-4 font-semibold text-brand-white transition-transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-brand-surface pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden border border-brand-border">
            <iframe
              title="Joslin Preparatory School location"
              className="h-[400px] w-full"
              src="https://www.google.com/maps?q=-1.2921,36.8219&z=14&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
