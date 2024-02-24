import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaqueHermeticidadComponent } from './empaque-hermeticidad.component';

describe('EmpaqueHermeticidadComponent', () => {
  let component: EmpaqueHermeticidadComponent;
  let fixture: ComponentFixture<EmpaqueHermeticidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpaqueHermeticidadComponent]
    });
    fixture = TestBed.createComponent(EmpaqueHermeticidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
