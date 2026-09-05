"use client";

import { useEffect, useState } from "react";
import { Phone, Menu as MenuIcon, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { INFO, LANGS } from "@/data/content";

const SECTIONS = ["menu", "signature", "about", "reviews", "contact"] as const;

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Мобильное меню: блокируем прокрутку фона и закрываем по Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-bg/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ height: "var(--header-h)" }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="font-display inline-flex min-h-11 items-center gap-[0.3em] text-xl leading-none font-semibold tracking-tight whitespace-nowrap text-fg transition-colors hover:text-accent"
        >
          Galata <span className="text-accent">Türk</span>
        </a>

        <nav aria-label="Основная навигация" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7">
            {SECTIONS.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  className="inline-flex min-h-11 items-center text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                >
                  {t.nav[s]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          {/* Переключатель языка */}
          <div
            role="group"
            aria-label={t.a11y.lang}
            className="flex items-center rounded-full border border-border p-0.5"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`h-10 cursor-pointer rounded-full px-3.5 text-xs font-semibold tracking-wide transition-colors ${
                  lang === l.code
                    ? "bg-accent text-[#12100d]"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href={INFO.phoneHref}
            className="hidden h-11 items-center gap-2 rounded-full border border-border-strong px-4 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="whitespace-nowrap">{INFO.phone}</span>
          </a>

          <a
            href={INFO.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-hover md:inline-flex"
          >
            {t.hero.ctaBook}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border-strong text-fg transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Мобильная навигация */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-bg/97 backdrop-blur-md lg:hidden"
      >
        <nav aria-label="Мобильная навигация" className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <ul className="flex flex-col">
            {SECTIONS.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-border/60 text-base font-medium text-fg transition-colors hover:text-accent"
                >
                  {t.nav[s]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={INFO.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary"
            >
              {t.hero.ctaBook}
            </a>
            <a
              href={INFO.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border-strong px-5 text-sm font-medium text-fg"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {INFO.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
