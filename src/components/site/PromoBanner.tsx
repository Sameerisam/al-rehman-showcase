import { MessageCircle } from "lucide-react";
import { images } from "./data";
import { Reveal } from "./Reveal";

export function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-gold">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:py-12">
        <Reveal className="relative order-2 md:order-1">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-4 ring-ink/10">
            <img
              src={images.promoDeal}
              alt="Family feast deal with two pizzas, fried chicken, fries and drinks"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <span className="absolute -top-3 left-4 -rotate-3 rounded-full bg-flame px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg">
            Today&apos;s Special
          </span>
        </Reveal>

        <Reveal className="order-1 text-center md:order-2 md:text-left" delay={120}>
          <p className="eyebrow !text-ink/70">Limited Time Offer</p>
          <h2 className="display-title mt-3 text-5xl text-ink sm:text-6xl">
            Family Feast Deal
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base font-medium text-ink/70 md:mx-0">
            Two large pizzas of your choice, a fries bucket and a 1.5 ltr drink —
            dinner for the whole family, sorted.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
            <span className="display-title text-4xl text-ink">Rs. 2,499</span>
            <span className="text-lg font-bold text-ink/50 line-through">Rs. 3,199</span>
            <span className="rounded-full bg-flame px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
              Save 22%
            </span>
          </div>
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-gold shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-2"
            >
              <MessageCircle className="h-4 w-4" />
              Order Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
