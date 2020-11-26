import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaOrdemDeServicoComponent } from './atualiza-ordem-de-servico.component';

describe('AtualizaOrdemDeServicoComponent', () => {
  let component: AtualizaOrdemDeServicoComponent;
  let fixture: ComponentFixture<AtualizaOrdemDeServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaOrdemDeServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaOrdemDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
