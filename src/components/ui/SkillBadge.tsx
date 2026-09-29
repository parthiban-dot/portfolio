import React from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  variant?: "default" | "accent" | "subtle";
  size?: "sm" | "md";
  dot?: boolean;
  dotColor?: string;
  className?: string;
}

export function SkillBadge({
  name,
  variant = "default",
  size = "md",
  dot = false,
  dotColor = "bg-moon-accent",
  className,
}: SkillBadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-[11px] font-mono",
    md: "px-2.5 py-1 text-xs font-mono",
  };

  const variantClasses = {
    default:
      "bg-night-850 text-starlight-secondary border border-surface-border hover:border-surface-border-hover hover:text-starlight-primary",
    accent:
      "bg-night-900/80 text-moon-light border border-moon-border shadow-sm",
    subtle:
      "bg-night-900/40 text-starlight-muted border border-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md transition-colors duration-200 select-none",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColor)}
          aria-hidden="true"
        />
      )}
      <span>{name}</span>
    </span>
  );
}
