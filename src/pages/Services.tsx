import { SEO } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_CATEGORIES } from "@/data/services";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Vehicle & transit advertising, outdoor advertising, retail & dealer branding, brand activation, corporate merchandise, and media services from The Brand Advertising."
        path="/services"
      />

      <section className="bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <span className="eyebrow">Services</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] text-paper md:text-6xl">
            Every format, one connected campaign.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 md:text-lg">
            Six service categories covering vehicles, outdoor sites, retail spaces, live activations,
            merchandise, and media \u2014 planned together, not sold separately.
          </p>

          <nav aria-label="Jump to service category" className="mt-10 flex flex-wrap gap-3">
            {SERVICE_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.slug}`}
                className="border border-paper/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest2 text-paper/70 transition-colors hover:border-signal hover:text-signal"
              >
                {cat.shortLabel}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {SERVICE_CATEGORIES.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.slug}
          className={`section-pad scroll-mt-24 ${i % 2 === 0 ? "bg-paper" : "bg-ink-soft"}`}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <Reveal>
                <span className={`font-mono text-sm ${i % 2 === 0 ? "text-route" : "text-signal"}`}>
                  {String(i + 1).padStart(2, "0")} / {String(SERVICE_CATEGORIES.length).padStart(2, "0")}
                </span>
                <h2
                  className={`mt-3 text-3xl font-extrabold leading-tight md:text-4xl ${
                    i % 2 === 0 ? "text-ink" : "text-paper"
                  }`}
                >
                  {cat.title}
                </h2>
                <p className={`mt-5 text-base leading-relaxed ${i % 2 === 0 ? "text-ink/65" : "text-paper/60"}`}>
                  {cat.description}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <li
                      key={item.slug}
                      className={`flex items-center gap-3 border px-4 py-3.5 text-sm font-medium ${
                        i % 2 === 0 ? "border-ink/10 text-ink/80" : "border-paper/10 text-paper/80"
                      }`}
                    >
                      <Check size={15} className={i % 2 === 0 ? "text-route shrink-0" : "text-signal shrink-0"} />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-signal">
        <Container className="flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            Not sure which format fits your brand?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 whitespace-nowrap bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </Container>
      </section>
    </>
  );
}
