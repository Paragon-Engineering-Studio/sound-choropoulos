import Image from "next/image";
import { AnchorLink } from "@/components/anchor-link";
import { BrandLogo } from "@/components/brand-logo";
import { site } from "@/lib/site";
import { SocialLinks } from "@/components/social-links";
import { IconArrow } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden pb-24 sm:pb-32"
    >
      <div className="absolute inset-0 -z-10">
        {site.heroVideo ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero.jpg"
          >
            {/* Replace /public/videos/hero.mp4 with a muted live-event clip. */}
            <source src={site.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/hero.jpg"
            alt="Σκηνικός φωτισμός σε ζωντανή εκδήλωση Choropoulos Sound"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 rounded-[1.6rem] border border-gold/25 sm:inset-6"
      />

      <p className="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 rotate-90 font-sans text-[0.68rem] tracking-[0.42em] text-gold/80 uppercase lg:block">
        DJ · Αγρίνιο
      </p>

      <div className="absolute inset-x-0 top-6 z-10 sm:top-8">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <AnchorLink href="#top" aria-label="Choropoulos Sound" className="inline-flex shrink-0 items-center">
            <BrandLogo priority />
          </AnchorLink>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-24 pb-10 sm:px-8 sm:pb-12">
        <p className="ornament mb-6 text-[0.68rem] text-gold">{site.category}</p>
        <h1 className="max-w-4xl font-display text-5xl leading-[0.95] font-medium tracking-tight text-cream sm:text-7xl lg:text-8xl">
          Choropoulos
          <span className="block italic text-gold-bright">Sound</span>
        </h1>
        <p className="mt-3 font-display text-xl text-cream/80 italic sm:text-2xl">
          {site.legalName}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
          {site.shortTagline}
        </p>
        <p className="mt-2 whitespace-nowrap text-lg text-gold sm:text-xl">
          {site.englishLine}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/65">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <AnchorLink
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink shadow-[0_16px_40px_-18px_rgba(201,163,106,0.8)] transition hover:bg-gold-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Επικοινωνία
            <IconArrow className="h-4 w-4" />
          </AnchorLink>
          <SocialLinks
            linkClassName="h-[3rem] w-[3rem] border-cream/25 hover:border-gold hover:bg-cream/5"
          />
        </div>
      </div>
    </section>
  );
}
