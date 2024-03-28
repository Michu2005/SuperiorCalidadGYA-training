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

  idCabecera: number = 0; // Inicializa idCabecera con un valor predeterminado

  detallesEmpaque: any[] = []; // Aquí almacenarás los detalles de empaque

  formulario!: FormGroup;
  fechaYHoraActual: Date = new Date();
  parametros: any[] = [];
  productoSeleccionado: any;

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listarServicio: ServiciosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productoSeleccionado = params;
      this.cargarDetallesEmpaque(this.productoSeleccionado.idCabecera); // Llama al método para cargar los detalles de empaque
    });
    this.cargarParametros();
    this.inicializarFormulario();
  }

  cargarDetallesEmpaque(idCabecera: number) {
    this.listarServicio.obtenerDetallesEmpaquePorIdCabecera(idCabecera).subscribe((detalles: any[]) => {
      this.detallesEmpaque = detalles;
    });
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
  }

  get registrosFormArray() {
    return this.formulario.get('registros') as FormArray;
  }

  cargarFilas() {
    this.registrosFormArray.clear();

    const idParametro = this.parametros[0].id;
    for (let i = 0; i < 10; i++) {
      const registroFormGroup = this.formBuilder.group({
        idParametro: [idParametro],
        datoPesoGalletaRota: ['', Validators.required],
        datoPesoGalletaRotaCalculado: ['', Validators.required],
        datoPesoPrimarioGalletaRota: ['', Validators.required]
      });
      this.registrosFormArray.push(registroFormGroup);
    }
  }  

  submitForm() {
    if(this.formulario.valid) {
      this.datosEmpaque.idSupervisor = this.productoSeleccionado.idSupervisor;
      this.datosEmpaque.idAnalista = this.productoSeleccionado.idEmpleado;
      this.datosEmpaque.idTurno = this.productoSeleccionado.idTurno;
      this.datosEmpaque.idLinea = this.productoSeleccionado.idLinea;
      this.datosEmpaque.idProducto = this.productoSeleccionado.idProducto;
      this.datosEmpaque.idMaquina = this.productoSeleccionado.idMaquina;
      this.datosEmpaque.lote = this.productoSeleccionado.lote;
      this.datosEmpaque.detalleEmpaqueDTOList = this.formulario.get('registros')?.value;
      this.listarServicio.postRegistrarEmpaque(this.datosEmpaque).subscribe(
        (response: any) => { // Cambiar el tipo de la respuesta según lo que devuelve el backend
          console.log('Respuesta del servidor:', response);
          // Aquí puedes manejar la respuesta devuelta por el backend según tus necesidades
        },
        (error) => {
          console.error('Error al registrar empaque:', error);
          // Manejar errores si es necesario
        }
      );
    }
  }

  empaqueHermeticidad() {
    this.router.navigate(['/empaque-hermeticidad', { ids: this.productoSeleccionado.ids }]);
  }

  registroGalletaRota() {
    this.router.navigate(['/empaque-galleta-rota', { ids: this.productoSeleccionado.ids }]);
  }

  menuIng() {
    this.router.navigate(['/menu-inicio']);
  }
}
