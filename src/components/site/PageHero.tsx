export function PageHero({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="bg-brand-black py-20 text-brand-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium text-brand-red">{crumb}</p>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
