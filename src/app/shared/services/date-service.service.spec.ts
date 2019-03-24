import { TestBed } from '@angular/core/testing';

import { DateServiceService } from './date-service.service';

describe('DateServiceService', () => {
  let service: DateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(DateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isYearLeap()', () => {
    it(`should be false if year mod 4 isn't equal 0`, () => {
      expect(service.isYearLeap(1997)).toBeFalsy();
    });

    it(`should be true if year mod 100 isn't equal 0`, () => {
      expect(service.isYearLeap(2012)).toBeTruthy();
    });

    it(`should be true if year mod 400 is equal 0`, () => {
      expect(service.isYearLeap(2000)).toBeTruthy();
    });

    it(`should be false if year mod 400 isn't equal 0`, () => {
      expect(service.isYearLeap(1900)).toBeFalsy();
    });

    it(`should be false if year  equal 2011`, () => {
      expect(service.isYearLeap(2011)).toBeFalsy();
    });
  });

  describe('getFirstDayForYear()', () => {
    it(`should be 1 if year 1900`, () => {
      expect(service.getFirstDayForYear(1900)).toEqual(1);
    });
    it(`should be 2 if year 1901`, () => {
      expect(service.getFirstDayForYear(1901)).toEqual(2);
    });

    it(`should be 6 if year = 2011`, () => {
      expect(service.getFirstDayForYear(2011)).toEqual(6);
    });
  });

  describe('getFirstDayOfMonth()', () => {
    describe('When normal Year', () => {
      it(`should be 6 if year = 2011 and month = january`, () => {
        expect(service.getFirstDayOfMonth(1, 2011)).toEqual(6);
      });

      it(`should be 2 if year = 2011 and month = Feb`, () => {
        expect(service.getFirstDayOfMonth(2, 2011)).toEqual(2);
      });

      it(`should be 2 if year = 2011 and month = March`, () => {
        expect(service.getFirstDayOfMonth(3, 2011)).toEqual(2);
      });

      it(`should be 6 if year = 2011 and month = october`, () => {
        expect(service.getFirstDayOfMonth(10, 2011)).toEqual(6);
      });
    });

    describe('When Leap Year', () => {
      it(`should be 6 if year = 2012 and month = january`, () => {
        expect(service.getFirstDayOfMonth(1, 2012)).toEqual(0);
      });
      it(`should be 6 if year = 2012 and month = Feb`, () => {
        expect(service.getFirstDayOfMonth(2, 2012)).toEqual(3);
      });
    });
  });

  describe('getDay()', () => {
    it(`should be Thursday if date equal 13 october 2011`, () => {
      expect(service.getDay(13, 10, 2011)).toEqual('Thursday');
    });

    it(`should be Sunday if date equal 24 March 2019`, () => {
      expect(service.getDay(24, 3, 2019)).toEqual('Sunday');
    });

    it(`should be Wednesday if date equal 22 November 2017`, () => {
      expect(service.getDay(22, 11, 2017)).toEqual('Wednesday');
    });

    it(`should be Friday if date equal 29 December 2017`, () => {
      expect(service.getDay(29, 12, 2017)).toEqual('Friday');
    });
  });
});
