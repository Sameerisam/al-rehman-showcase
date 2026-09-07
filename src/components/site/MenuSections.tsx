import { cn } from "@/lib/utils";
import { burgers, pizzas, shawarmas, sides, type MenuItem } from "./data";
import { MenuCard } from "./MenuCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type BlockProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
  tone?: "light" | "dark";
  compact?: boolean;
};

function MenuBlock({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  tone = "light",
  compact = false,
}: BlockProps) {
  const cols =
    items.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div
      id={id}
      className={cn("py-16 sm:py-20 lg:py-24", tone === "dark" ? "bg-ink" : "bg-background")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} tone={tone} />
        </Reveal>
        <div className={cn("mt-12 grid gap-5 sm:gap-6", cols)}>
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 60} variant="scale">
              <MenuCard item={item} tone={tone} compact={compact} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MenuSections() {
  return (
    <section id="menu">
      <MenuBlock
        id="pizzas"
        eyebrow="Hand-Tossed"
        title="Our Signature Pizzas"
        subtitle="Fresh dough, generous toppings and a proper cheese pull — every single time."
        items={pizzas}
      />
      <MenuBlock
        id="burgers"
        eyebrow="Crispy & Juicy"
        title="Burgers"
        subtitle="Golden fillets, grilled beef and sauces that actually belong on a burger."
        items={burgers}
      />
      <MenuBlock
        id="shawarma"
        eyebrow="Freshly Grilled · Loaded · Delicious"
        title="Shawarma"
        subtitle="Off the grill, wrapped tight, and loaded the way shawarma should be."
        items={shawarmas}
        tone="dark"
      />
      <MenuBlock
        id="sides"
        eyebrow="The Supporting Cast"
        title="Fries & Sides"
        subtitle="Masala dust, cheese sauce, garlic butter — pick your sidekick."
        items={sides}
        compact
      />
    </section>
  );
}
