import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosCodigo, DatosEmpleadoAac } from '../interfaces/datos';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css']
})
export class MenuInicioComponent {

  imgSuperior = '../assets/images/logo-superior.PNG';
  imgSalticas = '../assets/images/products-superior.png';

  fechaYHoraActual: Date = new Date();
  intervalo: any;
  datosRecibidos: any;

  constructor(private router: Router,
    private route : ActivatedRoute,
    private listarServicio: ServiciosService) {}

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

  atrasIngresoDatos() {
    this.router.navigate(['/menu-inicio']);
  }

  ngOnInit(){
    this.route.params.subscribe(datos => {
      this.datosRecibidos = datos;
      console.log(this.datosRecibidos);
    })
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
  }
}
