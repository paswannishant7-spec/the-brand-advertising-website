import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PRINCIPLES } from "@/data/principles";

export function AboutPreview() {
  return (
    <section className="section-pad bg-paper">
      <div className="container grid gap-14 lg:grid-cols-2 lg:gap-20">
        <SectionHeading
          eyebrow="About The Brand Advertising"
          title="Real-world visibility, planned with intent."
          description="We're a full-service outdoor and activation agency helping brands increase real-world visibility through strategy, creative production, and on-ground execution \u2014 across the streets, transit routes, and retail spaces where audiences actually spend their time."
        />

        <div>
          <Reveal>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {PRINCIPLES.slice(0, 6).map((p) => (
                <li key={p.title} className="border-l-2 border-signal pl-4">
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-ink">{p.title}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest2 text-route hover:text-ink transition-colors"
            >
              More about TBA <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
