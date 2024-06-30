import { TestBed } from '@angular/core/testing';

import { RegisterinterfaceService } from './registerinterface.service';

describe('RegisterinterfaceService', () => {
  let service: RegisterinterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterinterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
