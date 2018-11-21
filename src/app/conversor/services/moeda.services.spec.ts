import { TestBed } from '@angular/core/testing';

import { MoedaService } from './moeda.services';

describe('MoedaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoedaService = TestBed.get(MoedaService);
    expect(service).toBeTruthy();
  });
});
