import { site } from "@/lib/site";
import { IconMail, IconPhone, IconPin } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { SocialLinks } from "./social-links";

export function Contact() {
  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Επικοινωνία" index="03" />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <Reveal>
            <div className="flex h-full flex-col gap-3">
              {site.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="group flex items-center gap-4 rounded-[1.4rem] border border-gold/20 bg-ink-raised px-5 py-5 transition hover:border-gold hover:bg-ink-raised/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <IconPhone className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.22em] text-gold uppercase">
                      {phone.label}
                    </span>
                    <span className="font-display text-2xl text-cream sm:text-3xl">
                      {phone.display}
                    </span>
                  </span>
                </a>
              ))}

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-[1.4rem] border border-gold/20 bg-ink-raised px-5 py-5 transition hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <IconMail className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs tracking-[0.22em] text-gold uppercase">
                    Email
                  </span>
                  <span className="font-display text-2xl text-cream break-all">
                    {site.email}
                  </span>
                </span>
              </a>

              <div className="rounded-[1.4rem] border border-gold/20 bg-ink-raised px-5 py-5">
                <p className="flex items-start gap-3 text-cream/80">
                  <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.area}, {site.address.postal}
                    <br />
                    {site.address.region}
                  </span>
                </p>
                <a
                  href={site.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-medium text-gold underline-offset-4 hover:underline"
                >
                  Οδηγίες στο Google Maps
                </a>
              </div>

              <SocialLinks className="pt-2" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[1.6rem] border border-gold/15 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.7)]">
              <iframe
                title="Χάρτης — 28ης Οκτωβρίου 51, Άγιος Κωνσταντίνος"
                src={site.maps.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[22rem] w-full min-h-[22rem] bg-ink-raised lg:h-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
