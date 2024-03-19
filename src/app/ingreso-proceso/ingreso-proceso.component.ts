import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DatosEmpleadoAac } from '../interfaces/datos';

@Component({
  selector: 'ingreso-proceso',
  templateUrl: './ingreso-proceso.component.html',
  styleUrls: ['./ingreso-proceso.component.css'],
})
export class IngresoProcesoComponent {

  formulario!: FormGroup;
  imgSuperior = '../assets/images/logo-superior.PNG';

  fechaYHoraActual: Date = new Date();
  intervalo: any;

  //Incializa con estos valores
  productoSeleccionado: any;

  parametros: any [] = [];
  codigoEmpleado: string = '';

  empleAac: DatosEmpleadoAac = {
    codigo: '0',
    nombre: 'N/A'
  }

  datosProceso: any = {
    idSupervisor: 0,
    idAnalista: 0,
    idTurno: 0,
    idLinea: 0,
    idProducto: 0,
    detalleProcesoDTOList: []
  }
  
  constructor(private route: ActivatedRoute, 
    private router: Router,
    private listarServicio : ServiciosService,
    private formBuilder: FormBuilder) {}

    menuIng() {
      this.router.navigate(['/menu-inicio', this.productoSeleccionado]);
    }

    salidaPagInicio() {
      this.router.navigate(['/pag-inicio']);
    }

  ngOnInit(){
    this.route.params.subscribe(datos => {
      console.log(datos);
      this.productoSeleccionado = datos;
    })
    this.listarServicio.getEmpleadoAac().subscribe((resultEmpleadoAac : any) =>{
      this.empleAac = resultEmpleadoAac;
      console.log(resultEmpleadoAac);
    })
    this.cargarParametros();
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
    this.inicializarFormulario();
  }

  cargarParametros() {
    this.listarServicio.getParametroPorIdProductoYTipoParametroId(this.productoSeleccionado.idProducto, 2).subscribe((datos : any []) => {
      console.log(datos);
      this.parametros = datos;
      this.cargarFilas();
    });
  }

  inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      registros: this.formBuilder.array([])
    });
  }

  get registrosFormArray() {
    return this.formulario.get('registros') as FormArray;
  }

  cargarFilas() {
    this.registrosFormArray.clear();
    this.parametros.forEach(parametro => {
      const registroFormGroup = this.formBuilder.group({
        idParametro: [parametro.id],
        valorZona1: [''],
        valorZona2: [''],
        valorZona3: ['']
      });

      this.registrosFormArray.push(registroFormGroup);
    });
  }

  atrasIngresoDatos(){
    this.listarServicio.getIdPorCodigoEmpleado(this.codigoEmpleado).subscribe((response) =>{
      if(response === 0){
        console.log("Usuario no autorizado");
      }else {
        this.router.navigate(['ingreso-datos', { idEmpleado: response }]);
      }
    })
  }

  submitForm(){
    if(this.formulario.valid){
      this.datosProceso.idSupervisor = this.productoSeleccionado.idSupervisor;
      this.datosProceso.idAnalista = this.productoSeleccionado.idEmpleado;
      this.datosProceso.idTurno = this.productoSeleccionado.idTurno;
      this.datosProceso.idLinea = this.productoSeleccionado.idLinea;
      this.datosProceso.idProducto = this.productoSeleccionado.idProducto;
      this.datosProceso.detalleProcesoDTOList = this.formulario.get('registros')?.value;
      console.log(this.datosProceso);
      this.listarServicio.postRegistrarProceso(this.datosProceso).subscribe((response)=>{
        console.log(response);
      })
      this.router.navigate(['/ingreso-datos'])
    }
  }

  getControl(index: number, controlName: string) {
    return (this.registrosFormArray.controls[index] as FormGroup).controls[controlName];
  }

}
