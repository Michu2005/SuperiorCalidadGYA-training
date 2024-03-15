import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  formulario!: FormGroup;

  txtPrincipal = 'INGRESO DE DATOS';
  nameSAC = 'NOMBRE SAC:';
  ingCod = 'CÓDIGO PRODUCTO:';
  descrpProd = 'DESCRIPCIÓN DEL PRODUCTO';
  imgSuperior = '../assets/images/logo-superior.PNG';
  imgProdSuperior = '../assets/images/galletas-superior.png';

  codigoProducto: string='';
  sacControl = new FormControl();
  turnoControl = new FormControl();
  lineaControl = new FormControl();
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

  data: any = {
    idEmpleado: 0,
    idProducto: 0,
    codigoProducto: "N/A",
    description:"N/A",
    idSupervisor: 0,
    idTurno: 0,
    idLinea: 0
  }

  idEmpleadoAac: number = 0;

  nombreEmpleado: string = '';

  constructor(public router: Router,
    private listarServicio: ServiciosService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {}

  menuInicio() {
    this.data.idEmpleado = this.idEmpleadoAac;
    this.data.idProducto = this.productoSeleccionado.id;
    this.data.codigoProducto = this.productoSeleccionado.codigo;
    this.data.description = this.productoSeleccionado.descripcion;
    this.data.idTurno = this.turnoControl.value;
    this.data.idLinea = this.lineaControl.value;
    
    this.listarServicio.getIdPorCodigoEmpleado(this.sacControl.value).subscribe((response) =>{
      console.log(response);
      this.data.idSupervisor = response;
      this.router.navigate(['/menu-inicio', this.data]);
    }); 
  }

  salidaPagInicio() {
    this.router.navigate(['/pag-inicio']);
  }

  ngOnInit() {
    this.route.params.subscribe((datos: any) =>{
      console.log(datos);
      this.idEmpleadoAac = datos.idEmpleado;
    })

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

  ingresoDatos() {
    // Aquí puedes agregar la lógica para guardar el formulario
    if (this.formulario.valid) {
      // Lógica para guardar el formulario
      console.log('Formulario válido. Guardando...');
    } else {
      // Mostrar mensaje de error o realizar alguna acción
      console.log('Por favor, completa todos los campos antes de guardar.');
    }
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
