import { Flame, Heart, MessageCircle, Zap } from "lucide-react";
import { images } from "./data";

const TRUST_BADGES = [
  { icon: Flame, label: "Freshly Prepared" },
  { icon: Heart, label: "Family Favorite" },
  { icon: Zap, label: "Fast & Delicious" },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <img
        src={images.heroSpread}
        alt="Loaded pizza, zinger burger, shawarma, fries and drinks on a dark table"
        width={1920}
        height={1080}
        className="hero-media absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,color-mix(in_oklab,var(--ink)_55%,transparent)_100%)]" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-24 pt-32 text-center sm:px-6">
        <p className="hero-rise eyebrow !text-gold" style={{ animationDelay: "150ms" }}>
          <span className="h-px w-8 bg-gold/60" />
          Welcome to Al-Rehman Pizza &amp; Cafe
          <span className="h-px w-8 bg-gold/60" />
        </p>

        <h1
          className="hero-rise display-title mt-6 text-6xl text-cream sm:text-7xl md:text-8xl"
          style={{ animationDelay: "300ms" }}
        >
          Fresh. Hot.
          <br />
          <span className="text-gold">Loaded With Flavor.</span>
        </h1>

        <p
          className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ animationDelay: "450ms" }}
        >
          Hand-tossed pizzas, crispy zingers and flame-grilled shawarma — made fresh
          on every order and served fast, straight from our oven to your table.
        </p>

        <div
          className="hero-rise mt-9 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "600ms" }}
        >
          <a href="#contact" className="btn-gold !px-8 !py-4 !text-base">
            <MessageCircle className="h-5 w-5" />
            Order Now on WhatsApp
          </a>
          <a href="#menu" className="btn-outline !px-8 !py-4 !text-base">
            View Full Menu
          </a>
        </div>

        <div
          className="hero-rise mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          style={{ animationDelay: "750ms" }}
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge.label}
              className="flex items-center gap-2 text-sm font-semibold text-white/80"
            >
              <badge.icon className="h-4 w-4 text-gold" />
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
