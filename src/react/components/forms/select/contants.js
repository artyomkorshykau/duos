const currentYear = new Date().getFullYear();

const difference = 102 + currentYear % 3;

const startYear = currentYear - difference;

export const years = [];

for ( let year = startYear; year <= currentYear; year++ ) {

  years.push(String(year));

}

export const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];