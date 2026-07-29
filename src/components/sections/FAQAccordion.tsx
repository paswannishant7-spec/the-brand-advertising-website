import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function FAQAccordion() {
  return (
    <section className="section-pad bg-paper">
      <div className="container">
        <SectionHeading eyebrow="FAQ" title="Common questions about working with TBA." />

        <Reveal delay={0.1} className="mt-12 max-w-3xl">
          <Accordion.Root type="single" collapsible className="divide-y divide-ink/10 border-y border-ink/10">
            {FAQ_ITEMS.map((item, i) => (
              <Accordion.Item key={i} value={`item-${i}`}>
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left">
                    <span className="font-display text-base font-bold text-ink md:text-lg">{item.question}</span>
                    <Plus
                      size={20}
                      className="shrink-0 text-signal transition-transform duration-300 group-data-[state=open]:rotate-45"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-ink/65 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out">
                  <p className="pb-6 pr-10">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
