import { TestBed } from '@angular/core/testing';

import { ListaProdutoService } from './lista-produto.service';

describe('ListaProdutoService', () => {
  let service: ListaProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
