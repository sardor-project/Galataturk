# Galata Türk — сайт турецкого ресторана в Ташкенте

Статический сайт на Next.js 16 (App Router) + React 19 + TypeScript + Tailwind 4.
Одна страница, два языка (русский и узбекский), тёмная тема.

## Запуск

```bash
npm run dev     # разработка
npm run build   # статическая сборка в out/
npx eslint .    # линт
```

Сборка кладёт готовый сайт в `out/` — это обычные HTML/CSS/JS, их можно залить
на любой хостинг (Netlify, Vercel, GitHub Pages, обычный nginx).

Проверить сборку локально:

```bash
cd out && python -m http.server 4321
```

## Что нужно заменить перед публикацией

| Что | Где |
|---|---|
| **Цены в меню** — сейчас плейсхолдеры | `data/content.ts`, поле `price` в `MENU` (в тысячах сумов) |
| Ссылка кнопки «Забронировать стол» | `data/content.ts` → `INFO.bookingHref` (сейчас WhatsApp на рабочий номер) |
| Instagram и Telegram | `data/content.ts` → `INFO.instagram`, `INFO.telegram` (сейчас заглушки) |
| Фото ресторана | см. ниже |

Телефон, адрес, часы, рейтинг и отзывы взяты из карточки заведения на Google Картах
и лежат там же, в `data/content.ts`.

## Как добавить фото

1. Положи файлы в `public/gallery/`.
2. В `components/Gallery.tsx` в массиве `SHOTS` добавь каждому слоту `src`:
   `{ id: "zal", src: "/gallery/zal.jpg", alt: "Зал ресторана" }`.

Сжать и обрезать можно через `sharp` (уже стоит вместе с Next):

```bash
node -e "require('sharp')('foto.jpg').resize(1600,1600,{fit:'cover'}).webp({quality:82}).toFile('public/gallery/zal.webp')"
```

Слотов шесть: первый большой (2×2), остальные по клетке — вместе дают ровный
квадрат 3×3. Если фото меньше, лишние слоты покажут аккуратную заглушку.

## Структура

```
app/
  layout.tsx        шрифты (Playfair Display + Manrope, оба с кириллицей), метаданные
  page.tsx          порядок секций
  globals.css       дизайн-токены, глобальные правила
components/
  Header, Hero, Features, Signature, MenuSection,
  About, Gallery, Reviews, Contact, Footer, Section, SkipLink
  Icons.tsx         свои SVG: Instagram, Telegram, звезда, орнамент
  reactbits/        компоненты из react-bits (SplitText, CountUp, FadeContent,
                    AnimatedContent, Noise, SpotlightCard) — в игноре eslint
data/content.ts     весь текст на двух языках + меню + контакты
lib/i18n.tsx        переключатель языка (localStorage + useSyncExternalStore)
```

Чтобы поменять тексты, правь только `data/content.ts` — вёрстку трогать не нужно.

## Технические решения, которые лучше не ломать

- `next.config.ts` содержит только `output: 'export'` и `images.unoptimized`.
  **Не добавляй `assetPrefix`** — он ломает гидратацию React, и сайт превращается
  в мёртвый HTML: не работают ни анимации, ни кнопки, ни переключатель языка.
- `body { overflow-x: clip }`, не `hidden` — `hidden` ломает GSAP ScrollTrigger,
  и секции остаются невидимыми.
- Отступ под фиксированную шапку задан **один раз**: `scroll-padding-top` на `html`
  в `globals.css`. Не добавляй ещё и `scroll-mt` на секции — прокрутка уедет.
- Список блюд при переключении вкладки анимируется CSS-классом `.dish-in`, а не
  ScrollTrigger: список перерисовывается уже во вьюпорте, и триггер мог бы не
  сработать, оставив блюда невидимыми.
- В `AnimatedContent` не используется `direction="horizontal"` — GSAP сдвигает блок
  за правый край и на мобильном появляется горизонтальная прокрутка.
- У `<img>` не ставь атрибуты `width`/`height` — они перебивают CSS `aspect-ratio`.
  Нужен `height: auto` (задан глобально в `globals.css`).
- Бренд-иконок в `lucide-react` больше нет — Instagram и Telegram нарисованы
  вручную в `components/Icons.tsx`.

## Проверено в браузере

Playwright, продакшн-сборка, ширины 1440 / 768 / 375:
гидратация жива (язык переключается, вкладки меню работают), горизонтальной
прокрутки нет, якоря встают ровно под шапку, ошибок в консоли нет,
контраст текста 6.7:1–18:1.
