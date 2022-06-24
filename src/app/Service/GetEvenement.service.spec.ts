import { TestBed } from '@angular/core/testing';

import { GetEvenementService } from './GetEvenement.service';

describe('PostService', () => {
  let service: GetEvenementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEvenementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
