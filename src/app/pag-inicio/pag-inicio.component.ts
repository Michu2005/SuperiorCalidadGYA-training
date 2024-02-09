import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pag-inicio',
  templateUrl: './pag-inicio.component.html',
  styleUrls: ['./pag-inicio.component.css']
})
export class PagInicioComponent {
  txtIng = 'Ingrese su código';
  imgSuperior = '../assets/images/logo-superior.png';
  imgSalticas = '../assets/images/products-superior.png';

  constructor(public router: Router) {}

  ingresoDatos() {
    this.router.navigate(['/pag-inicio', 'ingreso-datos']);
  }
}
