/* eslint-disable no-unused-vars */
export const outstanding = [
  {
    Quarter: 'Q1 2016',
    'Outstanding high priority suggestions': 13,
    'Outstanding mid priority suggestions': 17,
    'Outstanding low priority suggestions': 14,
    'Total outstanding (incomplete) suggestions': 44,
    'Complete high priority suggestions': 19,
    'Complete mid priority suggestions': 17,
    'Complete low priority suggestions': 13,
    'Total complete suggestions': 49,
    'Dismissed high priority suggestions': 10,
    'Dismissed mid priority suggestions': 16,
    'Dimissed low priority suggestions': 15,
    'Dismissed complete suggestions': 41,
    '% Calls on Target': 78,
    '% Emails on Target': 87,
    '% Visits on Target': 71,
  },
  {
    Quarter: 'Q2 2016',
    'Outstanding high priority suggestions': 12,
    'Outstanding mid priority suggestions': 12,
    'Outstanding low priority suggestions': 20,
    'Total outstanding (incomplete) suggestions': 44,
    'Complete high priority suggestions': 14,
    'Complete mid priority suggestions': 10,
    'Complete low priority suggestions': 16,
    'Total complete suggestions': 40,
    'Dismissed high priority suggestions': 18,
    'Dismissed mid priority suggestions': 18,
    'Dimissed low priority suggestions': 14,
    'Dismissed complete suggestions': 50,
    '% Calls on Target': 86,
    '% Emails on Target': 89,
    '% Visits on Target': 51,
  },
  {
    Quarter: 'Q3 2016',
    'Outstanding high priority suggestions': 20,
    'Outstanding mid priority suggestions': 18,
    'Outstanding low priority suggestions': 15,
    'Total outstanding (incomplete) suggestions': 53,
    'Complete high priority suggestions': 13,
    'Complete mid priority suggestions': 19,
    'Complete low priority suggestions': 15,
    'Total complete suggestions': 47,
    'Dismissed high priority suggestions': 14,
    'Dismissed mid priority suggestions': 16,
    'Dimissed low priority suggestions': 19,
    'Dismissed complete suggestions': 49,
    '% Calls on Target': 74,
    '% Emails on Target': 54,
    '% Visits on Target': 55,
  },
  {
    Quarter: 'Q4 2016',
    'Outstanding high priority suggestions': 17,
    'Outstanding mid priority suggestions': 15,
    'Outstanding low priority suggestions': 14,
    'Total outstanding (incomplete) suggestions': 46,
    'Complete high priority suggestions': 18,
    'Complete mid priority suggestions': 16,
    'Complete low priority suggestions': 17,
    'Total complete suggestions': 51,
    'Dismissed high priority suggestions': 16,
    'Dismissed mid priority suggestions': 18,
    'Dimissed low priority suggestions': 11,
    'Dismissed complete suggestions': 45,
    '% Calls on Target': 69,
    '% Emails on Target': 63,
    '% Visits on Target': 56,
  },
  {
    Quarter: 'Q1 2017',
    'Outstanding high priority suggestions': 12,
    'Outstanding mid priority suggestions': 20,
    'Outstanding low priority suggestions': 20,
    'Total outstanding (incomplete) suggestions': 52,
    'Complete high priority suggestions': 10,
    'Complete mid priority suggestions': 18,
    'Complete low priority suggestions': 15,
    'Total complete suggestions': 43,
    'Dismissed high priority suggestions': 12,
    'Dismissed mid priority suggestions': 12,
    'Dimissed low priority suggestions': 15,
    'Dismissed complete suggestions': 39,
    '% Calls on Target': 73,
    '% Emails on Target': 53,
    '% Visits on Target': 81,
  },
  {
    Quarter: 'Q2 2017',
    'Outstanding high priority suggestions': 20,
    'Outstanding mid priority suggestions': 11,
    'Outstanding low priority suggestions': 11,
    'Total outstanding (incomplete) suggestions': 42,
    'Complete high priority suggestions': 19,
    'Complete mid priority suggestions': 15,
    'Complete low priority suggestions': 16,
    'Total complete suggestions': 50,
    'Dismissed high priority suggestions': 18,
    'Dismissed mid priority suggestions': 18,
    'Dimissed low priority suggestions': 19,
    'Dismissed complete suggestions': 55,
    '% Calls on Target': 73,
    '% Emails on Target': 62,
    '% Visits on Target': 85,
  },
  {
    Quarter: 'Q3 2017',
    'Outstanding high priority suggestions': 14,
    'Outstanding mid priority suggestions': 13,
    'Outstanding low priority suggestions': 16,
    'Total outstanding (incomplete) suggestions': 43,
    'Complete high priority suggestions': 13,
    'Complete mid priority suggestions': 12,
    'Complete low priority suggestions': 10,
    'Total complete suggestions': 35,
    'Dismissed high priority suggestions': 15,
    'Dismissed mid priority suggestions': 17,
    'Dimissed low priority suggestions': 19,
    'Dismissed complete suggestions': 51,
    '% Calls on Target': 74,
    '% Emails on Target': 69,
    '% Visits on Target': 84,
  },
  {
    Quarter: 'Q4 2017',
    'Outstanding high priority suggestions': 18,
    'Outstanding mid priority suggestions': 16,
    'Outstanding low priority suggestions': 17,
    'Total outstanding (incomplete) suggestions': 51,
    'Complete high priority suggestions': 10,
    'Complete mid priority suggestions': 14,
    'Complete low priority suggestions': 13,
    'Total complete suggestions': 37,
    'Dismissed high priority suggestions': 14,
    'Dismissed mid priority suggestions': 16,
    'Dimissed low priority suggestions': 14,
    'Dismissed complete suggestions': 44,
    '% Calls on Target': 61,
    '% Emails on Target': 63,
    '% Visits on Target': 80,
  },
  {
    Quarter: 'Q1 2018',
    'Outstanding high priority suggestions': 14,
    'Outstanding mid priority suggestions': 12,
    'Outstanding low priority suggestions': 13,
    'Total outstanding (incomplete) suggestions': 39,
    'Complete high priority suggestions': 12,
    'Complete mid priority suggestions': 18,
    'Complete low priority suggestions': 17,
    'Total complete suggestions': 47,
    'Dismissed high priority suggestions': 13,
    'Dismissed mid priority suggestions': 16,
    'Dimissed low priority suggestions': 17,
    'Dismissed complete suggestions': 46,
    '% Calls on Target': 54,
    '% Emails on Target': 79,
    '% Visits on Target': 57,
  },
  {
    Quarter: 'Q2 2018',
    'Outstanding high priority suggestions': 11,
    'Outstanding mid priority suggestions': 14,
    'Outstanding low priority suggestions': 10,
    'Total outstanding (incomplete) suggestions': 35,
    'Complete high priority suggestions': 11,
    'Complete mid priority suggestions': 14,
    'Complete low priority suggestions': 10,
    'Total complete suggestions': 35,
    'Dismissed high priority suggestions': 11,
    'Dismissed mid priority suggestions': 14,
    'Dimissed low priority suggestions': 10,
    'Dismissed complete suggestions': 35,
    '% Calls on Target': 90,
    '% Emails on Target': 58,
    '% Visits on Target': 88,
  },
];
export const filteredEmail = outstanding.map((e) => ({ x: e.Quarter, y: e['% Calls on Target'] }));
export const filteredCalls = outstanding.map((e) => ({ x: e.Quarter, y: e['% Emails on Target'] }));
export const filteredVisits = outstanding.map((e) => ({ x: e.Quarter, y: e['% Visits on Target'] }));
// export const pHigh = outstanding
//   .filter((order) => order[['Outstanding high priority suggestions']])
//   .map((order) => ({ x: order.Quarter, y: order['Outstanding high priority suggestions'] }));
// export const pMid = outstanding
//   .filter((order) => order[['Outstanding mid priority suggestions']])
//   .map((order) => ({ x: order.Quarter, y: order['Outstanding mid priority suggestions'] }));
export const pE = outstanding.map((order) => ([{ x: 'Email', y: order['% Emails on Target'] }, { x: 'Calls', y: order['% Calls on Target'] }, { x: 'Visits', y: order['% Visits on Target'] }]));
export const pC = outstanding.map((order) => ({ x: 'Calls', y: order['% Calls on Target'] }));
export const pV = outstanding.map((order) => ({ x: 'Visits', y: order['% Visits on Target'] }));

export const pLow = outstanding
  .filter((order) => order['Outstanding low priority suggestions'])
  .map((order) => ({ x: order.Quarter, y: order['Outstanding low priority suggestions'] }));
console.log(pE, 'pl');
export const pMid = outstanding
  .filter((order) => order['Outstanding low priority suggestions'])
  .map((order) => ({ x: order.Quarter, y: order['Outstanding mid priority suggestions'] }));
console.log(pMid, 'pll');
let totalLpEmail = 0;
let totalHpEmail = 0;
let totalMpEmail = 0;
let totalLpCalls = 0;
let totalHpCalls = 0;
let totalMpCalls = 0;
let totalLpVisits = 0;
let totalHpVisits = 0;
let totalMpVisits = 0;
const low = outstanding.map((order) => {
  const percentEmail = Math.floor((order['% Emails on Target'] / 100) * order['Outstanding mid priority suggestions']);
  const percentCalls = Math.floor((order['% Calls on Target'] / 100) * order['Outstanding mid priority suggestions']);
  const percentVisits = Math.floor((order['% Visits on Target'] / 100) * order['Outstanding mid priority suggestions']);
  totalLpCalls += percentEmail;
  totalLpEmail += percentCalls;
  totalLpVisits += percentCalls;

  const percentMEmail = Math.floor((order['% Emails on Target'] / 100) * order['Outstanding mid priority suggestions']);
  const percentMCalls = Math.floor((order['% Calls on Target'] / 100) * order['Outstanding mid priority suggestions']);
  const percentMVisits = Math.floor((order['% Visits on Target'] / 100) * order['Outstanding mid priority suggestions']);
  totalMpCalls += percentMEmail;
  totalMpEmail += percentMCalls;
  totalMpVisits += percentMVisits;

  const percentHEmail = Math.floor((order['% Emails on Target'] / 100) * order['Outstanding high priority suggestions']);
  const percentHCalls = Math.floor((order['% Calls on Target'] / 100) * order['Outstanding high priority suggestions']);
  const percentHVisits = Math.floor((order['% Visits on Target'] / 100) * order['Outstanding high priority suggestions']);
  totalHpCalls += percentHEmail;
  totalHpEmail += percentHCalls;
  totalHpVisits += percentHVisits;
  return [{ x: 'Emails', y: percentEmail }, { x: 'Calls', y: percentCalls }, { x: 'Visits', y: percentVisits }];
});
export const lowArr = [{ x: 'Emails', y: totalLpEmail },
  { x: 'Calls', y: totalLpCalls },
  { x: 'Visits', y: totalLpVisits }];

export const midArr = [
  { x: 'Emails', y: totalMpEmail },
  { x: 'Calls', y: totalMpCalls },
  { x: 'Visits', y: totalMpVisits },
];
export const highArr = [{ x: 'Emails', y: totalHpEmail },
  { x: 'Calls', y: totalHpCalls },
  { x: 'Visits', y: totalHpVisits }];

console.log(highArr, lowArr, midArr, 'e');
// export const pLow = outstanding.filter((e) => ({ x: e.Quarter,
// y: e['Outstanding low priority suggestions'] }));
// const items = outstanding
//   .filter((order) => order[['Outstanding high priority suggestions']])
//   .map((order) => ({ x: order.Quarter, y: order['Outstanding high priority suggestions'] }));
// console.log(items, 'it');
