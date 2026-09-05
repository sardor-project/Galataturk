"use client";

import { useLang } from "@/lib/i18n";

export default function SkipLink() {
  const { t } = useLang();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-full focus:bg-accent focus:px-5 focus:text-sm focus:font-semibold focus:text-[#12100d]"
    >
      {t.a11y.skip}
    </a>
  );
}
