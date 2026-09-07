import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { reviews } from "./data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Reviews() {
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say"
            subtitle="From Chak Jano Kalan — neighbours who keep coming back."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 80} variant="scale">
              <article className="card-lift flex h-full flex-col rounded-2xl bg-card p-6 ring-1 ring-border">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star
                      key={star}
                      className={cn(
                        "h-4 w-4",
                        star < review.rating ? "fill-gold text-gold" : "text-border",
                      )}
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80 sm:text-base">
                  “{review.quote}”
                </p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-extrabold text-ink">{review.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                    {review.area}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
