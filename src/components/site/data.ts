import heroSpread from "@/assets/hero-spread.jpg";
import promoDeal from "@/assets/promo-deal.jpg";
import logo from "@/assets/logo.png";
import pizzaTikka from "@/assets/pizza-tikka.jpg";
import pizzaFajita from "@/assets/pizza-fajita.jpg";
import pizzaBbq from "@/assets/pizza-bbq.jpg";
import pizzaMalai from "@/assets/pizza-malai.jpg";
import pizzaCheese from "@/assets/pizza-cheese.jpg";
import pizzaSpecial from "@/assets/pizza-special.jpg";
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
import garlicBread from "@/assets/garlic-bread.jpg";
import sandwich from "@/assets/sandwich.jpg";
import drinks from "@/assets/drinks.jpg";
import dessert from "@/assets/dessert.jpg";
import dealFamily from "@/assets/deal-family.jpg";
import dealCouple from "@/assets/deal-couple.jpg";
import dealBurger from "@/assets/deal-burger.jpg";
import dealStudent from "@/assets/deal-student.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import kitchen from "@/assets/kitchen.jpg";

export const images = {
  heroSpread,
  promoDeal,
  logo,
  aboutInterior,
  kitchen,
};

export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image: string;
  sizes?: string[];
  badge?: string;
  rating?: number;
};

export const pizzas: MenuItem[] = [
  {
    name: "Chicken Tikka",
    desc: "Desi-style tikka chunks, red onions, green chillies and loads of mozzarella.",
    price: "Rs. 1,099",
    image: pizzaTikka,
    sizes: ["S", "M", "L"],
    badge: "Most Ordered",
  },
  {
    name: "Chicken Fajita",
    desc: "Grilled fajita strips, capsicum, onions and our signature sauce.",
    price: "Rs. 1,149",
    image: pizzaFajita,
    sizes: ["S", "M", "L"],
  },
  {
    name: "BBQ Chicken",
    desc: "Smoky BBQ chicken, caramelized onions and a rich BBQ drizzle.",
    price: "Rs. 1,149",
    image: pizzaBbq,
    sizes: ["S", "M", "L"],
  },
  {
    name: "Malai Boti",
    desc: "Creamy malai boti chunks over a white-sauce base with herbs.",
    price: "Rs. 1,249",
    image: pizzaMalai,
    sizes: ["S", "M", "L"],
  },
  {
    name: "Cheese Lover",
    desc: "Double mozzarella, cheddar swirl and oregano. Pure cheese heaven.",
    price: "Rs. 999",
    image: pizzaCheese,
    sizes: ["S", "M", "L"],
  },
  {
    name: "Special Al-Rehman",
    desc: "Tikka, fajita, kabab, olives and jalapeños — fully loaded, house special.",
    price: "Rs. 1,399",
    image: pizzaSpecial,
    sizes: ["S", "M", "L"],
    badge: "Chef's Pick",
  },
];

export const burgers: MenuItem[] = [
  {
    name: "Zinger Burger",
    desc: "Crunchy golden fillet, fresh lettuce and our creamy mayo.",
    price: "Rs. 449",
    image: burgerZinger,
    badge: "Crowd Favorite",
  },
  {
    name: "Beef Cheese Burger",
    desc: "Juicy grilled beef patty with a molten cheddar blanket.",
    price: "Rs. 549",
    image: burgerBeef,
  },
  {
    name: "BBQ Burger",
    desc: "Grilled chicken, crispy onion rings and smoky BBQ sauce.",
    price: "Rs. 499",
    image: burgerBbq,
  },
  {
    name: "Double Patty Special",
    desc: "Two crispy fillets, double cheese and jalapeños. Not for the faint-hearted.",
    price: "Rs. 749",
    image: burgerDouble,
    badge: "Hot Deal",
  },
];

export const shawarmas: MenuItem[] = [
  {
    name: "Chicken Shawarma",
    desc: "Flame-grilled marinated chicken, garlic sauce and pickles in toasted pita.",
    price: "Rs. 249",
    image: shawarmaChicken,
  },
  {
    name: "Cheese Shawarma",
    desc: "Our classic shawarma with a molten cheese pull in every bite.",
    price: "Rs. 329",
    image: shawarmaCheese,
  },
  {
    name: "Special Shawarma",
    desc: "Loaded platter-style shawarma with fries, extra sauce and veggies.",
    price: "Rs. 399",
    image: shawarmaSpecial,
    badge: "Loaded",
  },
  {
    name: "Arabic Shawarma",
    desc: "Saj bread, hummus, tahini and pickles — the authentic Arabic way.",
    price: "Rs. 449",
    image: shawarmaArabic,
  },
];

export const sides: MenuItem[] = [
  {
    name: "Regular Fries",
    desc: "Golden, crispy and lightly salted — the classic everyone loves.",
    price: "Rs. 199",
    image: friesRegular,
  },
  {
    name: "Masala Fries",
    desc: "Dusted with chaat masala, fresh coriander and green chillies.",
    price: "Rs. 249",
    image: friesMasala,
  },
  {
    name: "Loaded Fries",
    desc: "Cheese sauce, crispy chicken chunks, jalapeños and mayo drizzle.",
    price: "Rs. 449",
    image: friesLoaded,
    badge: "Must Try",
  },
  {
    name: "Chicken Nuggets",
    desc: "Six golden crispy nuggets with honey mustard and ketchup dips.",
    price: "Rs. 399",
    image: nuggets,
  },
  {
    name: "Hot Wings",
    desc: "Spicy glazed wings with sesame and spring onions. Extra napkins needed.",
    price: "Rs. 449",
    image: wings,
    badge: "Spicy",
  },
  {
    name: "Garlic Bread",
    desc: "Freshly baked with garlic butter and herbs — the perfect sidekick.",
    price: "Rs. 299",
    image: garlicBread,
  },
];

export type Deal = {
  name: string;
  badge: string;
  badgeTone: "red" | "gold";
  includes: string[];
  price: string;
  wasPrice?: string;
  image: string;
};

export const deals: Deal[] = [
  {
    name: "Family Deal",
    badge: "Best Seller",
    badgeTone: "red",
    includes: ["2 Large Pizzas (any flavor)", "1.5 Ltr Drink", "Fries Bucket"],
    price: "Rs. 2,499",
    wasPrice: "Rs. 3,199",
    image: dealFamily,
  },
  {
    name: "Couple Deal",
    badge: "Popular",
    badgeTone: "gold",
    includes: ["1 Medium Pizza", "2 Regular Drinks", "Regular Fries"],
    price: "Rs. 1,399",
    wasPrice: "Rs. 1,749",
    image: dealCouple,
  },
  {
    name: "Burger Deal",
    badge: "Special",
    badgeTone: "red",
    includes: ["2 Zinger Burgers", "2 Regular Drinks", "Regular Fries"],
    price: "Rs. 1,099",
    wasPrice: "Rs. 1,399",
    image: dealBurger,
  },
  {
    name: "Student Deal",
    badge: "Save More",
    badgeTone: "gold",
    includes: ["1 Chicken Shawarma", "Masala Fries", "1 Regular Drink"],
    price: "Rs. 499",
    wasPrice: "Rs. 649",
    image: dealStudent,
  },
];

export const bestSellers: MenuItem[] = [
  {
    name: "Chicken Tikka Pizza",
    desc: "The pizza that made us famous across the neighborhood.",
    price: "Rs. 1,099",
    image: pizzaTikka,
    rating: 4.9,
    badge: "Best Seller",
  },
  {
    name: "Zinger Burger",
    desc: "Crispy, juicy and gone in sixty seconds.",
    price: "Rs. 449",
    image: burgerZinger,
    rating: 4.8,
    badge: "Best Seller",
  },
  {
    name: "Special Shawarma",
    desc: "Loaded, saucy and grilled fresh on order.",
    price: "Rs. 399",
    image: shawarmaSpecial,
    rating: 4.9,
    badge: "Best Seller",
  },
  {
    name: "Loaded Fries",
    desc: "Cheesy, meaty, messy — exactly how fries should be.",
    price: "Rs. 449",
    image: friesLoaded,
    rating: 4.7,
    badge: "Best Seller",
  },
];

export type Category = {
  name: string;
  label: string;
  image: string;
  href: string;
};

export const categories: Category[] = [
  { name: "Pizza", label: "Cheesy & loaded", image: pizzaSpecial, href: "#pizzas" },
  { name: "Burgers", label: "Crispy & juicy", image: burgerZinger, href: "#burgers" },
  { name: "Shawarma", label: "Freshly grilled", image: shawarmaChicken, href: "#shawarma" },
  { name: "Fries & Sides", label: "Golden & crispy", image: friesLoaded, href: "#sides" },
  { name: "Fried Chicken", label: "Hot & crunchy", image: wings, href: "#sides" },
  { name: "Sandwiches", label: "Stacked high", image: sandwich, href: "#sides" },
  { name: "Fast Food", label: "All-time favorites", image: burgerDouble, href: "#menu" },
  { name: "Drinks", label: "Chilled & fresh", image: drinks, href: "#menu" },
  { name: "Desserts", label: "Sweet endings", image: dessert, href: "#menu" },
];

export const galleryImages: { src: string; alt: string }[] = [
  { src: aboutInterior, alt: "Warm dining hall with brick oven glow" },
  { src: pizzaTikka, alt: "Chicken tikka pizza with a cheese pull" },
  { src: kitchen, alt: "Chef hand-tossing fresh pizza dough" },
  { src: burgerZinger, alt: "Crispy zinger burger" },
  { src: shawarmaSpecial, alt: "Loaded special shawarma platter" },
  { src: dessert, alt: "Molten lava cake with ice cream" },
  { src: dealFamily, alt: "Family deal feast on the table" },
  { src: friesLoaded, alt: "Loaded cheese fries" },
  { src: wings, alt: "Glazed hot wings with steam" },
  { src: drinks, alt: "Chilled soft drinks and milkshake" },
];

export const socialImages: { src: string; alt: string }[] = [
  { src: pizzaCheese, alt: "Cheese lover pizza pull" },
  { src: burgerBeef, alt: "Beef cheese burger" },
  { src: shawarmaCheese, alt: "Cheese shawarma" },
  { src: friesMasala, alt: "Masala fries" },
  { src: dessert, alt: "Brownie with ice cream" },
  { src: wings, alt: "Hot wings" },
];

export type Review = {
  name: string;
  area: string;
  rating: number;
  quote: string;
};

export const reviews: Review[] = [
  {
    name: "Ahmed Raza",
    area: "Gulberg",
    rating: 5,
    quote:
      "The chicken tikka pizza is hands down the best in town. Fresh dough, generous toppings and always delivered hot.",
  },
  {
    name: "Fatima Khan",
    area: "Model Town",
    rating: 5,
    quote:
      "Their zinger is crispy, juicy and never oily. My kids refuse to eat burgers from anywhere else now!",
  },
  {
    name: "Bilal Sheikh",
    area: "DHA",
    rating: 4,
    quote:
      "Shawarma loaded with chicken and that garlic sauce is addictive. Late-night orders always arrive fast.",
  },
  {
    name: "Ayesha Malik",
    area: "Bahria Town",
    rating: 5,
    quote:
      "Family deal is amazing value — two huge pizzas, drinks and fries. Quality is consistent every single time.",
  },
];

export const contactInfo = {
  address: "Main Boulevard, Gulberg III, Lahore, Pakistan",
  phone: "+92 300 1234567",
  whatsapp: "+92 300 1234567",
  hours: "Monday — Sunday · 11:00 AM – 12:00 AM",
};
