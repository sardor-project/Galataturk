"use client";

import Reveal from "@/components/Reveal";
import { Clock, MapPin } from "lucide-react";
import SplitText from "@/components/reactbits/SplitText";
import Noise from "@/components/reactbits/Noise";
import CountUp from "@/components/reactbits/CountUp";
import { StarIcon, Ornament } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { INFO } from "@/data/content";

function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-accent">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          className="h-4 w-4"
          fill={value >= i ? "full" : value >= i - 0.5 ? "half" : "empty"}
        />
      ))}
    </span>
  );
}

export default function Hero() {
  const { lang, t } = useLang();

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Тёплое свечение мангала — чистый CSS, без WebGL */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(90% 60% at 50% 0%, rgba(211,168,76,0.16) 0%, transparent 62%)," +
            "radial-gradient(60% 50% at 82% 88%, rgba(193,39,45,0.16) 0%, transparent 68%)," +
            "radial-gradient(50% 40% at 10% 70%, rgba(211,168,76,0.07) 0%, transparent 70%)",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <Noise patternAlpha={12} patternRefreshInterval={4} />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 pt-36 pb-20 text-center sm:px-8 sm:pt-44 sm:pb-28">
        <Reveal distance={14}>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-accent uppercase sm:text-xs">
            {t.hero.eyebrow}
          </p>
        </Reveal>

        <SplitText
          key={lang}
          text={t.hero.title}
          tag="h1"
          className="font-display mt-5 text-[clamp(2.75rem,11vw,7rem)] leading-[0.95] font-semibold tracking-tight text-fg"
          delay={45}
          duration={0.9}
          splitType="chars"
          from={{ opacity: 0, y: 48, rotateX: -40 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
          threshold={0.05}
          rootMargin="0px"
        />

        <Ornament className="mt-6 h-4 w-32 text-border-strong" />

        <Reveal delay={250} distance={14}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
            {t.hero.lead}
          </p>
        </Reveal>

        <Reveal delay={400} distance={14}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={INFO.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 min-h-12 w-full cursor-pointer items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-on-primary transition-all duration-200 hover:bg-primary-hover hover:shadow-[0_0_32px_-8px_rgba(193,39,45,0.7)] sm:w-auto"
            >
              {t.hero.ctaBook}
            </a>
            <a
              href="#menu"
              className="inline-flex h-13 min-h-12 w-full cursor-pointer items-center justify-center rounded-full border border-border-strong px-8 text-base font-medium text-fg transition-colors duration-200 hover:border-accent hover:text-accent sm:w-auto"
            >
              {t.hero.ctaMenu}
            </a>
          </div>
        </Reveal>

        {/* Показатели */}
        <Reveal delay={550} distance={14}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-9 gap-y-6">
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl leading-none font-semibold text-fg">
                  <CountUp to={INFO.rating} duration={1.4} />
                </span>
                <Stars value={INFO.rating} />
              </div>
              <span className="text-xs tracking-wide text-fg-muted">
                {t.hero.ratingLabel}
              </span>
            </div>

            <span aria-hidden="true" className="hidden h-9 w-px bg-border sm:block" />

            <div className="flex flex-col items-center gap-1.5">
              <span className="font-display text-3xl leading-none font-semibold text-fg">
                <CountUp to={INFO.reviewsCount} duration={1.6} />
              </span>
              <span className="text-xs tracking-wide text-fg-muted">
                {t.hero.reviewsLabel}
              </span>
            </div>

            <span aria-hidden="true" className="hidden h-9 w-px bg-border sm:block" />

            <div className="flex flex-col items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-fg">
                <span className="h-2 w-2 rounded-full bg-[#4ade80]" aria-hidden="true" />
                {t.hero.openLabel}
              </span>
              <span className="rounded-full border border-accent/40 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-accent uppercase">
                {t.hero.halal}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={700} distance={14}>
          <a
            href={INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-11 items-center gap-2 px-2 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            {t.contact.address}
          </a>
        </Reveal>

        <Reveal delay={800} distance={14}>
          <p className="inline-flex min-h-11 items-center gap-2 px-2 text-sm text-fg-muted">
            <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
            {t.contact.hours}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
