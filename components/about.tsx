import { site } from "@/lib/site";
import { AboutPhotoSlideshow } from "./about-photo-slideshow";
import { SectionHeading } from "./section-heading";

const pillars = [
  {
    title: "Εμπειρία",
    text: "Γάμοι, βαπτίσεις, karaoke και lives στην Αιτωλοακαρνανία — με αίσθηση του χώρου και του κοινού.",
  },
  {
    title: "Εξοπλισμός",
    text: "Σύγχρονα ηχεία, κονσόλες και φωτισμός που γεμίζουν τη δεξίωση χωρίς να κουράζουν.",
  },
  {
    title: "Προσωπική φροντίδα",
    text: "Λίστα, ρυθμός και φώτα στα μέτρα σας. Όχι έτοιμο πακέτο — μια βραδιά με τον χαρακτήρα σας.",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Ο ήχος πίσω από τις ωραίες στιγμές"
            index="01"
          >
            {site.about}
          </SectionHeading>

          <blockquote className="mt-10 border-l border-gold pl-5 font-display text-2xl leading-snug text-cream/80 italic sm:text-[1.7rem]">
            «{site.servicesIntro}»
          </blockquote>

          <dl className="mt-12 grid gap-6 sm:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gold/15 bg-ink-raised p-5"
              >
                <dt className="font-display text-xl text-cream">{item.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-cream/70">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto mt-14 w-full max-w-md lg:mt-24 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -top-5 -left-5 hidden h-full w-full rounded-[2rem] border border-gold/60 md:block"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-28px_rgba(28,20,12,0.45)]">
            <AboutPhotoSlideshow />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-ink/80 to-transparent p-6">
              <p className="font-display text-2xl text-cream italic">
                {site.legalName}
              </p>
              <p className="mt-1 text-sm tracking-wide text-gold">
                {site.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
