import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css']
})
export class MenuInicioComponent {

  constructor(public router: Router) {}

  ingresoProceso() {
    this.router.navigate(['/ingreso-proceso']);
  }
}
