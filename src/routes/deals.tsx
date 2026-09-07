import { createFileRoute } from "@tanstack/react-router";
import { Deals } from "@/components/site/Deals";
import { OrderCta } from "@/components/site/OrderCta";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/deals")({
  component: DealsPage,
  head: () => ({
    meta: [
      { title: "Hot Deals | AR Pizza & Cafe" },
      {
        name: "description",
        content:
          "Evening, midnight, family, zinger and A.R special deals at AR Pizza & Cafe.",
      },
    ],
  }),
});

function DealsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Combos"
        title="Hot Deals"
        subtitle="Seven deals from evening bites to the full A.R Special feast."
      />
      <Deals showHeading={false} />
      <OrderCta title="Ready to grab a deal?" />
    </main>
  );
}
