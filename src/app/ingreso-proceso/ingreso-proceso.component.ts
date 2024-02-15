import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosCodigo, PeriodicElement, PeriodicElement1 } from '../interfaces/datos';

@Component({
  selector: 'ingreso-proceso',
  templateUrl: './ingreso-proceso.component.html',
  styleUrls: ['./ingreso-proceso.component.css'],
})
export class IngresoProcesoComponent {

  imgSuperior = '../assets/images/logo-superior.png';


  ELEMENT_DATA: PeriodicElement1[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', paramZona2: 0, paramZona3: 0},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', paramZona2: 0, paramZona3: 0},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', paramZona2: 0, paramZona3: 0},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', paramZona2: 0, paramZona3: 0},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', paramZona2: 0, paramZona3: 0},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', paramZona2: 0, paramZona3: 0},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', paramZona2: 0, paramZona3: 0},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', paramZona2: 0, paramZona3: 0},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', paramZona2: 0, paramZona3: 0},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', paramZona2: 0, paramZona3: 0},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'paramZona2', 'paramZona3'];
  dataSource = this.ELEMENT_DATA;

  //Incializa con estos valores
  productoSeleccionado: DatosCodigo = {
    id:0,
    codigo:"N/A",
    descripcion:"N/A"
  }
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe(datos => {
      this.productoSeleccionado = datos as DatosCodigo;
    })
  }  
}
