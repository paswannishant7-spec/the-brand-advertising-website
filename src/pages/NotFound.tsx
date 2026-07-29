import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SEO } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-[80vh] items-center bg-ink">
        <Container className="text-center">
          <Reveal>
            <span className="eyebrow">404</span>
            <h1 className="mt-4 font-display text-6xl font-extrabold text-paper md:text-8xl">
              Wrong <span className="text-signal">route.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-paper/60">
              This page doesn't exist \u2014 it may have moved, or the address was mistyped.
            </p>
            <Link to="/" className="btn-signal mt-9 inline-flex">
              Back to home <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
