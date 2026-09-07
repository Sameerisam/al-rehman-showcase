import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";
import { OrderCta } from "@/components/site/OrderCta";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery | AR Pizza & Cafe" },
      {
        name: "description",
        content: "Photos from AR Pizza & Cafe — pizzas, burgers, shawarma and more.",
      },
    ],
  }),
});

function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Inside the Cafe"
        title="Gallery"
        subtitle="A look at the food that leaves our kitchen."
      />
      <Gallery />
      <OrderCta />
    </main>
  );
}
