import { Link } from "react-router-dom";
import { MapPin, Mail, Clock } from "lucide-react";

const services = [
  "Auto Hood Branding",
  "Cab & Fleet Branding",
  "Bus Branding",
  "Retail Branding",
  "Wall Painting",
  "BTL Activation",
];

export default function Footer() {
  return (
    <footer className="bg-[#070707] text-white/65 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <Link to="/" className="inline-flex mb-5" aria-label="The Brand Advertising home">
            <img src={`${import.meta.env.BASE_URL}tba-logo.jpg`} alt="TBA — The Brand Advertising" className="tba-footer-logo" />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Outdoor advertising, transit branding and brand activation designed
            to move naturally through the real world.
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#f1c94c]">
            Ideas that move brands
          </p>
        </div>

        <div>
          <h4 className="text-white font-display text-sm tracking-wider uppercase mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Services", "Work", "Campaigns", "Contact"].map((label) => (
              <li key={label}>
                <Link
                  to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  className="hover:text-[#f1c94c] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-sm tracking-wider uppercase mb-5">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            {services.map((service) => (
              <li key={service}>
                <Link
                  to="/services"
                  className="hover:text-[#f1c94c] transition-colors"
                  aria-label={`View ${service} service`}
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-sm tracking-wider uppercase mb-5">
            Start a Campaign
          </h4>
          <p className="text-sm leading-relaxed mb-6">
            Tell us where your audience moves. We will shape the route,
            creative and on-ground execution.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-[#d3a51f]" />
              <span>Campaign services across India</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-[#d3a51f]" />
              <a href="mailto:admin@thebrandadvertising.com" className="hover:text-white break-all">
                admin@thebrandadvertising.com
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="shrink-0 text-[#d3a51f]" />
              <span>Monday–Saturday, 10:00 AM–7:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} The Brand Advertising. All rights reserved.</p>
          <p>Outdoor · Transit · Retail · Activation</p>
        </div>
      </div>
    </footer>
  );
}
