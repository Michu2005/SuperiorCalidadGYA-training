import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { DatosCodigo, DatosEmpleadoSac, PeriodicElement, SeleccionarDatos } from '../interfaces/datos';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.css']
})
export class IngresoDatosComponent {
  txtPrincipal = 'INGRESO DE DATOS';
  nameSAC = 'NOMBRE SAC:';
  ingCod = 'CÓDIGO PRODUCTO:';
  descrpProd = 'DESCRIPCIÓN\nDEL PRODUCTO:';
  imgSuperior = '../assets/images/logo-superior.png';
  imgSalticas = '../assets/images/products-superior.png';

  myControl = new FormControl();

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

  constructor(public router: Router,
    private listarServicio: ServiciosService) { }

  menuInicio() {
    this.router.navigate(['/menu-inicio', this.productoSeleccionado]);
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
    this.listarServicio.getEmpleado().subscribe((resultadoEmpleado : any) =>{
      console.log(resultadoEmpleado);
    })
    this.listarServicio.getEmpleadoSac().subscribe((resultEmpleadoSac : any) =>{
      this.optionsSac = resultEmpleadoSac;
      console.log(resultEmpleadoSac);
    })
    this.filtroCodigo = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value : any) => this._filter(value || '')),
    );
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
