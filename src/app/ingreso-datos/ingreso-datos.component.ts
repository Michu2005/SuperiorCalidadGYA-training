import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  options: string[] = ['1234', '5678', '9012'];

  constructor(public router: Router) {}

  menuInicio() {
    this.router.navigate(['/menu-inicio']);
  }
}
