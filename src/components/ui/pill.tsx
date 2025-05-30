import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'highlight';
}

export function Pill({ children, className, variant = 'default' }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold",
        variant === 'highlight' && "bg-brand-pink text-white",
        variant === 'default' && "bg-secondary text-secondary-foreground",
        className
      )}
    >
      {children}
    </span>
  );
} 