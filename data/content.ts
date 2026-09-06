/* ============================================================
   Galata Türk — весь контент сайта, RU + UZ (латиница).
   Правь только этот файл, чтобы поменять тексты.

   Меню перенесено с фотографий печатного меню ресторана.
   Цены — в сумах, как в оригинале; заведение добавляет к счёту 15%
   за обслуживание.
   ============================================================ */

export type Lang = "ru" | "uz";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
];

/* ---------- Контакты и факты (одинаковы для обоих языков) ---------- */
export const INFO = {
  name: "Galata Türk",
  phone: "+998 88 333 49 09",
  phoneHref: "tel:+998883334909",
  rating: 4.5,
  reviewsCount: 113,
  plusCode: "76HV+8P",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Galata+T%C3%BCrk+Mukimi+Street+1+Tashkent",
  mapEmbed:
    "https://www.google.com/maps?q=Galata%20T%C3%BCrk%2C%20Mukimi%20Street%201%2C%20Tashkent&output=embed",
  phoneTurk: "+998 88 130 49 09",
  phoneTurkHref: "tel:+998881304909",
  instagram: "https://www.instagram.com/galataturk_restaurant",
  // Кнопка брони ведёт в WhatsApp на номер доставки/брони из меню
  bookingHref: "https://wa.me/998883334909",
  serviceFee: 15, // процент за обслуживание, указан в печатном меню
};

/* ---------- Меню ----------
   Перенесено с фотографий печатного меню ресторана (сентябрь 2026).
   Цены в сумах, как в оригинале. Названия блюд оставлены турецкими
   (`tr`), под ними — перевод на язык интерфейса.
   К счёту заведение добавляет 15% за обслуживание. */
export type Dish = {
  id: string;
  price: number; // сумы, как в печатном меню
  tr: string; // название в оригинале
  signature?: boolean;
  ru: { name: string };
  uz: { name: string };
};

export type MenuCategory = {
  id: string;
  ru: { title: string; note: string };
  uz: { title: string; note: string };
  dishes: Dish[];
};

export const MENU: MenuCategory[] = [
  {
    id: "kahvalti",
    ru: { title: "Завтраки", note: "Kahvaltı · турецкие завтраки" },
    uz: { title: "Nonushta", note: "Kahvaltı · turk nonushtalari" },
    dishes: [
      {
        id: "serpme",
        tr: "Serpme Kahvaltı (4 kişilik)",
        price: 260000,
        signature: true,
        ru: { name: "Турецкий завтрак на 4 гостя" },
        uz: { name: "4 kishilik turk nonushtasi" },
      },
      {
        id: "kahvalti-tabagi",
        tr: "Kahvaltı Tabağı (1 kişilik)",
        price: 80000,
        ru: { name: "Классический завтрак на 1 гостя" },
        uz: { name: "1 kishilik klassik nonushta" },
      },
      {
        id: "menemen",
        tr: "Menemen",
        price: 34000,
        ru: { name: "Турецкий омлет с помидорами" },
        uz: { name: "Pomidorli turk omleti" },
      },
      {
        id: "sucuklu-yumurta",
        tr: "Sucuklu Yumurta",
        price: 55000,
        ru: { name: "Яичница с суджуком" },
        uz: { name: "Sujuqli tuxum" },
      },
      {
        id: "sahanda-yumurta",
        tr: "Sahanda Yumurta",
        price: 22000,
        ru: { name: "Жареные яйца" },
        uz: { name: "Qovurilgan tuxum" },
      },
      {
        id: "peynirli-omlet",
        tr: "Peynirli Omlet",
        price: 35000,
        ru: { name: "Сырный омлет" },
        uz: { name: "Pishloqli omlet" },
      },
      {
        id: "sigara-boregi",
        tr: "Sigara Böreği",
        price: 44000,
        ru: { name: "Сигара бёреги с брынзой" },
        uz: { name: "Brinzali sigara böreği" },
      },
      {
        id: "gozleme",
        tr: "Gözleme",
        price: 46000,
        ru: { name: "Гёзлеме с сыром" },
        uz: { name: "Pishloqli gözleme" },
      },
      {
        id: "simit",
        tr: "Simit",
        price: 15000,
        ru: { name: "Симит" },
        uz: { name: "Simit" },
      },
    ],
  },
  {
    id: "corba",
    ru: { title: "Супы и салаты", note: "Çorba · Salata" },
    uz: { title: "Sho'rva va salatlar", note: "Çorba · Salata" },
    dishes: [
      {
        id: "mercimek",
        tr: "Mercimek Çorbası",
        price: 28000,
        ru: { name: "Чечевичный суп" },
        uz: { name: "Yasmiq sho'rvasi" },
      },
      {
        id: "dil-corbasi",
        tr: "Dil Çorbası",
        price: 48000,
        ru: { name: "Суп с языком" },
        uz: { name: "Tilli sho'rva" },
      },
      {
        id: "ton-balikli-salata",
        tr: "Ton Balıklı Salata",
        price: 68000,
        ru: { name: "Салат с тунцом" },
        uz: { name: "Tunes baliqli salat" },
      },
      {
        id: "sezar",
        tr: "Sezar Salata",
        price: 65000,
        ru: { name: "Салат Цезарь" },
        uz: { name: "Sezar salati" },
      },
    ],
  },
  {
    id: "kebap",
    ru: { title: "Кебабы и мясо", note: "Kebap · мангал" },
    uz: { title: "Kabob va go'sht", note: "Kebap · mangal" },
    dishes: [
      {
        id: "galata-karisik-4",
        tr: "Galata Karışık (4 kişilik)",
        price: 490000,
        signature: true,
        ru: { name: "Галата микс на 4 персоны" },
        uz: { name: "4 kishilik Galata miks" },
      },
      {
        id: "galata-karisik-2",
        tr: "Galata Karışık (2 kişilik)",
        price: 250000,
        ru: { name: "Галата микс на 2 персоны" },
        uz: { name: "2 kishilik Galata miks" },
      },
      {
        id: "adana",
        tr: "Adana Kebap",
        price: 68000,
        signature: true,
        ru: { name: "Адана кебаб" },
        uz: { name: "Adana kabob" },
      },
      {
        id: "beyti",
        tr: "Sarma Beyti",
        price: 85000,
        signature: true,
        ru: { name: "Сарма бейти" },
        uz: { name: "Sarma beyti" },
      },
      {
        id: "kasarli-beyti",
        tr: "Kaşarlı Sarma Beyti",
        price: 90000,
        ru: { name: "Сарма бейти с сыром" },
        uz: { name: "Pishloqli sarma beyti" },
      },
      {
        id: "iskender",
        tr: "İskender",
        price: 85000,
        ru: { name: "Искендер" },
        uz: { name: "Iskandar" },
      },
      {
        id: "yogurtlu-kebab",
        tr: "Yoğurtlu Kebab",
        price: 78000,
        ru: { name: "Йогуртовый кебаб" },
        uz: { name: "Qatiqli kabob" },
      },
      {
        id: "kuzu-pirzola",
        tr: "Kuzu Pirzola",
        price: 115000,
        signature: true,
        ru: { name: "Пирзола из баранины" },
        uz: { name: "Qo'y pirzolasi" },
      },
      {
        id: "kuzu-sis",
        tr: "Kuzu Şiş Kebab",
        price: 110000,
        ru: { name: "Кебаб из баранины" },
        uz: { name: "Qo'y go'shtli kabob" },
      },
      {
        id: "ali-nazik",
        tr: "Ali Nazik Parça Etli",
        price: 115000,
        ru: { name: "Али назик, нежный кусок мяса" },
        uz: { name: "Ali nazik, mayin go'sht" },
      },
      {
        id: "lokum-bonfile",
        tr: "Lokum Bonfile",
        price: 140000,
        ru: { name: "Локум бон-филе" },
        uz: { name: "Lokum bonfile" },
      },
      {
        id: "kasarli-kofte",
        tr: "Kaşarlı Köfte",
        price: 80000,
        ru: { name: "Сырный кёфте" },
        uz: { name: "Pishloqli köfte" },
      },
      {
        id: "izgara-kofte",
        tr: "Izgara Köfte",
        price: 68000,
        ru: { name: "Фрикадельки на гриле" },
        uz: { name: "Grildagi köfte" },
      },
      {
        id: "klasik-doner",
        tr: "Klasik Döner",
        price: 74000,
        ru: { name: "Классический донер" },
        uz: { name: "Klassik do'ner" },
      },
      {
        id: "doner-sandvic",
        tr: "Döner Sandviç",
        price: 54000,
        ru: { name: "Сэндвич с донером" },
        uz: { name: "Do'nerli sendvich" },
      },
    ],
  },
  {
    id: "tavuk",
    ru: { title: "Курица", note: "Tavuk · гриль и сковорода" },
    uz: { title: "Tovuq", note: "Tavuk · grill va tova" },
    dishes: [
      {
        id: "tavuk-sis",
        tr: "Tavuk Şiş",
        price: 60000,
        ru: { name: "Куриный шашлык" },
        uz: { name: "Tovuq shashligi" },
      },
      {
        id: "tavuk-bonfile",
        tr: "Tavuk Bonfile",
        price: 63000,
        ru: { name: "Куриное бон-филе" },
        uz: { name: "Tovuq bonfile" },
      },
      {
        id: "peynirli-tavuk",
        tr: "Peynirli Tavuk",
        price: 65000,
        ru: { name: "Курица с сыром" },
        uz: { name: "Pishloqli tovuq" },
      },
      {
        id: "tatli-aci-tavuk",
        tr: "Tatlı Acı Soslu Tavuk",
        price: 65000,
        ru: { name: "Курица в кисло-остром соусе" },
        uz: { name: "Nordon-achchiq sousli tovuq" },
      },
      {
        id: "barbeku-tavuk",
        tr: "Barbekü Soslu Tavuk",
        price: 65000,
        ru: { name: "Курица в соусе барбекю" },
        uz: { name: "Barbekyu sousli tovuq" },
      },
      {
        id: "tavuk-kanat",
        tr: "Tavuk Kanat",
        price: 64000,
        ru: { name: "Куриные крылышки" },
        uz: { name: "Tovuq qanotlari" },
      },
      {
        id: "tavuk-pirzola",
        tr: "Tavuk Pirzola",
        price: 64000,
        ru: { name: "Пирзола из курицы" },
        uz: { name: "Tovuq pirzolasi" },
      },
      {
        id: "klasik-burger",
        tr: "Klasik Burger",
        price: 58000,
        ru: { name: "Классический бургер" },
        uz: { name: "Klassik burger" },
      },
    ],
  },
  {
    id: "sote",
    ru: { title: "Соте и сач", note: "Sote · Saç · на сковороде" },
    uz: { title: "Sote va saç", note: "Sote · Saç · tovada" },
    dishes: [
      {
        id: "dana-sac-kavurma",
        tr: "Dana Saç Kavurma",
        price: 90000,
        ru: { name: "Сач тава из говядины" },
        uz: { name: "Mol go'shtli saç tava" },
      },
      {
        id: "et-sote",
        tr: "Et Sote",
        price: 84000,
        ru: { name: "Соте из телятины" },
        uz: { name: "Buzoq go'shtli sote" },
      },
      {
        id: "tavuk-sote",
        tr: "Tavuk Sote",
        price: 63000,
        ru: { name: "Куриное соте" },
        uz: { name: "Tovuqli sote" },
      },
      {
        id: "mantarli-tavuk",
        tr: "Mantarlı Tavuk",
        price: 68000,
        ru: { name: "Курица с грибами" },
        uz: { name: "Qo'ziqorinli tovuq" },
      },
    ],
  },
  {
    id: "pide",
    ru: { title: "Пиде", note: "Pide · из печи" },
    uz: { title: "Pide", note: "Pide · tandirdan" },
    dishes: [
      {
        id: "kusbasili-pide",
        tr: "Kuşbaşılı Pide",
        price: 70000,
        ru: { name: "Пиде с кубиками мяса" },
        uz: { name: "Go'sht bo'lakli pide" },
      },
      {
        id: "kiymali-pide",
        tr: "Kıymalı Pide",
        price: 65000,
        ru: { name: "Пиде с фаршем" },
        uz: { name: "Qiymali pide" },
      },
      {
        id: "karisik-pide",
        tr: "Karışık Pide",
        price: 71000,
        ru: { name: "Ассорти пиде" },
        uz: { name: "Assorti pide" },
      },
      {
        id: "kasarli-sucuklu-pide",
        tr: "Kaşarlı Sucuklu Pide",
        price: 74000,
        ru: { name: "Пиде с суджуком и сыром" },
        uz: { name: "Sujuq va pishloqli pide" },
      },
      {
        id: "kasarli-pide",
        tr: "Kaşarlı Pide",
        price: 54000,
        ru: { name: "Пиде с сыром" },
        uz: { name: "Pishloqli pide" },
      },
      {
        id: "cikolatali-pide",
        tr: "Çikolatalı Kaşarlı Pide",
        price: 63000,
        ru: { name: "Шоколадно-сырный пиде" },
        uz: { name: "Shokoladli-pishloqli pide" },
      },
      {
        id: "balon-ekmegi",
        tr: "Balon Ekmeği",
        price: 14000,
        ru: { name: "Воздушный хлеб" },
        uz: { name: "Havo non" },
      },
    ],
  },
  {
    id: "tatli",
    ru: { title: "Десерты", note: "Tatlı · к кофе и чаю" },
    uz: { title: "Shirinliklar", note: "Tatlı · qahva va choyga" },
    dishes: [
      {
        id: "katmer",
        tr: "Katmer Dondurmalı",
        price: 102000,
        ru: { name: "Катмер с мороженым" },
        uz: { name: "Muzqaymoqli katmer" },
      },
      {
        id: "kunefe",
        tr: "Künefe",
        price: 60000,
        ru: { name: "Кюнефе" },
        uz: { name: "Künefe" },
      },
      {
        id: "fistikli-dolma",
        tr: "Fıstıklı Dolma",
        price: 50000,
        ru: { name: "Пахлава с фисташкой" },
        uz: { name: "Pistali paxlava" },
      },
      {
        id: "havuc-dilimi",
        tr: "Havuç Dilimi",
        price: 44000,
        ru: { name: "Хавуч дилими" },
        uz: { name: "Havuç dilimi" },
      },
      {
        id: "sobiyet",
        tr: "Şöbiyet",
        price: 41000,
        ru: { name: "Шёбиет" },
        uz: { name: "Şöbiyet" },
      },
      {
        id: "midye-baklava",
        tr: "Midye Baklava",
        price: 41000,
        ru: { name: "Мидье баклава" },
        uz: { name: "Midye paxlava" },
      },
      {
        id: "baklava-klasik",
        tr: "Baklava Klasik",
        price: 37000,
        ru: { name: "Классическая пахлава" },
        uz: { name: "Klassik paxlava" },
      },
      {
        id: "kemal-pasa",
        tr: "Kemal Paşa",
        price: 26000,
        ru: { name: "Кемаль паша" },
        uz: { name: "Kemal pasha" },
      },
      {
        id: "sutlac",
        tr: "Sütlaç",
        price: 26000,
        ru: { name: "Рисовый пудинг" },
        uz: { name: "Guruchli puding" },
      },
      {
        id: "ayva-tatlisi",
        tr: "Ayva Tatlısı",
        price: 45000,
        ru: { name: "Десерт из айвы" },
        uz: { name: "Behili shirinlik" },
      },
      {
        id: "pasta-dilimi",
        tr: "Pasta Dilimi",
        price: 45000,
        ru: { name: "Кусок торта" },
        uz: { name: "Tort bo'lagi" },
      },
      {
        id: "kesme-dondurma",
        tr: "Kesme Dondurma",
        price: 35000,
        ru: { name: "Мороженое кесме" },
        uz: { name: "Kesme muzqaymoq" },
      },
      {
        id: "karisik-meyve",
        tr: "Karışık Meyve",
        price: 130000,
        ru: { name: "Фруктовое ассорти" },
        uz: { name: "Mevalar assortisi" },
      },
    ],
  },
  {
    id: "sicak",
    ru: { title: "Горячие напитки", note: "Sıcak içecekler" },
    uz: { title: "Issiq ichimliklar", note: "Sıcak içecekler" },
    dishes: [
      {
        id: "turk-kahvesi",
        tr: "Türk Kahvesi",
        price: 23000,
        ru: { name: "Кофе по-турецки" },
        uz: { name: "Turkcha qahva" },
      },
      {
        id: "bardak-cay",
        tr: "Bardak Çay",
        price: 6000,
        ru: { name: "Стакан чая" },
        uz: { name: "Bir stakan choy" },
      },
      {
        id: "termos-cay",
        tr: "Termos Çay",
        price: 35000,
        ru: { name: "Чайник чая" },
        uz: { name: "Choynak choy" },
      },
      {
        id: "meyveli-cay",
        tr: "Meyveli Çay",
        price: 45000,
        ru: { name: "Фруктовый чай" },
        uz: { name: "Mevali choy" },
      },
      {
        id: "siyah-cay",
        tr: "Siyah Çay",
        price: 18000,
        ru: { name: "Чёрный чай" },
        uz: { name: "Qora choy" },
      },
      {
        id: "yesil-cay",
        tr: "Yeşil Çay",
        price: 18000,
        ru: { name: "Зелёный чай" },
        uz: { name: "Ko'k choy" },
      },
      {
        id: "limon-cay",
        tr: "Limon Çay",
        price: 32000,
        ru: { name: "Лимонный чай" },
        uz: { name: "Limonli choy" },
      },
      {
        id: "zencefilli-cay",
        tr: "Zencefilli Limonlu Ballı Çay",
        price: 45000,
        ru: { name: "Имбирный чай с мёдом и лимоном" },
        uz: { name: "Asal va limonli zanjabil choyi" },
      },
      {
        id: "cappuccino",
        tr: "Cappuccino",
        price: 25000,
        ru: { name: "Капучино" },
        uz: { name: "Kapuchino" },
      },
      {
        id: "latte",
        tr: "Latte",
        price: 25000,
        ru: { name: "Латте" },
        uz: { name: "Latte" },
      },
      {
        id: "americano",
        tr: "Americano",
        price: 25000,
        ru: { name: "Американо" },
        uz: { name: "Amerikano" },
      },
      {
        id: "espresso",
        tr: "Espresso",
        price: 22000,
        ru: { name: "Эспрессо" },
        uz: { name: "Espresso" },
      },
    ],
  },
  {
    id: "soguk",
    ru: { title: "Холодные напитки", note: "Soğuk içecekler · фреши" },
    uz: { title: "Sovuq ichimliklar", note: "Soğuk içecekler · freshlar" },
    dishes: [
      {
        id: "fresh-portakal",
        tr: "Portakal 0.33",
        price: 51000,
        ru: { name: "Апельсиновый фреш" },
        uz: { name: "Apelsin fresh" },
      },
      {
        id: "fresh-elma",
        tr: "Elma 0.33",
        price: 30000,
        ru: { name: "Яблочный фреш" },
        uz: { name: "Olma fresh" },
      },
      {
        id: "fresh-havuc",
        tr: "Havuç 0.33",
        price: 20000,
        ru: { name: "Морковный фреш" },
        uz: { name: "Sabzi fresh" },
      },
      {
        id: "ice-tea-033",
        tr: "Galata Ice Tea 0.33",
        price: 24000,
        ru: { name: "Айс ти Galata" },
        uz: { name: "Galata ice tea" },
      },
      {
        id: "ice-tea-1l",
        tr: "Galata Ice Tea 1 L",
        price: 55000,
        ru: { name: "Айс ти Galata, 1 л" },
        uz: { name: "Galata ice tea, 1 l" },
      },
      {
        id: "limonata-033",
        tr: "Limonata 0.33",
        price: 20000,
        ru: { name: "Лимонад" },
        uz: { name: "Limonad" },
      },
      {
        id: "limonata-1l",
        tr: "Limonata 1 L",
        price: 51000,
        ru: { name: "Лимонад, 1 л" },
        uz: { name: "Limonad, 1 l" },
      },
      {
        id: "mojito-033",
        tr: "Mojito 0.33",
        price: 24000,
        ru: { name: "Мохито" },
        uz: { name: "Mohito" },
      },
      {
        id: "mojito-1l",
        tr: "Mojito 1 L",
        price: 55000,
        ru: { name: "Мохито, 1 л" },
        uz: { name: "Mohito, 1 l" },
      },
      {
        id: "milkshake-strawberry",
        tr: "Strawberry Milkshake",
        price: 37000,
        ru: { name: "Клубничный милкшейк" },
        uz: { name: "Qulupnayli milkshake" },
      },
      {
        id: "milkshake-banana",
        tr: "Banana Milkshake",
        price: 37000,
        ru: { name: "Банановый милкшейк" },
        uz: { name: "Bananli milkshake" },
      },
      {
        id: "turk-soda",
        tr: "Türk Soda 0.33",
        price: 23000,
        ru: { name: "Турецкая сода" },
        uz: { name: "Turk sodasi" },
      },
      {
        id: "salgam",
        tr: "Şalgam Suyu",
        price: 21000,
        ru: { name: "Сок репы" },
        uz: { name: "Sholg'om sharbati" },
      },
      {
        id: "turk-meyve-suyu",
        tr: "Türk Meyve Suyu 1 L",
        price: 48000,
        ru: { name: "Турецкий фруктовый сок, 1 л" },
        uz: { name: "Turk meva sharbati, 1 l" },
      },
      {
        id: "sochnaya-dolina",
        tr: "Sochnaya Dolina",
        price: 32000,
        ru: { name: "Сок «Сочная долина»" },
        uz: { name: "«Sochnaya dolina» sharbati" },
      },
      {
        id: "tarxun-03",
        tr: "Tarxun 0.3",
        price: 23000,
        ru: { name: "Тархун" },
        uz: { name: "Tarxun" },
      },
      {
        id: "tarxun-1l",
        tr: "Tarxun 1 L",
        price: 55000,
        ru: { name: "Тархун, 1 л" },
        uz: { name: "Tarxun, 1 l" },
      },
      {
        id: "kola-1l",
        tr: "Cola 1 L",
        price: 20000,
        ru: { name: "Кола, 1 л" },
        uz: { name: "Cola, 1 l" },
      },
      {
        id: "kutu-kola",
        tr: "Kutu Kola",
        price: 19000,
        ru: { name: "Кола, банка" },
        uz: { name: "Cola, banka" },
      },
      {
        id: "fanta-05",
        tr: "Fanta 0.5 L",
        price: 11000,
        ru: { name: "Фанта, 0.5 л" },
        uz: { name: "Fanta, 0.5 l" },
      },
      {
        id: "fanta-1l",
        tr: "Fanta 1 L",
        price: 20000,
        ru: { name: "Фанта, 1 л" },
        uz: { name: "Fanta, 1 l" },
      },
      {
        id: "sprite-05",
        tr: "Sprite 0.5 L",
        price: 11000,
        ru: { name: "Спрайт, 0.5 л" },
        uz: { name: "Sprite, 0.5 l" },
      },
      {
        id: "sprite-1l",
        tr: "Sprite 1 L",
        price: 20000,
        ru: { name: "Спрайт, 1 л" },
        uz: { name: "Sprite, 1 l" },
      },
      {
        id: "nestle-05",
        tr: "Nestle 0.5 L",
        price: 7000,
        ru: { name: "Вода, 0.5 л" },
        uz: { name: "Suv, 0.5 l" },
      },
      {
        id: "nestle-1l",
        tr: "Nestle 1 L",
        price: 16000,
        ru: { name: "Вода, 1 л" },
        uz: { name: "Suv, 1 l" },
      },
    ],
  },
];

/* ---------- Отзывы (реальные, из Google Карт) ---------- */
export const REVIEWS = [
  {
    id: "mira",
    author: "Мира Касенова",
    ru: {
      role: "3 отзыва · 14 фото",
      text: "Очень вкусные супчики у вас! Сарма бейти — пальчики оближешь. Пицца — много начинки.",
    },
    uz: {
      role: "3 sharh · 14 foto",
      text: "Sho'rvalaringiz juda mazali! Sarma beyti — barmog'ingizni yalaysiz. Pitsa — masallig'i ko'p.",
    },
  },
  {
    id: "khayrullo",
    author: "Khayrullo Aliev",
    ru: {
      role: "Местный эксперт · 8 отзывов · 7 фото",
      text: "Вкусно и уютно. Уже второй раз, как приезжаю в Ташкент, посещаю.",
    },
    uz: {
      role: "Mahalliy ekspert · 8 sharh · 7 foto",
      text: "Mazali va shinam. Toshkentga kelganimda ikkinchi marta tashrif buyuryapman.",
    },
  },
];

/* ---------- Переводы интерфейса ---------- */
export const T = {
  ru: {
    nav: {
      menu: "Меню",
      signature: "Хиты",
      about: "О нас",
      reviews: "Отзывы",
      contact: "Контакты",
    },
    a11y: {
      skip: "Перейти к содержимому",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      lang: "Выбор языка",
      toTop: "Наверх",
    },
    hero: {
      eyebrow: "Турецкий ресторан · Ташкент",
      title: "Galata Türk",
      lead:
        "Мангал на дровах, чечевичный суп по утрам и кофе на песке. Кухня Стамбула на улице Мукими — как дома, только с видом на огонь.",
      ctaBook: "Забронировать стол",
      ctaMenu: "Смотреть меню",
      ratingLabel: "рейтинг на Google",
      reviewsLabel: "отзывов гостей",
      openLabel: "Открыто до 00:00",
      halal: "Халяль",
    },
    features: {
      title: "Как у нас устроено",
      lead: "Всё, что стоит знать до визита.",
      items: [
        { t: "Еда в заведении", d: "Обслуживание официантами, непринуждённая обстановка" },
        { t: "Навынос и с улицы", d: "Соберём заказ с собой, забрать можно у входа" },
        { t: "Доставка", d: "Привезём кебабы и супы горячими" },
        { t: "Бронирование", d: "Оставьте стол заранее — особенно на вечер" },
        { t: "Халяльная кухня", d: "Всё мясо халяль" },
        { t: "Бар", d: "Коктейли, пиво, счастливые часы" },
        { t: "Бесплатный Wi-Fi", d: "Работает во всём зале" },
        { t: "Большие компании", d: "Рассадим стол на всех" },
        { t: "Детям", d: "Подходит для семей с детьми" },
        { t: "Парковка", d: "Бесплатная парковка на улице" },
        { t: "Оплата картой", d: "Дебетовые, кредитные и бесконтактная NFC" },
        { t: "Поздний ужин", d: "Кухня работает до полуночи" },
      ],
    },
    signature: {
      title: "Что заказывают чаще всего",
      lead: "Четыре позиции, ради которых к нам возвращаются.",
      badge: "Хит",
    },
    menu: {
      title: "Меню",
      lead: "Завтраки, мангал, печь, десерты и напитки.",
      currency: "сум",
      note: "К счёту добавляется 15% за обслуживание. Состав блюд и наличие уточняйте у официанта.",
    },
    about: {
      title: "О ресторане",
      lead: "Уютное место с непринуждённой атмосферой",
      body: [
        "Galata Türk — турецкая кухня в Ташкенте без лишнего пафоса. Мангал на дровах, печь для пиде и лахмаджуна, самовар с чаем, который не заканчивается.",
        "Утром здесь завтракают и работают, днём обедают в одиночку с книгой, вечером собираются большими компаниями. Кухня работает до полуночи — можно прийти после кино.",
        "Мы держим хороший кофе и чайную карту, готовим только из халяльного мяса и всегда рады детям.",
      ],
      statsLabel: {
        rating: "средняя оценка",
        reviews: "отзывов",
        hours: "до полуночи",
      },
    },
    gallery: {
      title: "Атмосфера",
      lead: "Зал, вход и то, что выносят к столу.",
      placeholder: "Фото скоро появится",
      alt: {
        interior: "Зал Galata Türk: столы, живая зелень и турецкие фонари",
        facade: "Вход в Galata Türk на улице Мукими",
        grill: "Курица на гриле с лавашом, рисом, салатом и соусом",
        platter: "Большое мясное плато на деревянной доске",
      },
    },
    reviews: {
      title: "Что говорят гости",
      lead: "Отзывы с Google Карт",
      source: "Google Карты",
      all: "Все отзывы на Google",
    },
    contact: {
      title: "Как нас найти",
      lead: "Мукими 1, рядом легко припарковаться.",
      addressLabel: "Адрес",
      address: "Ташкент, улица Мукими 1, 100013, Узбекистан",
      hoursLabel: "Часы работы",
      hours: "Ежедневно · до 00:00",
      phoneLabel: "Телефон",
      plusLabel: "Plus code",
      route: "Проложить маршрут",
      book: "Забронировать стол",
      call: "Позвонить",
      mapTitle: "Карта: Galata Türk, Мукими 1, Ташкент",
    },
    footer: {
      tagline: "Турецкая кухня в Ташкенте",
      rights: "Все права защищены",
      social: "Мы в Instagram",
    },
  },

  uz: {
    nav: {
      menu: "Menyu",
      signature: "Mashhur",
      about: "Biz haqimizda",
      reviews: "Sharhlar",
      contact: "Kontaktlar",
    },
    a11y: {
      skip: "Asosiy qismga o'tish",
      openMenu: "Menyuni ochish",
      closeMenu: "Menyuni yopish",
      lang: "Tilni tanlash",
      toTop: "Yuqoriga",
    },
    hero: {
      eyebrow: "Turk restorani · Toshkent",
      title: "Galata Türk",
      lead:
        "O'tin mangali, ertalabki yasmiq sho'rvasi va qumda pishgan qahva. Muqimiy ko'chasidagi Istanbul oshxonasi — uydagidek, faqat olov manzarasi bilan.",
      ctaBook: "Stol band qilish",
      ctaMenu: "Menyuni ko'rish",
      ratingLabel: "Google reytingi",
      reviewsLabel: "mehmon sharhi",
      openLabel: "00:00 gacha ochiq",
      halal: "Halol",
    },
    features: {
      title: "Bizda qanday",
      lead: "Tashrifdan oldin bilish kerak bo'lgan hamma narsa.",
      items: [
        { t: "Restoranda ovqatlanish", d: "Ofitsiantlar xizmati, erkin muhit" },
        { t: "O'zingiz bilan", d: "Buyurtmani yig'amiz, eshik oldidan olasiz" },
        { t: "Yetkazib berish", d: "Kabob va sho'rvalarni issiq yetkazamiz" },
        { t: "Band qilish", d: "Stolni oldindan oling — ayniqsa kechqurun" },
        { t: "Halol oshxona", d: "Barcha go'sht halol" },
        { t: "Bar", d: "Kokteyllar, pivo, baxtli soatlar" },
        { t: "Bepul Wi-Fi", d: "Butun zalda ishlaydi" },
        { t: "Katta davralar", d: "Hammaga joy topamiz" },
        { t: "Bolalar uchun", d: "Oilalar uchun qulay" },
        { t: "Parkovka", d: "Ko'chada bepul parkovka" },
        { t: "Karta bilan to'lov", d: "Debet, kredit kartalar va NFC" },
        { t: "Kechki ovqat", d: "Oshxona yarim tungacha ishlaydi" },
      ],
    },
    signature: {
      title: "Eng ko'p buyuriladigan taomlar",
      lead: "Mehmonlar qaytib keladigan to'rtta taom.",
      badge: "Mashhur",
    },
    menu: {
      title: "Menyu",
      lead: "Nonushta, mangal, tandir, shirinliklar va ichimliklar.",
      currency: "so'm",
      note: "Hisobga xizmat ko'rsatish uchun 15% qo'shiladi. Taom tarkibi va mavjudligini ofitsiantdan so'rang.",
    },
    about: {
      title: "Restoran haqida",
      lead: "Erkin muhitli shinam joy",
      body: [
        "Galata Türk — Toshkentdagi turk oshxonasi, ortiqcha dabdabasiz. O'tin mangali, pide va lahmacun uchun tandir, tugamaydigan choyli samovar.",
        "Ertalab bu yerda nonushta qilishadi va ishlashadi, kunduzi kitob bilan yolg'iz tushlik qilishadi, kechqurun katta davralar yig'iladi. Oshxona yarim tungacha ishlaydi — kinodan keyin ham kelsa bo'ladi.",
        "Biz yaxshi qahva va choy kartasini saqlaymiz, faqat halol go'shtdan tayyorlaymiz va bolalarga doim xursandmiz.",
      ],
      statsLabel: {
        rating: "o'rtacha baho",
        reviews: "sharh",
        hours: "yarim tungacha",
      },
    },
    gallery: {
      title: "Muhit",
      lead: "Zal, kirish va dasturxonga chiqadigan taomlar.",
      placeholder: "Foto tez orada",
      alt: {
        interior: "Galata Türk zali: stollar, jonli ko'katlar va turk fonuslari",
        facade: "Muqimiy ko'chasidagi Galata Türk kirishi",
        grill: "Grildagi tovuq, lavash, guruch, salat va sous bilan",
        platter: "Yog'och taxtadagi katta go'sht platosi",
      },
    },
    reviews: {
      title: "Mehmonlar nima deydi",
      lead: "Google Xaritalardagi sharhlar",
      source: "Google Xaritalar",
      all: "Google'dagi barcha sharhlar",
    },
    contact: {
      title: "Bizni qanday topasiz",
      lead: "Muqimiy 1, yaqinida parkovka qulay.",
      addressLabel: "Manzil",
      address: "Toshkent, Muqimiy ko'chasi 1, 100013, O'zbekiston",
      hoursLabel: "Ish vaqti",
      hours: "Har kuni · 00:00 gacha",
      phoneLabel: "Telefon",
      plusLabel: "Plus code",
      route: "Yo'nalish qurish",
      book: "Stol band qilish",
      call: "Qo'ng'iroq qilish",
      mapTitle: "Xarita: Galata Türk, Muqimiy 1, Toshkent",
    },
    footer: {
      tagline: "Toshkentdagi turk oshxonasi",
      rights: "Barcha huquqlar himoyalangan",
      social: "Instagram'da",
    },
  },
} as const;

export const SIGNATURE_IDS = ["galata-karisik-4", "beyti", "adana", "kuzu-pirzola"];
