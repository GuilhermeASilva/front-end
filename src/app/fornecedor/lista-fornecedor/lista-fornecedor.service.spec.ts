import { TestBed } from '@angular/core/testing';

import { ListaFornecedorService } from './lista-fornecedor.service';

describe('ListaFornecedorService', () => {
  let service: ListaFornecedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaFornecedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
