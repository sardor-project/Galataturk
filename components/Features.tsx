"use client";

import {
  UtensilsCrossed,
  ShoppingBag,
  Bike,
  CalendarCheck,
  BadgeCheck,
  Martini,
  Wifi,
  Users,
  Baby,
  CircleParking,
  CreditCard,
  MoonStar,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useLang } from "@/lib/i18n";

const ICONS = [
  UtensilsCrossed,
  ShoppingBag,
  Bike,
  CalendarCheck,
  BadgeCheck,
  Martini,
  Wifi,
  Users,
  Baby,
  CircleParking,
  CreditCard,
  MoonStar,
];

export default function Features() {
  const { t } = useLang();

  return (
    <Section title={t.features.title} lead={t.features.lead}>
      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((item, i) => {
          const Icon = ICONS[i] ?? BadgeCheck;
          return (
            <li key={item.t} className="bg-bg-elev">
              <Reveal distance={24} delay={Math.min(i, 6) * 55}>
                <div className="group flex h-full items-start gap-4 p-6 transition-colors duration-200 hover:bg-bg-elev-2">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong text-accent transition-colors duration-200 group-hover:border-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold text-fg">{item.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-fg-muted">{item.d}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
