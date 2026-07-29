import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
  as?: "div" | "section";
}

export function Container({ children, className, as = "div" }: ContainerProps) {
  const Tag = as;
  return <Tag className={cn("container", className)}>{children}</Tag>;
}
