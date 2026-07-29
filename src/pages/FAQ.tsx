import { SEO } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ"
        description="Answers to common questions about outdoor advertising, vehicle branding, and working with The Brand Advertising."
        path="/faq"
      />

      <section className="bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <span className="eyebrow">FAQ</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] text-paper md:text-6xl">
            Questions, answered.
          </h1>
        </Container>
      </section>

      <FAQAccordion />
    </>
  );
}
