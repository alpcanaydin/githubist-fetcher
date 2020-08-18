const { format, eachQuarterOfInterval } = require('date-fns');

const now = new Date();
const START_DATE = new Date(2008, 1, 1);
const END_DATE = new Date(now.getFullYear() + 1, 1, 1);

const getAll = () => [
  { name: 'adana', variants: [], chunk: false },
  { name: 'adıyaman', variants: [], chunk: false },
  { name: 'afyon', variants: ['afyonkarahisar'], chunk: false },
  { name: 'ağrı', variants: [], chunk: false },
  { name: 'amasya', variants: [], chunk: false },
  { name: 'ankara', variants: [], chunk: true },
  { name: 'antalya', variants: ['alanya', 'kemer', 'kaş'], chunk: false },
  { name: 'artvin', variants: [], chunk: false },
  { name: 'aydın', variants: ['kuşadası', 'didim'], chunk: false },
  { name: 'balıkesir', variants: ['ayvalık'], chunk: false },
  { name: 'bilecik', variants: [], chunk: false },
  { name: 'bingöl', variants: [], chunk: false },
  { name: 'bitlis', variants: [], chunk: false },
  { name: 'bolu', variants: [], chunk: false },
  { name: 'burdur', variants: [], chunk: false },
  { name: 'bursa', variants: [], chunk: false },
  { name: 'çanakkale', variants: [''], chunk: false },
  { name: 'çankırı', variants: [], chunk: false },
  { name: 'çorum', variants: [], chunk: false },
  { name: 'denizli', variants: [], chunk: false },
  { name: 'diyarbakır', variants: [], chunk: false },
  { name: 'edirne', variants: [], chunk: false },
  { name: 'elazığ', variants: [], chunk: false },
  { name: 'erzincan', variants: [], chunk: false },
  { name: 'erzurum', variants: [], chunk: false },
  { name: 'eskişehir', variants: [], chunk: false },
  { name: 'gaziantep', variants: ['antep'], chunk: false },
  { name: 'giresun', variants: [], chunk: false },
  { name: 'gümüşhane', variants: [], chunk: false },
  { name: 'hakkari', variants: [], chunk: false },
  { name: 'hatay', variants: ['antakya', 'iskenderun'], chunk: false },
  { name: 'ısparta', variants: [], chunk: false },
  { name: 'mersin', variants: ['içel', 'tarsus'], chunk: false },
  { name: 'istanbul', variants: [], chunk: true },
  { name: 'izmir', variants: [], chunk: true },
  { name: 'kars', variants: [], chunk: false },
  { name: 'kastamonu', variants: [], chunk: false },
  { name: 'kayseri', variants: [], chunk: false },
  { name: 'kırklareli', variants: [], chunk: false },
  { name: 'kırşehir', variants: ['kirsehir'], chunk: false },
  { name: 'kocaeli', variants: ['izmit', 'gebze'], chunk: false },
  { name: 'konya', variants: [], chunk: false },
  { name: 'kütahya', variants: ['kutahya'], chunk: false },
  { name: 'malatya', variants: [], chunk: false },
  { name: 'manisa', variants: [], chunk: false },
  { name: 'kahramanmaraş', variants: ['maraş'], chunk: false },
  { name: 'mardin', variants: [], chunk: false },
  { name: 'muğla', variants: ['bodrum', 'marmaris', 'datça', 'fethiye'], chunk: false },
  { name: 'muş', variants: [], chunk: false },
  { name: 'nevşehir', variants: ['kapadokya', 'ürgüp'], chunk: false },
  { name: 'niğde', variants: [], chunk: false },
  { name: 'ordu', variants: [], chunk: false },
  { name: 'rize', variants: [], chunk: false },
  { name: 'sakarya', variants: ['adapazarı'], chunk: false },
  { name: 'samsun', variants: [], chunk: false },
  { name: 'siirt', variants: [], chunk: false },
  { name: 'sinop', variants: [], chunk: false },
  { name: 'sivas', variants: [], chunk: false },
  { name: 'tekirdağ', variants: ['çorlu'], chunk: false },
  { name: 'tokat', variants: [], chunk: false },
  { name: 'trabzon', variants: [], chunk: false },
  { name: 'tunceli', variants: [], chunk: false },
  { name: 'şanlıurfa', variants: ['urfa'], chunk: false },
  { name: 'uşak', variants: [], chunk: false },
  { name: 'van,turkey', variants: [], chunk: false },
  { name: 'yozgat', variants: [], chunk: false },
  { name: 'zonguldak', variants: [], chunk: false },
  { name: 'aksaray', variants: [], chunk: false },
  { name: 'bayburt', variants: [], chunk: false },
  { name: 'karaman', variants: [], chunk: false },
  { name: 'kırıkkale', variants: [], chunk: false },
  { name: 'batman', variants: [], chunk: false },
  { name: 'şırnak', variants: [], chunk: false },
  { name: 'bartın', variants: ['amasra'], chunk: false },
  { name: 'ardahan', variants: [], chunk: false },
  { name: 'ığdır', variants: [], chunk: false },
  { name: 'yalova', variants: [], chunk: false },
  { name: 'karabük', variants: [], chunk: false },
  { name: 'kilis', variants: [], chunk: false },
  { name: 'osmaniye', variants: [], chunk: false },
  { name: 'düzce', variants: [], chunk: false },
];

const filter = name => getAll().filter(c => c.name === name || c.variants.includes(name));

const formatDate = date => format(date, 'yyyy.MM.dd');

const dateIntervalToRange = interval => {
  const dates = [];

  // eslint-disable-next-line no-plusplus
  for (let i = -1; i < interval.length; i++) {
    if (i === interval.length - 2) {
      break;
    }

    dates.push(`${formatDate(interval[i + 1])}..${formatDate(interval[i + 2])}`);
  }

  return dates;
};

const convertToEnglishLetters = name =>
  name
    .replace(/ğ/gim, 'g')
    .replace(/ü/gim, 'u')
    .replace(/ş/gim, 's')
    .replace(/ı/gim, 'i')
    .replace(/ö/gim, 'o')
    .replace(/ç/gim, 'c');

const createVariants = city =>
  [city.name, ...city.variants].map(n => ({ name: n, chunk: city.chunk }));

const createTurkishLetterCombinations = (prev, cur) => {
  const names = [cur.name];
  const englishVersion = convertToEnglishLetters(cur.name);

  if (cur.name !== englishVersion) {
    names.push(englishVersion);
  }

  return [...prev, ...names.map(n => ({ name: n, chunk: cur.chunk }))];
};

const createDates = (prev, cur) => {
  if (!cur.chunk) {
    return [
      ...prev,
      { name: cur.name, dates: [`${formatDate(START_DATE)}..${formatDate(END_DATE)}`] },
    ];
  }

  const interval = eachQuarterOfInterval({
    start: START_DATE,
    end: END_DATE,
  });

  return [...prev, { name: cur.name, dates: dateIntervalToRange(interval) }];
};

const createSearchTerms = (prev, cur) => [
  ...prev,
  ...cur.dates.map(d => `location:${cur.name} created:${d}`),
];

const createSearchCombinations = city =>
  createVariants(city)
    .reduce(createTurkishLetterCombinations, [])
    .reduce(createDates, [])
    .reduce(createSearchTerms, []);

module.exports = {
  filter,
  getAll,
  createSearchCombinations,
  createVariants,
  createTurkishLetterCombinations,
  createDates,
  createSearchTerms,
};
