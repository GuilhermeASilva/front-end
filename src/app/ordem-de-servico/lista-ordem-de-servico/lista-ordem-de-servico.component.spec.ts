import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdemDeServicoComponent } from './lista-ordem-de-servico.component';

describe('ListaOrdemDeServicoComponent', () => {
  let component: ListaOrdemDeServicoComponent;
  let fixture: ComponentFixture<ListaOrdemDeServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOrdemDeServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOrdemDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
