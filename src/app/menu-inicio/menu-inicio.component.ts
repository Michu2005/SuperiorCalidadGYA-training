import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosCodigo } from '../interfaces/datos';

@Component({
  selector: 'menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css']
})
export class MenuInicioComponent {

  imgSuperior = '../assets/images/logo-superior.png';
  imgSalticas = '../assets/images/products-superior.png';
  
  ingresoProc() {
    this.router.navigate(['/ingreso-proceso']);
  }

  datosRecibidos: DatosCodigo = {
    id : 0,
    codigo:"N/A",
    descripcion:"N/A"
  }

  constructor(private router: Router,
    private route : ActivatedRoute) {}

  ingresoProceso() {
    this.router.navigate(['/ingreso-proceso', this.datosRecibidos]);
  }

  //Función para ingreso de datos empaque
  ingDatosEmp() {
    this.router.navigate(['/ingreso-datos-empaque', this.datosRecibidos]);
  }

  ngOnInit(){
    this.route.params.subscribe(datos => {
      this.datosRecibidos = datos as DatosCodigo;
    })
  }
}
