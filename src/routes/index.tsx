import { createFileRoute } from "@tanstack/react-router";
import { AboutTeaser } from "@/components/site/AboutTeaser";
import { BestSellers } from "@/components/site/BestSellers";
import { Categories } from "@/components/site/Categories";
import { ContactStrip } from "@/components/site/ContactStrip";
import { Deals } from "@/components/site/Deals";
import { FlavorMarquee } from "@/components/site/FlavorMarquee";
import { Hero } from "@/components/site/Hero";
import { PromoBanner } from "@/components/site/PromoBanner";
import { Reviews } from "@/components/site/Reviews";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AR Pizza & Cafe | Fresh. Hot. Loaded With Flavor." },
      {
        name: "description",
        content:
          "AR Pizza & Cafe near PCO, Chowk Chak Jano Kalan — pizzas, burgers, shawarma, wraps and hot deals. Order on WhatsApp.",
      },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Hero />
      <FlavorMarquee />
      <PromoBanner />
      <Categories />
      <BestSellers />
      <Deals limit={3} />
      <AboutTeaser />
      <Reviews />
      <ContactStrip />
    </main>
  );
}
