import { useState } from "react";
import { Plus, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { cartItemId, parsePrice } from "./cart";
import { useCart } from "./CartContext";
import { formatItemPrice, type MenuItem } from "./data";

type MenuCardProps = {
  item: MenuItem;
  tone?: "light" | "dark";
  compact?: boolean;
};

export function MenuCard({ item, tone = "light", compact = false }: MenuCardProps) {
  const dark = tone === "dark";
  const { addItem } = useCart();
  const hasSizes = Boolean(item.prices && item.prices.length > 0);
  const [selectedSize, setSelectedSize] = useState(item.prices?.[0]?.size ?? "");
  const [added, setAdded] = useState(false);

  const selectedRow = item.prices?.find((row) => row.size === selectedSize) ?? item.prices?.[0];
  const displayPrice = hasSizes && selectedRow ? selectedRow.price : formatItemPrice(item);

  function handleAdd() {
    const size = hasSizes ? selectedRow?.size : undefined;
    const priceLabel = hasSizes ? selectedRow?.price : item.price;
    if (!priceLabel) return;

    addItem({
      id: cartItemId(item.name, size),
      name: item.name,
      price: parsePrice(priceLabel),
      ...(size ? { size } : {}),
      image: item.image,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 900);
  }

  return (
    <article
      className={cn(
        "group card-lift flex h-full flex-col overflow-hidden rounded-2xl shadow-sm",
        dark ? "bg-ink-2 ring-1 ring-white/10" : "bg-card ring-1 ring-border",
      )}
    >
      <div className={cn("img-shine relative overflow-hidden", compact ? "aspect-[5/4]" : "aspect-[4/3]")}>
        <img
          src={item.image}
          alt={item.name}
          width={1024}
          height={768}
          loading="lazy"
          className="img-zoom h-full w-full object-cover"
        />
        {item.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-flame px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-lg">
            {item.badge}
          </span>
        ) : null}
      </div>

      <div className={cn("flex flex-1 flex-col", compact ? "p-3.5 sm:p-4" : "p-4 sm:p-5")}>
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <h3
            className={cn(
              "display-title min-w-0 text-[1.35rem] leading-none sm:text-2xl",
              compact && "text-xl",
              dark ? "text-cream" : "text-ink",
            )}
          >
            {item.name}
          </h3>
          <span
            className={cn(
              "shrink-0 text-xs font-extrabold sm:text-sm",
              dark ? "text-gold" : "text-gold-deep",
            )}
          >
            {displayPrice}
          </span>
        </div>

        {item.rating != null ? (
          <p className="mt-1.5 flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3.5 w-3.5",
                  i < Math.round(item.rating ?? 0)
                    ? "fill-gold text-gold"
                    : dark
                      ? "text-white/20"
                      : "text-border",
                )}
              />
            ))}
            <span className={cn("ml-1 text-xs font-bold", dark ? "text-white/70" : "text-muted-foreground")}>
              {item.rating.toFixed(1)}
            </span>
          </p>
        ) : null}

        {item.desc ? (
          <p className={cn("mt-2 flex-1 text-sm leading-relaxed", dark ? "text-white/60" : "text-muted-foreground")}>
            {item.desc}
          </p>
        ) : (
          <div className="flex-1" />
        )}

        {hasSizes ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.prices!.map((row) => {
              const active = row.size === (selectedRow?.size ?? selectedSize);
              return (
                <button
                  key={row.size}
                  type="button"
                  onClick={() => setSelectedSize(row.size)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-300",
                    active
                      ? dark
                        ? "scale-105 bg-gold text-ink shadow-md"
                        : "scale-105 bg-ink text-gold shadow-md"
                      : dark
                        ? "bg-white/10 text-cream hover:scale-105 hover:bg-white/15"
                        : "bg-gold-soft text-ink hover:scale-105 hover:bg-gold/30",
                  )}
                >
                  <span className={active ? "opacity-100" : "opacity-70"}>{row.size}</span>
                  <span className={active ? undefined : dark ? "text-gold" : "text-gold-deep"}>
                    {row.price}
                  </span>
                </button>
              );
            })}
          </div>
        ) : null}

        <button
          type="button"
          onClick={handleAdd}
          className={cn(
            "mt-4 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300",
            added
              ? "scale-105 bg-whatsapp text-white"
              : dark
                ? "bg-gold text-ink hover:scale-[1.03] hover:bg-gold-deep hover:text-cream"
                : "bg-ink text-gold hover:scale-[1.03] hover:bg-ink-2",
          )}
        >
          <Plus className={cn("h-3.5 w-3.5 transition-transform", added && "rotate-45")} />
          {added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}
