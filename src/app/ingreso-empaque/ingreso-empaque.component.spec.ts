import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoEmpaqueComponent } from './ingreso-empaque.component';

describe('IngresoEmpaqueComponent', () => {
  let component: IngresoEmpaqueComponent;
  let fixture: ComponentFixture<IngresoEmpaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresoEmpaqueComponent]
    });
    fixture = TestBed.createComponent(IngresoEmpaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
