import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Counter } from "@/components/ui/Counter";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="dot-grid absolute inset-0 text-paper/[0.06]" aria-hidden />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Outdoor \u2022 Transit \u2022 Retail \u2022 Activation
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-[13vw] leading-[0.94] text-paper sm:text-6xl md:text-7xl lg:text-[5.6rem]"
            >
              Ideas that
              <br />
              move <span className="text-signal">brands.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 max-w-md text-base leading-relaxed text-paper/65 md:text-lg"
            >
              Campaigns planned with intent and executed with care \u2014 across outdoor, transit,
              retail, and on-ground brand activation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-signal">
                Start a campaign <ArrowUpRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline-light">
                View services
              </Link>
            </motion.div>
          </div>

          <RouteLinePanel />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-8 border-t border-paper/10 pt-10 md:grid-cols-4"
        >
          <Stat value={7} suffix="" label="Stage campaign workflow" />
          <Stat value={6} suffix="" label="Core service categories" />
          <Stat value={30} suffix="+" label="Branding formats offered" />
          <Stat value={12} suffix="-18h" label="Avg. daily vehicle uptime" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-extrabold text-signal md:text-4xl">
        <Counter to={value} suffix={suffix} />
      </div>
      <p className="mt-1.5 text-xs uppercase tracking-widest2 text-paper/45">{label}</p>
    </div>
  );
}

function RouteLinePanel() {
  return (
    <div className="relative hidden aspect-[4/5] border border-paper/10 lg:block">
      <svg viewBox="0 0 320 400" className="h-full w-full" aria-hidden>
        <path
          id="route-path"
          d="M20,380 C90,380 60,260 130,240 C200,220 160,120 230,90 C270,74 260,40 300,20"
          fill="none"
          stroke="#3F7A80"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        {[
          [20, 380],
          [130, 240],
          [230, 90],
          [300, 20],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={4.5} fill="#F6F4EE" opacity={0.6} />
        ))}
        <motion.circle
          r={7}
          fill="#FFC629"
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          style={{ offsetPath: "path('M20,380 C90,380 60,260 130,240 C200,220 160,120 230,90 C270,74 260,40 300,20')" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-widest2 text-paper/40">
        Live route \u2014 impressions in motion
      </div>
      <div className="absolute bottom-5 right-5 text-right font-mono text-[10px] uppercase tracking-widest2 text-paper/40">
        100\u2013200km / day
        <br />
        avg. rickshaw route*
      </div>
    </div>
  );
}
