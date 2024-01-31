import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.css']
})
export class IngresoDatosComponent {
  txtPrincipal = 'INGRESO DE DATOS';
  nameSAC = 'NOMBRE SAC:';
  ingCod = 'CÓDIGO PRODUCTO:';
  descrpProd = 'DESCRIPCIÓN\nDEL PRODUCTO:';

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
