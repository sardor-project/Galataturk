"use client";

import { useEffect, useRef } from "react";

/* Появление блока при прокрутке.

   Намеренно НЕ на GSAP ScrollTrigger: тот привязывается к позициям,
   посчитанным до загрузки шрифтов, и при быстрой прокрутке успевает
   «проскочить» секцию — она остаётся с opacity 0. Для сайта ресторана
   пустая секция куда хуже, чем несыгравшая анимация.

   IntersectionObserver сообщает о пересечении независимо от скорости
   прокрутки и пересчёта раскладки. Классы переключаем прямо на узле,
   без состояния — лишних перерисовок нет. */
export default function Reveal({
  children,
  delay = 0,
  distance = 24,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("reveal-in");

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show();
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${className}`}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--reveal-distance": `${distance}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
