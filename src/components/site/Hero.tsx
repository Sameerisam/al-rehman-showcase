import { Link } from "@tanstack/react-router";
import { ChevronDown, Flame, Heart, Zap } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { images, whatsappHref } from "./data";

const TRUST_BADGES = [
  { icon: Flame, label: "Freshly Prepared" },
  { icon: Heart, label: "Family Favorite" },
  { icon: Zap, label: "Fast & Delicious" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <img
        src={images.heroSpread}
        alt="Loaded pizza, zinger burger, shawarma, fries and drinks on a dark table"
        width={1920}
        height={1080}
        className="hero-media absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/92" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,color-mix(in_oklab,var(--ink)_55%,transparent)_100%)]" />
      <div className="glow-orb pointer-events-none absolute -left-16 top-28 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
      <div
        className="glow-orb pointer-events-none absolute -right-10 bottom-24 h-48 w-48 rounded-full bg-flame/20 blur-3xl"
        style={{ animationDelay: "1.4s" }}
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-20 pt-28 text-center sm:px-6 sm:pb-24 sm:pt-32">
        <p className="hero-rise eyebrow !text-gold" style={{ animationDelay: "120ms" }}>
          <span className="h-px w-6 bg-gold/60 sm:w-8" />
          Welcome to AR Pizza &amp; Cafe
          <span className="h-px w-6 bg-gold/60 sm:w-8" />
        </p>

        <h1
          className="hero-rise display-title mt-5 text-[2.65rem] text-cream sm:mt-6 sm:text-7xl md:text-8xl"
          style={{ animationDelay: "280ms" }}
        >
          Fresh. Hot.
          <br />
          <span className="text-gold">Loaded With Flavor.</span>
        </h1>
        <span className="gold-line mt-5" />

        <p
          className="hero-rise mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/70 sm:mt-6 sm:text-lg"
          style={{ animationDelay: "420ms" }}
        >
          Hand-tossed pizzas, crispy zingers and flame-grilled shawarma — made fresh
          on every order at Chowk Chak Jano Kalan.
        </p>

        <div
          className="hero-rise mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          style={{ animationDelay: "560ms" }}
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !px-8 !py-3.5 !text-sm sm:!py-4 sm:!text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Order Now on WhatsApp
          </a>
          <Link to="/menu" className="btn-outline !px-8 !py-3.5 !text-sm sm:!py-4 sm:!text-base">
            View Full Menu
          </Link>
        </div>

        <div
          className="hero-rise mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:mt-12 sm:gap-3"
          style={{ animationDelay: "700ms" }}
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge.label}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/85 backdrop-blur-md sm:text-sm"
            >
              <badge.icon className="h-3.5 w-3.5 text-gold sm:h-4 sm:w-4" />
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#menu-start"
        className="bounce-chevron absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-gold/80 sm:bottom-7"
        aria-label="Scroll to menu"
      >
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  );
}
