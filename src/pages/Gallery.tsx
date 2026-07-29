import { SEO } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_CATEGORIES } from "@/data/services";

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Campaign and execution photography from The Brand Advertising, organized by service category. Photos to be added following client confirmation."
        path="/gallery"
      />

      <section className="bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <span className="eyebrow">Gallery</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] text-paper md:text-6xl">
            The work, on the ground.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 md:text-lg">
            Execution photography will populate this gallery as campaigns are completed and cleared
            for public use.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-paper">
        <Container className="space-y-16">
          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.id}>
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-ink">{cat.shortLabel}</h2>
              </Reveal>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Reveal key={i} delay={i * 0.04}>
                    <div className="flex aspect-square items-center justify-center border border-dashed border-ink/15 bg-ink/[0.03] text-center text-[10px] uppercase tracking-widest2 text-ink/30">
                      Photo
                      <br />
                      pending
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
