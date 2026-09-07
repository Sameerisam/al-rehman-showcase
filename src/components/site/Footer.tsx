import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { contactInfo, images, phoneHref, whatsappHref } from "./data";
import { WhatsAppIcon } from "./WhatsAppIcon";

const NAV_LINKS = [
  { label: "Home", to: "/" as const },
  { label: "Menu", to: "/menu" as const },
  { label: "Deals", to: "/deals" as const },
  { label: "About", to: "/about" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-[calc(6rem+env(safe-area-inset-bottom))] text-cream sm:pb-12">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          {/* Brand — full width on mobile */}
          <div>
            <Link to="/" className="group flex items-center gap-3">
              <img
                src={images.logo}
                alt="AR Pizza & Cafe logo"
                width={80}
                height={80}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-gold/70 transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20"
              />
              <span>
                <span className="display-title block text-3xl">Al-Rehman</span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-gold">
                  PIZZA &amp; CAFE
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Fresh Food. Great Taste. Every Time. — Near PCO, Chowk Chak Jano Kalan.
            </p>
          </div>

          {/* Explore + Contact — always 2 columns, even on small screens */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">
                Explore
              </h3>
              <nav className="mt-4 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm font-semibold text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">
                Contact
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{contactInfo.address}</p>
              <p className="mt-1 text-sm text-white/50" dir="rtl">
                {contactInfo.addressUrdu}
              </p>
              <a
                href={phoneHref}
                className="mt-3 flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span className="break-all">{contactInfo.phone}</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-gold"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-gold" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs font-semibold tracking-wide text-white/45 sm:px-6">
          © {new Date().getFullYear()} AR Pizza &amp; Cafe. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
