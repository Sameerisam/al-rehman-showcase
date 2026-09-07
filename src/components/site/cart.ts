import { whatsappHref } from "./data";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  size?: string;
  qty: number;
  image: string;
};

export function parsePrice(price: string): number {
  const digits = price.replace(/[^\d]/g, "");
  return Number(digits) || 0;
}

export function formatRs(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

export function cartItemId(name: string, size?: string): string {
  const base = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (!size) return base;
  const sizeSlug = size.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `${base}--${sizeSlug}`;
}

export function cartWhatsAppHref(items: CartItem[]): string {
  if (items.length === 0) return whatsappHref;

  const lines = items.map((item) => {
    const label = item.size ? `${item.name} (${item.size})` : item.name;
    return `• ${item.qty}x ${label} — ${formatRs(item.price * item.qty)}`;
  });
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const text = [
    "Assalam o Alaikum! I want to order:",
    "",
    ...lines,
    "",
    `Total: ${formatRs(total)}`,
  ].join("\n");

  return `${whatsappHref}?text=${encodeURIComponent(text)}`;
}
