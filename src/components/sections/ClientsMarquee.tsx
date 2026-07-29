import { CLIENT_PLACEHOLDERS } from "@/data/clients";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ClientsMarquee() {
  const loop = [...CLIENT_PLACEHOLDERS, ...CLIENT_PLACEHOLDERS];

  return (
    <section className="section-pad bg-paper border-y border-ink/10">
      <div className="container">
        <SectionHeading
          eyebrow="Clients"
          title="Brands we've worked alongside."
          description="Client logos will be added here once confirmed and approved for public display."
        />
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee gap-6">
          {loop.map((c, i) => (
            <div
              key={`${c.id}-${i}`}
              className="flex h-24 w-48 shrink-0 items-center justify-center border border-dashed border-ink/20 text-xs uppercase tracking-widest2 text-ink/30"
            >
              {c.label}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
      </div>
    </section>
  );
}
