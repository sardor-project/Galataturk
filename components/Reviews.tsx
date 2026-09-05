"use client";

import { Quote, ExternalLink } from "lucide-react";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { StarIcon } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { REVIEWS, INFO } from "@/data/content";

export default function Reviews() {
  const { lang, t } = useLang();

  return (
    <Section id="reviews" title={t.reviews.title} lead={t.reviews.lead}>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {REVIEWS.map((r, i) => (
          <li key={r.id}>
            <Reveal distance={40} delay={i * 100}>
              <SpotlightCard
                className="!h-full !border-border !bg-bg-elev !p-0"
                spotlightColor="rgba(211, 168, 76, 0.12)"
              >
                <figure className="flex h-full flex-col p-7 sm:p-8">
                  <Quote
                    className="h-7 w-7 shrink-0 text-accent/45"
                    aria-hidden="true"
                  />
                  <blockquote className="mt-5 flex-1">
                    <p className="font-display text-lg leading-relaxed text-fg italic">
                      «{r[lang].text}»
                    </p>
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                    <span
                      aria-hidden="true"
                      className="font-display inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-lg font-semibold text-accent"
                    >
                      {r.author.charAt(0)}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-fg">
                        {r.author}
                      </span>
                      <span className="block truncate text-xs text-fg-muted">
                        {r[lang].role}
                      </span>
                    </span>
                    <span
                      className="ml-auto inline-flex shrink-0 items-center gap-0.5 text-accent"
                      aria-label="5 / 5"
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <StarIcon key={n} className="h-3.5 w-3.5" />
                      ))}
                    </span>
                  </figcaption>
                </figure>
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <a
          href={INFO.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border-strong px-6 text-sm font-medium text-fg-muted transition-colors hover:border-accent hover:text-accent"
        >
          {t.reviews.all}
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
