import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaFornecedorComponent } from './atualiza-fornecedor.component';

describe('AtualizaFornecedorComponent', () => {
  let component: AtualizaFornecedorComponent;
  let fixture: ComponentFixture<AtualizaFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaFornecedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
