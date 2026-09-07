import { createFileRoute } from "@tanstack/react-router";
import { categories } from "@/components/site/data";
import { CategoryTile } from "@/components/site/CategoryTile";
import { OrderCta } from "@/components/site/OrderCta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/menu/")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Full Menu | AR Pizza & Cafe" },
      {
        name: "description",
        content:
          "Browse pizza, burgers, rolls, wraps, pasta, sides and hot deals at AR Pizza & Cafe.",
      },
    ],
  }),
});

function MenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="Full Menu"
        title="Explore Our Menu"
        subtitle="Every category from our printed board — tap a lane and order on WhatsApp."
      />
      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:gap-4 sm:px-6 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 60} variant="scale">
              <CategoryTile cat={cat} />
            </Reveal>
          ))}
        </div>
      </section>
      <OrderCta />
    </main>
  );
}
