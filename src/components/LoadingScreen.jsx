import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loaders = {
  "/": { label: "Setting ideas in motion", className: "loader-home", offset: 0 },
  "/about": { label: "Unfolding our story", className: "loader-about", offset: 1 },
  "/services": { label: "Preparing possibilities", className: "loader-services", offset: 2 },
  "/campaigns": { label: "Gathering campaign moments", className: "loader-campaigns", offset: 3 },
  "/contact": { label: "Opening a conversation", className: "loader-contact", offset: 4 },
};

const shapes = ["rings", "leaf", "lines", "frames", "pulse", "dots"];
let animationTurn = 0;
let sceneTurn = 0;

export default function LoadingScreen({ show, route }) {
  const current = loaders[route] || loaders["/"];
  const shape = useMemo(() => {
    const nextShape = shapes[(current.offset + animationTurn) % shapes.length];
    animationTurn = (animationTurn + 1) % shapes.length;
    return nextShape;
  }, [route, current.offset]);
  const scene = useMemo(() => ++sceneTurn, [route]);
  const particles = useMemo(
    () => Array.from({ length: 10 }, (_, index) => ({
      id: `${scene}-${index}`,
      x: (index * 47 + scene * 31) % 100,
      y: (index * 71 + scene * 19) % 100,
      delay: ((index * 13 + scene) % 20) / 20,
      duration: 1.1 + ((index * 7 + scene) % 13) / 10,
      size: 2 + ((index + scene) % 5),
    })),
    [scene]
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`route-loader ${current.className}`}
          style={{ "--scene-tilt": `${(scene * 37) % 180}deg` }}
        >
          <div className="loader-depth" aria-hidden="true">
            <i /><i /><i />
          </div>
          <div className="loader-particles" aria-hidden="true">
            {particles.map((particle) => (
              <b
                key={particle.id}
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: particle.size,
                  height: particle.size,
                  animationDelay: `-${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
            ))}
          </div>
          <div className={`loader-art loader-art-${shape}`}>
            <span /><span /><span />
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            {current.label}
          </motion.p>
          <div className="loader-progress"><i /></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
