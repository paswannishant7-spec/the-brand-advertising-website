import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  return (
    <section className="bg-signal">
      <div className="container flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            Have a campaign in mind? Let's plan the route.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 whitespace-nowrap bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
