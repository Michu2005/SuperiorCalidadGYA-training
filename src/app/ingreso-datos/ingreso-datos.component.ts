import { Component } from '@angular/core';

@Component({
  selector: 'ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.css']
})
export class IngresoDatosComponent {
  txtPrincipal = 'INGRESO DE DATOS';
  nameSAC = 'NOMBRE SAC:';
  ingCod = 'CÓDIGO PRODUCTO:';
value: any;
}
