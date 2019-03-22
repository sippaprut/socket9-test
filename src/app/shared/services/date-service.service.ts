import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {
  constructor() {}

  getDay(date: String): String {
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
    return new Date(date.toString()).toLocaleDateString('en-us', {
      weekday: 'long'
    });
  }
}
