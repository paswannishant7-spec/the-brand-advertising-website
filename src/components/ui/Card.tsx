import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends PropsWithChildren {
  className?: string;
  dark?: boolean;
  id?: string;
}

export function Card({ children, className, dark = false, id }: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        "group relative border p-7 md:p-8 transition-colors duration-300",
        dark
          ? "border-paper/15 bg-ink-soft hover:border-signal/60"
          : "border-ink/10 bg-paper hover:border-ink/40",
        className
      )}
    >
      {children}
    </div>
  );
}
