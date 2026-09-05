"use client";

import { ArrowUp, Phone, MapPin } from "lucide-react";
import { InstagramIcon, TelegramIcon, Ornament } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { INFO } from "@/data/content";

export default function Footer() {
  const { t } = useLang();
  const year = 2026;

  return (
    <footer className="border-t border-border bg-bg-elev/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="font-display text-2xl font-semibold tracking-tight text-fg">
            Galata <span className="text-accent">Türk</span>
          </p>
          <Ornament className="mt-4 h-4 w-28 text-border-strong" />
          <p className="mt-4 text-sm text-fg-muted">{t.footer.tagline}</p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
            <a
              href={INFO.phoneHref}
              className="inline-flex min-h-11 items-center gap-2 px-2 text-sm text-fg transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {INFO.phone}
            </a>
            <a
              href={INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 px-2 text-sm text-fg-muted transition-colors hover:text-accent"
            >
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {t.contact.address}
            </a>
          </div>

          <div className="mt-8">
            <p className="sr-only">{t.footer.social}</p>
            <div className="flex items-center gap-3">
              <a
                href={INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-fg-muted transition-colors hover:border-accent hover:text-accent"
              >
                <InstagramIcon />
              </a>
              <a
                href={INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-fg-muted transition-colors hover:border-accent hover:text-accent"
              >
                <TelegramIcon />
              </a>
              <a
                href="#top"
                aria-label={t.a11y.toTop}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-fg-muted transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowUp className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="rule-ornament mt-10 w-full" />

          <p className="mt-6 text-xs text-fg-muted">
            © {year} Galata Türk. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
