import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ingreso-menu',
  templateUrl: './ingreso-menu.component.html',
  styleUrls: ['./ingreso-menu.component.css']
})
export class IngresoMenuComponent {
  txtingreso = 'INGRESO DE DATOS';
  nameSAC = 'Nombre SAC:';
  imgSuperior = '../assets/images/logo-superior.png';
  imgSalticas = '../assets/images/products-superior.png';


}
