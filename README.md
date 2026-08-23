# Al-Rehman Showcase

Al-Rehman Pizza & Cafe — Lovable Design Prompt (UI/Visual Only, No Backend Logic)

Scope note: This is a static, visual-design-only build. No cart state, no WhatsApp message generation logic, no filtering/search logic, no form handling, no data persistence. All buttons, badges, and interactions should be built as visual/hover/UI states only (using placeholder onClick handlers or none at all). Use mock/static data hardcoded directly in components — no dynamic config files, no CMS, no schema. Goal: a beautiful, scrollable marketing/menu-showcase page.

Project Brief

Design a modern, professional, appetite-driving landing page for a real Pakistani fast-food brand:

AL-REHMAN PIZZA & CAFE — a Pizza + Burger + Shawarma + Fast Food + Cafe brand.

The site must feel like an established local restaurant's real website — energetic, bold, appetizing, and youthful — not a generic AI-template restaurant site, and not a fine-dining/luxury café.

1. Brand Identity

Reference: uploaded Al-Rehman Pizza & Cafe logo (black, golden/yellow, white, red accents, bold "AR" mark, pizza-centric visual identity). Preserve this identity while giving it a cleaner, more modern presentation. Do not turn it into a luxury/minimal brand.

Tone: energetic, bold, appetizing, modern, family-friendly, slightly premium, locally authentic.

2. Color Palette

Primary: Golden Yellow / Warm Gold — CTAs, highlights, icons, key text

Secondary: Deep Black — header, hero overlay, footer, premium sections

Supporting: White / Warm Off-White — content background

Accent: Red (used sparingly) — "SPECIAL," "HOT DEAL," discount badges

Keep the palette balanced and sophisticated, not overly colorful or cluttered.

3. Typography

Display font: Bold, modern, condensed/rounded sans for hero headlines, pizza names, promo headings

Body font: Clean modern sans for descriptions, nav, prices, buttons

Avoid elegant/serif fonts — this is fast food, not fine dining

Strong type hierarchy: big confident headlines, clean readable body text

4. Overall Visual Style

Large, high-quality food photography (use styled placeholder images)

Bold typographic headings with strong contrast

Rounded cards (moderate radius, not overly soft/bubbly)

Black sections alternating with white/cream sections for rhythm

Gold accents on buttons, dividers, icons

Red used only for urgency/promo badges

Generous spacing, clean grid — but visually rich, not minimal

5. Page Sections to Design

Header (Sticky)

Logo | Home | Menu | Deals | About | Gallery | Contact | Order Now (gold button, prominent) Compact on scroll. Mobile hamburger menu with slide-in nav.

Hero Section

Full-width hero with layered food imagery (pizza, burger, shawarma, fries, drink).

Small eyebrow text: "WELCOME TO AL-REHMAN PIZZA & CAFE"

Big headline: "Fresh. Hot. Loaded With Flavor."

Subtext: one-line appetizing description

Primary CTA button: "Order Now on WhatsApp" (gold, bold — static button, no logic)

Secondary CTA: "View Full Menu" (outline style)

Small trust badge row: "Freshly Prepared • Family Favorite • Fast & Delicious"

Promo Banner (Today's Special)

Bold black or gold banner strip right after hero. Food image + deal name + "Order Now" static button. Should look easily swappable in the future.

Food Categories Grid

Heading: "What Are You Craving?" Icon/image cards: Pizza, Burgers, Shawarma, Fries & Sides, Fried Chicken, Sandwiches, Fast Food, Drinks, Desserts. Each card: image, name, short label, hover-zoom effect. (Clicking scrolls to section — anchor link only, no filter logic.)

Signature Pizza Section

Heading: "Our Signature Pizzas" Grid of pizza cards (Chicken Tikka, Chicken Fajita, BBQ Chicken, Malai Boti, Cheese Lover, Pepperoni, Special Al-Rehman, Veggie, Hot & Spicy). Each card: image, name, short description, size labels (S/M/L shown as static pills), price, "Add to Order" button (visual only).

Burgers Section

Card grid: Zinger, Chicken, Beef, Cheese, BBQ, Double Patty, Special Al-Rehman Burger. Image, name, description, price, static "Add to Order" button.

Shawarma Section

Strong visual section: Chicken, Cheese, Special, Jumbo, BBQ, Arabic Shawarma. Tagline: "Freshly Grilled • Loaded • Delicious."

Fries & Sides Section

Regular Fries, Masala Fries, Cheese Fries, Loaded Fries, Nuggets, Wings, Strips, Garlic Bread — compact card grid.

Deals & Combos Section

Heading: "Deals Made For Sharing" Combo cards (Family Deal, Couple Deal, Burger Deal, Student Deal) with badges: BEST SELLER / POPULAR / SPECIAL / SAVE MORE. Use placeholder prices (e.g., "Rs. 1499").

Best Sellers Section

Heading: "Our Most Loved Items ❤️" 4–6 product cards with image, name, star rating (static), price, "Best Seller" badge, "Add to Order" button.

Why Choose Al-Rehman

Clean icon-feature grid: Freshly Prepared, Quality Ingredients, Experienced Kitchen Team, Fast Service, Affordable Prices, Family Friendly.

About Section

Heading: "Good Food. Great Taste. Happy Customers." Short warm brand story paragraph + restaurant-style imagery. Keep it personal, not corporate.

Gallery

Masonry/grid gallery of food, interior, kitchen, and customer photos. Lightbox on click (visual only).

Customer Reviews

Heading: "What Our Customers Say" 3–5 testimonial cards: name, star rating, short quote.

Location & Contact

Address, phone, WhatsApp, hours — icon list. "Get Directions" and "Order on WhatsApp" buttons (static). Google Maps embed placeholder (iframe with placeholder src).

Opening Hours Card

Simple clean card: "Monday — Sunday, 11:00 AM – 12:00 AM."

Social Media Section

Heading: "Follow Al-Rehman Pizza & Cafe" Instagram-style photo grid + "Follow Us" static button.

Footer

Bold black footer: brand name + tagline "Fresh Food. Great Taste. Every Time." Nav links, contact info, social icons, copyright line "© 2026 Al-Rehman Pizza & Cafe. All Rights Reserved."

Floating WhatsApp Button

Fixed bottom-right circular button with WhatsApp icon and tooltip "Order on WhatsApp." Purely visual (static link or no-op), positioned so it doesn't block mobile content.

6. Animations (Keep Light & Fast)

Hero image fade/reveal on load

Fade-up on scroll for sections

Card hover: subtle lift + image zoom

Button hover states

Sticky header compact transition on scroll

Smooth scroll for anchor navigation

Keep all animations fast, subtle, and performant — avoid heavy/looping effects.

7. Responsive Design

Desktop: large imagery, multi-column grids, full nav

Tablet: adaptive 2-column grids, compact nav

Mobile: hamburger menu, 1–2 column cards, large touch targets, sticky floating WhatsApp button, no horizontal scroll

Mobile should be treated as the primary experience.

8. Tech Notes for Lovable

Build as static React/Tailwind components with hardcoded mock data (no external data fetching, no cart state, no forms)

Use placeholder images (styled food-image placeholders) where real photos aren't available

Keep component structure simple: Header, Hero, PromoBanner, CategoryGrid, MenuSection (repeatable), DealsSection, BestSellers, WhyChooseUs, About, Gallery, Testimonials, Contact, Footer, WhatsAppButton

All "Add to Order" / "Order Now" buttons should be static UI elements only — do not wire up cart, quantity, or messaging logic

Focus 100% of effort on visual polish, spacing, imagery, and typography — not app logic

Final Creative Direction

Think: Pizza Hut-level visual polish + local Pakistani fast-food personality + clean modern web design. Food-focused. Appetizing. Bold. Branded. Mobile-first. Fast. Modern. Family-friendly. Affordable-but-professional.

Avoid at all costs: generic AI restaurant template look, luxury/fine-dining aesthetic, cluttered marketplace feel.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d3731878-f4b8-4e59-bcf5-02cf63020378).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
