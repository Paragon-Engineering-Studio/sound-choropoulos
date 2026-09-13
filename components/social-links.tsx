import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { IconFacebook, IconInstagram, IconYoutube } from "./icons";

function SocialLink({
  href,
  label,
  children,
  className = "",
}: {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-cream transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${className}`}
    >
      {children}
    </a>
  );
}

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
};

export function SocialLinks({ className = "", linkClassName = "" }: SocialLinksProps) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <SocialLink href={site.social.facebook} label="Facebook" className={linkClassName}>
        <IconFacebook className="h-5 w-5" />
      </SocialLink>
      <SocialLink href={site.social.instagram} label="Instagram" className={linkClassName}>
        <IconInstagram className="h-5 w-5" />
      </SocialLink>
      <SocialLink href={site.social.youtube} label="YouTube" className={linkClassName}>
        <IconYoutube className="h-5 w-5" />
      </SocialLink>
    </div>
  );
}
