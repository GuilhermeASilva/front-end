import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaUsuarioComponent } from './atualiza-usuario.component';

describe('AtualizaUsuarioComponent', () => {
  let component: AtualizaUsuarioComponent;
  let fixture: ComponentFixture<AtualizaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
