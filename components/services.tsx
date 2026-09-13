import Image from "next/image";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Services() {
  const featured = services.find((item) => item.featured);
  const rest = services.filter((item) => !item.featured);

  return (
    <section id="services" className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Υπηρεσίες για κάθε εκδήλωση"
            index="02"
          >
            Από τον γάμο μέχρι το karaoke — ίδιος επαγγελματισμός, διαφορετική
            ενέργεια.
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {featured ? (
            <Reveal className="lg:col-span-7" delay={0.05}>
              <ServiceCard service={featured} large />
            </Reveal>
          ) : null}

          {rest[0] ? (
            <Reveal className="lg:col-span-5" delay={0.12}>
              <ServiceCard service={rest[0]} />
            </Reveal>
          ) : null}

          {rest.slice(1).map((service, index) => (
            <Reveal
              key={service.id}
              className="lg:col-span-4"
              delay={0.08 * (index + 1)}
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  large = false,
}: {
  service: (typeof services)[number];
  large?: boolean;
}) {
  return (
    <article className="group relative isolate overflow-hidden rounded-[1.6rem] bg-ink-raised shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)]">
      <div
        className={`relative ${large ? "aspect-[16/11] sm:aspect-[16/10]" : "aspect-[4/3]"}`}
      >
        {/* Swap each /public/images/service-*.jpg with a matching real event photo. */}
        <Image
          src={service.image}
          alt={`Υπηρεσία ${service.title} από Choropoulos Sound`}
          fill
          sizes={
            large
              ? "(min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1024px) 33vw, 100vw"
          }
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/45 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">
          {service.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-3xl text-cream sm:text-4xl">
          {service.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/78 sm:text-base">
          {service.description}
        </p>
      </div>
    </article>
  );
}
