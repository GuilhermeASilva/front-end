import { TestBed } from '@angular/core/testing';

import { CadastroClienteService } from './cadastro-cliente.service';

describe('ClienteServiceService', () => {
  let service: CadastroClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
