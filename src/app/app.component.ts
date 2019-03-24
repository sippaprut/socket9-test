import { Component, OnInit } from '@angular/core';
import { DateServiceService } from './shared/services/date-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IMonthsList, MONTHSLIST } from './shared/configs/months.cfg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public formDate: FormGroup;

  public readonly MONTHLISTS: IMonthsList[] = MONTHSLIST;

  public years: Array<number>;

  public dayResult: string;

  constructor(private dateService: DateServiceService) {}

  ngOnInit() {
    this.formDate = new FormGroup({
      date: new FormControl('', [Validators.required]),
      month: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required])
    });

    this.years = this.getYearList();
  }

  getYearList(): Array<number> {
    let years = [];
    let startYear = 2019;
    while (startYear >= 1900) {
      years.push(startYear);
      startYear--;
    }
    return years;
  }

  caculate() {
    if (!this.formDate.valid) {
      return;
    }

    this.dayResult = this.dateService.getDay(
      Number(this.formDate.value.date),
      Number(this.formDate.value.month),
      Number(this.formDate.value.year)
    );
  }
}
