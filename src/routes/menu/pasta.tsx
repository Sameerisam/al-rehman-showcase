import { createFileRoute } from "@tanstack/react-router";
import { pasta } from "@/components/site/data";
import { MenuGrid } from "@/components/site/MenuGrid";
import { OrderCta } from "@/components/site/OrderCta";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/menu/pasta")({
  component: PastaPage,
  head: () => ({
    meta: [
      { title: "Pasta | AR Pizza & Cafe" },
      {
        name: "description",
        content: "Crispy, special and vegetarian pasta — regular and large sizes.",
      },
    ],
  }),
});

function PastaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Comfort Bowls"
        title="Pasta"
        subtitle="Crispy, special and vegetarian — regular or large."
      />
      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <MenuGrid items={pasta} />
        </div>
      </section>
      <OrderCta />
    </main>
  );
}
