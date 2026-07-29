import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => setLoading(false), reduced ? 0 : 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center gap-3 font-display text-2xl font-extrabold tracking-tightest text-paper">
            THE BRAND<span className="text-signal">.</span>ADVERTISING
          </div>
          <div className="mt-6 h-px w-40 overflow-hidden bg-paper/15">
            <motion.div
              className="h-full bg-signal"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-widest2 uppercase text-paper/40">
            Ideas That Move Brands
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
