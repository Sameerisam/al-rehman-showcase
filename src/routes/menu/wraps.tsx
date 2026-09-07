import { createFileRoute } from "@tanstack/react-router";
import { wraps } from "@/components/site/data";
import { MenuGrid } from "@/components/site/MenuGrid";
import { OrderCta } from "@/components/site/OrderCta";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/menu/wraps")({
  component: WrapsPage,
  head: () => ({
    meta: [
      { title: "Wraps | AR Pizza & Cafe" },
      {
        name: "description",
        content: "Chicken, malai boti, kabab and A.R special wraps at AR Pizza & Cafe.",
      },
    ],
  }),
});

function WrapsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Wrapped Tight"
        title="Wraps"
        subtitle="Chicken, malai boti, kabab and our Special Wrap A-R."
      />
      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <MenuGrid items={wraps} />
        </div>
      </section>
      <OrderCta />
    </main>
  );
}
