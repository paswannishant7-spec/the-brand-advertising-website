import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight, Gift, MapPin, Sparkles, Users } from "lucide-react";
import RelaxingHero from "../components/RelaxingHero";
import SectionHeading from "../components/SectionHeading";

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

const clientStories = [
  {
    client: "Rahul Sharma",
    title: "Rahul Sharma – Product Sampling Campaign",
    module: "Product Sampling & Consumer Engagement",
    summary: "Successfully executed an on-ground product sampling campaign with promoters, consumer interaction, and targeted brand visibility.",
    feedback: "The work was executed excellently with professional planning, well-managed promoters, and smooth on-ground coordination.",
  },
  {
    client: "Seema Gupta",
    title: "Seema Gupta – Corporate Park Activation",
    module: "Corporate Activation & Lead Generation",
    summary: "Managed promotional kiosks, trained promoters, and direct engagement activities across corporate locations.",
    feedback: "The campaign was handled professionally from planning to execution, with excellent team coordination and timely delivery.",
  },
  {
    client: "Amit Verma",
    title: "Amit Verma – Residential Society Promotion",
    module: "Society Activation & Consumer Engagement",
    summary: "Executed a targeted residential campaign focused on direct interaction, promotional activities, and lead generation.",
    feedback: "Excellent execution and professional management throughout the campaign. The team ensured smooth coordination and effective audience engagement.",
  },
  {
    client: "Rohit Kapoor",
    title: "Rohit Kapoor – Retail Market Activation",
    module: "Retail Promotion & Local Market Engagement",
    summary: "Successfully managed on-ground promotional activities across targeted retail and market locations to improve visibility and customer engagement.",
    feedback: "The work was completed professionally with strong on-ground execution, proper planning, and excellent support from the team.",
  },
  {
    client: "Neha Malhotra",
    title: "Neha Malhotra – Event & Exhibition Promotion",
    module: "Event Promotion & Audience Engagement",
    summary: "Executed promotional activities at events and exhibitions, including branded setups, promoter management, visitor engagement, and lead-generation support.",
    feedback: "A highly professional and well-organized execution. The team delivered excellent results and managed every aspect of the promotion efficiently.",
  },
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

function ClientStoriesCarousel() {
  const [storyIndex, setStoryIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [animating, setAnimating] = useState(false);
  const story = clientStories[storyIndex];

  const changeStory = (nextDirection) => {
    if (animating) return;
    setDirection(nextDirection);
    setAnimating(true);
    setStoryIndex((current) => (current + nextDirection + clientStories.length) % clientStories.length);
  };

  const selectStory = (index) => {
    if (animating || index === storyIndex) return;
    setDirection(index > storyIndex ? 1 : -1);
    setAnimating(true);
    setStoryIndex(index);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeStory(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      changeStory(1);
    }
  };

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Client Stories" title="Campaign stories built to move" align="center" />
        <div
          className="relative overflow-hidden rounded-3xl bg-ink text-white shadow-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-rose/40"
          role="region"
          aria-roledescription="carousel"
          aria-label="TBA client stories"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <AnimatePresence mode="wait" onExitComplete={() => setAnimating(false)}>
            <motion.article
              key={storyIndex}
              initial={{ opacity: 0, x: direction * 70 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -70 }}
              transition={{ duration: 0.42, ease }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70 || info.velocity.x < -550) changeStory(1);
                if (info.offset.x > 70 || info.velocity.x > 550) changeStory(-1);
              }}
              aria-roledescription="slide"
              aria-label={`${storyIndex + 1} of ${clientStories.length}: ${story.title}`}
              aria-live="polite"
              className="grid md:grid-cols-[0.7fr_1.3fr] min-h-[500px] cursor-grab active:cursor-grabbing"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-brand-rose via-brand-red to-[#8e1320] p-8 md:p-12 flex flex-col justify-between min-h-[230px] md:min-h-full">
                <div className="absolute -top-24 -right-20 w-64 h-64 rounded-full border border-white/20" aria-hidden="true" />
                <div className="absolute -bottom-28 -left-24 w-72 h-72 rounded-full border border-white/15" aria-hidden="true" />
                <p className="relative text-xs uppercase tracking-[0.24em] text-white/75">
                  Client Story {String(storyIndex + 1).padStart(2, "0")}
                </p>
                <div className="relative">
                  <p className="font-display text-5xl md:text-7xl font-semibold text-white/20 leading-none" aria-hidden="true">“</p>
                  <p className="font-display text-2xl md:text-3xl font-semibold leading-tight">{story.client}</p>
                </div>
              </div>
              <div className="p-7 sm:p-9 md:p-12 lg:p-14 flex flex-col justify-center pb-24 md:pb-20">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6">{story.title}</h3>
                <div className="space-y-5 text-sm sm:text-base leading-relaxed">
                  <p className="text-white/80">
                    <span className="font-semibold text-brand-rose">BTL Module:</span> {story.module}
                  </p>
                  <p className="text-white/70">{story.summary}</p>
                  <blockquote className="border-l-2 border-brand-rose pl-5 text-white/85">
                    <span className="font-semibold text-white">Client Feedback:</span> {story.feedback}
                  </blockquote>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="absolute bottom-5 left-6 md:left-auto md:right-32 flex items-center gap-2" role="tablist" aria-label="Choose a client story">
            {clientStories.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={index === storyIndex}
                aria-label={`Show client story ${index + 1}: ${item.client}`}
                disabled={animating}
                onClick={() => selectStory(index)}
                className={`h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${index === storyIndex ? "w-8 bg-brand-rose" : "w-2 bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>

          <div className="absolute bottom-4 right-5 flex gap-2">
            <button type="button" disabled={animating} onClick={() => changeStory(-1)} aria-label="Previous client story" className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-45 disabled:cursor-not-allowed grid place-items-center transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button type="button" disabled={animating} onClick={() => changeStory(1)} aria-label="Next client story" className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-45 disabled:cursor-not-allowed grid place-items-center transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-charcoal-soft/55 md:hidden">
          Swipe or use the controls to explore all client stories.
        </p>
      </div>
    </section>
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

      <ClientStoriesCarousel />

      <section className="campaign-closing">
        <div className="nature-shell">
          <Sparkles size={30} strokeWidth={1.4} />
          <span>BTL & brand activation</span>
          <h2>Campaigns people<br /><em>want to participate in.</em></h2>
          <p>
            From launch-day excitement to sustained customer engagement, TBA
            creates experiences that feel human, relevant and rewarding.
          </p>
        </div>
      </section>
    </main>
  );
}

