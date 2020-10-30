import { TestBed } from '@angular/core/testing';

import { ListaServicoService } from './lista-servico.service';

describe('ListaServicoService', () => {
  let service: ListaServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
