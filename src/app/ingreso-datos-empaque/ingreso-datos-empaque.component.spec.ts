import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoDatosEmpaqueComponent } from './ingreso-datos-empaque.component';

describe('IngresoDatosEmpaqueComponent', () => {
  let component: IngresoDatosEmpaqueComponent;
  let fixture: ComponentFixture<IngresoDatosEmpaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresoDatosEmpaqueComponent]
    });
    fixture = TestBed.createComponent(IngresoDatosEmpaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
