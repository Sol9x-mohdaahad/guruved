const schools = [
  "Greenwood Intl.",
  "Cambridge Academy",
  "Riverside School",
  "Oakridge",
  "St. Xavier's",
  "Heritage School",
  "Springdale",
  "Delhi Public",
  "Modern Public",
  "Sunrise Academy",
];

export function TrustedSchools() {
  const doubled = [...schools, ...schools];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-ink">
          Trusted by 21,000+ institutions worldwide
        </p>
      </div>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-4 animate-marquee">
          {doubled.map((s, i) => (
            <div
              key={i}
              className="flex h-16 items-center gap-3 rounded-2xl border border-ink/5 bg-white px-7 shadow-sm"
            >
              <div className="grid size-9 place-content-center rounded-lg bg-gradient-to-br from-emerald to-gold text-xs font-bold text-white">
                {s.charAt(0)}
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-ink/80">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
