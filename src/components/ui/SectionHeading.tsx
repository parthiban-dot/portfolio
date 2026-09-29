import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  tagIcon?: React.ReactNode;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tag,
  tagIcon,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col mb-12 sm:mb-16",
        isCenter ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {/* Subtle Metadata Eyebrow */}
      {tag && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-night-900 border border-surface-border text-xs font-mono text-moon-accent mb-3.5 tracking-tight shadow-sm">
          {tagIcon && <span className="opacity-80">{tagIcon}</span>}
          <span>{tag}</span>
        </div>
      )}

      {/* Bold & Elegant Section Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-starlight-primary leading-tight">
        {title}
      </h2>

      {/* High-Readability Secondary Description */}
      {description && (
        <p className="mt-3 text-sm sm:text-base text-starlight-secondary font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
