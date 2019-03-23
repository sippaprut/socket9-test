export interface IMonthsList {
  name: string;
  leapYearPoint: number;
  normalYearPoint: number;
}

export const MONTHSLIST: IMonthsList[] = [
  {
    name: 'January',
    leapYearPoint: 3,
    normalYearPoint: 3
  },
  {
    name: 'February',
    leapYearPoint: 1,
    normalYearPoint: 0
  },
  {
    name: 'March',
    leapYearPoint: 3,
    normalYearPoint: 3
  },
  {
    name: 'April',
    leapYearPoint: 2,
    normalYearPoint: 2
  },
  {
    name: 'May',
    leapYearPoint: 3,
    normalYearPoint: 3
  },
  {
    name: 'June',
    leapYearPoint: 2,
    normalYearPoint: 2
  },
  {
    name: 'July',
    leapYearPoint: 3,
    normalYearPoint: 3
  },
  {
    name: 'August',
    leapYearPoint: 3,
    normalYearPoint: 3
  },
  {
    name: 'September',
    leapYearPoint: 2,
    normalYearPoint: 2
  },
  {
    name: 'October',
    leapYearPoint: 3,
    normalYearPoint: 3
  },
  {
    name: 'November',
    leapYearPoint: 2,
    normalYearPoint: 2
  },
  {
    name: 'December',
    leapYearPoint: 2,
    normalYearPoint: 2
  }
];
