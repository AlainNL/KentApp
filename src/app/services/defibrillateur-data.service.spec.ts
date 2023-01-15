import { TestBed } from '@angular/core/testing';

import { DefibrillateurDataService } from './defibrillateur-data.service';

describe('DefibrillateurDataService', () => {
  let service: DefibrillateurDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefibrillateurDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
