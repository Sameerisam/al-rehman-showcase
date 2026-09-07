import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "./data";

export function CategoryTile({ cat }: { cat: Category }) {
  return (
    <Link to={cat.to} className="group card-lift relative block overflow-hidden rounded-2xl shadow-md">
      <div className="img-shine">
        <img
          src={cat.image}
          alt={cat.name}
          width={800}
          height={1000}
          loading="lazy"
          className="img-zoom aspect-[4/5] w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
        <h3 className="display-title text-xl text-cream transition-transform duration-500 group-hover:-translate-y-0.5 sm:text-3xl">
          {cat.name}
        </h3>
        <p className="mt-0.5 text-[10px] font-semibold tracking-wide text-gold sm:text-sm">
          {cat.label}
        </p>
        <span className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-cream/80 transition-all duration-300 group-hover:gap-1.5 group-hover:text-cream sm:text-xs sm:text-cream/0 sm:group-hover:text-cream">
          Explore
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
