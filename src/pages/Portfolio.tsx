import { useState } from "react";
import { SEO } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { PORTFOLIO_ITEMS, type PortfolioItem } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [active, setActive] = useState<PortfolioItem | null>(null);

  return (
    <>
      <SEO
        title="Portfolio"
        description="A look at the campaign formats The Brand Advertising works across \u2014 vehicle branding, outdoor, retail, and activation. Case studies to be added following client confirmation."
        path="/portfolio"
      />

      <section className="bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <span className="eyebrow">Portfolio</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] text-paper md:text-6xl">
            Campaign work, by format.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 md:text-lg">
            The entries below outline the type of campaigns we run. Photos, results, and named case
            studies will be added here once approved by each client.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-paper">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <button onClick={() => setActive(item)} className="w-full text-left">
                  <Card className="h-full">
                    <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-ink/15 bg-ink/[0.03] text-xs uppercase tracking-widest2 text-ink/30">
                      Image placeholder
                    </div>
                    <span className="mt-5 block font-mono text-[11px] uppercase tracking-widest2 text-route">
                      {item.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-ink">{item.title}</h3>
                    <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
                      <span className="text-xs uppercase tracking-widest2 text-ink/40">{item.metricLabel}</span>
                      <span className="font-mono text-sm text-ink/50">{item.metricValue}</span>
                    </div>
                  </Card>
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Modal open={!!active} onOpenChange={(o) => !o && setActive(null)} title={active?.title ?? ""}>
        {active && (
          <div>
            <span className="font-mono text-xs uppercase tracking-widest2 text-signal">{active.category}</span>
            <p className="mt-4 leading-relaxed">{active.summary}</p>
            <a
              href="mailto:admin@thebrandadvertising.in"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-signal hover:underline"
            >
              Ask about this campaign type <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </Modal>
    </>
  );
}
