import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-xl"}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-brand-red mb-4">
          <span className="w-6 h-px bg-brand-red" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed ${light ? "text-white/60" : "text-charcoal-soft/80"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
