import { PRINCIPLES } from "@/data/principles";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseUsGrid() {
  return (
    <section className="section-pad bg-ink">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose us"
          title="Principles that hold up on the street, not just in the deck."
          light
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04} className="bg-ink p-7 md:p-8">
              <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-paper">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/55">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
