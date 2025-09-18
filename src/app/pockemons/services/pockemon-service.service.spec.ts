import { TestBed } from '@angular/core/testing';

import { PockemonServiceService } from './pockemon-service.service';

describe('PockemonServiceService', () => {
  let service: PockemonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PockemonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
