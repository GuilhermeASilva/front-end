import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaServicoComponent } from './atualiza-servico.component';

describe('AtualizaServicoComponent', () => {
  let component: AtualizaServicoComponent;
  let fixture: ComponentFixture<AtualizaServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
