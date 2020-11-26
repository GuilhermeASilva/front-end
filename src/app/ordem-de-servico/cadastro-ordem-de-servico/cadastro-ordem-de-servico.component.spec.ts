import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroOrdemDeServicoComponent } from './cadastro-ordem-de-servico.component';

describe('CadastroOrdemDeServicoComponent', () => {
  let component: CadastroOrdemDeServicoComponent;
  let fixture: ComponentFixture<CadastroOrdemDeServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroOrdemDeServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroOrdemDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
