"use client";

import { Flame } from "lucide-react";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { formatPrice } from "@/components/MenuSection";
import { useLang } from "@/lib/i18n";
import { MENU, SIGNATURE_IDS } from "@/data/content";

export default function Signature() {
  const { lang, t } = useLang();

  const dishes = MENU.flatMap((c) => c.dishes).filter((d) =>
    SIGNATURE_IDS.includes(d.id),
  );

  return (
    <Section id="signature" title={t.signature.title} lead={t.signature.lead}>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {dishes.map((dish, i) => (
          <li key={dish.id}>
            <Reveal distance={40} delay={i * 80}>
              <SpotlightCard
                className="!h-full !border-border !bg-bg-elev !p-0"
                spotlightColor="rgba(211, 168, 76, 0.14)"
              >
                <article className="flex h-full flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className="font-display text-5xl leading-none font-semibold text-border-strong"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/50 bg-primary/12 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#f0a5a8] uppercase">
                      <Flame className="h-3.5 w-3.5" aria-hidden="true" />
                      {t.signature.badge}
                    </span>
                  </div>

                  <h3 className="font-display mt-5 text-2xl leading-snug font-semibold text-fg">
                    {dish[lang].name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                    {dish.tr}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1.5 border-t border-border pt-5">
                    <span className="font-display text-2xl font-semibold text-accent">
                      {formatPrice(dish.price)}
                    </span>
                    <span className="text-sm text-fg-muted">{t.menu.currency}</span>
                  </div>
                </article>
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
