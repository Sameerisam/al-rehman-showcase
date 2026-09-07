import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { cartItemId, parsePrice } from "./cart";
import { useCart } from "./CartContext";
import { deals } from "./data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type DealsProps = {
  limit?: number;
  showHeading?: boolean;
};

export function Deals({ limit, showHeading = true }: DealsProps) {
  const list = limit ? deals.slice(0, limit) : deals;
  const { addItem } = useCart();

  return (
    <section className="bg-gold-soft py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {showHeading ? (
          <Reveal>
            <SectionHeading
              eyebrow="Combos"
              title="Hot Deals"
              subtitle="Evening, midnight, family and A.R specials — priced for sharing."
            />
          </Reveal>
        ) : null}

        <div
          className={cn(
            "grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3",
            showHeading ? "mt-10 sm:mt-12" : "",
            list.length >= 4 && "xl:grid-cols-4",
          )}
        >
          {list.map((deal, i) => (
            <Reveal key={deal.name} delay={i * 70} variant="scale">
              <article className="group card-lift flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border">
                <div className="img-shine relative aspect-[4/3] overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="img-zoom h-full w-full object-cover"
                  />
                  <span
                    className={cn(
                      "absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest shadow-lg",
                      deal.badgeTone === "red" ? "bg-flame text-white" : "bg-gold text-ink",
                    )}
                  >
                    {deal.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="display-title text-2xl text-ink sm:text-3xl">{deal.name}</h3>
                  <ul className="mt-3 flex-1 space-y-1.5 text-sm text-muted-foreground">
                    {deal.includes.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="display-title text-3xl text-ink">{deal.price}</span>
                    {deal.wasPrice ? (
                      <span className="text-sm font-bold text-muted-foreground line-through">
                        {deal.wasPrice}
                      </span>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        id: cartItemId(deal.name),
                        name: deal.name,
                        price: parsePrice(deal.price),
                        image: deal.image,
                      })
                    }
                    className="btn-gold mt-5 w-full !py-3"
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {limit ? (
          <div className="mt-10 text-center">
            <Link to="/deals" className="btn-outline !border-ink !text-ink hover:!bg-ink hover:!text-gold">
              View All Deals
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
