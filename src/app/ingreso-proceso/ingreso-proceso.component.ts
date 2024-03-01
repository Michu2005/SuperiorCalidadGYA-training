import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosCodigo, PeriodicElement1 } from '../interfaces/datos';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'ingreso-proceso',
  templateUrl: './ingreso-proceso.component.html',
  styleUrls: ['./ingreso-proceso.component.css'],
})
export class IngresoProcesoComponent {

  imgSuperior = '../assets/images/logo-superior.png';

  fechaYHoraActual: Date = new Date();
  intervalo: any;

  ELEMENT_DATA: PeriodicElement1[] = [
    {position: 1, parametro: 'N/A', min: 1.0, max: 1.79, paramZona1: 0, paramZona2: 0, paramZona3: 0},
    {position: 2, parametro: 'N/A', min: 0, max: 4.26, paramZona1: 0, paramZona2: 0, paramZona3: 0},
    {position: 3, parametro: 'N/A', min: 0, max: 6.941, paramZona1: 0, paramZona2: 0, paramZona3: 0},
    {position: 4, parametro: 'N/A', min: 0, max: 9.22, paramZona1: 0, paramZona2: 0, paramZona3: 0},
    {position: 5, parametro: 'N/A', min: 0, max: 10.11, paramZona1: 0, paramZona2: 0, paramZona3: 0},
    {position: 6, parametro: 'N/A', min: 0, max: 12.07, paramZona1: 0, paramZona2: 0, paramZona3: 0},
    {position: 7, parametro: 'N/A', min: 0, max: 14.67, paramZona1: 0, paramZona2: 0, paramZona3: 0},
    {position: 8, parametro: 'N/A', min: 0, max: 15.94, paramZona1: 0, paramZona2: 0, paramZona3: 0},
    {position: 9, parametro: 'N/A', min: 0, max: 18.84, paramZona1: 0, paramZona2: 0, paramZona3: 0},
    {position: 10, parametro: 'N/A', min: 0, max: 20.97, paramZona1: 0, paramZona2: 0, paramZona3: 0},
  ];
  displayedColumns: string[] = ['position', 'parametro', 'min', 'max', 'paramZona1', 'paramZona2', 'paramZona3'];
  dataSource = this.ELEMENT_DATA;

  //Incializa con estos valores
  productoSeleccionado: DatosCodigo = {
    id:0,
    codigo:"N/A",
    descripcion:"N/A"
  }

  parametrosProducto: any [] = [];
  
  constructor(private route: ActivatedRoute, 
    private router: Router) {}

    menuIng() {
      this.router.navigate(['/menu-inicio', this.productoSeleccionado]);
    }

    salidaPagInicio() {
      this.router.navigate(['/pag-inicio']);
    }

  ngOnInit(){
    this.route.params.subscribe(datos => {
      console.log(datos);
      this.productoSeleccionado = datos as DatosCodigo;
    })
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
  }
}
