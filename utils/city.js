const getAll = () => [
  { name: 'adana', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'adıyaman', variants: ['adiyaman'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'afyon', variants: ['afyonkarahisar'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'ağrı', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'amasya', variants: [], dates: ['2008-01-01..2019-01-01'] },
  {
    name: 'ankara',
    variants: [],
    dates: [
      '2008-01-01..2014-06-01',
      '2014-06-02..2016-06-01',
      '2016-06-02..2018-01-01',
      '2018-01-02..2019-01-01',
    ],
  },
  { name: 'antalya', variants: ['alanya'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'artvin', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'aydın', variants: ['aydin', 'kuşadası', 'kusadasi'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'balıkesir', variants: ['balikesir'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'bilecik', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'bingöl', variants: ['bingol'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'bitlis', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'bolu', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'burdur', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'bursa', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'çanakkale', variants: ['canakkale'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'çankırı', variants: ['cankiri'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'çorum', variants: ['corum'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'denizli', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'diyarbakır', variants: ['diyarbakir'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'edirne', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'elazığ', variants: ['elazig'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'erzincan', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'erzurum', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'eskişehir', variants: ['eskisehir'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'gaziantep', variants: ['antep'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'giresun', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'gümüşhane', variants: ['gumushane'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'hakkari', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'hatay', variants: ['antakya'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'ısparta', variants: ['isparta'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'mersin', variants: ['içel'], dates: ['2008-01-01..2019-01-01'] },
  {
    name: 'istanbul',
    variants: [],
    dates: [
      '2008-01-01..2011-01-01',
      '2011-01-02..2012-01-01',
      '2012-01-02..2013-01-01',
      '2013-01-02..2013-06-01',
      '2013-06-02..2014-01-01',
      '2014-01-02..2014-06-01',
      '2014-06-02..2014-09-01',
      '2014-09-02..2015-01-01',
      '2015-01-02..2015-06-01',
      '2015-06-02..2016-01-01',
      '2016-01-02..2016-06-01',
      '2016-06-02..2017-01-01',
      '2017-01-02..2017-06-01',
      '2017-06-02..2018-01-01',
      '2018-01-02..2019-01-01',
    ],
  },
  { name: 'izmir', variants: [], dates: ['2008-01-01..2016-06-01', '2016-06-02..2019-01-01'] },
  { name: 'kars', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'kastamonu', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'kayseri', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'kırklareli', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'kırşehir', variants: ['kirsehir'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'kocaeli', variants: ['izmit', 'gebze'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'konya', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'kütahya', variants: ['kutahya'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'malatya', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'manisa', variants: [], dates: ['2008-01-01..2019-01-01'] },
  {
    name: 'kahramanmaraş',
    variants: ['kahramanmaras', 'maraş', 'maras'],
    dates: ['2008-01-01..2019-01-01'],
  },
  { name: 'mardin', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'muğla', variants: ['mugla', 'bodrum', 'marmaris'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'muş', variants: ['mus'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'nevşehir', variants: ['nevsehir'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'niğde', variants: ['nigde'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'ordu', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'rize', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'sakarya', variants: ['adapazarı', 'adapazari'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'samsun', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'siirt', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'sinop', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'sivas', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'tekirdağ', variants: ['tekirdag', 'çorlu'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'tokat', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'trabzon', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'tunceli', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'şanlıurfa', variants: ['sanliurfa', 'urfa'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'uşak', variants: ['usak'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'van,turkey', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'yozgat', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'zonguldak', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'aksaray', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'bayburt', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'karaman', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'kırıkkale', variants: ['kirikkale'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'batman', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'şırnak', variants: ['sirnak'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'bartın', variants: ['bartin'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'ardahan', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'ığdır', variants: ['igdir'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'yalova', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'karabük', variants: ['karabuk'], dates: ['2008-01-01..2019-01-01'] },
  { name: 'kilis', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'osmaniye', variants: [], dates: ['2008-01-01..2019-01-01'] },
  { name: 'düzce', variants: ['duzce'], dates: ['2008-01-01..2019-01-01'] },
];

const filter = name => getAll().filter(c => c.name === name || c.variants.includes(name));

const createSearchCombinations = city => {
  const variants = [city.name, ...city.variants];

  return variants.reduce(
    (prev, cur) => [...prev, ...city.dates.map(d => `location:${cur} created:${d}`)],
    [],
  );
};

const toCapitalCase = name => {
  if (name === 'van,turkey') {
    return 'Van';
  }

  const [head, ...tail] = name.split('');

  return `${head.toLocaleUpperCase('tr-TR')}${tail.join('')}`;
};

module.exports = {
  filter,
  getAll,
  createSearchCombinations,
  toCapitalCase,
};
