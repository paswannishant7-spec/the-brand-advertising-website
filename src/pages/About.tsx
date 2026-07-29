import { SEO } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { PRINCIPLES } from "@/data/principles";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="The Brand Advertising is an outdoor and activation agency led by Director Dimcy Aggarwal, helping brands increase real-world visibility through strategy, creative production, and on-ground execution."
        path="/about"
      />

      <section className="bg-ink pt-32 pb-20 md:pt-40 md:pb-24">
        <Container>
          <span className="eyebrow">About TBA</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] text-paper md:text-6xl">
            Campaigns planned with intent and executed with care.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 md:text-lg">
            The Brand Advertising is a professional advertising and marketing company helping brands
            increase real-world visibility through strategy, creative production, and on-ground execution.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-paper">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <span className="eyebrow">Overview</span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-4xl">
              Specialists in visibility that moves.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              We specialize in outdoor advertising solutions, transit media, vehicle branding, retail
              branding, and integrated brand activation campaigns. Rather than treating each medium as a
              separate purchase, we plan campaigns as a connected route \u2014 from the vehicles moving
              through a city's streets to the storefronts and activations where a brand meets its
              audience directly.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              Every engagement is led end-to-end, from the first discovery conversation through
              production, execution, and reporting \u2014 with one team accountable for the outcome.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="border border-ink/10 bg-ink p-8 md:p-10">
            <span className="eyebrow">Leadership</span>
            <h3 className="mt-3 font-display text-2xl font-bold text-paper">Dimcy Aggarwal</h3>
            <p className="mt-1 text-sm uppercase tracking-widest2 text-signal">Director</p>
            <p className="mt-5 text-sm leading-relaxed text-paper/60">
              Leads strategy, client relationships, and campaign ownership across The Brand Advertising's
              service lines.
            </p>
            <div className="mt-6 border-t border-paper/10 pt-5 text-sm text-paper/50">
              <p>
                Founding year, team size, and additional leadership details will be added once confirmed
                by the client.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-pad bg-ink">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="Nine principles behind every campaign."
            light
            align="left"
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.03} className="bg-ink p-7">
                <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-base font-bold text-paper">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/55">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-signal">
        <Container className="flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            Want the full picture of how we work?
          </h2>
          <Link
            to="/campaign-process"
            className="inline-flex items-center gap-2 whitespace-nowrap bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            See the campaign process <ArrowUpRight size={16} />
          </Link>
        </Container>
      </section>
    </>
  );
}
