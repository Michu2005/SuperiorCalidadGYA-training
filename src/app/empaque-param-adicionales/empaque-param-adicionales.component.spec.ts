import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaqueParamAdicionalesComponent } from './empaque-param-adicionales.component';

describe('EmpaqueParamAdicionalesComponent', () => {
  let component: EmpaqueParamAdicionalesComponent;
  let fixture: ComponentFixture<EmpaqueParamAdicionalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpaqueParamAdicionalesComponent]
    });
    fixture = TestBed.createComponent(EmpaqueParamAdicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
