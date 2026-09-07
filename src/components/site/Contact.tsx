import { Clock, MapPin, Phone } from "lucide-react";
import {
  complaintHref,
  contactInfo,
  mapsHref,
  phoneHref,
  whatsappHref,
} from "./data";
import { LocationMap } from "./LocationMap";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./WhatsAppIcon";

type ContactProps = {
  showHeading?: boolean;
};

export function Contact({ showHeading = true }: ContactProps) {
  return (
    <section className="bg-cream py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {showHeading ? (
          <Reveal>
            <SectionHeading
              eyebrow="Visit Us"
              title="Location & Contact"
              subtitle="Walk in, call, or WhatsApp — the kitchen is open late."
            />
          </Reveal>
        ) : null}

        <div className={showHeading ? "mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2" : "grid gap-6 lg:grid-cols-2"}>
          <Reveal variant="left">
            <div className="flex h-full flex-col gap-5">
              <ul className="space-y-4 rounded-2xl bg-card p-5 ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-soft text-gold-deep transition-transform duration-300 hover:scale-110">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-gold-deep">
                      Address
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink">{contactInfo.address}</p>
                    <p className="mt-1 text-sm text-muted-foreground" dir="rtl">
                      {contactInfo.addressUrdu}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-soft text-gold-deep transition-transform duration-300 hover:scale-110">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-gold-deep">
                      Phone
                    </p>
                    <a
                      href={phoneHref}
                      className="mt-1 block text-sm font-semibold text-ink hover:text-gold-deep"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-soft text-gold-deep transition-transform duration-300 hover:scale-110">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-gold-deep">
                      WhatsApp
                    </p>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-semibold text-ink hover:text-gold-deep"
                    >
                      {contactInfo.whatsapp}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-soft text-gold-deep transition-transform duration-300 hover:scale-110">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-gold-deep">
                      Complaints Only
                    </p>
                    <a
                      href={complaintHref}
                      className="mt-1 block text-sm font-semibold text-ink hover:text-gold-deep"
                    >
                      {contactInfo.complaint}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="rounded-2xl bg-ink p-5 text-cream shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="display-title mt-4 text-3xl">Opening Hours</h3>
                <p className="mt-2 text-sm font-semibold text-white/75">{contactInfo.hours}</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline !border-ink !text-ink hover:!bg-ink hover:!text-gold"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} variant="right">
            <LocationMap />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
