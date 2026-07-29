import { WORKFLOW_STEPS } from "@/data/workflow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface CampaignTimelineProps {
  compact?: boolean;
}

export function CampaignTimeline({ compact = false }: CampaignTimelineProps) {
  return (
    <section className="section-pad bg-paper">
      <div className="container">
        <SectionHeading
          eyebrow="How a campaign moves"
          title="Seven stops from brief to report."
          description={
            compact
              ? undefined
              : "Every campaign follows the same route \u2014 the stops don't change, even when the media does."
          }
        />

        <div className="relative mt-16">
          <div
            className="absolute left-[19px] top-0 hidden h-full w-px bg-[repeating-linear-gradient(to_bottom,#26262A_0,#26262A_6px,transparent_6px,transparent_12px)] md:block"
            aria-hidden
          />
          <ol className="space-y-10 md:space-y-0">
            {WORKFLOW_STEPS.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.05} as="li">
                <div className="grid grid-cols-[40px_1fr] gap-6 md:grid-cols-[40px_180px_1fr] md:items-start md:py-6">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper font-mono text-xs font-bold text-ink">
                    {step.index}
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink md:text-xl">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/60 md:max-w-md">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
