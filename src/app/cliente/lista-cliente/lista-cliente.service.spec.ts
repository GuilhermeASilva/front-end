import { TestBed } from '@angular/core/testing';

import { ListaClienteService } from './lista-cliente.service';

describe('ListaClienteService', () => {
  let service: ListaClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
