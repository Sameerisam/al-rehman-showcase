import { cn } from "@/lib/utils";
import type { MenuItem } from "./data";
import { MenuCard } from "./MenuCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type MenuGridProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: MenuItem[];
  tone?: "light" | "dark";
  compact?: boolean;
  className?: string;
};

export function MenuGrid({
  eyebrow,
  title,
  subtitle,
  items,
  tone = "light",
  compact = false,
  className,
}: MenuGridProps) {
  const cols =
    items.length <= 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : items.length === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn(className)}>
      {title ? (
        <Reveal>
          <SectionHeading
            {...(eyebrow ? { eyebrow } : {})}
            title={title}
            {...(subtitle ? { subtitle } : {})}
            tone={tone}
          />
        </Reveal>
      ) : null}
      <div className={cn("grid gap-5 sm:gap-6", title ? "mt-12" : "", cols)}>
        {items.map((item, i) => (
          <Reveal key={item.name} delay={i * 50} variant="scale">
            <MenuCard item={item} tone={tone} compact={compact} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
