import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";
import { OrderCta } from "@/components/site/OrderCta";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | AR Pizza & Cafe" },
      {
        name: "description",
        content:
          "Call 0344-8186216 or WhatsApp AR Pizza & Cafe near PCO, Chowk Chak Jano Kalan.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Visit Us"
        title="Contact & Location"
        subtitle="Phones, WhatsApp, complaints line, hours and map."
      />
      <Contact showHeading={false} />
      <OrderCta />
    </main>
  );
}
