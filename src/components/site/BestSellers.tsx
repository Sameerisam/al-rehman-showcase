import { bestSellers } from "./data";
import { MenuCard } from "./MenuCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function BestSellers() {
  return (
    <section className="bg-ink py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Crowd Favorites"
            title="Our Most Loved Items"
            subtitle="The plates that leave the kitchen fastest — rated by the neighborhood."
            tone="dark"
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {bestSellers.map((item, i) => (
            <Reveal key={item.name} delay={i * 80} variant="scale">
              <MenuCard item={item} tone="dark" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
