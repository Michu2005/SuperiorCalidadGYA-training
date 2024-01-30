import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoMenuComponent } from './ingreso-menu.component';

describe('IngresoMenuComponent', () => {
  let component: IngresoMenuComponent;
  let fixture: ComponentFixture<IngresoMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresoMenuComponent]
    });
    fixture = TestBed.createComponent(IngresoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
