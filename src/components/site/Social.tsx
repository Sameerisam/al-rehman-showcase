import { socialImages } from "./data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Social() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Stay Hungry"
            title="Follow Al-Rehman Pizza & Cafe"
            subtitle="Daily drops, late-night specials and cheese pulls worth a double-tap."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {socialImages.map((image, i) => (
            <Reveal key={image.src} delay={i * 50} variant="scale">
              <a
                href="#contact"
                className="group card-lift relative block overflow-hidden rounded-xl"
              >
                <div className="img-shine">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    loading="lazy"
                    className="img-zoom aspect-square w-full object-cover"
                  />
                </div>
                <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <a href="#contact" className="btn-gold">
              Follow Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
