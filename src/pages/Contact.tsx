import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, CheckCircle2 } from "lucide-react";
import { SEO } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SERVICE_CATEGORIES } from "@/data/services";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(10, "Tell us a little more about the campaign (min 10 characters)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    // Frontend-only project: no backend is wired up. This simulates a submit
    // and opens the visitor's email client as a working fallback.
    await new Promise((r) => setTimeout(r, 500));
    const subject = encodeURIComponent(`Campaign enquiry \u2014 ${data.service}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "\u2014"}\nService: ${data.service}\n\n${data.message}`
    );
    window.location.href = `mailto:admin@thebrandadvertising.in?subject=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Start a conversation with The Brand Advertising about your next outdoor, transit, retail, or activation campaign. Email admin@thebrandadvertising.in."
        path="/contact"
      />

      <section className="bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] text-paper md:text-6xl">
            Let's plan the route.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 md:text-lg">
            Tell us about your brand and objective, and our team will follow up with next steps.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-paper">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <a
              href="mailto:admin@thebrandadvertising.in"
              className="mt-4 flex items-center gap-3 font-display text-xl font-bold text-ink hover:text-route transition-colors"
            >
              <Mail size={22} className="text-signal" /> admin@thebrandadvertising.in
            </a>

            <dl className="mt-10 space-y-6 border-t border-ink/10 pt-8 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-widest2 text-ink/40">Director</dt>
                <dd className="mt-1 text-ink/80">Dimcy Aggarwal</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest2 text-ink/40">Address</dt>
                <dd className="mt-1 italic text-ink/40">To be confirmed by client</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest2 text-ink/40">Phone / WhatsApp</dt>
                <dd className="mt-1 italic text-ink/40">To be confirmed by client</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="flex flex-col items-start gap-4 border border-ink/10 bg-ink-soft p-10">
                <CheckCircle2 className="text-signal" size={32} />
                <h2 className="font-display text-2xl font-bold text-paper">Your email client is opening</h2>
                <p className="text-sm leading-relaxed text-paper/60">
                  We've prepared your message for admin@thebrandadvertising.in. If nothing opened,
                  please email us directly.
                </p>
                <Button variant="signal" size="sm" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full name" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      type="text"
                      autoComplete="name"
                      className="field"
                      placeholder="Jane Doe"
                    />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      type="email"
                      autoComplete="email"
                      className="field"
                      placeholder="jane@company.com"
                    />
                  </Field>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Phone (optional)" error={errors.phone?.message}>
                    <input {...register("phone")} type="tel" autoComplete="tel" className="field" placeholder="+91 " />
                  </Field>
                  <Field label="Service of interest" error={errors.service?.message}>
                    <select {...register("service")} className="field" defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.title}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Tell us about the campaign" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="field resize-none"
                    placeholder="Brand, objective, target locations, timelines\u2026"
                  />
                </Field>

                <Button type="submit" variant="signal" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Sending\u2026" : "Send message"}
                </Button>
              </form>
            )}
          </Reveal>
        </Container>
      </section>

      <style>{`
        .field {
          width: 100%;
          border: 1px solid rgba(11,11,12,0.15);
          background: #F6F4EE;
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          color: #0B0B0C;
          transition: border-color 0.2s ease;
        }
        .field:focus {
          outline: none;
          border-color: #2F5D62;
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ink/50">{label}</span>
      {children}
      {error && (
        <span role="alert" className="mt-1.5 block text-xs text-flag">
          {error}
        </span>
      )}
    </label>
  );
}
