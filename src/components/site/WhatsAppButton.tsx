import { cartWhatsAppHref } from "./cart";
import { useCart } from "./CartContext";
import { whatsappHref } from "./data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
  const { items, clear } = useCart();
  const href = items.length ? cartWhatsAppHref(items) : whatsappHref;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      onClick={() => {
        if (items.length > 0) clear();
      }}
      className="whatsapp-pulse fixed right-4 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
