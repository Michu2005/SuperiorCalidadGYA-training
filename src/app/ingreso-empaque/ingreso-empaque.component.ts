import { Component } from '@angular/core';
import { DatosCodigo, DatosEmpleadoAac } from '../interfaces/datos';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ingreso-empaque',
  templateUrl: './ingreso-empaque.component.html',
  styleUrls: ['./ingreso-empaque.component.css']
})
export class IngresoEmpaqueComponent{

  imgSuperior = '../assets/images/logo-superior.PNG';

  productoSeleccionado: any;
  fechaYHoraActual: Date = new Date();
  codigoEmpleado: string = '';
  intervalo: any;
  numMuestras: any[] = [];
  parametros: any [] = [];
  formulario!: FormGroup;

  datosEmpaque: any = {
    idSupervisor: 0,
    idAnalista: 0,
    idTurno: 0,
    idLinea: 0,
    idProducto: 0,
    idMaquina: 0,
    lote: '',
    detalleEmpaqueDTOList: []
  }

  empleAac: DatosEmpleadoAac = {
    codigo: '0',
    nombre: 'N/A'
  }

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private listarServicio : ServiciosService,
    private formBuilder: FormBuilder) {}

    salida(){
      this.router.navigate(['/pag-inicio']);
    }

    empaqueGalletaRota() {
      this.router.navigate(['/empaque-galleta-rota', this.productoSeleccionado]);
    }

    menuIng() {
      this.router.navigate(['/menu-inicio', this.productoSeleccionado]);
    }

  ngOnInit(){
    this.route.params.subscribe(datos =>  {
      console.log(datos);
      this.productoSeleccionado = datos as DatosCodigo;
    })
    this.listarServicio.getEmpleadoAac().subscribe((resultEmpleadoAac : any) =>{
      this.empleAac = resultEmpleadoAac;
      console.log(resultEmpleadoAac);
    })
    this.numMuestras = Array(10).fill({}).map(_ => ({ columna1: '', columna2: '', columna3: '', columna4 : '' }));
    this.cargarParametros();
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
    this.inicializarFormulario();
  }

  cargarParametros() {
    this.listarServicio.getParametroPorIdProductoYTipoParametroId(this.productoSeleccionado.idProducto, 1).subscribe((datos : any []) => {
      console.log(datos); // Verifica que los datos se estén recibiendo correctamente
      this.parametros = datos; // Asigna la lista de objetos directamente
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

  getFormGroup(index: number): FormGroup {
    const control = this.registrosFormArray.controls[index];
    if (control instanceof FormGroup) {
      return control;
    } else {
      // Si el control no es un FormGroup, crea uno nuevo vacío y devuélvelo
      return this.formBuilder.group({
        columna1: '',
        columna2: '',
        columna3: ''
      });
    }
  }  

  submitForm(){
    if(this.formulario.valid){
      this.datosEmpaque.idSupervisor = this.productoSeleccionado.idSupervisor;
      this.datosEmpaque.idAnalista = this.productoSeleccionado.idEmpleado;
      this.datosEmpaque.idTurno = this.productoSeleccionado.idTurno;
      this.datosEmpaque.idLinea = this.productoSeleccionado.idLinea;
      this.datosEmpaque.idProducto = this.productoSeleccionado.idProducto;
      this.datosEmpaque.idMaquina = this.productoSeleccionado.idMaquina;
      this.datosEmpaque.lote = this.productoSeleccionado.lote;
      this.datosEmpaque.detalleEmpaqueDTOList = this.formulario.get('registros')?.value;
      console.log(this.datosEmpaque);
      this.listarServicio.postRegistrarEmpaque(this.datosEmpaque).subscribe((response)=>{
        console.log(response);
      })
      //this.router.navigate(['/ingreso-datos'])
    }
  }

  getControl(index: number, controlName: string) {
    return (this.registrosFormArray.controls[index] as FormGroup).controls[controlName];
  }

}

