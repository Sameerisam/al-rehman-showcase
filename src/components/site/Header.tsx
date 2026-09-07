import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "./CartContext";
import { images, menuNav } from "./data";

const NAV_LINKS = [
  { label: "Home", to: "/" as const },
  { label: "Menu", to: "/menu" as const, children: menuNav },
  { label: "Deals", to: "/deals" as const },
  { label: "About", to: "/about" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count, openCart } = useCart();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) setMobileMenuOpen(false);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open && pathname.startsWith("/menu")) {
      setMobileMenuOpen(true);
    }
  }, [open, pathname]);

  function isActive(to: string) {
    if (to === "/") return pathname === "/";
    return pathname === to || pathname.startsWith(`${to}/`);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/95 pt-[env(safe-area-inset-top)] backdrop-blur-md">
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-6",
            scrolled ? "py-2" : "py-3 sm:py-3.5",
          )}
        >
          <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img
              src={images.logo}
              alt="AR Pizza & Cafe logo"
              width={1024}
              height={1024}
              className={cn(
                "shrink-0 rounded-full object-cover ring-2 ring-gold/70 transition-all duration-300 group-hover:scale-105 group-hover:ring-gold",
                scrolled ? "h-11 w-11 sm:h-12 sm:w-12" : "h-12 w-12 sm:h-16 sm:w-16",
              )}
            />
            <span className="flex min-w-0 flex-col leading-none">
              <span
                className={cn(
                  "display-title truncate text-cream transition-all duration-300",
                  scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl",
                )}
              >
                Al-Rehman
              </span>
              <span className="text-[9px] font-bold tracking-[0.28em] text-gold sm:text-[10px] sm:tracking-[0.3em]">
                PIZZA &amp; CAFE
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setMenuOpen(true)}
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <Link
                    to={link.to}
                    className={cn(
                      "nav-link inline-flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors hover:text-gold",
                      isActive(link.to) ? "is-active text-gold" : "text-white/75",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300",
                        menuOpen && "rotate-180",
                      )}
                    />
                  </Link>
                  <div
                    className={cn(
                      "absolute left-1/2 top-full z-50 w-44 -translate-x-1/2 pt-3 transition-all duration-200",
                      menuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0",
                    )}
                  >
                    <div className="overflow-hidden rounded-xl bg-ink-2 py-2 shadow-xl ring-1 ring-white/10">
                      <Link
                        to="/menu"
                        className="block px-4 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-white/5"
                      >
                        All Menu
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={cn(
                            "block px-4 py-2.5 text-sm font-semibold transition-all hover:translate-x-1 hover:bg-white/5 hover:text-gold",
                            isActive(child.to) ? "text-gold" : "text-white/75",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "nav-link text-sm font-semibold tracking-wide transition-colors hover:text-gold",
                    isActive(link.to) ? "is-active text-gold" : "text-white/75",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart${count ? `, ${count} items` : ""}`}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream transition-all duration-300 hover:scale-105 hover:border-gold hover:text-gold sm:hidden"
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 ? (
                <span
                  key={count}
                  className="cart-pop absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[10px] font-extrabold text-ink"
                >
                  {count > 99 ? "99+" : count}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              onClick={openCart}
              className="btn-gold relative hidden !px-5 !py-2.5 sm:inline-flex"
            >
              <ShoppingBag className="h-4 w-4" />
              Cart{count > 0 ? ` (${count})` : ""}
              {count > 0 ? (
                <span key={count} className="cart-pop sr-only">
                  {count}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream transition-all duration-300 hover:scale-105 hover:border-gold hover:text-gold lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(18.5rem,88vw)] flex-col bg-ink shadow-2xl transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 pt-[calc(1rem+env(safe-area-inset-top))]">
          <span className="display-title text-xl text-cream">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream transition-transform hover:scale-105 hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 overflow-y-auto px-4 py-6">
          {NAV_LINKS.map((link, i) => (
            <div
              key={link.to}
              className={open ? "nav-in" : undefined}
              style={open ? { animationDelay: `${80 + i * 50}ms` } : undefined}
            >
              {link.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={mobileMenuOpen}
                    onClick={() => setMobileMenuOpen((v) => !v)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-semibold transition-all hover:bg-white/5 hover:text-gold",
                      isActive(link.to) || mobileMenuOpen
                        ? "bg-white/5 text-gold"
                        : "text-white/80",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-300",
                        mobileMenuOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                      mobileMenuOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="mb-2 ml-3 space-y-0.5 border-l border-white/10 py-1 pl-3">
                        <Link
                          to="/menu"
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block rounded-lg px-3 py-2.5 text-sm font-semibold transition-all hover:translate-x-1 hover:text-gold",
                            pathname === "/menu" ? "text-gold" : "text-white/60",
                          )}
                        >
                          All Menu
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "block rounded-lg px-3 py-2.5 text-sm font-semibold transition-all hover:translate-x-1 hover:text-gold",
                              isActive(child.to) ? "text-gold" : "text-white/60",
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3.5 text-base font-semibold transition-all hover:translate-x-1 hover:bg-white/5 hover:text-gold",
                    isActive(link.to) ? "bg-white/5 text-gold" : "text-white/80",
                  )}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-auto px-5 pb-[calc(2rem+env(safe-area-inset-bottom))]">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openCart();
            }}
            className="btn-gold w-full"
          >
            <ShoppingBag className="h-4 w-4" />
            View Cart{count > 0 ? ` (${count})` : ""}
          </button>
        </div>
      </aside>
    </>
  );
}
