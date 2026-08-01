import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import RelaxingHero from "../components/RelaxingHero";

import autoBrandingAd from "../assets/tba/auto-brand-city.png";
import brandMoves from "../assets/tba/brand-moves.png";
import billboardCities from "../assets/tba/traffic-branding.png";
import driveGrowth from "../assets/tba/moves-with-city.png";
import brandDrift from "../assets/tba/cost-vs-impact.png";
import brandStreet from "../assets/tba/auto-hood-route.png";
import billboardIndiaGate from "../assets/tba/auto-hood-benefits.png";
import servicesGrid from "../assets/tba/auto-brand-city.png";

const images = [
  autoBrandingAd,
  brandMoves,
  billboardCities,
  driveGrowth,
  brandDrift,
  brandStreet,
  billboardIndiaGate,
  servicesGrid,
];

const serviceImages = {
  "Auto Hood Branding": autoBrandingAd,
  "Auto Branding": brandMoves,
  "Cab Branding": brandDrift,
  "Bike Branding": brandStreet,
  "Commercial Vehicle Branding": billboardCities,
  "Bus Branding": billboardIndiaGate,
  "Van Activation": servicesGrid,
  "Retail Branding": brandMoves,
  "Wall Painting": driveGrowth,
  "Outdoor Advertising": billboardCities,
  "BTL Activities": servicesGrid,
  "Brand Activation": driveGrowth,
  "Product Sampling": brandStreet,
  "Mall Promotions": servicesGrid,
  "Road Shows": billboardIndiaGate,
  "Corporate Events": servicesGrid,
  "Transit Advertising": autoBrandingAd,
  "Promotional Campaigns": brandMoves,
};

const services = [
  {
    title: "Auto Hood Branding",
    desc: "Bold hood wraps that turn the front of every auto rickshaw into a nonstop moving billboard.",
    benefits: ["Maximum daily impressions", "Cost-effective vs static hoardings", "Custom creative per campaign"],
  },
  {
    title: "Auto Branding",
    desc: "Full-body auto rickshaw branding covering hood, back panel and side rails for 360-degree visibility.",
    benefits: ["Covers urban and rural routes", "24x7 brand presence", "Fleet-wide rollout available"],
  },
  {
    title: "Cab Branding",
    desc: "Premium cab wraps that put your brand in front of commuters across the city, all day long.",
    benefits: ["High-footfall commercial routes", "Clean, professional finish", "City and inter-city coverage"],
  },
  {
    title: "Bike Branding",
    desc: "Two-wheeler branding built for agility, reaching narrow lanes and dense residential markets.",
    benefits: ["Low-cost, high-frequency reach", "Ideal for hyperlocal campaigns", "Quick deployment"],
  },
  {
    title: "Commercial Vehicle Branding",
    desc: "Vans and trucks branded for long routes, reinforcing recall across highways and delivery corridors.",
    benefits: ["Wide geographic spread", "Durable, weather-resistant wraps", "Fleet management support"],
  },
  {
    title: "Bus Branding",
    desc: "Full and partial bus wraps for sustained, city-wide visibility on daily commuter routes.",
    benefits: ["Long dwell-time exposure", "High recall on fixed routes", "Interior and exterior options"],
  },
  {
    title: "Van Activation",
    desc: "Mobile vans built for live product demos, sampling and on-ground brand activation.",
    benefits: ["Combines branding with activation", "Goes where the audience is", "Flexible route planning"],
  },
  {
    title: "Retail Branding",
    desc: "In-store and storefront branding that reinforces recall at the exact point of purchase.",
    benefits: ["Point-of-sale visibility", "Consistent in-store experience", "Custom fixtures and signage"],
  },
  {
    title: "Wall Painting",
    desc: "Hand-painted wall media across high-footfall neighbourhoods for long-term brand presence.",
    benefits: ["Long-lasting visibility", "Hyperlocal targeting", "Distinctive, hand-crafted feel"],
  },
  {
    title: "Outdoor Advertising",
    desc: "Strategic outdoor media placements designed around real movement and footfall patterns.",
    benefits: ["Data-informed placement", "Wide format options", "Urban and semi-urban coverage"],
  },
  {
    title: "BTL Activities",
    desc: "Below-the-line campaigns that engage audiences directly, on the ground, where they live and work.",
    benefits: ["Direct audience engagement", "Measurable on-ground impact", "Custom activation formats"],
  },
  {
    title: "Brand Activation",
    desc: "Experiential campaigns that bring a brand to life through direct, memorable interactions.",
    benefits: ["Builds emotional connection", "Drives word-of-mouth", "Flexible for any brand category"],
  },
  {
    title: "Product Sampling",
    desc: "On-ground sampling drives that put your product directly into customers' hands.",
    benefits: ["Direct trial generation", "Targeted audience zones", "Real-time feedback capture"],
  },
  {
    title: "Mall Promotions",
    desc: "In-mall activations designed to capture attention in high-footfall retail environments.",
    benefits: ["Captive, engaged audience", "Premium retail environments", "Flexible activation formats"],
  },
  {
    title: "Road Shows",
    desc: "Multi-location road shows that carry a campaign across cities and neighbourhoods.",
    benefits: ["Extended geographic reach", "Combines media with events", "Strong local engagement"],
  },
  {
    title: "Corporate Events",
    desc: "End-to-end support for corporate branding at conferences, launches and company events.",
    benefits: ["Professional execution", "Custom branding collateral", "On-site coordination"],
  },
  {
    title: "Transit Advertising",
    desc: "Advertising across the full transit ecosystem, from autos and cabs to buses and vans.",
    benefits: ["Multi-format transit coverage", "Consistent city-wide presence", "Scalable across fleets"],
  },
  {
    title: "Promotional Campaigns",
    desc: "Integrated promotional campaigns combining outdoor, retail and activation for maximum reach.",
    benefits: ["Multi-channel coordination", "Unified campaign strategy", "End-to-end management"],
  },
];

export default function Services() {
  return (
    <div>
      <RelaxingHero eyebrow="Our services" title="Every service, one goal: visibility that moves." video="https://www.pexels.com/download/video/37522241/" />

      <section className="bg-cream">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            id={s.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`scroll-mt-24 border-b border-charcoal/8 ${i % 2 === 1 ? "bg-mist" : "bg-cream"}`}
          >
            <div
              className={`max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="rounded-2xl overflow-hidden aspect-[16/10] shadow-card">
                <img
                  src={serviceImages[s.title] || images[i % images.length]}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-brand-red font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-semibold text-2xl md:text-3xl mt-2 mb-4">{s.title}</h3>
                <p className="text-charcoal-soft/85 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-charcoal-soft/80">
                      <Check size={15} className="text-brand-red shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-brand-red font-medium text-sm group"
                >
                  Enquire About This Service
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="py-24 bg-ink text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-white font-display font-semibold text-3xl md:text-4xl mb-6">
            Not sure which service fits your brand?
          </h2>
          <p className="text-white/60 mb-8">
            Tell us about your campaign and we&rsquo;ll recommend the right media mix.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-rose to-brand-red text-white font-medium shadow-soft hover:brightness-110 transition-all"
          >
            Talk to Our Team <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
