import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { contactInfo, mapsHref, phoneHref, whatsappHref } from "./data";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ContactStrip() {
  return (
    <section className="bg-ink py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow !text-gold">Find Us</p>
              <h2 className="display-title mt-3 text-3xl text-cream sm:text-5xl">
                Near PCO, Chowk Chak Jano Kalan
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65">
                Call, WhatsApp, or drop by. We are open late for evening and midnight deals.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={phoneHref} className="btn-gold !px-6 !py-3">
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline !px-6 !py-3"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
                <Link to="/contact" className="btn-outline !px-6 !py-3">
                  <MapPin className="h-4 w-4" />
                  Contact &amp; Map
                </Link>
              </div>
            </div>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10"
            >
              <p className="text-xs font-extrabold uppercase tracking-widest text-gold">Address</p>
              <p className="mt-2 text-lg font-semibold text-cream">{contactInfo.address}</p>
              <p className="mt-2 text-sm text-white/50" dir="rtl">
                {contactInfo.addressUrdu}
              </p>
              <p className="mt-4 text-sm font-semibold text-white/70">{contactInfo.hours}</p>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
