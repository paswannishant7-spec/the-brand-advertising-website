import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends PropsWithChildren {
  delay?: number;
  className?: string;
  y?: number;
  as?: "div" | "li";
  id?: string;
}

export function Reveal({ children, delay = 0, className, y = 28, as = "div", id }: RevealProps) {
  const MotionTag = as === "li" ? motion.li : motion.div;
  return (
    <MotionTag
      id={id}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
