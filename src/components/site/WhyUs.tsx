import { ChefHat, Heart, Leaf, Timer, Wallet, Flame } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FEATURES = [
  { icon: Flame, title: "Freshly Prepared", desc: "Every pizza, burger and wrap is made on order — not sitting under a lamp." },
  { icon: Leaf, title: "Quality Ingredients", desc: "Real chicken, real cheese, dough mixed in-house. No shortcuts on the plate." },
  { icon: ChefHat, title: "Experienced Kitchen", desc: "A team that knows tikka from fajita and will not send out a soggy crust." },
  { icon: Timer, title: "Fast Service", desc: "Hot food, short wait. Dine-in, pickup or a WhatsApp order — we move." },
  { icon: Wallet, title: "Affordable Prices", desc: "Family deals and student combos that actually leave money in your pocket." },
  { icon: Heart, title: "Family Friendly", desc: "A table for the kids, a late-night shawarma, and a pizza everyone fights over." },
];

export function WhyUs() {
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The AR Way"
            title="Why Choose AR Pizza & Cafe"
            subtitle="Bold flavor, honest portions, and a kitchen that still cooks like it is feeding family."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 70} variant="scale">
              <article className="group card-lift h-full rounded-2xl bg-card p-6 ring-1 ring-border">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-soft text-gold-deep transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <feature.icon className="h-5 w-5" />
                </span>
                <h3 className="display-title mt-4 text-2xl text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
