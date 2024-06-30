import { TestBed } from '@angular/core/testing';

import { LogininterfaceService } from './logininterface.service';

describe('LogininterfaceService', () => {
  let service: LogininterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogininterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
