import { SEO } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CampaignTimeline } from "@/components/sections/CampaignTimeline";

export default function CampaignProcess() {
  return (
    <>
      <SEO
        title="Campaign Process"
        description="How The Brand Advertising plans and runs a campaign, from discovery and research through strategy, creative design, production, execution, and reporting."
        path="/campaign-process"
      />

      <section className="bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <span className="eyebrow">Campaign Process</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] text-paper md:text-6xl">
            The route every campaign follows.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 md:text-lg">
            Seven stages, applied consistently whether the campaign runs on a single wall or across a
            city of vehicles.
          </p>
        </Container>
      </section>

      <CampaignTimeline />

      <section className="section-pad bg-ink-soft">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="eyebrow">Case in point</span>
            <h2 className="mt-3 text-3xl font-extrabold text-paper md:text-4xl">
              Why vehicle routes matter to the plan.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-paper/65">
              An auto-rickshaw is a useful example of why research and strategy come before creative.
              A single vehicle may cover roughly 100\u2013200 kilometres a day and stay on the road for
              approximately 12\u201318 hours, moving through crowded markets, residential colonies,
              colleges, commercial streets, and traffic signals.
            </p>
            <p className="mt-4 text-base leading-relaxed text-paper/65">
              That movement pattern is what marketing materials describe as generating up to
              approximately one lakh daily impressions. These are marketing estimates, not verified
              measurements \u2014 which is exactly why the Research and Strategy stages exist: to map
              real routes and audiences before a single vehicle is branded.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="border border-paper/10 bg-ink p-8 md:p-10">
            <span className="eyebrow">At a glance</span>
            <dl className="mt-5 space-y-5">
              <div className="flex items-baseline justify-between border-b border-paper/10 pb-3">
                <dt className="text-sm text-paper/60">Typical daily distance</dt>
                <dd className="font-mono text-lg text-signal">100\u2013200 km</dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-paper/10 pb-3">
                <dt className="text-sm text-paper/60">Typical daily road time</dt>
                <dd className="font-mono text-lg text-signal">12\u201318 hrs</dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-sm text-paper/60">Est. daily impressions*</dt>
                <dd className="font-mono text-lg text-signal">~1,00,000</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs italic leading-relaxed text-paper/40">
              *Marketing estimate. Verified figures are shared as part of campaign reporting once
              client-specific data is available.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
