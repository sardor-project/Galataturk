"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import { T, type Lang } from "@/data/content";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof T)["ru"] | (typeof T)["uz"];
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "galata-lang";
const DEFAULT_LANG: Lang = "ru";

/* Внешнее хранилище (localStorage) читаем через useSyncExternalStore:
   getServerSnapshot отдаёт язык по умолчанию, поэтому серверный HTML и
   первый клиентский рендер совпадают — гидратация не ломается, а
   сохранённый выбор подхватывается сразу после неё. */
const listeners = new Set<() => void>();
// Запасное хранилище на случай, когда localStorage недоступен (приватный режим)
let memoryLang: Lang | null = null;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  // Реагируем и на смену языка в другой вкладке
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): Lang {
  let stored: string | null = null;
  try {
    stored = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    stored = null;
  }
  if (stored === "ru" || stored === "uz") return stored;
  if (memoryLang) return memoryLang;
  if (navigator.language?.toLowerCase().startsWith("uz")) return "uz";
  return DEFAULT_LANG;
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((l: Lang) => {
    memoryLang = l;
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* приватный режим — просто не запоминаем выбор */
    }
    listeners.forEach((fn) => fn());
  }, []);

  // Держим атрибут lang у <html> в согласии с выбранным языком
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: T[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
