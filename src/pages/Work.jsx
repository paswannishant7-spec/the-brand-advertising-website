import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import RelaxingHero from "../components/RelaxingHero";

import autoHoodBranding from "../assets/services/auto-hood-branding.webp";
import cabBranding from "../assets/services/cab-branding.webp";
import busBranding from "../assets/services/bus-branding.webp";
import vanActivation from "../assets/services/van-activation.webp";
import retailBranding from "../assets/services/retail-branding.webp";
import wallPainting from "../assets/services/wall-painting.webp";
import brandActivation from "../assets/services/brand-activation.webp";
import roadShows from "../assets/services/road-shows.webp";

const gallery = [
  { img: cabBranding, title: "Your Brand on Every Road" },
  { img: vanActivation, title: "Brand That Moves" },
  { img: busBranding, title: "Traffic Branding" },
  { img: roadShows, title: "Move With the City" },
  { img: wallPainting, title: "Cost vs Impact" },
  { img: brandActivation, title: "Route-Wide Promotion" },
  { img: autoHoodBranding, title: "Auto Hood Branding Benefits" },
  { img: retailBranding, title: "Local Reach, Big Impact" },
];

const clientNames = ["Hero", "IndianOil", "Wagh Bakri", "Campus", "TVS"];

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

export default function Work() {
  const [active, setActive] = useState(null);
  const [storyIndex, setStoryIndex] = useState(0);
  const [storyDirection, setStoryDirection] = useState(1);
  const [storyAnimating, setStoryAnimating] = useState(false);
  const story = clientStories[storyIndex];

  const changeStory = (direction) => {
    if (storyAnimating) return;
    setStoryDirection(direction);
    setStoryAnimating(true);
    setStoryIndex((current) => (current + direction + clientStories.length) % clientStories.length);
  };

  const selectStory = (index) => {
    if (storyAnimating || index === storyIndex) return;
    setStoryDirection(index > storyIndex ? 1 : -1);
    setStoryAnimating(true);
    setStoryIndex(index);
  };

  const handleStoryKeyDown = (event) => {
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
    <div>
      <RelaxingHero eyebrow="Our work" title="Campaigns that move through the world." video={`${import.meta.env.BASE_URL}work-background.mp4`} />

      {/* CLIENT NAMES */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-brand-red font-medium mb-8">
            Brands We&rsquo;ve Worked With
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {clientNames.map((c) => (
              <span key={c} className="font-display text-xl md:text-2xl text-charcoal/70">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-mist">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Campaign Gallery" title="Real branding creative, from real campaigns" align="center" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {gallery.map((g, i) => (
              <motion.button
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                onClick={() => setActive(g)}
                className="relative rounded-2xl overflow-hidden aspect-square group text-left"
              >
                <img
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-display font-medium">{g.title}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT STORIES CAROUSEL */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Client Stories" title="Campaign stories built to move" align="center" />
          <div
            className="relative overflow-hidden rounded-3xl bg-ink text-white shadow-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-rose/40"
            role="region"
            aria-roledescription="carousel"
            aria-label="TBA client stories"
            tabIndex={0}
            onKeyDown={handleStoryKeyDown}
          >
            <AnimatePresence mode="wait" onExitComplete={() => setStoryAnimating(false)}>
              <motion.article
                key={storyIndex}
                initial={{ opacity: 0, x: storyDirection * 70 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: storyDirection * -70 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
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
                  <p className="relative text-xs uppercase tracking-[0.24em] text-white/75">Client Story {String(storyIndex + 1).padStart(2, "0")}</p>
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
                  disabled={storyAnimating}
                  onClick={() => selectStory(index)}
                  className={`h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${index === storyIndex ? "w-8 bg-brand-rose" : "w-2 bg-white/30 hover:bg-white/60"}`}
                />
              ))}
            </div>

            <div className="absolute bottom-4 right-5 flex gap-2">
              <button type="button" disabled={storyAnimating} onClick={() => changeStory(-1)} aria-label="Previous client story" className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-45 disabled:cursor-not-allowed grid place-items-center transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button type="button" disabled={storyAnimating} onClick={() => changeStory(1)} aria-label="Next client story" className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-45 disabled:cursor-not-allowed grid place-items-center transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-charcoal-soft/55 md:hidden">Swipe or use the controls to explore all client stories.</p>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.img} alt={active.title} className="w-full rounded-xl shadow-soft" decoding="async" />
              <p className="text-white text-center mt-4 font-display">{active.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
