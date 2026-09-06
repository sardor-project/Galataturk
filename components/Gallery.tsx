"use client";

import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useLang } from "@/lib/i18n";

/* Галерея: реальные фото ресторана.
   Файлы лежат в public/gallery/ (webp, обрезаны и сжаты через sharp).

   Раскладка — широкий кадр зала сверху, три квадратных под ним:
     [        интерьер 16:9        ]
     [ фасад ][ гриль ][  плато  ]

   width/height на <img> не ставим — они перебивают CSS aspect-ratio;
   пропорции держит сама сетка, а height:auto задан глобально. */
type Shot = {
  id: "interior" | "facade" | "grill" | "platter";
  src: string;
  wide?: boolean;
};

const SHOTS: Shot[] = [
  { id: "interior", src: "/gallery/interior.webp", wide: true },
  { id: "facade", src: "/gallery/facade.webp" },
  { id: "grill", src: "/gallery/grill.webp" },
  { id: "platter", src: "/gallery/platter.webp" },
];

export default function Gallery() {
  const { t } = useLang();

  return (
    <Section title={t.gallery.title} lead={t.gallery.lead}>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {SHOTS.map((shot, i) => (
          <li key={shot.id} className={shot.wide ? "sm:col-span-3" : ""}>
            <Reveal distance={30} delay={Math.min(i, 4) * 70}>
              <figure
                className="group relative overflow-hidden rounded-2xl border border-border bg-bg-elev"
                style={{ aspectRatio: shot.wide ? "16 / 9" : "4 / 3" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={t.gallery.alt[shot.id]}
                  loading={shot.wide ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ height: "100%" }}
                />
                {/* Лёгкое затемнение снизу, чтобы фото садилось в тёмную тему */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                />
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
