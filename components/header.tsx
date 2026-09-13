"use client";

import { useEffect, useState } from "react";
import { AnchorLink } from "@/components/anchor-link";
import { nav, site } from "@/lib/site";
import { IconClose, IconMenu } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div
        data-scroll-offset-root
        className="pointer-events-none fixed inset-x-0 top-10 z-50 sm:top-12"
      >
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-end px-5 sm:px-8">
          <nav
            aria-label="Κύρια πλοήγηση"
            className="pointer-events-auto hidden items-center gap-2 md:flex"
          >
            {nav.map((item) => (
              <AnchorLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-cream/20 px-4 py-2 font-sans text-sm tracking-wide text-cream/85 transition hover:border-gold/60 hover:bg-cream/5 hover:text-gold"
              >
                {item.label}
              </AnchorLink>
            ))}
          </nav>

          <button
            type="button"
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-lg border border-cream/20 text-cream transition hover:border-gold/60 hover:bg-cream/5 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}</span>
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <div
            className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm md:hidden"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav"
            className="fixed inset-x-0 top-[calc(2.5rem+4.5rem)] bottom-0 z-50 overflow-y-auto border-t border-gold/15 bg-ink/95 px-5 py-8 backdrop-blur-md sm:top-[calc(3rem+4.5rem)] md:hidden"
          >
            <nav aria-label="Μενού κινητού" className="flex flex-col gap-2">
              {nav.map((item) => (
                <AnchorLink
                  key={item.href}
                  href={item.href}
                  onNavigate={() => setOpen(false)}
                  className="rounded-lg border border-cream/20 px-4 py-3 font-display text-2xl text-cream transition hover:border-gold/60 hover:bg-cream/5 hover:text-gold"
                >
                  {item.label}
                </AnchorLink>
              ))}
              <a
                href={site.phones[0].href}
                className="mt-2 inline-flex items-center justify-center rounded-lg border border-gold/40 bg-gold px-5 py-3 text-sm font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                Καλέστε μας
              </a>
            </nav>
          </div>
        </>
      ) : null}
    </>
  );
}
