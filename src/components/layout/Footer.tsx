import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/nav";
import { SERVICE_CATEGORIES } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="container section-pad">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <span className="font-display text-2xl font-extrabold tracking-tightest">
              THE BRAND<span className="text-signal">.</span>ADVERTISING
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              Ideas That Move Brands. Campaigns planned with intent and executed with care.
            </p>
            <a
              href="mailto:admin@thebrandadvertising.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal hover:underline"
            >
              <Mail size={16} /> admin@thebrandadvertising.com
            </a>
          </div>

          <div>
            <span className="eyebrow">Navigate</span>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-paper/70 hover:text-signal transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow">Services</span>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/services#${cat.slug}`} className="text-sm text-paper/70 hover:text-signal transition-colors">
                    {cat.shortLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow">Studio details</span>
            <dl className="mt-4 space-y-3 text-sm text-paper/70">
              <div>
                <dt className="text-paper/40">Director</dt>
                <dd>Dimcy Aggarwal</dd>
              </div>
              <div>
                <dt className="text-paper/40">Address</dt>
                <dd className="italic text-paper/45">To be confirmed by client</dd>
              </div>
              <div>
                <dt className="text-paper/40">Phone / WhatsApp</dt>
                <dd className="italic text-paper/45">To be confirmed by client</dd>
              </div>
            </dl>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-paper hover:text-signal transition-colors"
            >
              Get in touch <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-paper/10 pt-8 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <p>\u00A9 {year} The Brand Advertising. All rights reserved.</p>
          <p>Social links and registration details will be added upon client confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
