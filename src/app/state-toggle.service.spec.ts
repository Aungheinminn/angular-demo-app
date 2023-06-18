import { TestBed } from '@angular/core/testing';

import { StateToggleService } from './state-toggle.service';

describe('StateToggleService', () => {
  let service: StateToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
