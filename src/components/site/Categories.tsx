import { categories } from "./data";
import { CategoryTile } from "./CategoryTile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Categories() {
  return (
    <section id="menu-start" className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The Menu"
            title="What Are You Craving?"
            subtitle="Pizza, zingers, shawarma, wraps, pasta and hot deals — pick a lane."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 60} variant="scale">
              <CategoryTile cat={cat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
