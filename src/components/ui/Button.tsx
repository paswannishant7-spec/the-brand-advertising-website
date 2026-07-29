import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body font-semibold text-sm tracking-wide uppercase transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        signal: "bg-signal text-ink hover:bg-ink hover:text-signal",
        outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
        outlineLight: "border border-paper/40 text-paper hover:bg-paper hover:text-ink",
        ghost: "text-ink hover:text-route",
      },
      size: {
        default: "px-6 py-3.5",
        sm: "px-4 py-2.5 text-xs",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "signal",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";
