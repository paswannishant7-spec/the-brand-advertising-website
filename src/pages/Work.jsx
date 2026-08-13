import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import RelaxingHero from "../components/RelaxingHero";

import autoBrandingAd from "../assets/tba/auto-brand-city.png";
import brandMoves from "../assets/tba/brand-moves.png";
import billboardCities from "../assets/tba/traffic-branding.png";
import driveGrowth from "../assets/tba/moves-with-city.png";
import brandDrift from "../assets/tba/cost-vs-impact.png";
import brandStreet from "../assets/tba/auto-hood-route.png";
import billboardIndiaGate from "../assets/tba/auto-hood-benefits.png";
import servicesGrid from "../assets/tba/auto-brand-city.png";

const gallery = [
  { img: autoBrandingAd, title: "Your Brand on Every Road" },
  { img: brandMoves, title: "Brand That Moves" },
  { img: billboardCities, title: "Traffic Branding" },
  { img: driveGrowth, title: "Move With the City" },
  { img: brandDrift, title: "Cost vs Impact" },
  { img: brandStreet, title: "Route-Wide Promotion" },
  { img: billboardIndiaGate, title: "Auto Hood Branding Benefits" },
  { img: servicesGrid, title: "Local Reach, Big Impact" },
];

const clientNames = ["Hero", "IndianOil", "Wagh Bakri", "Campus", "TVS"];

const clientStories = [
  {
    client: "Client Story 01",
    title: "Approved project details coming soon",
    summary: "Ready for the client name, campaign objective, execution details and measurable results.",
    img: autoBrandingAd,
  },
  {
    client: "Client Story 02",
    title: "Campaign information pending approval",
    summary: "Ready for the approved project narrative, location, campaign period and outcome.",
    img: brandMoves,
  },
  {
    client: "Client Story 03",
    title: "Real project story to be added",
    summary: "The carousel is complete and ready for final text, photographs and client logos.",
    img: billboardCities,
  },
];

export default function Work() {
  const [active, setActive] = useState(null);
  const [storyIndex, setStoryIndex] = useState(0);
  const story = clientStories[storyIndex];

  const changeStory = (direction) => {
    setStoryIndex((current) => (current + direction + clientStories.length) % clientStories.length);
  };

  return (
    <div>
      <RelaxingHero eyebrow="Our work" title="Campaigns that move through the world." video="https://www.pexels.com/download/video/37357599/" />

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
          <div className="relative overflow-hidden rounded-3xl bg-ink text-white shadow-soft">
            <AnimatePresence mode="wait">
              <motion.article
                key={storyIndex}
                initial={{ opacity: 0, x: 55 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -55 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-2 min-h-[430px]"
              >
                <img src={story.img} alt="Client story placeholder" className="w-full h-full min-h-[300px] object-cover" />
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-brand-rose text-xs uppercase tracking-[0.22em] mb-4">{story.client}</p>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold mb-5">{story.title}</h3>
                  <p className="text-white/70 leading-relaxed">{story.summary}</p>
                  <p className="mt-7 text-xs uppercase tracking-[0.18em] text-white/45">Content awaiting client approval</p>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="absolute bottom-5 right-5 flex gap-2">
              <button onClick={() => changeStory(-1)} aria-label="Previous client story" className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => changeStory(1)} aria-label="Next client story" className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <section className="py-24 bg-mist">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading eyebrow="Testimonials" title="Client stories, coming soon" align="center" />
          <p className="text-charcoal-soft/70 max-w-xl mx-auto -mt-6">
            We&rsquo;re collecting feedback from our client partners. This
            space will feature their stories soon.
          </p>
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
              <img src={active.img} alt={active.title} className="w-full rounded-xl shadow-soft" />
              <p className="text-white text-center mt-4 font-display">{active.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
