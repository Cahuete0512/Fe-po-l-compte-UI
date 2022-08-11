import { TestBed } from '@angular/core/testing';

import { GetParticipantService } from './GetParticipant.service';

describe('SessionConnexionService', () => {
  let service: GetParticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetParticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
