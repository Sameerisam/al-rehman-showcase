import { createFileRoute } from "@tanstack/react-router";
import { fries, wingsNuggets } from "@/components/site/data";
import { MenuGrid } from "@/components/site/MenuGrid";
import { OrderCta } from "@/components/site/OrderCta";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/menu/sides")({
  component: SidesPage,
  head: () => ({
    meta: [
      { title: "Sides | AR Pizza & Cafe" },
      {
        name: "description",
        content: "Hot wings, oven baked wings, nuggets and fries — regular to loaded.",
      },
    ],
  }),
});

function SidesPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Supporting Cast"
        title="Wings, Nuggets & Fries"
        subtitle="6 or 12 piece wings and nuggets, plus regular to loaded fries."
      />
      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <MenuGrid
            eyebrow="Crispy"
            title="Wings & Nuggets"
            subtitle="Priced for 6 pcs and 12 pcs."
            items={wingsNuggets}
          />
        </div>
      </section>
      <section className="bg-ink py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <MenuGrid
            eyebrow="Golden"
            title="Fries"
            subtitle="Regular, French and loaded — regular or large."
            items={fries}
            tone="dark"
            compact
          />
        </div>
      </section>
      <OrderCta />
    </main>
  );
}
