const LINES = [
  "Hand-Tossed Pizza",
  "Crispy Zinger",
  "Flame-Grilled Shawarma",
  "Family Deals",
  "Loaded Fries",
  "Late Night Menu",
  "Fresh on Every Order",
  "WhatsApp & Pickup",
];

export function FlavorMarquee() {
  const loop = [...LINES, ...LINES];

  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-ink py-3 sm:py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink to-transparent sm:w-24" />
      <div className="marquee-track gap-8 pr-8 sm:gap-10">
        {loop.map((line, i) => (
          <span key={`${line}-${i}`} className="flex shrink-0 items-center gap-8 sm:gap-10">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-gold sm:text-xs">
              {line}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
