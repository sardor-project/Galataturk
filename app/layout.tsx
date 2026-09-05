import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

/* Оба шрифта поддерживают кириллицу — сайт на русском и узбекском.
   weight не указываем: оба variable, грузится один файл на все веса. */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galata Türk — турецкий ресторан в Ташкенте",
  description:
    "Турецкая кухня в Ташкенте: мангал на дровах, кебабы, пиде и лахмаджун, турецкие завтраки и кофе на песке. Улица Мукими 1, открыто до 00:00.",
  keywords: [
    "турецкий ресторан Ташкент",
    "Galata Türk",
    "кебаб Ташкент",
    "halal restaurant Tashkent",
    "turk restorani Toshkent",
  ],
  openGraph: {
    title: "Galata Türk — турецкий ресторан в Ташкенте",
    description:
      "Мангал на дровах, кебабы и турецкие завтраки. Мукими 1, Ташкент. Открыто до полуночи.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  themeColor: "#12100d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${playfair.variable} ${manrope.variable} antialiased`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
