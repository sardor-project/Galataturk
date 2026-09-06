"use client";

import { useState } from "react";
import { Flame } from "lucide-react";
import Section from "@/components/Section";
import { useLang } from "@/lib/i18n";
import { MENU } from "@/data/content";

/* 68000 -> "68 000" (неразрывные пробелы, чтобы цена не переносилась) */
export function formatPrice(value: number) {
  return value.toLocaleString("ru-RU").replace(/\s/g, " ");
}

export default function MenuSection() {
  const { lang, t } = useLang();
  const [active, setActive] = useState(MENU[0].id);

  const category = MENU.find((c) => c.id === active) ?? MENU[0];

  return (
    <Section id="menu" title={t.menu.title} lead={t.menu.lead}>
      {/* Категории */}
      <div
        role="tablist"
        aria-label={t.menu.title}
        className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
      >
        {MENU.map((c) => {
          const selected = c.id === active;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={selected}
              aria-controls={`panel-${c.id}`}
              onClick={() => setActive(c.id)}
              className={`h-11 shrink-0 cursor-pointer snap-start rounded-full border px-5 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selected
                  ? "border-accent bg-accent text-[#12100d]"
                  : "border-border-strong text-fg-muted hover:border-accent/60 hover:text-fg"
              }`}
            >
              {c[lang].title}
            </button>
          );
        })}
      </div>

      {/* Блюда категории */}
      <div
        role="tabpanel"
        id={`panel-${category.id}`}
        aria-labelledby={`tab-${category.id}`}
        className="mt-10"
      >
        <p className="text-center text-xs tracking-[0.2em] text-fg-muted uppercase">
          {category[lang].note}
        </p>

        <ul key={category.id} className="mt-8 grid grid-cols-1 gap-x-12 lg:grid-cols-2">
          {category.dishes.map((dish, i) => (
            <li key={dish.id} className="border-b border-border last:border-b-0 lg:last:border-b">
              <div
                className="dish-in py-4"
                style={{ animationDelay: `${Math.min(i, 8) * 45}ms` }}
              >
                {/* Название — выноска — цена на одной базовой линии */}
                <div className="flex items-baseline gap-3">
                  <h3 className="flex flex-wrap items-center gap-2 text-[17px] leading-snug font-semibold text-fg">
                    {dish[lang].name}
                    {dish.signature && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-primary/50 bg-primary/12 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[#f0a5a8] uppercase">
                        <Flame className="h-3 w-3" aria-hidden="true" />
                        {t.signature.badge}
                      </span>
                    )}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="mb-[3px] min-w-8 flex-1 border-b border-dashed border-border-strong/70"
                  />

                  <span className="shrink-0 whitespace-nowrap">
                    <span className="font-display text-xl font-semibold text-accent">
                      {formatPrice(dish.price)}
                    </span>
                    <span className="ml-1 text-xs text-fg-muted">{t.menu.currency}</span>
                  </span>
                </div>

                {/* Оригинальное турецкое название — не дублируем, если совпадает */}
                {dish.tr !== dish[lang].name && (
                  <p className="mt-1 text-sm text-fg-muted">{dish.tr}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-fg-muted">{t.menu.note}</p>
      </div>
    </Section>
  );
}
