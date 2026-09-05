"use client";

import Reveal from "@/components/Reveal";
import { Ornament } from "@/components/Icons";

/* Общая обёртка секции: заголовок, подзаголовок, орнамент.
   Отступ под фикс-шапку задан один раз через scroll-padding-top на html —
   здесь scroll-mt НЕ добавляем. */
export default function Section({
  id,
  title,
  lead,
  children,
  className = "",
  center = true,
}: {
  id?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal distance={40}>
          <div className={center ? "flex flex-col items-center text-center" : ""}>
            <h2 className="font-display text-[clamp(1.9rem,5vw,3.25rem)] leading-tight font-semibold tracking-tight text-fg">
              {title}
            </h2>
            <Ornament
              className={`mt-4 h-4 w-28 text-border-strong ${center ? "" : "ml-0"}`}
            />
            {lead && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
                {lead}
              </p>
            )}
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
