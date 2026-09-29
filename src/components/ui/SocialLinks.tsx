import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, XTwitterIcon } from "@/components/icons/SocialIcons";
import { cn } from "@/lib/utils";

interface SocialItem {
  platform: "github" | "linkedin" | "instagram" | "twitter" | "email";
  href: string;
  label: string;
}

interface SocialLinksProps {
  items: SocialItem[];
  variant?: "pill" | "icon" | "minimal";
  className?: string;
}

export function SocialLinks({
  items,
  variant = "pill",
  className,
}: SocialLinksProps) {
  const getIcon = (platform: SocialItem["platform"]) => {
    switch (platform) {
      case "github":
        return <GithubIcon className="w-3.5 h-3.5" />;
      case "linkedin":
        return <LinkedinIcon className="w-3.5 h-3.5" />;
      case "instagram":
        return <InstagramIcon className="w-3.5 h-3.5" />;
      case "twitter":
        return <XTwitterIcon className="w-3.5 h-3.5" />;
      case "email":
        return <Mail className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {items.map((item) => {
        if (variant === "icon") {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={item.label}
              className="p-2 rounded-lg bg-night-850 border border-surface-border text-starlight-secondary hover:text-starlight-primary hover:border-surface-border-hover hover:bg-night-800 transition-all duration-200"
            >
              {getIcon(item.platform)}
            </a>
          );
        }

        if (variant === "minimal") {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-starlight-secondary hover:text-moon-light transition-colors"
            >
              {getIcon(item.platform)}
              <span>{item.label}</span>
            </a>
          );
        }

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-night-850/60 border border-surface-border text-starlight-secondary hover:text-starlight-primary hover:border-surface-border-hover hover:bg-night-800 transition-all duration-300 text-xs font-mono"
          >
            <span className="text-starlight-secondary group-hover:text-moon-accent transition-colors">
              {getIcon(item.platform)}
            </span>
            <span>{item.label}</span>
            <ArrowUpRight className="w-3 h-3 text-starlight-muted group-hover:text-starlight-secondary transition-colors" />
          </a>
        );
      })}
    </div>
  );
}
