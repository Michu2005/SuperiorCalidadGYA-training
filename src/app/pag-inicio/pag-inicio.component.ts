import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pag-inicio',
  templateUrl: './pag-inicio.component.html',
  styleUrls: ['./pag-inicio.component.css']
})
export class PagInicioComponent {
  txtIng = 'Ingrese su código';

  constructor(private router: Router) {}

  ingresoDatos() {
    this.router.navigate(['/pag-inicio', 'ingreso-datos']);
  }
}
