"use client";

import { ImageIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useLang } from "@/lib/i18n";

/* Галерея.
   Реальных фото ресторана пока нет — показываем аккуратные слоты.
   Чтобы подставить фото: положи файлы в public/gallery/ и замени
   поле `src` (например "/gallery/zal.jpg"). Оставляй height:auto —
   атрибуты width/height иначе перебивают CSS aspect-ratio. */
type Shot = { id: string; src?: string; alt: string; span?: boolean };

/* Шесть слотов складываются в ровный прямоугольник 3x3:
   большой занимает 2x2, остальные пять — по клетке. */
const SHOTS: Shot[] = [
  { id: "zal", alt: "Зал ресторана Galata Türk", span: true },
  { id: "mangal", alt: "Мангал на дровах" },
  { id: "kebab", alt: "Адана кебаб на блюде" },
  { id: "kahvalti", alt: "Турецкий завтрак на двоих" },
  { id: "kahve", alt: "Турецкий кофе на песке" },
  { id: "kunefe", alt: "Кюнефе с фисташкой" },
];

export default function Gallery() {
  const { t } = useLang();

  return (
    <Section title={t.gallery.title} lead={t.gallery.lead}>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {SHOTS.map((shot, i) => (
          <li
            key={shot.id}
            className={shot.span ? "col-span-2 row-span-2" : ""}
          >
            <Reveal distance={30} delay={Math.min(i, 5) * 70}>
              <figure
                className="group relative overflow-hidden rounded-2xl border border-border bg-bg-elev"
                style={{ aspectRatio: "1 / 1" }}
              >
                {shot.src ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ height: "100%" }}
                  />
                ) : (
                  <div
                    className="flex h-full w-full flex-col items-center justify-center gap-2 text-fg-muted"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(211,168,76,0.07), rgba(193,39,45,0.06))",
                    }}
                  >
                    <ImageIcon className="h-6 w-6 opacity-50" aria-hidden="true" />
                    <span className="px-3 text-center text-xs">
                      {t.gallery.placeholder}
                    </span>
                  </div>
                )}
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
