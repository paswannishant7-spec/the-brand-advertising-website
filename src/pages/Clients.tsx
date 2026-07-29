import { SEO } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CLIENT_PLACEHOLDERS } from "@/data/clients";

export default function Clients() {
  return (
    <>
      <SEO
        title="Clients"
        description="Brands The Brand Advertising has worked alongside. Client list to be added once confirmed."
        path="/clients"
      />

      <section className="bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <span className="eyebrow">Clients</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] text-paper md:text-6xl">
            Brands we've worked alongside.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 md:text-lg">
            This page is reserved for our client list. Logos will be added once each client confirms
            approval for public display.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-paper">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {CLIENT_PLACEHOLDERS.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.03}>
                <div className="flex h-28 items-center justify-center border border-dashed border-ink/20 text-xs uppercase tracking-widest2 text-ink/30">
                  {c.label}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
