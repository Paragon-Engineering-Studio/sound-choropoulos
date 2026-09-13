"use client";

import type { MouseEvent, ReactNode } from "react";
import { scrollToSection } from "@/lib/scroll-to";

type AnchorLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  "aria-label"?: string;
};

export function AnchorLink({
  href,
  className,
  children,
  onNavigate,
  "aria-label": ariaLabel,
}: AnchorLinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    onNavigate?.();
    window.setTimeout(() => scrollToSection(href), 120);
  };

  return (
    <a href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
