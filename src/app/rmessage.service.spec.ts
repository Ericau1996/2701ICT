import { TestBed } from '@angular/core/testing';

import { RmessageService } from './rmessage.service';

describe('RmessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RmessageService = TestBed.get(RmessageService);
    expect(service).toBeTruthy();
  });
});
