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

  it('should be equal Monday', () => {
    let result = service.getDay('Jan 1, 1900');
    expect(result).toBe('Monday');
  });
});
