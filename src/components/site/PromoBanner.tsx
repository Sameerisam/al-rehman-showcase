import { Link } from "@tanstack/react-router";
import { cartItemId, parsePrice } from "./cart";
import { useCart } from "./CartContext";
import { featuredDeal } from "./data";
import { Reveal } from "./Reveal";

export function PromoBanner() {
  const { addItem } = useCart();

  return (
    <section className="relative overflow-hidden bg-gold">
      <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:py-12">
        <Reveal className="relative order-2 md:order-1" variant="left">
          <div className="img-shine group relative overflow-hidden rounded-2xl shadow-2xl ring-4 ring-ink/10">
            <img
              src={featuredDeal.image}
              alt={featuredDeal.name}
              width={1024}
              height={768}
              loading="lazy"
              className="img-zoom aspect-[4/3] w-full object-cover"
            />
          </div>
          <span className="badge-bob absolute -top-3 left-4 rounded-full bg-flame px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg">
            {featuredDeal.badge}
          </span>
        </Reveal>

        <Reveal className="order-1 text-center md:order-2 md:text-left" delay={120} variant="right">
          <p className="eyebrow !text-ink/70">Hot Deal</p>
          <h2 className="display-title mt-3 text-4xl text-ink sm:text-6xl">{featuredDeal.name}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm font-medium text-ink/70 sm:text-base md:mx-0">
            {featuredDeal.includes.slice(0, 4).join(" · ")}
            {featuredDeal.includes.length > 4 ? " · and more" : ""}
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
            <span className="display-title text-4xl text-ink">{featuredDeal.price}</span>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <button
              type="button"
              onClick={() =>
                addItem({
                  id: cartItemId(featuredDeal.name),
                  name: featuredDeal.name,
                  price: parsePrice(featuredDeal.price),
                  image: featuredDeal.image,
                })
              }
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-gold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-ink-2 active:scale-95"
            >
              Add to Cart
            </button>
            <Link
              to="/deals"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-ink transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-ink hover:text-gold active:scale-95"
            >
              All Deals
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
