import { createFileRoute } from "@tanstack/react-router";
import { pizzaExtraToppings, pizzaRegular, pizzaSpecial } from "@/components/site/data";
import { MenuGrid } from "@/components/site/MenuGrid";
import { OrderCta } from "@/components/site/OrderCta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/menu/pizza")({
  component: PizzaPage,
  head: () => ({
    meta: [
      { title: "Pizza Menu | AR Pizza & Cafe" },
      {
        name: "description",
        content:
          "Regular and special pizzas — Small, Medium, Large and Family sizes. A.R Special, Crown Crust and more.",
      },
    ],
  }),
});

function PizzaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Hand-Tossed"
        title="Pizza Menu"
        subtitle="Regular flavours, specials and premium crusts — priced by size."
      />

      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <MenuGrid
            eyebrow="Regular Flavors"
            title="Pizza Regular"
            subtitle="Small, Medium, Large and Family — prices shown on each flavour."
            items={pizzaRegular}
          />
        </div>
      </section>

      <section className="bg-ink py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <MenuGrid
            eyebrow="Special & Premium"
            title="Pizza Special"
            subtitle="Malai boti to Crown Crust — plus Slice and Train Pizza."
            items={pizzaSpecial}
            tone="dark"
          />
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-2xl bg-card p-5 ring-1 ring-border sm:p-6">
              <h3 className="display-title text-2xl text-ink">Extra Toppings</h3>
              <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {pizzaExtraToppings.map((row) => (
                  <div
                    key={row.size}
                    className="rounded-xl bg-gold-soft px-3 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
                  >
                    <dt className="text-[11px] font-extrabold uppercase tracking-wider text-gold-deep">
                      {row.size}
                    </dt>
                    <dd className="mt-1 text-sm font-extrabold text-ink">{row.price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <OrderCta />
    </main>
  );
}
