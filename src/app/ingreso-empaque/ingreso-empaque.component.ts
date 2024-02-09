import { Component } from '@angular/core';

@Component({
  selector: 'ingreso-empaque',
  templateUrl: './ingreso-empaque.component.html',
  styleUrls: ['./ingreso-empaque.component.css']
})
export class IngresoEmpaqueComponent {
  numMuestras : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  txtEstatico: string[] = ["No. Muestras", "Peso Primario", "Peso Secundario ", "Peso Corrugado (g)"];
}
