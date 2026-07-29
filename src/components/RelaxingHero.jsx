import { motion } from "framer-motion";
import tbaPoster from "../assets/tba/traffic-branding.png";

export default function RelaxingHero({ eyebrow, title, video }) {
  return (
    <section className="page-film-hero">
      <img className="page-film-poster" src={tbaPoster} alt="" aria-hidden="true" />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        poster={tbaPoster}
        aria-hidden="true"
        onLoadedData={(event) => event.currentTarget.classList.add("video-ready")}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="page-film-veil" />
      <div className="page-film-orb" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="page-film-eyebrow">
          {eyebrow}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
