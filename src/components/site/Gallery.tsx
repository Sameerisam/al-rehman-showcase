import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { galleryImages } from "./data";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState<(typeof galleryImages)[number] | null>(null);

  return (
    <section className="bg-ink py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="columns-2 gap-3 sm:gap-4 md:columns-3">
          {galleryImages.map((image, i) => (
            <Reveal key={image.src} delay={(i % 6) * 50} variant="scale" className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={() => setActive(image)}
                className="group relative block w-full overflow-hidden rounded-xl"
              >
                <div className="img-shine">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={i % 5 === 0 || i % 5 === 3 ? 1000 : 640}
                    loading="lazy"
                    className={cn(
                      "img-zoom w-full object-cover",
                      i % 5 === 0 || i % 5 === 3 ? "aspect-[3/4]" : "aspect-[4/3]",
                    )}
                  />
                </div>
                <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/35" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 px-3 pb-3 text-left text-[11px] font-semibold text-cream/90 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-2 sm:opacity-0">
                  {image.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={active != null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-[min(96vw,56rem)] border-0 bg-transparent p-0 shadow-none [&>button]:right-2 [&>button]:top-2 [&>button]:rounded-full [&>button]:bg-ink/80 [&>button]:p-2 [&>button]:text-cream [&>button]:opacity-100 [&>button]:hover:opacity-100">
          {active ? (
            <>
              <DialogTitle className="sr-only">{active.alt}</DialogTitle>
              <DialogDescription className="sr-only">Enlarged gallery photo</DialogDescription>
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[85vh] w-full rounded-xl object-contain"
              />
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
