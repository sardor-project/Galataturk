"use client";

import { MapPin, Clock, Phone, Navigation, QrCode } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useLang } from "@/lib/i18n";
import { INFO } from "@/data/content";

export default function Contact() {
  const { t } = useLang();

  const rows = [
    { icon: MapPin, label: t.contact.addressLabel, value: t.contact.address },
    { icon: Clock, label: t.contact.hoursLabel, value: t.contact.hours },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: INFO.phone,
      href: INFO.phoneHref,
    },
    { icon: QrCode, label: t.contact.plusLabel, value: INFO.plusCode },
  ];

  return (
    <Section id="contact" title={t.contact.title} lead={t.contact.lead}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <Reveal distance={30}>
          <div className="flex h-full flex-col rounded-2xl border border-border bg-bg-elev p-7 sm:p-8">
            <dl className="space-y-6">
              {rows.map((row) => (
                <div key={row.label} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong text-accent">
                    <row.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs tracking-wide text-fg-muted uppercase">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-[15px] leading-relaxed font-medium text-fg">
                      {row.href ? (
                        <a
                          href={row.href}
                          className="inline-flex min-h-11 items-center transition-colors hover:text-accent"
                        >
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 border-t border-border pt-7 sm:flex-row">
              <a
                href={INFO.bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-1 cursor-pointer items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-hover"
              >
                {t.contact.book}
              </a>
              <a
                href={INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border border-border-strong px-6 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                {t.contact.route}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} distance={30}>
          <div className="h-full overflow-hidden rounded-2xl border border-border bg-bg-elev">
            <iframe
              title={t.contact.mapTitle}
              src={INFO.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-full min-h-[340px] w-full border-0 grayscale-[0.35] contrast-[1.05]"
              style={{ colorScheme: "normal" }}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
