import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoAdminComponent } from './ingreso-admin.component';

describe('IngresoAdminComponent', () => {
  let component: IngresoAdminComponent;
  let fixture: ComponentFixture<IngresoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresoAdminComponent]
    });
    fixture = TestBed.createComponent(IngresoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
