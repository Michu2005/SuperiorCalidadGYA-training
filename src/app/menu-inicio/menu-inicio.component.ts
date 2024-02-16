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
  
  ingresoProc() {
    this.router.navigate(['/ingreso-proceso']);
  }

  salidaPagInicio() {
    this.router.navigate(['/pag-inicio']);
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
