/* ============================================================
   Galata Türk — весь контент сайта, RU + UZ (латиница).
   Правь только этот файл, чтобы поменять тексты.

   ВНИМАНИЕ: ЦЕНЫ В МЕНЮ — ПЛЕЙСХОЛДЕРЫ (в тысячах сумов).
   Реальных цен в исходных данных не было. Замени поле `price`
   в MENU перед публикацией сайта.
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
  instagram: "https://www.instagram.com/",
  telegram: "https://t.me/",
  // Кнопка брони ведёт в Telegram/WhatsApp — поменяй на свой номер/канал
  bookingHref: "https://wa.me/998883334909",
};

/* ---------- Меню ---------- */
export type Dish = {
  id: string;
  price: number; // тысячи сумов — ПЛЕЙСХОЛДЕР, заменить
  signature?: boolean;
  ru: { name: string; desc: string };
  uz: { name: string; desc: string };
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
    ru: { title: "Завтраки", note: "Kahvaltı · подаём с утра" },
    uz: { title: "Nonushta", note: "Kahvaltı · ertalabdan" },
    dishes: [
      {
        id: "serpme",
        price: 95,
        ru: {
          name: "Турецкий завтрак на двоих",
          desc: "Сыры, оливки, мёд с каймаком, джемы, яйца, свежий хлеб, чай без ограничений",
        },
        uz: {
          name: "Ikki kishilik turk nonushtasi",
          desc: "Pishloqlar, zaytun, qaymoqli asal, murabbolar, tuxum, yangi non va cheksiz choy",
        },
      },
      {
        id: "menemen",
        price: 38,
        ru: { name: "Менемен", desc: "Яичница с томатами, зелёным перцем и специями" },
        uz: { name: "Menemen", desc: "Pomidor, qalampir va ziravorlar bilan qovurilgan tuxum" },
      },
      {
        id: "sucuklu",
        price: 45,
        ru: { name: "Яйца с суджуком", desc: "Sucuklu yumurta — острая говяжья колбаса и яйца" },
        uz: { name: "Sujuqli tuxum", desc: "Sucuklu yumurta — achchiq mol go'shti kolbasasi va tuxum" },
      },
      {
        id: "simit",
        price: 22,
        ru: { name: "Симит с сыром", desc: "Кунжутный бублик, сливочный сыр, зелень" },
        uz: { name: "Pishloqli simit", desc: "Kunjutli halqa non, qaymoqli pishloq, ko'katlar" },
      },
    ],
  },
  {
    id: "corba",
    ru: { title: "Супы", note: "Çorba · варим каждый день" },
    uz: { title: "Sho'rvalar", note: "Çorba · har kuni yangi" },
    dishes: [
      {
        id: "mercimek",
        price: 28,
        ru: { name: "Мерджимек чорбасы", desc: "Классический чечевичный суп-пюре, лимон, сумах" },
        uz: { name: "Mercimek çorbası", desc: "Klassik yasmiq sho'rvasi, limon va sumax bilan" },
      },
      {
        id: "ezogelin",
        price: 30,
        ru: { name: "Эзогелин", desc: "Чечевица, булгур, мята и топлёное масло с перцем" },
        uz: { name: "Ezogelin", desc: "Yasmiq, bulg'ur, yalpiz va qalampirli sariyog'" },
      },
      {
        id: "yayla",
        price: 30,
        ru: { name: "Яйла чорбасы", desc: "Йогуртовый суп с рисом и мятой" },
        uz: { name: "Yayla çorbası", desc: "Guruch va yalpizli qatiq sho'rvasi" },
      },
    ],
  },
  {
    id: "meze",
    ru: { title: "Закуски", note: "Meze · к столу и к застолью" },
    uz: { title: "Gazaklar", note: "Meze · dasturxonga" },
    dishes: [
      {
        id: "humus",
        price: 34,
        ru: { name: "Хумус", desc: "Нут, тахини, оливковое масло, тёплый лаваш" },
        uz: { name: "Xumus", desc: "No'xat, tahin, zaytun moyi, issiq lavash" },
      },
      {
        id: "haydari",
        price: 32,
        ru: { name: "Хайдари", desc: "Густой йогурт с чесноком и мятой" },
        uz: { name: "Haydari", desc: "Sarimsoq va yalpizli quyuq qatiq" },
      },
      {
        id: "ezme",
        price: 30,
        ru: { name: "Аджилы эзме", desc: "Острый салат из томатов, перца и грецкого ореха" },
        uz: { name: "Acılı ezme", desc: "Pomidor, qalampir va yong'oqli achchiq salat" },
      },
      {
        id: "sarma",
        price: 36,
        ru: { name: "Сарма", desc: "Виноградные листья с рисом, кедровым орехом и смородиной" },
        uz: { name: "Sarma", desc: "Uzum bargi ichida guruch, qarag'ay yong'og'i va smorodina" },
      },
    ],
  },
  {
    id: "kebap",
    ru: { title: "Кебабы", note: "Kebap · мангал на дровах" },
    uz: { title: "Kaboblar", note: "Kebap · o'tin mangalida" },
    dishes: [
      {
        id: "adana",
        price: 89,
        signature: true,
        ru: {
          name: "Адана кебаб",
          desc: "Рубленая баранина с острым перцем на широком шампуре, булгур, печёные овощи",
        },
        uz: {
          name: "Adana kabob",
          desc: "Achchiq qalampirli maydalangan qo'y go'shti, bulg'ur va tandirda pishgan sabzavotlar",
        },
      },
      {
        id: "iskender",
        price: 98,
        ru: {
          name: "Искендер кебаб",
          desc: "Донер на кусочках пиде, томатный соус, топлёное масло, йогурт",
        },
        uz: {
          name: "Iskandar kabob",
          desc: "Pide bo'laklari ustida do'ner, pomidor sousi, sariyog' va qatiq",
        },
      },
      {
        id: "urfa",
        price: 89,
        ru: { name: "Урфа кебаб", desc: "Тот же мангал, но без острого — мягкий вкус" },
        uz: { name: "Urfa kabob", desc: "O'sha mangal, ammo achchiqsiz — mayin ta'm" },
      },
      {
        id: "beyti",
        price: 105,
        signature: true,
        ru: {
          name: "Сарма бейти",
          desc: "Кебаб в тонком лаваше под томатным соусом и йогуртом. Гости заказывают чаще всего",
        },
        uz: {
          name: "Sarma beyti",
          desc: "Yupqa lavashdagi kabob, pomidor sousi va qatiq bilan. Mehmonlar eng ko'p buyuradi",
        },
      },
      {
        id: "tavuk",
        price: 76,
        signature: true,
        ru: {
          name: "Куриная грудка",
          desc: "Tavuk şiş — маринад на йогурте, гриль, лимон и сумах",
        },
        uz: {
          name: "Tovuq ko'kragi",
          desc: "Tavuk şiş — qatiqli marinad, grill, limon va sumax",
        },
      },
      {
        id: "agnello",
        price: 145,
        signature: true,
        ru: {
          name: "Agnello",
          desc: "Каре ягнёнка на углях, розмарин, печёный картофель",
        },
        uz: {
          name: "Agnello",
          desc: "Cho'g'da pishgan qo'zi qovurg'asi, rozmarin va pishgan kartoshka",
        },
      },
    ],
  },
  {
    id: "firin",
    ru: { title: "Из печи", note: "Fırından · на открытом огне" },
    uz: { title: "Tandirdan", note: "Fırından · ochiq olovda" },
    dishes: [
      {
        id: "lahmacun",
        price: 28,
        ru: { name: "Лахмаджун", desc: "Тонкая лепёшка с мясом и зеленью, лимон" },
        uz: { name: "Lahmacun", desc: "Go'sht va ko'katli yupqa non, limon bilan" },
      },
      {
        id: "pide-cheese",
        price: 48,
        ru: { name: "Пиде с сыром", desc: "Кашар, яйцо, сливочное масло" },
        uz: { name: "Pishloqli pide", desc: "Kashar pishlog'i, tuxum, sariyog'" },
      },
      {
        id: "pide-meat",
        price: 58,
        ru: { name: "Пиде с мясом", desc: "Рубленая говядина, перец, томаты" },
        uz: { name: "Go'shtli pide", desc: "Maydalangan mol go'shti, qalampir, pomidor" },
      },
      {
        id: "pizza",
        price: 62,
        ru: { name: "Пицца", desc: "Много начинки — как любят наши гости" },
        uz: { name: "Pitsa", desc: "Ko'p masalliqli — mehmonlarimiz sevgani" },
      },
    ],
  },
  {
    id: "tatli",
    ru: { title: "Десерты", note: "Tatlı · к кофе и чаю" },
    uz: { title: "Shirinliklar", note: "Tatlı · qahva va choyga" },
    dishes: [
      {
        id: "baklava",
        price: 42,
        ru: { name: "Пахлава", desc: "Фисташка, тонкое тесто, сироп" },
        uz: { name: "Paxlava", desc: "Pista, yupqa xamir, shirin sirop" },
      },
      {
        id: "kunefe",
        price: 48,
        ru: { name: "Кюнефе", desc: "Тёплый сыр в тесте кадаиф, фисташка" },
        uz: { name: "Künefe", desc: "Kadayif xamiridagi issiq pishloq, pista" },
      },
      {
        id: "sutlac",
        price: 32,
        ru: { name: "Сютлач", desc: "Рисовый пудинг, запечённый в печи" },
        uz: { name: "Sütlaç", desc: "Tandirda pishirilgan guruchli puding" },
      },
    ],
  },
  {
    id: "icecek",
    ru: { title: "Напитки", note: "İçecek · кофе, чай, бар" },
    uz: { title: "Ichimliklar", note: "İçecek · qahva, choy, bar" },
    dishes: [
      {
        id: "turk-kahve",
        price: 26,
        ru: { name: "Турецкий кофе", desc: "На песке, с лукумом" },
        uz: { name: "Turk qahvasi", desc: "Qumda pishirilgan, luqum bilan" },
      },
      {
        id: "cay",
        price: 12,
        ru: { name: "Турецкий чай", desc: "Из самовара, в стаканчиках ince belli" },
        uz: { name: "Turk choyi", desc: "Samovardan, ince belli stakanlarda" },
      },
      {
        id: "ayran",
        price: 14,
        ru: { name: "Айран", desc: "Взбитый, солёный, холодный" },
        uz: { name: "Ayron", desc: "Ko'pirtirilgan, sho'r, muzdek" },
      },
      {
        id: "salgam",
        price: 16,
        ru: { name: "Шалгам", desc: "Свекольный сок с репой — острый или мягкий" },
        uz: { name: "Shalg'am", desc: "Sholg'omli lavlagi sharbati — achchiq yoki mayin" },
      },
      {
        id: "cocktail",
        price: 55,
        ru: { name: "Коктейли", desc: "Барная карта — спросите у официанта" },
        uz: { name: "Kokteyllar", desc: "Bar menyusi — ofitsiantdan so'rang" },
      },
      {
        id: "beer",
        price: 38,
        ru: { name: "Пиво", desc: "Разливное и бутылочное" },
        uz: { name: "Pivo", desc: "Quyma va shishada" },
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
      lead: "Четыре блюда, ради которых к нам возвращаются.",
      badge: "Хит",
    },
    menu: {
      title: "Меню",
      lead: "Завтраки, мангал, печь и десерты. Цены указаны в тысячах сумов.",
      currency: "000 сум",
      note: "Полное меню — в зале. Состав блюд уточняйте у официанта.",
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
      lead: "Зал, мангал и то, что выносят к столу.",
      placeholder: "Фото скоро появится",
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
      social: "Мы в соцсетях",
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
      lead: "Nonushta, mangal, tandir va shirinliklar. Narxlar ming so'mda.",
      currency: "000 so'm",
      note: "To'liq menyu zalda. Tarkibini ofitsiantdan so'rang.",
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
      lead: "Zal, mangal va dasturxonga chiqadigan taomlar.",
      placeholder: "Foto tez orada",
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
      social: "Ijtimoiy tarmoqlarda",
    },
  },
} as const;

export const SIGNATURE_IDS = ["adana", "beyti", "tavuk", "agnello"];
