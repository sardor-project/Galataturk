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
| Ссылка кнопки «Забронировать стол» | `data/content.ts` → `INFO.bookingHref` (сейчас WhatsApp на номер брони) |

Меню перенесено с фотографий печатного меню ресторана: названия (турецкие и русские)
и цены в сумах — как в оригинале. Телефоны, Instagram и сноска про 15% за обслуживание
тоже оттуда. Адрес, часы, рейтинг и отзывы — из карточки заведения на Google Картах.
Всё лежит в `data/content.ts`.

Несколько мест стоит перепроверить по бумажному меню:

- на развороте с завтраками «Kahvaltı Tabağı (1 kişilik)» стоит 71 000, а на другой
  странице — 80 000; в файле оставлено 80 000;
- в блоке холодных напитков три строки были засвечены бликом и не перенесены;
- цены фрешей и горячих напитков на фото визуально смещены относительно названий —
  сверь порядок.

## Фото

В `public/gallery/` лежат четыре реальных снимка (webp, обрезаны и сжаты через
`sharp`): зал, фасад с вывеской, курица на гриле и мясное плато. Раскладка —
широкий кадр зала сверху, три кадра 4:3 под ним.

Чтобы заменить или добавить фото: положи файл в `public/gallery/` и поправь
массив `SHOTS` в `components/Gallery.tsx`, а подписи (alt) — в `data/content.ts`,
в `gallery.alt` для обоих языков.

Обрезка и сжатие:

```bash
node -e "require('sharp')('foto.jpg').resize(1200,900,{fit:'cover'}).webp({quality:82}).toFile('public/gallery/new.webp')"
```

У `<img>` не ставь атрибуты `width`/`height` — они перебивают CSS `aspect-ratio`.

## Структура

```
app/
  layout.tsx        шрифты (Playfair Display + Manrope, оба с кириллицей), метаданные
  page.tsx          порядок секций
  globals.css       дизайн-токены, глобальные правила
components/
  Header, Hero, Features, Signature, MenuSection,
  About, Gallery, Reviews, Contact, Footer, Section, SkipLink
  Reveal.tsx        появление секций на IntersectionObserver
  ScrollRefresh.tsx пересчёт ScrollTrigger + дочистка появления
  Icons.tsx         свои SVG: Instagram, Telegram, звезда, орнамент
  reactbits/        компоненты из react-bits (SplitText, CountUp, Noise,
                    SpotlightCard) — в игноре eslint
public/gallery/     фото ресторана (webp)
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
- Появление секций сделано на IntersectionObserver (`components/Reveal.tsx`), а не
  на GSAP ScrollTrigger: тот привязывается к позициям, посчитанным до загрузки
  шрифтов, и при быстрой прокрутке проскакивает секцию — она остаётся пустой.
- Не используй `direction="horizontal"` в react-bits AnimatedContent — GSAP сдвигает
  блок за правый край, и на мобильном появляется горизонтальная прокрутка.
- У `<img>` не ставь атрибуты `width`/`height` — они перебивают CSS `aspect-ratio`.
  Нужен `height: auto` (задан глобально в `globals.css`).
- Бренд-иконок в `lucide-react` больше нет — Instagram и Telegram нарисованы
  вручную в `components/Icons.tsx`.

## Проверено в браузере

Playwright, продакшн-сборка, ширины 1440 / 768 / 375:
гидратация жива (язык переключается, вкладки меню работают), горизонтальной
прокрутки нет, якоря встают ровно под шапку, ошибок в консоли нет,
контраст текста 6.7:1–18:1.
