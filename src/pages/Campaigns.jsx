import { motion } from "framer-motion";
import { CalendarDays, Gift, MapPin, Sparkles, Users } from "lucide-react";
import RelaxingHero from "../components/RelaxingHero";

import jodhpur1 from "../assets/campaigns/events/jodhpur-activation-1.webp";
import jodhpur2 from "../assets/campaigns/events/jodhpur-activation-2.webp";
import jodhpur3 from "../assets/campaigns/events/jodhpur-activation-3.webp";
import ajmer1 from "../assets/campaigns/events/ajmer-launch-1.webp";
import ajmer2 from "../assets/campaigns/events/ajmer-launch-2.webp";
import ajmer3 from "../assets/campaigns/events/ajmer-launch-3.webp";

const ease = [0.22, 1, 0.36, 1];

const campaignHighlights = [
  { icon: CalendarDays, value: "4 days", label: "Live activation" },
  { icon: MapPin, value: "2 cities", label: "Jodhpur & Ajmer" },
  { icon: Users, value: "High impact", label: "Customer engagement" },
  { icon: Gift, value: "Games & gifts", label: "Reward-led interaction" },
];

function CampaignGallery({ images, city }) {
  return (
    <div className="campaign-gallery">
      {images.map((image, index) => (
        <motion.figure
          key={image}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.75, delay: index * 0.1, ease }}
          className={`campaign-photo campaign-photo-${index + 1}`}
        >
          <img src={image} alt={`${city} IndianOil BTL campaign activity ${index + 1}`} loading="lazy" decoding="async" />
        </motion.figure>
      ))}
    </div>
  );
}

export default function Campaigns() {
  return (
    <main className="campaign-page">
      <RelaxingHero
        eyebrow="Campaign stories"
        title="Real people. Remarkable on-ground energy."
        video={`${import.meta.env.BASE_URL}campaigns-background.mp4`}
      />

      <section className="campaign-intro">
        <div className="nature-shell">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="campaign-intro-copy"
          >
            <span>IndianOil × The Brand Advertising</span>
            <h2>Engagement that brings a brand to life.</h2>
            <p>
              Our BTL campaigns create meaningful moments between brands and
              their audiences through product discovery, interactive games,
              rewards and energetic on-ground experiences.
            </p>
          </motion.div>
          <div className="campaign-highlights">
            {campaignHighlights.map((item) => (
              <div key={item.label}>
                <item.icon size={22} strokeWidth={1.5} />
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="campaign-story campaign-story-light">
        <div className="nature-shell">
          <div className="campaign-story-heading">
            <div>
              <span className="campaign-index">01</span>
              <p>30 January–2 February 2026</p>
            </div>
            <div>
              <span className="campaign-location"><MapPin size={14} /> Jodhpur, Rajasthan</span>
              <h2>Four days of high-impact participation.</h2>
            </div>
          </div>
          <div className="campaign-story-copy">
            <p>
              The Brand Advertising successfully conducted a high-impact
              four-day BTL campaign in Jodhpur, and the response was
              exceptional. A massive crowd participated with enthusiasm,
              creating a lively, engaging and memorable atmosphere.
            </p>
            <p>
              Interactive activities, product conversations, exciting gifts
              and exclusive rewards kept the energy strong throughout the
              campaign. The final day carried that momentum forward and gave
              customers one last opportunity to join the experience.
            </p>
          </div>
          <CampaignGallery images={[jodhpur1, jodhpur2, jodhpur3]} city="Jodhpur" />
        </div>
      </article>

      <article className="campaign-story campaign-story-dark">
        <div className="nature-shell">
          <div className="campaign-story-heading">
            <div>
              <span className="campaign-index">02</span>
              <p>IndianOil BTL activation</p>
            </div>
            <div>
              <span className="campaign-location"><MapPin size={14} /> Ajmer, Rajasthan</span>
              <h2>Ajmer was buzzing with possibility.</h2>
            </div>
          </div>
          <div className="campaign-story-copy">
            <p>
              The Ajmer campaign opened with remarkable energy as customers
              explored IndianOil&rsquo;s innovative portfolio across Retail,
              Lubricants and LPG.
            </p>
            <p>
              Games, product discovery and exciting prizes transformed the
              activation into a welcoming experience for customers, partners
              and the wider community.
            </p>
          </div>
          <CampaignGallery images={[ajmer1, ajmer2, ajmer3]} city="Ajmer" />
        </div>
      </article>

      <section className="campaign-closing">
        <div className="nature-shell">
          <Sparkles size={30} strokeWidth={1.4} />
          <span>BTL & brand activation</span>
          <h2>Campaigns people<br /><em>want to participate in.</em></h2>
          <p>
            From launch-day excitement to sustained customer engagement, YMS
            creates experiences that feel human, relevant and rewarding.
          </p>
        </div>
      </section>
    </main>
  );
}

