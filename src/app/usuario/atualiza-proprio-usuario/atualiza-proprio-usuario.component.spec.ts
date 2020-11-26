import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaProprioUsuarioComponent } from './atualiza-proprio-usuario.component';

describe('AtualizaProprioUsuarioComponent', () => {
  let component: AtualizaProprioUsuarioComponent;
  let fixture: ComponentFixture<AtualizaProprioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaProprioUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaProprioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
