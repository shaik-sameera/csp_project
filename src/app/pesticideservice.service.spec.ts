import { TestBed } from '@angular/core/testing';

import { PesticideserviceService } from './pesticideservice.service';

describe('PesticideserviceService', () => {
  let service: PesticideserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesticideserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
