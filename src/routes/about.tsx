import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { OrderCta } from "@/components/site/OrderCta";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | AR Pizza & Cafe" },
      {
        name: "description",
        content:
          "AR Pizza & Cafe near PCO, Chowk Chak Jano Kalan — neighbourhood pizza, burgers, shawarma and hot deals.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="About AR Pizza & Cafe"
        subtitle="Fresh food, honest prices, and a table for the neighbourhood."
      />
      <About />
      <OrderCta />
    </main>
  );
}
