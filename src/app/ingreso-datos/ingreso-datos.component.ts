import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { DatosCodigo, DatosEmpleadoAac, DatosEmpleadoSac, SeleccionarDatos } from '../interfaces/datos';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.css']
})
export class IngresoDatosComponent implements OnInit{
  txtPrincipal = 'INGRESO DE DATOS';
  nameSAC = 'NOMBRE SAC:';
  ingCod = 'CÓDIGO PRODUCTO:';
  descrpProd = 'DESCRIPCIÓN\nDEL PRODUCTO:';
  imgSuperior = '../assets/images/logo-superior.png';
  imgSalticas = '../assets/images/products-superior.png';

  codigoProducto: string='';
  myControl = new FormControl();

  //Muestra hora y fecha en tiempo real
  fechaYHoraActual: Date = new Date();
  intervalo: any;

  //Datos cargados para select de linea y turno
  options: SeleccionarDatos[] = [];
  optionsTurno: SeleccionarDatos[] = [];
  optionsSac: DatosEmpleadoSac[] = [];

  //Datos cargados para autocomplete codigo de producto
  autocompleteCodigo: DatosCodigo[] = [];

  //Datos filtrados
  filtroCodigo!: Observable<DatosCodigo[]>; 

  //Variable guardar dato del autocomplete
  productoSeleccionado: DatosCodigo = {
    id:0,
    codigo:"N/A",
    descripcion:"N/A"
  }

  empleAac: DatosEmpleadoAac = {
    codigo: '0',
    nombre: 'N/A'
  }

  nombreEmpleado: string = '';

  constructor(public router: Router,
    private listarServicio: ServiciosService) {}

  menuInicio() {
    this.router.navigate(['/menu-inicio', this.productoSeleccionado]);
  }

  salidaPagInicio() {
    this.router.navigate(['/pag-inicio']);
  }

  ngOnInit() {
    this.listarServicio.getLinea().subscribe((resultado: any) => { //any es para cualquier tipo de dato
      this.options = resultado.data;
      console.log(this.options);
    })
    this.listarServicio.getTurno().subscribe((resultadoTurno: any) => {
      this.optionsTurno = resultadoTurno.data;
      console.log(this.optionsTurno);
    })
    this.listarServicio.getCodigo().subscribe((resultadoCodigo: any) => {
      this.autocompleteCodigo = resultadoCodigo.data;
      console.log(this.autocompleteCodigo);
    })
    this.listarServicio.getEmpleadoSac().subscribe((resultEmpleadoSac : any) =>{
      this.optionsSac = resultEmpleadoSac;
      console.log(resultEmpleadoSac);
    })
    this.listarServicio.getEmpleadoAac().subscribe((resultEmpleadoAac : any) =>{
      this.empleAac = resultEmpleadoAac;
      console.log(resultEmpleadoAac);
    })
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
    this.filtroCodigo = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value : any) => this._filter(value || '')),
    )
  }

  private _filter(value: string): DatosCodigo[] {
    const filterValue = value.toLowerCase();
    return this.autocompleteCodigo.filter((option) => option.codigo.toLowerCase().includes(filterValue));
  }

  cargarDescripcion(event: MatAutocompleteSelectedEvent) {
    const selectedCodigo = event.option.value;
    const selectedProducto = this.autocompleteCodigo.find(producto => producto.codigo === selectedCodigo);
    
    if (selectedProducto) {
      this.productoSeleccionado = selectedProducto;
      // Actualiza el campo this.descrpProd con la descripción del producto seleccionado
      this.descrpProd = selectedProducto.descripcion;
    }
  }
}
