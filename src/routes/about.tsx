import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Heart, Compass, Users, Award, BadgeCheck } from "lucide-react";
import aboutImg from "@/assets/educator.jpg";
import { type PageMeta } from "@/lib/seo";

export const pageMeta: PageMeta = {
  title: "About Joslin Preparatory School — Bondo's Trusted Early Learning Centre",
  description:
    "Rooted in Kenya, built for the world. Meet the educators and values behind Joslin Preparatory School.",
  ogTitle: "About Joslin Preparatory School",
  ogDescription: "Our story, mission and team of certified Kenyan early childhood educators.",
  canonicalPath: "/about",
};

const values = [
  {
    I: Heart,
    t: "Love and Belonging",
    d: "Every child is welcomed, known and celebrated as part of our family.",
  },
  {
    I: Compass,
    t: "Curiosity and Play",
    d: "Wonder is the foundation of learning — we protect and feed it daily.",
  },
  {
    I: Users,
    t: "Community and Ubuntu",
    d: "I am because we are. We grow children alongside families and neighbours.",
  },
  {
    I: Award,
    t: "Excellence and Care",
    d: "Premium standards in safety, nutrition and pedagogy. Always.",
  },
];

const team = [
  {
    n: "Ms. Njeri Achieng",
    r: "Head Teacher, ECD Certified",
    b: "12 years guiding Bondo's youngest learners with warmth and rigour.",
  },
  {
    n: "Mr. Brian Otieno",
    r: "Class Teacher PP1 and PP2",
    b: "CBC specialist passionate about reading readiness and STEM play.",
  },
  {
    n: "Ms. Amina Atieno",
    r: "Toddler and Baby Class Lead",
    b: "Nurturing routines, sensory play and secure attachment for our littlest.",
  },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero title="About Joslin Preparatory School" crumb="Home / About" />

      <section className="bg-brand-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="border-l-4 border-brand-red pl-4">
              <img
                src={aboutImg}
                alt="African children learning together at Joslin Preparatory School Bondo"
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-black">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-black md:text-5xl">
              Rooted in Kenya, Built for the World
            </h2>
            <p className="mt-5 text-brand-muted">
              Joslin Preparatory School was founded in 2018 by a Bondo mother who believed Kenyan
              children deserved an early learning environment that honoured both their heritage and
              their unlimited potential. Today we serve hundreds of families across the city —
              combining the warmth of a home with the rigour of a world-class school.
            </p>
            <blockquote className="mt-6 border-l-4 border-brand-red bg-brand-surface p-5 italic text-brand-black">
              "To nurture confident, curious, and compassionate children through play-based learning
              rooted in Kenyan values."
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-brand-black md:text-5xl">
              Our Values
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="flex gap-5 bg-brand-white p-7 ring-1 ring-brand-border">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand-red/10 text-brand-red">
                    <v.I className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-black">{v.t}</h3>
                    <p className="mt-2 text-brand-muted">{v.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-brand-black md:text-5xl">
              Meet Our Educators
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto h-32 w-32 rounded-full bg-brand-surface ring-4 ring-brand-red/20" />
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-red">{m.n}</h3>
                  <p className="text-sm font-semibold text-brand-black">{m.r}</p>
                  <p className="mt-3 text-sm text-brand-muted">{m.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-24 text-brand-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="grid grid-cols-3 gap-6">
              {[
                { n: "8:1", l: "Child to Teacher" },
                { n: "5", l: "Days a week" },
                { n: "3", l: "Meals daily" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl font-bold text-brand-red md:text-5xl">
                    {s.n}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              A CBC-Aligned, Play-Based Approach
            </h2>
            <p className="mt-4 text-white/80">
              Our pedagogy weaves Kenya&apos;s Competency Based Curriculum into a play-rich daily
              rhythm. Children learn numeracy through games, literacy through story, science through
              wonder — and Kiswahili and English side by side from day one.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-white py-20">
        <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3">
          {["CBC Aligned", "NACECE Registered", "Ministry of Education Kenya"].map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 border border-brand-black bg-brand-white p-5"
            >
              <BadgeCheck className="h-6 w-6 shrink-0 text-brand-red" />
              <span className="font-semibold text-brand-black">{b}</span>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
