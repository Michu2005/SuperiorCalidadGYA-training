import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'empaque-galleta-rota',
  templateUrl: './empaque-galleta-rota.component.html',
  styleUrls: ['./empaque-galleta-rota.component.css']
})
export class EmpaqueGalletaRotaComponent implements OnInit {

  imgSuperior = '../assets/images/logo-superior.PNG';
  botonGuardar = false;
  botonesHabilitados = false;

  productoSeleccionado: any;
  fechaYHoraActual: Date = new Date();
  formulario!: FormGroup;
  parametros: any[] = [];
  datosEmpaque: any = {
    idSupervisor: 0,
    idAnalista: 0,
    idTurno: 0,
    idLinea: 0,
    idProducto: 0,
    idMaquina: 0,
    lote: 'N/A',
    detalleEmpaqueDTOList: []
  }

  listId : number[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listarServicio: ServiciosService,
    private formBuilder: FormBuilder
  ) {}


  empaqueHermeticidad() {
    this.router.navigate(['/empaque-hermeticidad', this.productoSeleccionado]);
  }

  paramAdicionales() {
    this.router.navigate(['/empaque-param-adicionales', this.productoSeleccionado]);
  }

  menuIng() {
    this.router.navigate(['/menu-inicio']);
  }

  atras(){
    this.router.navigate(['/ingreso-empaque', this.productoSeleccionado]);
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params);
      this.listId = params.idGuardados.split(',').map((num : number) => +num);
      this.productoSeleccionado = params;
    });    
    this.cargarParametros();
    this.inicializarFormulario();
  }

  cargarParametros() {
    this.listarServicio.getParametroPorIdProductoYTipoParametroId(this.productoSeleccionado.idProducto, 1).subscribe((datos: any[]) => {
      this.parametros = datos;
      this.cargarFilas();
    });
  }

  inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      registros: this.formBuilder.array([])
    });
    //Escuchar cambios en el formulario
    this.formulario.valueChanges.subscribe(() => {
      this.habilitarBotonGuardar();
    });
  }

  get registrosFormArray() {
    return this.formulario.get('registros') as FormArray;
  }

  cargarFilas() {
    this.registrosFormArray.clear();

    for (let i = 0; i < this.listId.length; i++) {
      const registroFormGroup = this.formBuilder.group({
        idGuardado: [this.listId[i]],
        idControlEmpaqueCabecera: [],
        datoPesoGalletaRota: ['', Validators.required],
        datoPesoGalletaRotaCalculado: ['', Validators.required],
        datoPesoPrimarioGalletaRota: ['', Validators.required]
      });
      this.registrosFormArray.push(registroFormGroup);
    }
  }  

  submitForm() {
    if(this.formulario.valid) {
      console.log(this.formulario.get('registros')?.value); 
      console.log(this.productoSeleccionado);
      this.listarServicio.putRegistrarGalletaRota(this.formulario.get('registros')?.value).subscribe(
        (response : any) =>{
          console.log(response);
      })
      this.botonesHabilitados = true;
    }
  }

  habilitarBotonGuardar(){
    this.botonGuardar = this.formulario.valid;
  }

  getControl(index: number, controlName: string) {
    return (this.registrosFormArray.controls[index] as FormGroup).controls[controlName];
  }
}
