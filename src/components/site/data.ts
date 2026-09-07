import heroSpread from "@/assets/hero-spread.jpg";
import promoDeal from "@/assets/promo-deal.jpg";
import logo from "@/assets/logo.png";
import pizzaTikka from "@/assets/pizza-tikka.jpg";
import pizzaFajita from "@/assets/pizza-fajita.jpg";
import pizzaBbq from "@/assets/pizza-bbq.jpg";
import pizzaMalai from "@/assets/pizza-malai.jpg";
import pizzaCheese from "@/assets/pizza-cheese.jpg";
import pizzaSpecialImg from "@/assets/pizza-special.jpg";
import burgerZinger from "@/assets/burger-zinger.jpg";
import burgerBeef from "@/assets/burger-beef.jpg";
import burgerBbq from "@/assets/burger-bbq.jpg";
import burgerDouble from "@/assets/burger-double.jpg";
import shawarmaChicken from "@/assets/shawarma-chicken.jpg";
import shawarmaCheese from "@/assets/shawarma-cheese.jpg";
import shawarmaSpecial from "@/assets/shawarma-special.jpg";
import shawarmaArabic from "@/assets/shawarma-arabic.jpg";
import friesRegular from "@/assets/fries-regular.jpg";
import friesMasala from "@/assets/fries-masala.jpg";
import friesLoaded from "@/assets/fries-loaded.jpg";
import nuggets from "@/assets/nuggets.jpg";
import wings from "@/assets/wings.jpg";
import wingsOven from "@/assets/wings-oven.png";
import sandwich from "@/assets/sandwich.jpg";
import drinks from "@/assets/drinks.jpg";
import pastaCrispy from "@/assets/pasta-crispy.png";
import pastaSpecialImg from "@/assets/pasta-special.png";
import pastaVeg from "@/assets/pasta-veg.png";
import dealFamily from "@/assets/deal-family.jpg";
import dealCouple from "@/assets/deal-couple.jpg";
import dealBurger from "@/assets/deal-burger.jpg";
import dealStudent from "@/assets/deal-student.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import kitchen from "@/assets/kitchen.jpg";
import locationMapOffline from "@/assets/location-map-offline.png";

export const brand = {
  name: "Al-Rehman",
  shortName: "AR",
  tagline: "Pizza & Cafe",
  fullName: "AR Pizza & Cafe",
};

export const images = {
  heroSpread,
  promoDeal,
  logo,
  aboutInterior,
  kitchen,
  locationMapOffline,
};

export type SizePrice = {
  size: string;
  price: string;
};

export type MenuItem = {
  name: string;
  desc?: string;
  price?: string;
  prices?: SizePrice[];
  image: string;
  badge?: string;
  rating?: number;
};

export type Deal = {
  name: string;
  badge: string;
  badgeTone: "red" | "gold";
  includes: string[];
  price: string;
  wasPrice?: string;
  image: string;
};

export type Category = {
  name: string;
  label: string;
  image: string;
  to: "/menu/pizza" | "/menu/burgers" | "/menu/rolls" | "/menu/wraps" | "/menu/pasta" | "/menu/sides" | "/deals";
};

function rs(n: number) {
  return `Rs. ${n.toLocaleString("en-PK")}`;
}

/* ─── Contact ─── */

export const contactInfo = {
  address: "Near PCO, Chowk Chak Jano Kalan",
  addressUrdu: "نزد PCO چوک چک جانو کلاں",
  phone: "0315-9688216",
  phones: ["0315-9688216"],
  complaint: "0345-8592265",
  whatsapp: "0344-8186216",
  hours: "Monday — Sunday · 11:00 AM – 12:00 AM",
  /** Approximate shop area pin — Chak Jano Kalan (near PCO / Gujrat–Sargodha Rd) */
  lat: 32.45,
  lng: 73.717,
};

/** WhatsApp requires international format: 92 + local number without leading 0 */
export function toWhatsAppNumber(local: string) {
  const digits = local.replace(/\D/g, "");
  if (digits.startsWith("92")) return digits;
  if (digits.startsWith("0")) return `92${digits.slice(1)}`;
  return `92${digits}`;
}

export const whatsappHref = `https://wa.me/${toWhatsAppNumber(contactInfo.whatsapp)}`;
export const phoneHref = `tel:${contactInfo.phone.replace(/\s/g, "")}`;
export const phoneHrefs = contactInfo.phones.map((p) => `tel:${p.replace(/\s/g, "")}`);
export const complaintHref = `tel:${contactInfo.complaint.replace(/\s/g, "")}`;
export const mapsHref = `https://www.google.com/maps?q=${contactInfo.lat},${contactInfo.lng}`;
export const mapsEmbedSrc = `https://maps.google.com/maps?q=${contactInfo.lat},${contactInfo.lng}&z=16&output=embed`;

export function orderWhatsAppHref(itemName: string) {
  const text = encodeURIComponent(`Assalam o Alaikum! I want to order: ${itemName}`);
  return `${whatsappHref}?text=${text}`;
}

/* ─── Pizza ─── */

export const pizzaRegularBase: SizePrice[] = [
  { size: "Small", price: rs(490) },
  { size: "Medium", price: rs(950) },
  { size: "Large", price: rs(1250) },
  { size: "Family", price: rs(1750) },
];

export const pizzaExtraToppings: SizePrice[] = [
  { size: 'Small 8"', price: rs(100) },
  { size: 'Medium 11"', price: rs(150) },
  { size: 'Large 13"', price: rs(200) },
  { size: "Family", price: rs(250) },
];

export const pizzaRegular: MenuItem[] = [
  { name: "Chicken Tikka", desc: "Classic desi tikka topping on our regular crust.", prices: pizzaRegularBase, image: pizzaTikka, badge: "Popular" },
  { name: "Chicken Bar BQ", desc: "Smoky BBQ chicken with a rich drizzle.", prices: pizzaRegularBase, image: pizzaBbq },
  { name: "Chicken Fajita", desc: "Grilled fajita strips with capsicum and onion.", prices: pizzaRegularBase, image: pizzaFajita },
  { name: "Hot Spicy", desc: "For heat lovers — bold spice on every slice.", prices: pizzaRegularBase, image: pizzaSpecialImg },
  { name: "Pizza Vegetarian", desc: "Fresh veggies and cheese, no meat.", prices: pizzaRegularBase, image: pizzaCheese },
  { name: "Cheese Lovers", desc: "Extra cheese, pure pull.", prices: pizzaRegularBase, image: pizzaCheese },
  { name: "Achari Pizza", desc: "Tangy achari masala twist.", prices: pizzaRegularBase, image: pizzaTikka },
  { name: "Supreme Pizza", desc: "Fully loaded supreme toppings.", prices: pizzaRegularBase, image: pizzaSpecialImg },
];

export const pizzaSpecialBase: SizePrice[] = [
  { size: "Small", price: rs(550) },
  { size: "Medium", price: rs(1050) },
  { size: "Large", price: rs(1450) },
  { size: "Family", price: rs(1850) },
];

export const pizzaPremiumBase: SizePrice[] = [
  { size: "Medium", price: rs(1250) },
  { size: "Large", price: rs(1650) },
  { size: "Family", price: rs(2250) },
];

export const pizzaSpecial: MenuItem[] = [
  { name: "Malai Boti Pizza", desc: "Creamy malai boti on a special base.", prices: pizzaSpecialBase, image: pizzaMalai },
  { name: "Italian Pizza", desc: "Italian-style toppings and herbs.", prices: pizzaSpecialBase, image: pizzaSpecialImg },
  { name: "Behari Kebab", desc: "Behari kebab flavour through every bite.", prices: pizzaSpecialBase, image: pizzaBbq },
  { name: "Lazania Pizza", desc: "Lasagna-inspired layered pizza.", prices: pizzaSpecialBase, image: pizzaCheese },
  { name: "Cheese Crust Pizza", desc: "Cheese-stuffed crust special.", prices: pizzaSpecialBase, image: pizzaCheese },
  { name: "A.R Special", desc: "Our signature house special pizza.", prices: pizzaPremiumBase, image: pizzaSpecialImg, badge: "Chef's Pick" },
  { name: "Kabab Crust", desc: "Kabab-loaded crust — premium special.", prices: pizzaPremiumBase, image: pizzaBbq, badge: "Premium" },
  { name: "Crown Crust", desc: "Crown crust with dough balls on the rim.", prices: pizzaPremiumBase, image: pizzaSpecialImg, badge: "Premium" },
  { name: "Slice Pizza", desc: "Single loaded slice.", price: rs(650), image: pizzaTikka },
  { name: "Train Pizza", desc: "The big one — train pizza feast.", price: rs(3100), image: pizzaSpecialImg, badge: "Feast" },
];

/** @deprecated use pizzaRegular / pizzaSpecial — kept for compatibility */
export const pizzas: MenuItem[] = [...pizzaRegular.slice(0, 4), ...pizzaSpecial.slice(0, 2)];

/* ─── Burgers ─── */

export const burgers: MenuItem[] = [
  { name: "A.R Special Burger", desc: "Our house special stacked burger.", price: rs(450), image: burgerDouble, badge: "Signature" },
  { name: "Chicken Burger", desc: "Classic chicken burger, simple and filling.", price: rs(320), image: burgerBeef },
  { name: "Chicken with Cheese", desc: "Chicken burger with melted cheese.", price: rs(350), image: burgerBeef },
  { name: "Zinger Burger", desc: "Crispy zinger fillet with fresh veggies.", price: rs(350), image: burgerZinger, badge: "Popular" },
  { name: "Zinger with Cheese", desc: "Zinger plus a cheese blanket.", price: rs(400), image: burgerZinger },
  { name: "Zinger Tower Burger", desc: "Tall, loaded zinger tower.", price: rs(600), image: burgerDouble, badge: "Loaded" },
  { name: "Double Deckers Burger", desc: "Double-decker — two layers of crunch.", price: rs(650), image: burgerDouble },
  { name: "Zinger Piece", desc: "Crispy zinger piece on its own.", price: rs(300), image: burgerBbq },
];

/* ─── Rolls ─── */

export const rolls: MenuItem[] = [
  { name: "Chicken Paratha", desc: "Chicken rolled in fresh paratha.", price: rs(230), image: shawarmaChicken },
  { name: "Chicken Shawarma", desc: "Classic chicken shawarma wrap.", price: rs(230), image: shawarmaChicken, badge: "Popular" },
  { name: "Chicken Cheese Shawarma", desc: "Shawarma with melted cheese.", price: rs(270), image: shawarmaCheese },
  { name: "Kabab Roll", desc: "Kabab rolled tight and hot.", price: rs(400), image: shawarmaArabic },
  { name: "Zinger Shawarma", desc: "Crispy zinger in shawarma style.", price: rs(330), image: shawarmaSpecial },
  { name: "Zinger Cheese Shawarma", desc: "Zinger shawarma with cheese.", price: rs(350), image: shawarmaCheese },
  { name: "Zinger Paratha", desc: "Zinger wrapped in paratha.", price: rs(300), image: shawarmaSpecial },
  { name: "Zinger Cheese Paratha", desc: "Zinger, cheese, and paratha.", price: rs(350), image: shawarmaCheese },
  { name: "Chicken Cheese Paratha", desc: "Chicken and cheese in paratha.", price: rs(300), image: shawarmaChicken },
  { name: "Kabab Cheese Shawarma", desc: "Kabab shawarma with cheese.", price: rs(380), image: shawarmaArabic },
  { name: "Platter Shawarma", desc: "Platter-style loaded shawarma.", price: rs(400), image: shawarmaSpecial, badge: "Loaded" },
];

/** @deprecated use rolls */
export const shawarmas = rolls;

/* ─── Wraps ─── */

export const wraps: MenuItem[] = [
  { name: "Chicken Wrap", desc: "Grilled chicken wrap with greens and sauce.", price: rs(400), image: sandwich },
  { name: "Malaie Boti Wrap", desc: "Creamy malai boti in a soft wrap.", price: rs(430), image: sandwich },
  { name: "Special Kabab Wrap", desc: "Special kabab wrap, fully loaded.", price: rs(450), image: sandwich },
  { name: "Special Wrap A-R", desc: "Our A.R special wrap.", price: rs(480), image: sandwich, badge: "Signature" },
  { name: "Spring Roll", desc: "Crispy spring roll.", price: rs(450), image: sandwich },
];

/* ─── Pasta ─── */

export const pasta: MenuItem[] = [
  {
    name: "Crispy Pasta",
    desc: "Crispy pasta — regular or large.",
    prices: [
      { size: "Regular", price: rs(450) },
      { size: "Large", price: rs(750) },
    ],
    image: pastaCrispy,
  },
  {
    name: "Special Pasta",
    desc: "House special pasta.",
    prices: [
      { size: "Regular", price: rs(450) },
      { size: "Large", price: rs(750) },
    ],
    image: pastaSpecialImg,
    badge: "Popular",
  },
  {
    name: "Vegetarian Pasta",
    desc: "Veg pasta with fresh toppings.",
    prices: [
      { size: "Regular", price: rs(400) },
      { size: "Large", price: rs(700) },
    ],
    image: pastaVeg,
  },
];

/* ─── Wings, Nuggets & Fries ─── */

export const wingsNuggets: MenuItem[] = [
  {
    name: "Hot Wings",
    desc: "Spicy hot wings.",
    prices: [
      { size: "6 Pcs", price: rs(350) },
      { size: "12 Pcs", price: rs(650) },
    ],
    image: wings,
    badge: "Spicy",
  },
  {
    name: "Oven Baked Wings",
    desc: "Oven-baked wings.",
    prices: [
      { size: "6 Pcs", price: rs(350) },
      { size: "12 Pcs", price: rs(650) },
    ],
    image: wingsOven,
  },
  {
    name: "Nuggets",
    desc: "Golden chicken nuggets.",
    prices: [
      { size: "6 Pcs", price: rs(350) },
      { size: "12 Pcs", price: rs(650) },
    ],
    image: nuggets,
  },
];

export const fries: MenuItem[] = [
  { name: "Regular Fries", desc: "Classic salted fries.", price: rs(250), image: friesRegular },
  { name: "French Fries Regular", desc: "French fries — regular size.", price: rs(300), image: friesMasala },
  { name: "French Fries Large", desc: "French fries — large size.", price: rs(500), image: friesMasala },
  { name: "Loaded Fries Regular", desc: "Loaded fries with toppings.", price: rs(450), image: friesLoaded, badge: "Must Try" },
  { name: "Loaded Fries Large", desc: "Large loaded fries.", price: rs(750), image: friesLoaded },
];

export const sides: MenuItem[] = [...wingsNuggets, ...fries];

/* ─── Deals ─── */

export const deals: Deal[] = [
  {
    name: "Evening Deal 1",
    badge: "Evening",
    badgeTone: "gold",
    includes: ["1 Large Pizza", "1 Ltr Drink"],
    price: rs(1400),
    image: dealCouple,
  },
  {
    name: "Mid Night Deal 2",
    badge: "Midnight",
    badgeTone: "red",
    includes: ["2 Large Pizza", "1.5 Ltr Drink"],
    price: rs(2650),
    image: dealFamily,
  },
  {
    name: "Zinger Deal 3",
    badge: "Zinger",
    badgeTone: "gold",
    includes: ["3 Zinger Burgers", "1 Ltr Drink"],
    price: rs(1200),
    image: dealBurger,
  },
  {
    name: "Pizza Deal 4",
    badge: "Quick Bite",
    badgeTone: "gold",
    includes: ["1 Small Pizza", "Half Sting"],
    price: rs(600),
    image: dealStudent,
  },
  {
    name: "Family Deal 5",
    badge: "Best Value",
    badgeTone: "red",
    includes: [
      "1 Large Pizza",
      "1 Zinger Burger",
      "1 Chicken Shawarma",
      "1 Paratha Roll",
      "12 Pcs Wings",
      "Regular Fries",
      "1.5 Ltr Cold Drink",
    ],
    price: rs(3050),
    image: dealFamily,
  },
  {
    name: "A.R Special Deal 6",
    badge: "Signature",
    badgeTone: "red",
    includes: [
      "1 Large A.R Special Pizza",
      "3 Zinger Burgers",
      "3 Chicken Shawarma",
      "12 Pcs Wings",
      "1.5 Ltr Cold Drink",
    ],
    price: rs(4000),
    image: promoDeal,
  },
  {
    name: "Yari Deal 7",
    badge: "Share",
    badgeTone: "gold",
    includes: ["1 Large Pizza", "12 Pcs Wings", "1.5 Ltr Drink"],
    price: rs(2100),
    image: dealCouple,
  },
];

export const featuredDeal: Deal = deals.find((d) => d.name === "Family Deal 5") ?? deals[0]!;

export const bestSellers: MenuItem[] = [
  {
    name: "Chicken Tikka Pizza",
    desc: "Our most ordered regular pizza flavour.",
    price: "From Rs. 490",
    image: pizzaTikka,
    rating: 4.9,
    badge: "Best Seller",
  },
  {
    name: "Zinger Burger",
    desc: "Crispy, juicy and gone fast.",
    price: rs(350),
    image: burgerZinger,
    rating: 4.8,
    badge: "Best Seller",
  },
  {
    name: "Chicken Shawarma",
    desc: "Classic shawarma done right.",
    price: rs(230),
    image: shawarmaChicken,
    rating: 4.9,
    badge: "Best Seller",
  },
  {
    name: "A.R Special Pizza",
    desc: "The house special everyone asks for.",
    price: "From Rs. 1,250",
    image: pizzaSpecialImg,
    rating: 4.9,
    badge: "Best Seller",
  },
];

export const categories: Category[] = [
  { name: "Pizza", label: "Regular & special", image: pizzaSpecialImg, to: "/menu/pizza" },
  { name: "Burgers", label: "Zinger & more", image: burgerZinger, to: "/menu/burgers" },
  { name: "Rolls", label: "Shawarma & paratha", image: shawarmaChicken, to: "/menu/rolls" },
  { name: "Wraps", label: "Malai & kabab", image: sandwich, to: "/menu/wraps" },
  { name: "Pasta", label: "Crispy & special", image: pastaSpecialImg, to: "/menu/pasta" },
  { name: "Sides", label: "Wings, nuggets & fries", image: friesLoaded, to: "/menu/sides" },
  { name: "Hot Deals", label: "Evening to midnight", image: dealFamily, to: "/deals" },
];

export const menuNav = [
  { label: "Pizza", to: "/menu/pizza" as const },
  { label: "Burgers", to: "/menu/burgers" as const },
  { label: "Rolls", to: "/menu/rolls" as const },
  { label: "Wraps", to: "/menu/wraps" as const },
  { label: "Pasta", to: "/menu/pasta" as const },
  { label: "Sides", to: "/menu/sides" as const },
];

export const galleryImages: { src: string; alt: string }[] = [
  { src: aboutInterior, alt: "Warm dining space at AR Pizza & Cafe" },
  { src: pizzaTikka, alt: "Chicken tikka pizza" },
  { src: kitchen, alt: "Fresh pizza dough in the kitchen" },
  { src: burgerZinger, alt: "Crispy zinger burger" },
  { src: shawarmaSpecial, alt: "Loaded shawarma" },
  { src: dealFamily, alt: "Family deal spread" },
  { src: friesLoaded, alt: "Loaded fries" },
  { src: wings, alt: "Hot wings" },
  { src: pizzaSpecialImg, alt: "A.R special pizza" },
  { src: drinks, alt: "Cold drinks" },
];

export function formatItemPrice(item: MenuItem): string {
  if (item.price) return item.price;
  const first = item.prices?.[0];
  if (!first) return "";
  if (item.prices!.length === 1) return first.price;
  return `From ${first.price}`;
}

export type Review = {
  name: string;
  area: string;
  rating: number;
  quote: string;
};

export const reviews: Review[] = [
  {
    name: "Local Guest",
    area: "Chak Jano Kalan",
    rating: 5,
    quote: "Fresh pizza and fast WhatsApp orders — our go-to for family nights.",
  },
  {
    name: "Regular Customer",
    area: "Near PCO",
    rating: 5,
    quote: "Zinger and shawarma always hit the spot. Family Deal is great value.",
  },
];

export const socialImages: { src: string; alt: string }[] = [
  { src: pizzaCheese, alt: "Cheese pizza" },
  { src: burgerZinger, alt: "Zinger burger" },
  { src: shawarmaCheese, alt: "Cheese shawarma" },
  { src: friesLoaded, alt: "Loaded fries" },
  { src: wings, alt: "Hot wings" },
  { src: pizzaSpecialImg, alt: "Special pizza" },
];
