/* Собственные SVG-иконки.
   lucide-react больше не содержит бренд-иконок (Instagram, Telegram и т.п.),
   поэтому соцсети рисуем сами. Все иконки декоративные — aria-hidden. */

import { useId } from "react";

type IconProps = { className?: string };

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TelegramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M21.2 4.3 2.9 11.2c-.9.3-.9 1.6.1 1.8l4.7 1.2 1.8 5.1c.3.8 1.3.9 1.8.3l2.5-2.8 4.6 3.4c.7.5 1.7.1 1.9-.7l3-13.5c.2-.9-.7-1.7-1.6-1.4Z" />
      <path d="m7.7 14.2 10.6-7.3-7.9 8.4-.2 3.9" />
    </svg>
  );
}

/* Звезда рейтинга: full | half | empty */
export function StarIcon({
  className = "h-4 w-4",
  fill = "full",
}: IconProps & { fill?: "full" | "half" | "empty" }) {
  // useId даёт одинаковый id на сервере и клиенте — иначе ломается гидратация
  const id = `star-${useId().replace(/:/g, "")}`;
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {fill === "half" && (
        <defs>
          <linearGradient id={id}>
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95L12 2.6Z"
        fill={fill === "empty" ? "none" : fill === "half" ? `url(#${id})` : "currentColor"}
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Небольшой турецкий орнамент-разделитель */
export function Ornament({ className = "h-4 w-24" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 8h30M66 8h30" />
      <path d="M48 2.5 53.5 8 48 13.5 42.5 8 48 2.5Z" />
      <circle cx="36" cy="8" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="60" cy="8" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
