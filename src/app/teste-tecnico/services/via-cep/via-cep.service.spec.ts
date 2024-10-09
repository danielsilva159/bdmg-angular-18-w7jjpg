import { TestBed } from '@angular/core/testing';

import { ViaCepService } from './via-cep.service';
import { provideHttpClient } from '@angular/common/http';

describe('ViaCepService', () => {
  let service: ViaCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(ViaCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
