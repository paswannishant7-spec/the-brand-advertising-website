import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

interface ServicesGridProps {
  dark?: boolean;
  showAll?: boolean;
}

export function ServicesGrid({ dark = true, showAll = true }: ServicesGridProps) {
  const categories = showAll ? SERVICE_CATEGORIES : SERVICE_CATEGORIES.slice(0, 3);

  return (
    <section className={dark ? "section-pad bg-ink" : "section-pad bg-paper"}>
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="Six ways we put a brand in front of its audience."
          light={dark}
          description="From a rickshaw route to a retail counter, every format is planned as part of a single, connected campaign."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.06} id={cat.slug}>
              <Card dark={dark} className="h-full flex flex-col">
                <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className={dark ? "mt-4 font-display text-xl font-bold text-paper" : "mt-4 font-display text-xl font-bold text-ink"}>
                  {cat.title}
                </h3>
                <p className={dark ? "mt-3 text-sm leading-relaxed text-paper/60" : "mt-3 text-sm leading-relaxed text-ink/60"}>
                  {cat.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.items.slice(0, 4).map((item) => (
                    <li
                      key={item.slug}
                      className={
                        dark
                          ? "border border-paper/15 px-2.5 py-1 text-[11px] uppercase tracking-wide text-paper/50"
                          : "border border-ink/15 px-2.5 py-1 text-[11px] uppercase tracking-wide text-ink/50"
                      }
                    >
                      {item.name}
                    </li>
                  ))}
                  {cat.items.length > 4 && (
                    <li className="px-2.5 py-1 text-[11px] uppercase tracking-wide text-signal">
                      +{cat.items.length - 4} more
                    </li>
                  )}
                </ul>
                <Link
                  to={`/services#${cat.slug}`}
                  className={
                    dark
                      ? "mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest2 text-signal mt-auto pt-2"
                      : "mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest2 text-route mt-auto pt-2"
                  }
                >
                  Explore <ArrowUpRight size={13} />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
