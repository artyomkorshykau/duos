const currentYear = new Date().getFullYear()
const pastYears = 70 // Сколько лет в прошлом включить
const futureYears = 10 // Сколько лет в будущем включить

const startYear = currentYear - pastYears
const endYear = currentYear + futureYears

export const years = []

for( let year = startYear; year <= endYear; year++ ) {
  
  years.push( String( year ) )
  
}

export const months = [
  
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
  
]