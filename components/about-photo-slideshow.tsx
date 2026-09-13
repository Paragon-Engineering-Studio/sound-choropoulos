"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  {
    src: "/images/about-dj.jpg",
    alt: "DJ στον εξοπλισμό κατά τη διάρκεια εκδήλωσης",
    width: 1024,
    height: 1019,
    position: "center 48%",
  },
  {
    src: "/images/about-event.jpg",
    alt: "DJ σε ζωντανή εκδήλωση με κοινό",
    width: 1024,
    height: 999,
    position: "center 30%",
  },
  {
    src: "/images/about-laptop.jpg",
    alt: "DJ με laptop και ακουστικά",
    width: 1024,
    height: 682,
    position: "center 35%",
  },
] as const;

const SLIDE_INTERVAL_MS = 7200;
const FADE_DURATION_MS = 2800;

export function AboutPhotoSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/5] w-full bg-ink-raised">
      {photos.map((photo, photoIndex) => {
        const active = photoIndex === index;

        return (
          <div
            key={photo.src}
            aria-hidden={!active}
            className={`about-photo-slide absolute inset-0 ${active ? "is-active" : ""}`}
            style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              unoptimized
              className="h-full w-full object-cover"
              style={{ objectPosition: photo.position }}
              sizes="(min-width: 1024px) 28rem, 90vw"
              priority={photoIndex === 0}
            />
          </div>
        );
      })}
    </div>
  );
}
