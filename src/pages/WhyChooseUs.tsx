import { SEO } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PRINCIPLES } from "@/data/principles";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <>
      <SEO
        title="Why Choose Us"
        description="Strategic planning, dependable execution, transparency, and end-to-end campaign ownership \u2014 why brands work with The Brand Advertising."
        path="/why-choose-us"
      />

      <section className="bg-ink pt-32 pb-20 md:pt-40 md:pb-24">
        <Container>
          <span className="eyebrow">Why Choose Us</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] text-paper md:text-6xl">
            Principles that hold up on the street.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 md:text-lg">
            A campaign is only as good as its delivery. These are the standards we hold ourselves to on
            every engagement, from the first brief to the final report.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-paper">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} className="border-t-2 border-signal pt-5">
                <span className="font-mono text-xs text-route">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-signal">
        <Container className="flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            See how these principles show up in a real campaign plan.
          </h2>
          <Link
            to="/campaign-process"
            className="inline-flex items-center gap-2 whitespace-nowrap bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            View campaign process <ArrowUpRight size={16} />
          </Link>
        </Container>
      </section>
    </>
  );
}
