import { TestBed } from '@angular/core/testing';

import { SalesControlService } from './sales-control.service';

describe('SalesControlService', () => {
  let service: SalesControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
