export interface Item {
  region: {
    translations: {
      en: string;
      ru: string;
    };
  };
  capital: {
    translations: {
      en: string;
      ru: string;
    };
  };
  id: number;
  name: {
    translations: {
      en: string;
      ru: string;
    };
  };
  toHide?: boolean;
  isCorrect?: boolean | undefined;
  color?: boolean;
  [key: string]: any;
}

const data: Item[] = [
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Kabul",
        ru: "Кабул",
      },
    },
    id: 0,
    name: {
      translations: {
        en: "Afghanistan",
        ru: "Афганистан",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Tirana",
        ru: "Тирана",
      },
    },
    id: 1,
    name: {
      translations: {
        en: "Albania",
        ru: "Албания",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Algiers",
        ru: "Алжир",
      },
    },
    id: 2,
    name: {
      translations: {
        en: "Algeria",
        ru: "Алжир",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Andorra la Vella",
        ru: "Андорра-ла-Велья",
      },
    },
    id: 3,
    name: {
      translations: {
        en: "Andorra",
        ru: "Андорра",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Luanda",
        ru: "Луанда",
      },
    },
    id: 4,
    name: {
      translations: {
        en: "Angola",
        ru: "Ангола",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Saint John's",
        ru: "Сент-Джонс",
      },
    },
    id: 5,
    name: {
      translations: {
        en: "Antigua and Barbuda",
        ru: "Антигуа и Барбуда",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Buenos Aires",
        ru: "Буэнос-Айрес",
      },
    },
    id: 6,
    name: {
      translations: {
        en: "Argentina",
        ru: "Аргентина",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Yerevan",
        ru: "Ереван",
      },
    },
    id: 7,
    name: {
      translations: {
        en: "Armenia",
        ru: "Армения",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Canberra",
        ru: "Канберра",
      },
    },
    id: 8,
    name: {
      translations: {
        en: "Australia",
        ru: "Австралия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Vienna",
        ru: "Вена",
      },
    },
    id: 9,
    name: {
      translations: {
        en: "Austria",
        ru: "Австрия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Baku",
        ru: "Баку",
      },
    },
    id: 10,
    name: {
      translations: {
        en: "Azerbaijan",
        ru: "Азербайджан",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Nassau",
        ru: "Нассау",
      },
    },
    id: 11,
    name: {
      translations: {
        en: "Bahamas",
        ru: "Багамские Острова",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Manama",
        ru: "Манама",
      },
    },
    id: 12,
    name: {
      translations: {
        en: "Bahrain",
        ru: "Бахрейн",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Dhaka",
        ru: "Дакка",
      },
    },
    id: 13,
    name: {
      translations: {
        en: "Bangladesh",
        ru: "Бангладеш",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Bridgetown",
        ru: "Бриджтаун",
      },
    },
    id: 14,
    name: {
      translations: {
        en: "Barbados",
        ru: "Барбадос",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Minsk",
        ru: "Минск",
      },
    },
    id: 15,
    name: {
      translations: {
        en: "Belarus",
        ru: "Беларусь",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Brussels",
        ru: "Брюссель",
      },
    },
    id: 16,
    name: {
      translations: {
        en: "Belgium",
        ru: "Бельгия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Belmopan",
        ru: "Бельмопан",
      },
    },
    id: 17,
    name: {
      translations: {
        en: "Belize",
        ru: "Белиз",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Porto-Novo",
        ru: "Порто-Ново",
      },
    },
    id: 18,
    name: {
      translations: {
        en: "Benin",
        ru: "Бенин",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Thimphu",
        ru: "Тхимпху",
      },
    },
    id: 19,
    name: {
      translations: {
        en: "Bhutan",
        ru: "Бутан",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Sucre",
        ru: "Сукре",
      },
    },
    id: 20,
    name: {
      translations: {
        en: "Bolivia",
        ru: "Боливия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Sarajevo",
        ru: "Сараево",
      },
    },
    id: 21,
    name: {
      translations: {
        en: "Bosnia and Herzegovina",
        ru: "Босния и Герцеговина",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Gaborone",
        ru: "Габороне",
      },
    },
    id: 22,
    name: {
      translations: {
        en: "Botswana",
        ru: "Ботсвана",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Brasilia",
        ru: "Бразилиа",
      },
    },
    id: 23,
    name: {
      translations: {
        en: "Brazil",
        ru: "Бразилия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Bandar Seri Begawan",
        ru: "Бандар-Сери-Бегаван",
      },
    },
    id: 24,
    name: {
      translations: {
        en: "Brunei",
        ru: "Бруней",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Sofia",
        ru: "София",
      },
    },
    id: 25,
    name: {
      translations: {
        en: "Bulgaria",
        ru: "Болгария",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Ouagadougou",
        ru: "Уагадугу",
      },
    },
    id: 26,
    name: {
      translations: {
        en: "Burkina Faso",
        ru: "Буркина-Фасо",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Gitega",
        ru: "Гитега",
      },
    },
    id: 27,
    name: {
      translations: {
        en: "Burundi",
        ru: "Бурунди",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Praia",
        ru: "Прая",
      },
    },
    id: 28,
    name: {
      translations: {
        en: "Cabo Verde",
        ru: "Кабо-Верде",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Phnom Penh",
        ru: "Пномпень",
      },
    },
    id: 29,
    name: {
      translations: {
        en: "Cambodia",
        ru: "Камбоджа",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Yaounde",
        ru: "Яунде",
      },
    },
    id: 30,
    name: {
      translations: {
        en: "Cameroon",
        ru: "Камерун",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Ottawa",
        ru: "Оттава",
      },
    },
    id: 31,
    name: {
      translations: {
        en: "Canada",
        ru: "Канада",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Bangui",
        ru: "Банги",
      },
    },
    id: 32,
    name: {
      translations: {
        en: "Central African Republic",
        ru: "Центральноафриканская Республика",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "N'Djamena",
        ru: "Нджамена",
      },
    },
    id: 33,
    name: {
      translations: {
        en: "Chad",
        ru: "Чад",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Santiago",
        ru: "Сантьяго",
      },
    },
    id: 34,
    name: {
      translations: {
        en: "Chile",
        ru: "Чили",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Beijing",
        ru: "Пекин",
      },
    },
    id: 35,
    name: {
      translations: {
        en: "China",
        ru: "Китай",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Bogota",
        ru: "Богота",
      },
    },
    id: 36,
    name: {
      translations: {
        en: "Colombia",
        ru: "Колумбия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Moroni",
        ru: "Морони",
      },
    },
    id: 37,
    name: {
      translations: {
        en: "Comoros",
        ru: "Коморы",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Brazzaville",
        ru: "Браззавиль",
      },
    },
    id: 38,
    name: {
      translations: {
        en: "Congo",
        ru: "Конго",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "San Jose",
        ru: "Сан-Хосе",
      },
    },
    id: 39,
    name: {
      translations: {
        en: "Costa Rica",
        ru: "Коста-Рика",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Zagreb",
        ru: "Загреб",
      },
    },
    id: 40,
    name: {
      translations: {
        en: "Croatia",
        ru: "Хорватия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Havana",
        ru: "Гавана",
      },
    },
    id: 41,
    name: {
      translations: {
        en: "Cuba",
        ru: "Куба",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Nicosia",
        ru: "Южная Никосия",
      },
    },
    id: 42,
    name: {
      translations: {
        en: "Cyprus",
        ru: "Кипр",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Praha",
        ru: "Прага",
      },
    },
    id: 43,
    name: {
      translations: {
        en: "Czech Republic",
        ru: "Чехия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Copenhagen",
        ru: "Копенгаген",
      },
    },
    id: 44,
    name: {
      translations: {
        en: "Denmark",
        ru: "Дания",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Djibouti",
        ru: "Джибути",
      },
    },
    id: 45,
    name: {
      translations: {
        en: "Djibouti",
        ru: "Джибути",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Roseau",
        ru: "Розо",
      },
    },
    id: 46,
    name: {
      translations: {
        en: "Dominica",
        ru: "Доминика",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Santo Domingo",
        ru: "Санто-Доминго",
      },
    },
    id: 47,
    name: {
      translations: {
        en: "Dominican Republic",
        ru: "Доминиканская Республика",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Quito",
        ru: "Кито",
      },
    },
    id: 48,
    name: {
      translations: {
        en: "Ecuador",
        ru: "Эквадор",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Cairo",
        ru: "Каир",
      },
    },
    id: 49,
    name: {
      translations: {
        en: "Egypt",
        ru: "Египет",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "San Salvador",
        ru: "Сан-Сальвадор",
      },
    },
    id: 50,
    name: {
      translations: {
        en: "El Salvador",
        ru: "Сальвадор",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Malabo",
        ru: "Малабо",
      },
    },
    id: 51,
    name: {
      translations: {
        en: "Equatorial Guinea",
        ru: "Экваториальная Гвинея",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Asmara",
        ru: "Асмэра",
      },
    },
    id: 52,
    name: {
      translations: {
        en: "Eritrea",
        ru: "Эритрея",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Tallinn",
        ru: "Таллин",
      },
    },
    id: 53,
    name: {
      translations: {
        en: "Estonia",
        ru: "Эстония",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Mbabane",
        ru: "Мбабане",
      },
    },
    id: 54,
    name: {
      translations: {
        en: "Eswatini",
        ru: "Эсватини",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Addis Ababa",
        ru: "Аддис-Абеба",
      },
    },
    id: 55,
    name: {
      translations: {
        en: "Ethiopia",
        ru: "Эфиопия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Suva",
        ru: "Сува",
      },
    },
    id: 56,
    name: {
      translations: {
        en: "Fiji",
        ru: "Фиджи",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Helsinki",
        ru: "Хельсинки",
      },
    },
    id: 57,
    name: {
      translations: {
        en: "Finland",
        ru: "Финляндия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Paris",
        ru: "Париж",
      },
    },
    id: 58,
    name: {
      translations: {
        en: "France",
        ru: "Франция",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Libreville",
        ru: "Либревиль",
      },
    },
    id: 59,
    name: {
      translations: {
        en: "Gabon",
        ru: "Габон",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Banjul",
        ru: "Банжул",
      },
    },
    id: 60,
    name: {
      translations: {
        en: "Gambia",
        ru: "Гамбия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Tbilisi",
        ru: "Тбилиси",
      },
    },
    id: 61,
    name: {
      translations: {
        en: "Georgia",
        ru: "Грузия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Berlin",
        ru: "Берлин",
      },
    },
    id: 62,
    name: {
      translations: {
        en: "Germany",
        ru: "Германия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Accra",
        ru: "Аккра",
      },
    },
    id: 63,
    name: {
      translations: {
        en: "Ghana",
        ru: "Гана",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Athens",
        ru: "Афины",
      },
    },
    id: 64,
    name: {
      translations: {
        en: "Greece",
        ru: "Греция",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Saint George's",
        ru: "Сент-Джорджес",
      },
    },
    id: 65,
    name: {
      translations: {
        en: "Grenada",
        ru: "Гренада",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Guatemala City",
        ru: "Гватемала",
      },
    },
    id: 66,
    name: {
      translations: {
        en: "Guatemala",
        ru: "Гватемала",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Conakry",
        ru: "Конакри",
      },
    },
    id: 67,
    name: {
      translations: {
        en: "Guinea",
        ru: "Гвинея",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Bissau",
        ru: "Бисау",
      },
    },
    id: 68,
    name: {
      translations: {
        en: "Guinea-Bissau",
        ru: "Гвинея-Бисау",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Georgetown",
        ru: "Джорджтаун",
      },
    },
    id: 69,
    name: {
      translations: {
        en: "Guyana",
        ru: "Гайана",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Port-au-Prince",
        ru: "Порт-о-Пренс",
      },
    },
    id: 70,
    name: {
      translations: {
        en: "Haiti",
        ru: "Гаити",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Tegucigalpa",
        ru: "Тегусигальпа",
      },
    },
    id: 71,
    name: {
      translations: {
        en: "Honduras",
        ru: "Гондурас",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Budapest",
        ru: "Будапешт",
      },
    },
    id: 72,
    name: {
      translations: {
        en: "Hungary",
        ru: "Венгрия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Reykjavik",
        ru: "Рейкьявик",
      },
    },
    id: 73,
    name: {
      translations: {
        en: "Iceland",
        ru: "Исландия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "New Delhi",
        ru: "Нью-Дели",
      },
    },
    id: 74,
    name: {
      translations: {
        en: "India",
        ru: "Индия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Jakarta",
        ru: "Джакарта",
      },
    },
    id: 75,
    name: {
      translations: {
        en: "Indonesia",
        ru: "Индонезия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Tehran",
        ru: "Тегеран",
      },
    },
    id: 76,
    name: {
      translations: {
        en: "Iran",
        ru: "Иран",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Baghdad",
        ru: "Багдад",
      },
    },
    id: 77,
    name: {
      translations: {
        en: "Iraq",
        ru: "Ирак",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Dublin",
        ru: "Дублин",
      },
    },
    id: 78,
    name: {
      translations: {
        en: "Ireland",
        ru: "Ирландия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Jerusalem",
        ru: "Иерусалим",
      },
    },
    id: 79,
    name: {
      translations: {
        en: "Israel",
        ru: "Израиль",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Roma",
        ru: "Рим",
      },
    },
    id: 80,
    name: {
      translations: {
        en: "Italy",
        ru: "Италия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Yamoussoukro",
        ru: "Ямусукро",
      },
    },
    id: 81,
    name: {
      translations: {
        en: "Ivory Coast",
        ru: "Кот-д’Ивуар",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Kingston",
        ru: "Кингстон",
      },
    },
    id: 82,
    name: {
      translations: {
        en: "Jamaica",
        ru: "Ямайка",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Tokyo",
        ru: "Токио",
      },
    },
    id: 83,
    name: {
      translations: {
        en: "Japan",
        ru: "Япония",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Amman",
        ru: "Амман",
      },
    },
    id: 84,
    name: {
      translations: {
        en: "Jordan",
        ru: "Иордания",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Astana",
        ru: "Астана",
      },
    },
    id: 85,
    name: {
      translations: {
        en: "Kazakhstan",
        ru: "Казахстан",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Nairobi",
        ru: "Найроби",
      },
    },
    id: 86,
    name: {
      translations: {
        en: "Kenya",
        ru: "Кения",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "South Tarawa",
        ru: "Южная Тарава",
      },
    },
    id: 87,
    name: {
      translations: {
        en: "Kiribati",
        ru: "Кирибати",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Pristina",
        ru: "Приштина",
      },
    },
    id: 88,
    name: {
      translations: {
        en: "Kosovo",
        ru: "Косово",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Kuwait City",
        ru: "Эль-Кувейт",
      },
    },
    id: 89,
    name: {
      translations: {
        en: "Kuwait",
        ru: "Кувейт",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Bishkek",
        ru: "Бишкек",
      },
    },
    id: 90,
    name: {
      translations: {
        en: "Kyrgyzstan",
        ru: "Киргизия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Vientiane",
        ru: "Вьентьян",
      },
    },
    id: 91,
    name: {
      translations: {
        en: "Laos",
        ru: "Лаос",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Riga",
        ru: "Рига",
      },
    },
    id: 92,
    name: {
      translations: {
        en: "Latvia",
        ru: "Латвия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Beirut",
        ru: "Бейрут",
      },
    },
    id: 93,
    name: {
      translations: {
        en: "Lebanon",
        ru: "Ливан",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Maseru",
        ru: "Масеру",
      },
    },
    id: 94,
    name: {
      translations: {
        en: "Lesotho",
        ru: "Лесото",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Monrovia",
        ru: "Монровия",
      },
    },
    id: 95,
    name: {
      translations: {
        en: "Liberia",
        ru: "Либерия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Tripoli",
        ru: "Триполи",
      },
    },
    id: 96,
    name: {
      translations: {
        en: "Libya",
        ru: "Ливия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Vaduz",
        ru: "Вадуц",
      },
    },
    id: 97,
    name: {
      translations: {
        en: "Liechtenstein",
        ru: "Лихтенштейн",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Vilnius",
        ru: "Вильнюс",
      },
    },
    id: 98,
    name: {
      translations: {
        en: "Lithuania",
        ru: "Литва",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Luxembourg",
        ru: "Люксембург",
      },
    },
    id: 99,
    name: {
      translations: {
        en: "Luxembourg",
        ru: "Люксембург",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Antananarivo",
        ru: "Антананариву",
      },
    },
    id: 100,
    name: {
      translations: {
        en: "Madagascar",
        ru: "Мадагаскар",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Lilongwe",
        ru: "Лилонгве",
      },
    },
    id: 101,
    name: {
      translations: {
        en: "Malawi",
        ru: "Малави",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Kuala Lumpur",
        ru: "Куала-Лумпур",
      },
    },
    id: 102,
    name: {
      translations: {
        en: "Malaysia",
        ru: "Малайзия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Male",
        ru: "Мале",
      },
    },
    id: 103,
    name: {
      translations: {
        en: "Maldives",
        ru: "Мальдивы",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Bamako",
        ru: "Бамако",
      },
    },
    id: 104,
    name: {
      translations: {
        en: "Mali",
        ru: "Мали",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Valletta",
        ru: "Валлетта",
      },
    },
    id: 105,
    name: {
      translations: {
        en: "Malta",
        ru: "Мальта",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Majuro",
        ru: "Маджуро",
      },
    },
    id: 106,
    name: {
      translations: {
        en: "Marshall Islands",
        ru: "Маршалловы Острова",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Kinshasa",
        ru: "Киншаса",
      },
    },
    id: 107,
    name: {
      translations: {
        en: "Democratic Republic of the Congo",
        ru: "Демократическая Республика Конго",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Nouakchott",
        ru: "Нуакшот",
      },
    },
    id: 108,
    name: {
      translations: {
        en: "Mauritania",
        ru: "Мавритания",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Port Louis",
        ru: "Порт-Луи",
      },
    },
    id: 109,
    name: {
      translations: {
        en: "Mauritius",
        ru: "Маврикий",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Dili",
        ru: "Дили",
      },
    },
    id: 110,
    name: {
      translations: {
        en: "East Timor",
        ru: "Восточный Тимор",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Mexico City",
        ru: "Мехико",
      },
    },
    id: 111,
    name: {
      translations: {
        en: "Mexico",
        ru: "Мексика",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Palikir",
        ru: "Паликир",
      },
    },
    id: 112,
    name: {
      translations: {
        en: "Micronesia",
        ru: "Микронезия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Chisinau",
        ru: "Кишинёв",
      },
    },
    id: 113,
    name: {
      translations: {
        en: "Moldova",
        ru: "Молдавия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Monaco",
        ru: "Монако",
      },
    },
    id: 114,
    name: {
      translations: {
        en: "Monaco",
        ru: "Монако",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Ulaanbaatar",
        ru: "Улан-Батор",
      },
    },
    id: 115,
    name: {
      translations: {
        en: "Mongolia",
        ru: "Монголия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Podgorica",
        ru: "Подгорица",
      },
    },
    id: 116,
    name: {
      translations: {
        en: "Montenegro",
        ru: "Черногория",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Rabat",
        ru: "Рабат",
      },
    },
    id: 117,
    name: {
      translations: {
        en: "Morocco",
        ru: "Марокко",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Maputo",
        ru: "Мапуту",
      },
    },
    id: 118,
    name: {
      translations: {
        en: "Mozambique",
        ru: "Мозамбик",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Nay Pyi Taw",
        ru: "Нейпьидо",
      },
    },
    id: 119,
    name: {
      translations: {
        en: "Myanmar",
        ru: "Мьянма",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Windhoek",
        ru: "Виндхук",
      },
    },
    id: 120,
    name: {
      translations: {
        en: "Namibia",
        ru: "Намибия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Yaren",
        ru: "Ярен",
      },
    },
    id: 121,
    name: {
      translations: {
        en: "Nauru",
        ru: "Науру",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Kathmandu",
        ru: "Катманду",
      },
    },
    id: 122,
    name: {
      translations: {
        en: "Nepal",
        ru: "Непал",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Amsterdam",
        ru: "Амстердам",
      },
    },
    id: 123,
    name: {
      translations: {
        en: "Netherlands",
        ru: "Нидерланды",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Wellington",
        ru: "Веллингтон",
      },
    },
    id: 124,
    name: {
      translations: {
        en: "New Zealand",
        ru: "Новая Зеландия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Managua",
        ru: "Манагуа",
      },
    },
    id: 125,
    name: {
      translations: {
        en: "Nicaragua",
        ru: "Никарагуа",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Niamey",
        ru: "Ниамей",
      },
    },
    id: 126,
    name: {
      translations: {
        en: "Niger",
        ru: "Нигер",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Abuja",
        ru: "Абуджа",
      },
    },
    id: 127,
    name: {
      translations: {
        en: "Nigeria",
        ru: "Нигерия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Pyongyang",
        ru: "Пхеньян",
      },
    },
    id: 128,
    name: {
      translations: {
        en: "North Korea",
        ru: "Северная Корея",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Skopje",
        ru: "Скопье",
      },
    },
    id: 129,
    name: {
      translations: {
        en: "North Macedonia",
        ru: "Северная Македония",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Oslo",
        ru: "Осло",
      },
    },
    id: 130,
    name: {
      translations: {
        en: "Norway",
        ru: "Норвегия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Muscat",
        ru: "Маскат",
      },
    },
    id: 131,
    name: {
      translations: {
        en: "Oman",
        ru: "Оман",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Islamabad",
        ru: "Исламабад",
      },
    },
    id: 132,
    name: {
      translations: {
        en: "Pakistan",
        ru: "Пакистан",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Ngerulmud",
        ru: "Нгерулмуд",
      },
    },
    id: 133,
    name: {
      translations: {
        en: "Palau",
        ru: "Палау",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Panama City",
        ru: "Панама",
      },
    },
    id: 134,
    name: {
      translations: {
        en: "Panama",
        ru: "Панама",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Port Moresby",
        ru: "Порт-Морсби",
      },
    },
    id: 135,
    name: {
      translations: {
        en: "Papua New Guinea",
        ru: "Папуа - Новая Гвинея",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Asuncion",
        ru: "Асунсьон",
      },
    },
    id: 136,
    name: {
      translations: {
        en: "Paraguay",
        ru: "Парагвай",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Lima",
        ru: "Лима",
      },
    },
    id: 137,
    name: {
      translations: {
        en: "Peru",
        ru: "Перу",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Manila",
        ru: "Манила",
      },
    },
    id: 138,
    name: {
      translations: {
        en: "Philippines",
        ru: "Филиппины",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Adamstown",
        ru: "Адамстаун",
      },
    },
    id: 139,
    name: {
      translations: {
        en: "Pitcairn",
        ru: "Питкэрн",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Warsaw",
        ru: "Варшава",
      },
    },
    id: 140,
    name: {
      translations: {
        en: "Poland",
        ru: "Польша",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Lisbon",
        ru: "Лиссабон",
      },
    },
    id: 141,
    name: {
      translations: {
        en: "Portugal",
        ru: "Португалия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Doha",
        ru: "Доха",
      },
    },
    id: 142,
    name: {
      translations: {
        en: "Qatar",
        ru: "Катар",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Bucharest",
        ru: "Бухарест",
      },
    },
    id: 143,
    name: {
      translations: {
        en: "Romania",
        ru: "Румыния",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Moscow",
        ru: "Москва",
      },
    },
    id: 144,
    name: {
      translations: {
        en: "Russia",
        ru: "Россия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Kigali",
        ru: "Кигали",
      },
    },
    id: 145,
    name: {
      translations: {
        en: "Rwanda",
        ru: "Руанда",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Basseterre",
        ru: "Бастер",
      },
    },
    id: 146,
    name: {
      translations: {
        en: "Saint Kitts and Nevis",
        ru: "Сент-Китс и Невис",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Castries",
        ru: "Кастри",
      },
    },
    id: 147,
    name: {
      translations: {
        en: "Saint Lucia",
        ru: "Сент-Люсия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Kingstown",
        ru: "Кингстаун",
      },
    },
    id: 148,
    name: {
      translations: {
        en: "Saint Vincent and the Grenadines",
        ru: "Сент-Винсент и Гренадины",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Apia",
        ru: "Апиа",
      },
    },
    id: 149,
    name: {
      translations: {
        en: "Samoa",
        ru: "Самоа",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "San Marino",
        ru: "Сан-Марино",
      },
    },
    id: 150,
    name: {
      translations: {
        en: "San Marino",
        ru: "Сан-Марино",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Sao Tome",
        ru: "Сан-Томе",
      },
    },
    id: 151,
    name: {
      translations: {
        en: "Sao Tome and Principe",
        ru: "Сан-Томе и Принсипи",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Riyadh",
        ru: "Эр-Рияд",
      },
    },
    id: 152,
    name: {
      translations: {
        en: "Saudi Arabia",
        ru: "Саудовская Аравия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Dakar",
        ru: "Дакар",
      },
    },
    id: 153,
    name: {
      translations: {
        en: "Senegal",
        ru: "Сенегал",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Belgrade",
        ru: "Белград",
      },
    },
    id: 154,
    name: {
      translations: {
        en: "Serbia",
        ru: "Сербия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Victoria",
        ru: "Виктория",
      },
    },
    id: 155,
    name: {
      translations: {
        en: "Seychelles",
        ru: "Сейшельские Острова",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Freetown",
        ru: "Фритаун",
      },
    },
    id: 156,
    name: {
      translations: {
        en: "Sierra Leone",
        ru: "Сьерра-Леоне",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Singapore",
        ru: "Сингапур",
      },
    },
    id: 157,
    name: {
      translations: {
        en: "Singapore",
        ru: "Сингапур",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Bratislava",
        ru: "Братислава",
      },
    },
    id: 158,
    name: {
      translations: {
        en: "Slovakia",
        ru: "Словакия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Ljubljana",
        ru: "Любляна",
      },
    },
    id: 159,
    name: {
      translations: {
        en: "Slovenia",
        ru: "Словения",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Honiara",
        ru: "Хониара",
      },
    },
    id: 160,
    name: {
      translations: {
        en: "Solomon Islands",
        ru: "Соломоновы Острова",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Mogadishu",
        ru: "Могадишо",
      },
    },
    id: 161,
    name: {
      translations: {
        en: "Somalia",
        ru: "Сомали",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Pretoria",
        ru: "Претория",
      },
    },
    id: 162,
    name: {
      translations: {
        en: "South Africa",
        ru: "Южно-Африканская Республика",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Seoul",
        ru: "Сеул",
      },
    },
    id: 163,
    name: {
      translations: {
        en: "South Korea",
        ru: "Южная Корея",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Juba",
        ru: "Джуба",
      },
    },
    id: 164,
    name: {
      translations: {
        en: "South Sudan",
        ru: "Южный Судан",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Madrid",
        ru: "Мадрид",
      },
    },
    id: 165,
    name: {
      translations: {
        en: "Spain",
        ru: "Испания",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Khartum",
        ru: "Хартум",
      },
    },
    id: 166,
    name: {
      translations: {
        en: "Sudan",
        ru: "Судан",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Paramaribo",
        ru: "Парамарибо",
      },
    },
    id: 167,
    name: {
      translations: {
        en: "Suriname",
        ru: "Суринам",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Sri Jayawardenepura Kotte",
        ru: "Шри-Джаяварденепура-Котте",
      },
    },
    id: 168,
    name: {
      translations: {
        en: "Sri Lanka",
        ru: "Шри-Ланка",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Stockholm",
        ru: "Стокгольм",
      },
    },
    id: 169,
    name: {
      translations: {
        en: "Sweden",
        ru: "Швеция",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Bern",
        ru: "Берн",
      },
    },
    id: 170,
    name: {
      translations: {
        en: "Switzerland",
        ru: "Швейцария",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Damascus",
        ru: "Дамаск",
      },
    },
    id: 171,
    name: {
      translations: {
        en: "Syria",
        ru: "Сирия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Dushanbe",
        ru: "Душанбе",
      },
    },
    id: 172,
    name: {
      translations: {
        en: "Tajikistan",
        ru: "Таджикистан",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Dodoma",
        ru: "Додома",
      },
    },
    id: 173,
    name: {
      translations: {
        en: "Tanzania",
        ru: "Танзания",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Bangkok",
        ru: "Бангкок",
      },
    },
    id: 174,
    name: {
      translations: {
        en: "Thailand",
        ru: "Таиланд",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Lome",
        ru: "Ломе",
      },
    },
    id: 175,
    name: {
      translations: {
        en: "Togo",
        ru: "Того",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Nuku'alofa",
        ru: "Нукуалофа",
      },
    },
    id: 176,
    name: {
      translations: {
        en: "Tonga",
        ru: "Тонга",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Port of Spain",
        ru: "Порт-оф-Спейн",
      },
    },
    id: 177,
    name: {
      translations: {
        en: "Trinidad and Tobago",
        ru: "Тринидад и Тобаго",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Tunis",
        ru: "Тунис",
      },
    },
    id: 178,
    name: {
      translations: {
        en: "Tunisia",
        ru: "Тунис",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Ankara",
        ru: "Анкара",
      },
    },
    id: 179,
    name: {
      translations: {
        en: "Turkey",
        ru: "Турция",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Ashgabat",
        ru: "Ашхабад",
      },
    },
    id: 180,
    name: {
      translations: {
        en: "Turkmenistan",
        ru: "Туркмения",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Funafuti",
        ru: "Фунафути",
      },
    },
    id: 181,
    name: {
      translations: {
        en: "Tuvalu",
        ru: "Тувалу",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Kampala",
        ru: "Кампала",
      },
    },
    id: 182,
    name: {
      translations: {
        en: "Uganda",
        ru: "Уганда",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "Kiev",
        ru: "Киев",
      },
    },
    id: 183,
    name: {
      translations: {
        en: "Ukraine",
        ru: "Украина",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Abu Dhabi",
        ru: "Абу-Даби",
      },
    },
    id: 184,
    name: {
      translations: {
        en: "United Arab Emirates",
        ru: "Объединённые Арабские Эмираты",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Europe",
        ru: "Европа",
      },
    },
    capital: {
      translations: {
        en: "London",
        ru: "Лондон",
      },
    },
    id: 185,
    name: {
      translations: {
        en: "United Kingdom",
        ru: "Великобритания",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Washington",
        ru: "Вашингтон",
      },
    },
    id: 186,
    name: {
      translations: {
        en: "United States",
        ru: "Соединённые Штаты Америки",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Montevideo",
        ru: "Монтевидео",
      },
    },
    id: 187,
    name: {
      translations: {
        en: "Uruguay",
        ru: "Уругвай",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Tashkent",
        ru: "Ташкент",
      },
    },
    id: 188,
    name: {
      translations: {
        en: "Uzbekistan",
        ru: "Узбекистан",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Oceania",
        ru: "Океания",
      },
    },
    capital: {
      translations: {
        en: "Port Vila",
        ru: "Порт-Вила",
      },
    },
    id: 189,
    name: {
      translations: {
        en: "Vanuatu",
        ru: "Вануату",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Americas",
        ru: "Америка",
      },
    },
    capital: {
      translations: {
        en: "Caracas",
        ru: "Каракас",
      },
    },
    id: 190,
    name: {
      translations: {
        en: "Venezuela",
        ru: "Венесуэла",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Hanoi",
        ru: "Ханой",
      },
    },
    id: 191,
    name: {
      translations: {
        en: "Vietnam",
        ru: "Вьетнам",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Asia",
        ru: "Азия",
      },
    },
    capital: {
      translations: {
        en: "Sanaa",
        ru: "Сана",
      },
    },
    id: 192,
    name: {
      translations: {
        en: "Yemen",
        ru: "Йемен",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Lusaka",
        ru: "Лусака",
      },
    },
    id: 193,
    name: {
      translations: {
        en: "Zambia",
        ru: "Замбия",
      },
    },
  },
  {
    region: {
      translations: {
        en: "Africa",
        ru: "Африка",
      },
    },
    capital: {
      translations: {
        en: "Harare",
        ru: "Хараре",
      },
    },
    id: 194,
    name: {
      translations: {
        en: "Zimbabwe",
        ru: "Зимбабве",
      },
    },
  },
];

export default data;
