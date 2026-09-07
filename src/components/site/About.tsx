import { Flame, Heart, MapPin, Timer } from "lucide-react";
import { images } from "./data";
import { Reveal } from "./Reveal";

const HIGHLIGHTS = [
  {
    icon: Flame,
    title: "Fresh on Order",
    desc: "Pizzas, zingers and shawarma made when you ask — hot every time.",
  },
  {
    icon: MapPin,
    title: "Local Favourite",
    desc: "Serving Chowk Chak Jano Kalan with honest portions and bold flavour.",
  },
  {
    icon: Timer,
    title: "Fast Service",
    desc: "Walk in, call, or WhatsApp — we move so your food stays hot.",
  },
  {
    icon: Heart,
    title: "Family Deals",
    desc: "Evening to midnight combos priced for sharing with the whole table.",
  },
];

type AboutProps = {
  showHighlights?: boolean;
};

export function About({ showHighlights = true }: AboutProps) {
  return (
    <>
      <section className="bg-cream py-14 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <p className="eyebrow">Our Story</p>
            <h2 className="display-title mt-3 text-4xl text-ink sm:text-6xl">
              Good Food. Great Taste. Happy Customers.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              AR Pizza &amp; Cafe is your neighbourhood spot near PCO, Chowk Chak Jano Kalan —
              hand-tossed pizzas, crispy zingers, shawarma and hot deals for family nights and late
              cravings.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From A.R Special pizza to midnight deals, we cook for the table next door — whether
              you walk in or WhatsApp us from down the street.
            </p>
          </Reveal>

          <Reveal delay={120} variant="right">
            <div className="group img-shine overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
              <img
                src={images.aboutInterior}
                alt="Warm dining space at AR Pizza & Cafe"
                width={1024}
                height={768}
                loading="lazy"
                className="img-zoom aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {showHighlights ? (
        <section className="bg-background py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <p className="eyebrow justify-center text-center">Why Guests Come Back</p>
              <h2 className="display-title mt-3 text-center text-4xl text-ink sm:text-5xl">
                What We Stand For
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {HIGHLIGHTS.map((item, i) => (
                <Reveal key={item.title} delay={i * 70} variant="scale">
                  <article className="group card-lift h-full rounded-2xl bg-card p-6 ring-1 ring-border">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-soft text-gold-deep transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="display-title mt-4 text-2xl text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
