"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Две подстраховки для всей страницы.

   1) ScrollTrigger.refresh() после загрузки шрифтов и картинок: они меняют
      высоту блоков, и без пересчёта триггеры остаются привязанными к старой
      раскладке. Сейчас на ScrollTrigger держится только заголовок героя.

   2) Дочистка появления секций. Основная механика — IntersectionObserver в
      components/Reveal.tsx, но его колбэки асинхронные: при рывке прокрутки,
      прыжке по якорю или восстановлении позиции после перезагрузки секцию
      можно проскочить, и она останется с opacity 0. Здесь мы синхронно, по
      событию прокрутки, показываем всё, мимо чего пользователь уже пролистал.
      Пустая секция хуже, чем несыгравшая анимация. */
export default function ScrollRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh).catch(() => {});
    window.addEventListener("load", refresh);

    const sweep = () => {
      const limit = window.innerHeight * 0.95;
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.reveal-in)")
        .forEach((el) => {
          if (el.getBoundingClientRect().top < limit) el.classList.add("reveal-in");
        });
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        sweep();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const timer = window.setTimeout(sweep, 1500);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
