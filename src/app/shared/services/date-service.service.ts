import { Injectable } from '@angular/core';
import { MONTHSLIST } from '../configs/months.cfg';
import { DAYS } from '../configs/days.cfg';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {
  constructor() {}

  isYearLeap(year: number): boolean {
    if (year % 4 > 0) {
      return false;
    }

    if (year % 100 > 0) {
      return true;
    }

    if (year % 400 === 0) {
      return true;
    }

    return false;
  }

  getFirstDayForYear(year: number): number {
    return Math.floor(
      (year + (year - 1 / 4) / 4 - (year - 1) / 100 + (year - 1) / 400) % 7
    );
  }

  getFirstDayForMonth(monthIndex: number, year: number): number {
    let firstDay = this.getFirstDayForYear(year);
    let firstDayMonth: number = firstDay;
    let dayInWeeks: number = 7;
    let month: number = 1;

    while (month < monthIndex) {
      let { leapYearPoint, normalYearPoint } = MONTHSLIST[month - 1];
      let point: number = this.isYearLeap(year)
        ? leapYearPoint
        : normalYearPoint;

      // Get day for next month
      firstDayMonth += point;

      // if firstDayMonth is greater than 7 set start to 0
      if (firstDayMonth >= dayInWeeks) {
        firstDayMonth -= dayInWeeks;
      }
      month++;
    }
    return firstDayMonth;
  }

  getDay(date: number, month: number, year: number): string {
    const startDate: number = 1;
    const weeks: number = 7;
    let dayOfMonth: number = this.getFirstDayForMonth(month, year);
    if (date === 1) {
      return DAYS[dayOfMonth];
    }

    let summaryDate: number = (date - startDate) % weeks;
    let dayIndex = summaryDate + dayOfMonth;
    if (dayIndex >= weeks) {
      dayIndex -= weeks;
    }

    return DAYS[dayIndex];

    // //Calulate by date + first day of month + first year of year
    // let dayIndex =
    //   date +
    //   this.getFirstDayForMonth(month, year) +
    //   this.getFirstDayForYear(year);

    // if (!DAYS[dayIndex]) {
    //   return false;
    // }

    // return DAYS[dayIndex];
    // const days = [
    //   'Sunday',
    //   'Monday',
    //   'Tuesday',
    //   'Wednesday',
    //   'Thursday',
    //   'Friday',
    //   'Saturday'
    // ];

    // let indexDate: number = new Date(date.toString()).getDay();
    // return new Date(date.toString()).toLocaleDateString('en-us', {
    //   weekday: 'long'
    // });
  }
}
