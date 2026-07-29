import { SEO } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Quote } from "lucide-react";
import { TESTIMONIAL_PLACEHOLDERS } from "@/data/clients";

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="What clients say about working with The Brand Advertising. Verified testimonials to be added following collection."
        path="/testimonials"
      />

      <section className="bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <span className="eyebrow">Testimonials</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] text-paper md:text-6xl">
            In the words of the brands we've helped move.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 md:text-lg">
            The quotes below are placeholders and will be replaced with verified client testimonials.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-paper">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIAL_PLACEHOLDERS.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.06} className="border border-ink/10 bg-ink-soft p-8">
                <Quote className="text-signal" size={26} />
                <p className="mt-5 text-base italic leading-relaxed text-paper/75">{t.quote}</p>
                <div className="mt-6 border-t border-paper/10 pt-4">
                  <p className="font-display text-sm font-bold text-paper">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest2 text-paper/40">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
