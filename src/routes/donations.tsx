import { HeartHandshake, School, Utensils, BookOpen, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { settings } from "@/lib/content";
import { Link } from "@/lib/router";
import { type PageMeta } from "@/lib/seo";

export const pageMeta: PageMeta = {
  title: "Donations - Support Joslin Preparatory School",
  description:
    "Support learning, meals, classroom resources, and child development at Joslin Preparatory School in Bondo.",
  ogTitle: "Donations - Joslin Preparatory School",
  ogDescription:
    "Partner with Joslin Preparatory School to support children through learning resources, meals, and school improvement.",
  canonicalPath: "/donations",
};

const impactAreas = [
  {
    icon: School,
    title: "Classroom Support",
    description:
      "Help us equip learning spaces with child-friendly furniture, displays, and teaching materials.",
  },
  {
    icon: BookOpen,
    title: "Books and Supplies",
    description:
      "Fund storybooks, art tools, stationery, and hands-on learning resources for every class.",
  },
  {
    icon: Utensils,
    title: "Meals and Care",
    description:
      "Support daily nutrition, hygiene supplies, and the essentials children need to learn well.",
  },
];

const givingOptions = [
  {
    title: "Financial Giving",
    text: "Make a one-time or recurring contribution to support the school's most urgent needs.",
  },
  {
    title: "Sponsor a Need",
    text: "Choose a specific area like books, classroom upgrades, outdoor play resources, or meals.",
  },
  {
    title: "In-Kind Donations",
    text: "Donate useful items such as books, toys, storage units, cleaning supplies, or learning materials.",
  },
];

export default function DonationsPage() {
  return (
    <SiteLayout>
      <PageHero title="Support Joslin" crumb="Home / Donations" />

      <section className="bg-brand-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.3fr_0.9fr] md:items-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Why Give</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-black md:text-5xl">
              Every Gift Helps a Child Learn with Confidence
            </h2>
            <p className="mt-5 max-w-2xl text-brand-muted">
              Donations help us strengthen the learning environment at Joslin Preparatory School,
              provide practical classroom resources, and support the everyday care children need to
              thrive. Whether large or small, your contribution has direct value for families in
              Bondo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${settings.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-brand-white transition-transform hover:scale-105"
              >
                Donate via WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${settings.email}?subject=Donation%20Support`}
                className="inline-flex items-center gap-2 rounded-full border border-brand-black px-6 py-3 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-black hover:text-brand-white"
              >
                Email the School
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-brand-border bg-brand-surface p-8 shadow-sm">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <HeartHandshake className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-brand-black">
                Donation Contact
              </h3>
              <div className="mt-5 space-y-3 text-sm text-brand-muted">
                <p>
                  <span className="font-semibold text-brand-black">Phone:</span> {settings.phone}
                </p>
                <p>
                  <span className="font-semibold text-brand-black">Email:</span> {settings.email}
                </p>
                <p>
                  <span className="font-semibold text-brand-black">Location:</span>{" "}
                  {settings.address}
                </p>
              </div>
              <p className="mt-6 text-sm text-brand-muted">
                For bank transfer details, M-Pesa guidance, or item drop-off arrangements, contact
                the school office and we will guide you directly.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-brand-black">
              Where Your Support Goes
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {impactAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.08}>
                <div className="h-full border-t-4 border-brand-red bg-brand-white p-8 ring-1 ring-brand-border">
                  <div className="inline-flex h-12 w-12 items-center justify-center bg-brand-red/10 text-brand-red">
                    <area.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-brand-black">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-brand-muted">{area.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-brand-black">Ways to Give</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {givingOptions.map((option, i) => (
              <Reveal key={option.title} delay={i * 0.08}>
                <div className="h-full border border-brand-black bg-brand-white p-7">
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
                    Option {i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-brand-black">
                    {option.title}
                  </h3>
                  <p className="mt-3 text-brand-muted">{option.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20 text-brand-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Partner with Us in Shaping Young Lives
          </h2>
          <p className="mt-4 text-white/80">
            If you would like to contribute, sponsor a need, or discuss a larger partnership, we
            would be glad to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-brand-white transition-transform hover:scale-105"
            >
              Contact the School
            </Link>
            <a
              href={`https://wa.me/${settings.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-brand-white transition-colors hover:bg-white hover:text-brand-black"
            >
              Start a Donation Conversation
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
