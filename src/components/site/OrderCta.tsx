import { WhatsAppIcon } from "./WhatsAppIcon";
import { contactInfo, phoneHref, whatsappHref } from "./data";

type OrderCtaProps = {
  title?: string;
  subtitle?: string;
};

export function OrderCta({
  title = "Hungry right now?",
  subtitle = "Call us or WhatsApp your order — we prepare it fresh.",
}: OrderCtaProps) {
  return (
    <section className="relative overflow-hidden bg-gold py-12 sm:py-14">
      <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/25 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="display-title text-4xl text-ink sm:text-5xl">{title}</h2>
          <p className="mt-2 text-sm font-medium text-ink/70 sm:text-base">{subtitle}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-gold transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-ink-2 active:scale-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-ink transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-ink hover:text-gold active:scale-95"
          >
            Call {contactInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
