import { createFileRoute } from "@tanstack/react-router";
import { rolls } from "@/components/site/data";
import { MenuGrid } from "@/components/site/MenuGrid";
import { OrderCta } from "@/components/site/OrderCta";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/menu/rolls")({
  component: RollsPage,
  head: () => ({
    meta: [
      { title: "Rolls & Shawarma | AR Pizza & Cafe" },
      {
        name: "description",
        content:
          "Chicken shawarma, paratha rolls, zinger shawarma and platter shawarma at AR Pizza & Cafe.",
      },
    ],
  }),
});

function RollsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Freshly Grilled"
        title="Rolls & Shawarma"
        subtitle="Paratha, shawarma, kabab and zinger rolls — wrapped hot."
      />
      <section className="bg-ink py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <MenuGrid items={rolls} tone="dark" />
        </div>
      </section>
      <OrderCta />
    </main>
  );
}
