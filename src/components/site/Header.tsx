import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { images } from "./data";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Deals", href: "#deals" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur-md">
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6",
            scrolled ? "py-2" : "py-3.5",
          )}
        >
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <img
              src={images.logo}
              alt="Al-Rehman Pizza & Cafe logo"
              width={1024}
              height={1024}
              className={cn(
                "shrink-0 rounded-full object-cover ring-2 ring-gold/70 transition-all duration-300",
                scrolled ? "h-10 w-10" : "h-12 w-12",
              )}
            />
            <span className="flex min-w-0 flex-col leading-none">
              <span
                className={cn(
                  "display-title truncate text-cream transition-all duration-300",
                  scrolled ? "text-xl" : "text-2xl",
                )}
              >
                Al-Rehman
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-gold">
                PIZZA &amp; CAFE
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-white/75 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a href="#contact" className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex">
              <MessageCircle className="h-4 w-4" />
              Order Now
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream transition-colors hover:border-gold hover:text-gold lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-in nav */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col bg-ink shadow-2xl transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="display-title text-xl text-cream">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto px-5 pb-8">
          <a href="#contact" onClick={() => setOpen(false)} className="btn-gold w-full">
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}
