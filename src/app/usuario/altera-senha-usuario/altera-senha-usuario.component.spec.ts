import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraSenhaUsuarioComponent } from './altera-senha-usuario.component';

describe('AlteraSenhaUsuarioComponent', () => {
  let component: AlteraSenhaUsuarioComponent;
  let fixture: ComponentFixture<AlteraSenhaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteraSenhaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraSenhaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
