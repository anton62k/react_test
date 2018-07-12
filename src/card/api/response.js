const testDate = {
  WEEK: ['02.02', '03.02', '04.02', '05.02', '06.02', '07.02'],
  MONTH: ['01.17', '02.17', '03.17', '04.17', '05.17', '06.17'],
  QUARTER: ['01.17', '04.17', '07.17', '10.17', '01.18', '04.18'],
  YEAR: ['11', '12', '13', '14', '15', '16'],
  MAX: ['03', '06', '09', '12', '15', '18'],
};

const baseValue = {
  YIELD: 30,
  PRICE: 125,
  SPREAD: 50,
};

const rangeValue = {
  YIELD: 5,
  PRICE: 25,
  SPREAD: 10,
};

const makeResponse = (dateFilter, typeFilter) => ({
  texts: {
    title: 'NII CAPITAL 7.625 21',
    text1: 'US67021BAE92',
    text2: 'NII CAPITAL CORP, Telecommunication, NR, till 01.04.2016',
  },
  data: testDate[dateFilter].map(item => ({
    name: item,
    value: baseValue[typeFilter] + rangeValue[typeFilter] * Math.random().toFixed(1),
  })),
});

export default makeResponse;
