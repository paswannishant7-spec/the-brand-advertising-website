import { Quote } from "lucide-react";
import { TESTIMONIAL_PLACEHOLDERS } from "@/data/clients";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";

export function TestimonialsCarousel() {
  return (
    <section className="section-pad bg-ink">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say, once the campaign is live."
          description="Verified client testimonials will replace these placeholders after collection."
          light
        />

        <div className="mt-14">
          <Carousel
            items={TESTIMONIAL_PLACEHOLDERS}
            slidesPerView={2}
            renderItem={(t) => (
              <div className="h-full border border-paper/15 bg-ink-soft p-8">
                <Quote className="text-signal" size={28} />
                <p className="mt-5 text-lg italic leading-relaxed text-paper/70">{t.quote}</p>
                <div className="mt-6 border-t border-paper/10 pt-4">
                  <p className="font-display text-sm font-bold text-paper">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest2 text-paper/40">{t.role}</p>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
