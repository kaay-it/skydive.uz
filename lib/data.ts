import type { Locale } from "@/i18n/routing";

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  tag: string;
};

type Federation = {
  name: string;
  shortName: string;
  founded: number;
  tagline: string;
  description: string;
};

type Stat = { value: string; label: string };
type Discipline = { title: string; description: string };
type BoardMember = { name: string; role: string; bio: string };
type Contacts = {
  address: string;
  phone: string;
  phoneSecondary: string;
  email: string;
  social: { instagram: string; telegram: string };
  workingHours: string;
};

const federationByLocale: Record<Locale, Federation> = {
  ru: {
    name: "Федерация парашютного спорта Узбекистана",
    shortName: "Skydive.uz",
    founded: 1968,
    tagline: "Развиваем парашютный спорт и небо делаем доступным",
    description:
      "Федерация парашютного спорта Узбекистана объединяет спортивные клубы, парашютистов-разрядников и энтузиастов свободного полёта по всей стране. Мы отвечаем за развитие дисциплины, подготовку спортсменов, судейство соревнований и организацию прыжков для новичков.",
  },
  en: {
    name: "Skydiving Federation of Uzbekistan",
    shortName: "Skydive.uz",
    founded: 1968,
    tagline: "Growing skydiving and making the sky accessible",
    description:
      "The Skydiving Federation of Uzbekistan unites sports clubs, licensed skydivers, and free-flight enthusiasts across the country. We are responsible for developing the sport, training athletes, judging competitions, and organizing jumps for beginners.",
  },
  uz: {
    name: "O‘zbekiston Parashyut sporti federatsiyasi",
    shortName: "Skydive.uz",
    founded: 1968,
    tagline: "Parashyut sportini rivojlantiramiz va osmonni hammabop qilamiz",
    description:
      "O‘zbekiston Parashyut sporti federatsiyasi butun mamlakat bo‘ylab sport klublarini, malakali parashyutchilarni va erkin parvoz ishqibozlarini birlashtiradi. Biz sport turini rivojlantirish, sportchilarni tayyorlash, musobaqalarni hakamlik qilish va yangi boshlovchilar uchun sakrashlarni tashkil etish uchun javobgarmiz.",
  },
};

const statsByLocale: Record<Locale, Stat[]> = {
  ru: [
    { value: "50+", label: "лет истории федерации" },
    { value: "600+", label: "действующих спортсменов" },
    { value: "12", label: "аэроклубов-партнёров" },
    { value: "20+", label: "соревнований в год" },
  ],
  en: [
    { value: "50+", label: "years of federation history" },
    { value: "600+", label: "active athletes" },
    { value: "12", label: "partner aeroclubs" },
    { value: "20+", label: "competitions per year" },
  ],
  uz: [
    { value: "50+", label: "federatsiya tarixi (yil)" },
    { value: "600+", label: "faol sportchilar" },
    { value: "12", label: "hamkor aeroklublar" },
    { value: "20+", label: "yillik musobaqalar" },
  ],
};

const disciplinesByLocale: Record<Locale, Discipline[]> = {
  ru: [
    {
      title: "Классическое парашютное многоборье",
      description:
        "Точность приземления и акробатика в свободном падении — базовая олимпийская дисциплина парашютного спорта.",
    },
    {
      title: "Групповая акробатика (FS)",
      description:
        "Построение фигур в свободном падении командой из 4–8 спортсменов на скорости падения около 200 км/ч.",
    },
    {
      title: "Купольная акробатика (CF)",
      description:
        "Построение фигур под раскрытыми куполами — дисциплина, требующая высочайшей точности пилотирования.",
    },
    {
      title: "Фристайл и фрифлай",
      description:
        "Свободные и артистичные дисциплины свободного падения с элементами хореографии и вертикальными позициями тела.",
    },
  ],
  en: [
    {
      title: "Classic Skydiving Combined",
      description:
        "Landing accuracy and freefall aerobatics — the foundational discipline of competitive skydiving.",
    },
    {
      title: "Formation Skydiving (FS)",
      description:
        "Building formations in freefall with a team of 4–8 athletes at a fall speed of around 200 km/h.",
    },
    {
      title: "Canopy Formation (CF)",
      description:
        "Building formations under open canopies — a discipline demanding the highest precision piloting.",
    },
    {
      title: "Freestyle & Freeflying",
      description:
        "Free-form, artistic freefall disciplines featuring choreography and vertical body positions.",
    },
  ],
  uz: [
    {
      title: "Klassik parashyut ko‘pkurashi",
      description:
        "Aniq qo‘nish va erkin uchishda akrobatika — parashyut sportining asosiy olimpiya intizomi.",
    },
    {
      title: "Guruh akrobatikasi (FS)",
      description:
        "4–8 kishilik jamoa bilan erkin uchishda, taxminan soatiga 200 km tezlikda shakllar hosil qilish.",
    },
    {
      title: "Gumbaz akrobatikasi (CF)",
      description:
        "Ochiq gumbazlar ostida shakllar hosil qilish — yuqori aniqlikdagi boshqaruvni talab qiluvchi intizom.",
    },
    {
      title: "Freestayl va Freefly",
      description:
        "Xoreografiya elementlari va vertikal tana holatlari bilan erkin va badiiy erkin uchish intizomlari.",
    },
  ],
};

const boardMembersByLocale: Record<Locale, BoardMember[]> = {
  ru: [
    {
      name: "Алексей Борщук",
      role: "Президент федерации",
      bio: "Мастер спорта международного класса, более 3000 прыжков. Руководит федерацией с 2019 года.",
    },
    {
      name: "Дилноза Каримова",
      role: "Вице-президент по спорту",
      bio: "Отвечает за подготовку сборной команды и организацию республиканских и международных стартов.",
    },
    {
      name: "Тимур Раджабов",
      role: "Главный судья федерации",
      bio: "Судья международной категории FAI, курирует судейство соревнований всех уровней.",
    },
    {
      name: "Сардор Ахмедов",
      role: "Руководитель по безопасности",
      bio: "Инструктор-парашютист, отвечает за стандарты безопасности и аттестацию клубов.",
    },
  ],
  en: [
    {
      name: "Aleksey Borshchuk",
      role: "Federation President",
      bio: "International Class Master of Sport, over 3,000 jumps. Has led the federation since 2019.",
    },
    {
      name: "Dilnoza Karimova",
      role: "Vice President for Sport",
      bio: "Responsible for national team preparation and organizing national and international competitions.",
    },
    {
      name: "Timur Rajabov",
      role: "Chief Judge of the Federation",
      bio: "FAI international category judge, oversees judging at competitions of all levels.",
    },
    {
      name: "Sardor Akhmedov",
      role: "Head of Safety",
      bio: "Skydiving instructor, responsible for safety standards and club certification.",
    },
  ],
  uz: [
    {
      name: "Aleksey Borshuk",
      role: "Federatsiya prezidenti",
      bio: "Xalqaro toifadagi sport ustasi, 3000 dan ortiq sakrash. Federatsiyani 2019-yildan boshqarib kelmoqda.",
    },
    {
      name: "Dilnoza Karimova",
      role: "Sport bo‘yicha vitse-prezident",
      bio: "Terma jamoani tayyorlash hamda respublika va xalqaro musobaqalarni tashkil etish uchun javobgar.",
    },
    {
      name: "Temur Rajabov",
      role: "Federatsiyaning bosh hakami",
      bio: "FAI xalqaro toifali hakam, barcha darajadagi musobaqalarda hakamlikni nazorat qiladi.",
    },
    {
      name: "Sardor Ahmedov",
      role: "Xavfsizlik bo‘yicha rahbar",
      bio: "Parashyut instruktori, xavfsizlik standartlari va klublarni attestatsiyadan o‘tkazish uchun javobgar.",
    },
  ],
};

const newsByLocale: Record<Locale, NewsItem[]> = {
  ru: [
    {
      slug: "chempionat-uzbekistana-2026",
      title: "Открыта регистрация на Чемпионат Узбекистана по парашютному спорту 2026",
      date: "2026-08-20",
      tag: "Соревнования",
      excerpt:
        "Федерация объявляет старт регистрации спортсменов на главный турнир сезона в дисциплинах точность приземления и групповая акробатика.",
      content: [
        "Федерация парашютного спорта Узбекистана открывает регистрацию на Чемпионат страны 2026 года. Соревнования пройдут в дисциплинах «точность приземления», «групповая акробатика» и «купольная акробатика».",
        "К участию допускаются спортсмены с действующей квалификацией не ниже второго разряда и медицинским допуском. Заявки принимаются через региональные аэроклубы до конца месяца.",
        "Подробное положение о соревнованиях и программа стартов будут опубликованы дополнительно.",
      ],
    },
    {
      slug: "sbornaya-na-mezhdunarodnyh-sorevnovaniyah",
      title: "Сборная Узбекистана выступила на международных соревнованиях",
      date: "2026-07-05",
      tag: "Сборная",
      excerpt:
        "Национальная команда приняла участие в международном турнире по групповой акробатике, показав лучший результат за последние годы.",
      content: [
        "Сборная команда Узбекистана по парашютному спорту приняла участие в международном турнире, соревнуясь с командами из Казахстана, Кыргызстана и России.",
        "Спортсмены выступили в дисциплине групповой акробатики и точности приземления, показав уверенный прогресс по сравнению с прошлым сезоном.",
        "Федерация благодарит спортсменов и тренерский штаб за подготовку и представление страны на международном уровне.",
      ],
    },
    {
      slug: "novyi-nabor-dlya-nachinayushchih",
      title: "Стартует новый набор для начинающих парашютистов",
      date: "2026-06-12",
      tag: "Обучение",
      excerpt:
        "Партнёрские аэроклубы федерации открывают программу первоначальной подготовки для всех желающих совершить первый прыжок.",
      content: [
        "Федерация совместно с партнёрскими аэроклубами объявляет набор в группы начальной подготовки парашютистов.",
        "Программа включает теоретическую подготовку, наземную отработку действий и прыжки в тандеме или по программе AFF с инструктором.",
        "Записаться можно через раздел «Контакты» — федерация направит заявку в ближайший аэроклуб.",
      ],
    },
  ],
  en: [
    {
      slug: "chempionat-uzbekistana-2026",
      title: "Registration Opens for the 2026 Uzbekistan Skydiving Championship",
      date: "2026-08-20",
      tag: "Competitions",
      excerpt:
        "The federation announces the start of athlete registration for the season's main tournament in landing accuracy and formation skydiving.",
      content: [
        "The Skydiving Federation of Uzbekistan is opening registration for the 2026 National Championship. Competitions will be held in landing accuracy, formation skydiving, and canopy formation.",
        "Athletes with a current qualification of at least second class and medical clearance are eligible to participate. Applications are accepted through regional aeroclubs until the end of the month.",
        "Detailed competition regulations and the event schedule will be published separately.",
      ],
    },
    {
      slug: "sbornaya-na-mezhdunarodnyh-sorevnovaniyah",
      title: "Uzbekistan's National Team Competes at International Tournament",
      date: "2026-07-05",
      tag: "National Team",
      excerpt:
        "The national team took part in an international formation skydiving tournament, delivering its best result in recent years.",
      content: [
        "Uzbekistan's national skydiving team took part in an international tournament, competing against teams from Kazakhstan, Kyrgyzstan, and Russia.",
        "Athletes competed in formation skydiving and landing accuracy, showing solid progress compared to last season.",
        "The federation thanks the athletes and coaching staff for their preparation and for representing the country on the international stage.",
      ],
    },
    {
      slug: "novyi-nabor-dlya-nachinayushchih",
      title: "New Enrollment Opens for Beginner Skydivers",
      date: "2026-06-12",
      tag: "Training",
      excerpt:
        "The federation's partner aeroclubs are opening an introductory training program for anyone who wants to make their first jump.",
      content: [
        "Together with partner aeroclubs, the federation is announcing enrollment in beginner skydiver training groups.",
        "The program includes theoretical training, ground drills, and jumps in tandem or under the AFF program with an instructor.",
        "Sign up via the Contacts section — the federation will forward your request to the nearest aeroclub.",
      ],
    },
  ],
  uz: [
    {
      slug: "chempionat-uzbekistana-2026",
      title: "2026-yilgi O‘zbekiston parashyut sporti chempionatiga ro‘yxatdan o‘tish boshlandi",
      date: "2026-08-20",
      tag: "Musobaqalar",
      excerpt:
        "Federatsiya mavsumning asosiy turniriga — aniq qo‘nish va guruh akrobatikasi intizomlariga — sportchilarni ro‘yxatga olishni e’lon qiladi.",
      content: [
        "O‘zbekiston Parashyut sporti federatsiyasi 2026-yilgi Mamlakat chempionatiga ro‘yxatdan o‘tishni ochmoqda. Musobaqalar «aniq qo‘nish», «guruh akrobatikasi» va «gumbaz akrobatikasi» intizomlarida o‘tkaziladi.",
        "Kamida ikkinchi toifa malakasiga va tibbiy ruxsatnomaga ega sportchilar ishtirok etishi mumkin. Arizalar oy oxirigacha mintaqaviy aeroklublar orqali qabul qilinadi.",
        "Musobaqalar bo‘yicha batafsil nizom va start jadvali keyinroq e’lon qilinadi.",
      ],
    },
    {
      slug: "sbornaya-na-mezhdunarodnyh-sorevnovaniyah",
      title: "O‘zbekiston terma jamoasi xalqaro musobaqada qatnashdi",
      date: "2026-07-05",
      tag: "Terma jamoa",
      excerpt:
        "Milliy terma jamoa guruh akrobatikasi bo‘yicha xalqaro turnirda qatnashib, so‘nggi yillardagi eng yaxshi natijani ko‘rsatdi.",
      content: [
        "O‘zbekiston parashyut sporti terma jamoasi Qozog‘iston, Qirg‘iziston va Rossiya jamoalari bilan bellashib, xalqaro turnirda qatnashdi.",
        "Sportchilar guruh akrobatikasi va aniq qo‘nish intizomlarida chiqish qilib, o‘tgan mavsumga nisbatan sezilarli o‘sish ko‘rsatdi.",
        "Federatsiya sportchilar va murabbiylar shtabiga tayyorgarlik va mamlakatni xalqaro darajada namoyon etgani uchun minnatdorchilik bildiradi.",
      ],
    },
    {
      slug: "novyi-nabor-dlya-nachinayushchih",
      title: "Yangi boshlovchi parashyutchilar uchun qabul boshlandi",
      date: "2026-06-12",
      tag: "O‘qitish",
      excerpt:
        "Federatsiyaning hamkor aeroklublari birinchi sakrashni amalga oshirmoqchi bo‘lgan barcha istaklilar uchun boshlang‘ich tayyorgarlik dasturini ochmoqda.",
      content: [
        "Federatsiya hamkor aeroklublar bilan birgalikda boshlovchi parashyutchilar uchun tayyorgarlik guruhlariga qabulni e’lon qiladi.",
        "Dastur nazariy tayyorgarlik, yerdagi mashg‘ulotlar hamda instruktor bilan tandem yoki AFF dasturi bo‘yicha sakrashlarni o‘z ichiga oladi.",
        "Ro‘yxatdan o‘tish uchun «Kontaktlar» bo‘limiga murojaat qiling — federatsiya arizangizni eng yaqin aeroklubga yo‘naltiradi.",
      ],
    },
  ],
};

const contactsByLocale: Record<Locale, Contacts> = {
  ru: {
    address: "г. Ташкент, ул. Авиационная, 12",
    phone: "+998 93 594 68 54",
    phoneSecondary: "+998 99 099 13 19",
    email: "info@skydive.uz",
    social: {
      instagram: "https://instagram.com/skydive.uz",
      telegram: "https://t.me/+MGFRNcSw5RYyZDhi",
    },
    workingHours: "Пн–Пт, 9:00–18:00",
  },
  en: {
    address: "12 Aviatsionnaya St, Tashkent",
    phone: "+998 93 594 68 54",
    phoneSecondary: "+998 99 099 13 19",
    email: "info@skydive.uz",
    social: {
      instagram: "https://instagram.com/skydive.uz",
      telegram: "https://t.me/+MGFRNcSw5RYyZDhi",
    },
    workingHours: "Mon–Fri, 9:00 AM–6:00 PM",
  },
  uz: {
    address: "Toshkent sh., Aviatsion ko‘chasi, 12",
    phone: "+998 93 594 68 54",
    phoneSecondary: "+998 99 099 13 19",
    email: "info@skydive.uz",
    social: {
      instagram: "https://instagram.com/skydive.uz",
      telegram: "https://t.me/+MGFRNcSw5RYyZDhi",
    },
    workingHours: "Dush–Juma, 9:00–18:00",
  },
};

export const instagramPosts: string[] = [
  "https://www.instagram.com/reel/DcvOSRZgUL3/",
  "https://www.instagram.com/reel/Dcl1_KeAa9V/",
  "https://www.instagram.com/reel/Da4LQXOogIQ/",
];

export function getFederation(locale: Locale): Federation {
  return federationByLocale[locale];
}

export function getStats(locale: Locale): Stat[] {
  return statsByLocale[locale];
}

export function getDisciplines(locale: Locale): Discipline[] {
  return disciplinesByLocale[locale];
}

export function getBoardMembers(locale: Locale): BoardMember[] {
  return boardMembersByLocale[locale];
}

export function getNews(locale: Locale): NewsItem[] {
  return newsByLocale[locale];
}

export function getNewsItem(locale: Locale, slug: string): NewsItem | undefined {
  return newsByLocale[locale].find((item) => item.slug === slug);
}

export function getContacts(locale: Locale): Contacts {
  return contactsByLocale[locale];
}
