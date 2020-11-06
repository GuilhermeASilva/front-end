import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroEntidadeComponent } from './filtro-entidade.component';

describe('FiltroEntidadeComponent', () => {
  let component: FiltroEntidadeComponent;
  let fixture: ComponentFixture<FiltroEntidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroEntidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
