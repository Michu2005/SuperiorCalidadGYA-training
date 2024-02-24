import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaqueGalletaRotaComponent } from './empaque-galleta-rota.component';

describe('EmpaqueGalletaRotaComponent', () => {
  let component: EmpaqueGalletaRotaComponent;
  let fixture: ComponentFixture<EmpaqueGalletaRotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpaqueGalletaRotaComponent]
    });
    fixture = TestBed.createComponent(EmpaqueGalletaRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
