import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cartWhatsAppHref, formatRs } from "./cart";
import { useCart } from "./CartContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CartDrawer() {
  const { items, count, total, isOpen, closeCart, setQty, removeItem, clear } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 border-l border-border bg-cream p-0 sm:max-w-md"
      >
        <SheetHeader className="border-b border-border px-5 py-5 text-left">
          <SheetTitle className="display-title text-3xl text-ink">Your Cart</SheetTitle>
          <SheetDescription className="text-sm font-medium text-muted-foreground">
            {count === 0
              ? "Add items from the menu, then order on WhatsApp."
              : `${count} item${count === 1 ? "" : "s"} ready to order`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-gold-soft text-gold-deep">
                <ShoppingBag className="h-6 w-6" />
              </span>
              <p className="text-sm font-semibold text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 rounded-2xl bg-card p-3 ring-1 ring-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width={72}
                    height={72}
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-extrabold text-ink">{item.name}</p>
                        {item.size ? (
                          <p className="mt-0.5 text-xs font-semibold text-gold-deep">{item.size}</p>
                        ) : null}
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeItem(item.id)}
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-flame/10 hover:text-flame"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-1 rounded-full bg-gold-soft p-0.5">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQty(item.id, item.qty - 1)}
                          className="grid h-7 w-7 place-items-center rounded-full text-ink hover:bg-card"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-6 text-center text-sm font-extrabold text-ink">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQty(item.id, item.qty + 1)}
                          className="grid h-7 w-7 place-items-center rounded-full text-ink hover:bg-card"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-extrabold text-ink">
                        {formatRs(item.price * item.qty)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border bg-card px-5 py-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-muted-foreground">Total</span>
            <span className="display-title text-3xl text-ink">{formatRs(total)}</span>
          </div>
          {items.length > 0 ? (
            <button
              type="button"
              onClick={clear}
              className="mb-3 w-full text-center text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-flame"
            >
              Clear cart
            </button>
          ) : null}
          <a
            href={cartWhatsAppHref(items)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (items.length === 0) return;
              clear();
              closeCart();
            }}
            aria-disabled={items.length === 0}
            className={
              items.length === 0
                ? "pointer-events-none flex w-full items-center justify-center gap-2 rounded-full bg-ink/40 px-5 py-3.5 text-sm font-extrabold uppercase tracking-wider text-cream/50"
                : "btn-gold w-full !py-3.5"
            }
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
