"use client";

import Reveal from "@/components/Reveal";
import CountUp from "@/components/reactbits/CountUp";
import { Ornament } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { INFO } from "@/data/content";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 55% at 15% 30%, rgba(211,168,76,0.09) 0%, transparent 65%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal distance={40}>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-accent uppercase">
              {t.about.lead}
            </p>
            <h2 className="font-display mt-4 text-[clamp(1.9rem,5vw,3.25rem)] leading-tight font-semibold tracking-tight text-fg">
              {t.about.title}
            </h2>
            <Ornament className="mt-5 h-4 w-28 text-border-strong" />

            <div className="mt-7 space-y-4">
              {t.about.body.map((p) => (
                <p key={p} className="text-base leading-relaxed text-fg-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} distance={40}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            <div className="col-span-2 flex flex-col items-center justify-center bg-bg-elev px-6 py-10 text-center">
              <span className="font-display text-6xl leading-none font-semibold text-accent">
                <CountUp to={INFO.rating} duration={1.6} />
              </span>
              <span className="mt-3 text-sm tracking-wide text-fg-muted">
                {t.about.statsLabel.rating}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-bg-elev px-6 py-9 text-center">
              <span className="font-display text-4xl leading-none font-semibold text-fg">
                <CountUp to={INFO.reviewsCount} duration={1.8} />
              </span>
              <span className="mt-2 text-sm text-fg-muted">
                {t.about.statsLabel.reviews}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-bg-elev px-6 py-9 text-center">
              <span className="font-display text-4xl leading-none font-semibold text-fg">
                00:00
              </span>
              <span className="mt-2 text-sm text-fg-muted">
                {t.about.statsLabel.hours}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
