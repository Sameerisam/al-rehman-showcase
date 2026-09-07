import { createFileRoute } from "@tanstack/react-router";
import { burgers } from "@/components/site/data";
import { MenuGrid } from "@/components/site/MenuGrid";
import { OrderCta } from "@/components/site/OrderCta";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/menu/burgers")({
  component: BurgersPage,
  head: () => ({
    meta: [
      { title: "Burgers | AR Pizza & Cafe" },
      {
        name: "description",
        content: "A.R Special, Zinger, Double Deckers and more burgers at AR Pizza & Cafe.",
      },
    ],
  }),
});

function BurgersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Crispy & Juicy"
        title="Burgers"
        subtitle="From classic chicken to Zinger Tower and Double Deckers."
      />
      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <MenuGrid items={burgers} />
        </div>
      </section>
      <OrderCta />
    </main>
  );
}
