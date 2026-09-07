import { Link } from "@tanstack/react-router";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappHref } from "./data";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_55%)]" />
      <div className="glow-orb pointer-events-none absolute -left-10 top-16 h-40 w-40 rounded-full bg-gold/15 blur-3xl" />
      <div
        className="glow-orb pointer-events-none absolute right-0 bottom-0 h-36 w-36 rounded-full bg-flame/15 blur-3xl"
        style={{ animationDelay: "1.2s" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        {eyebrow ? (
          <p className="hero-rise eyebrow !text-gold justify-center">{eyebrow}</p>
        ) : null}
        <h1
          className="hero-rise display-title mt-3 text-4xl text-cream sm:text-6xl md:text-7xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        <span className="gold-line mx-auto mt-4" />
        {subtitle ? (
          <p
            className="hero-rise mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-lg"
            style={{ animationDelay: "220ms" }}
          >
            {subtitle}
          </p>
        ) : null}
        <div
          className="hero-rise mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !px-7 !py-3.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order on WhatsApp
          </a>
          <Link to="/menu" className="btn-outline !px-7 !py-3.5">
            Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
