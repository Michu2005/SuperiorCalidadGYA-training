import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { DatosEmpleadoAac, SeleccionarDatos } from '../interfaces/datos';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ingreso-datos-empaque',
  templateUrl: './ingreso-datos-empaque.component.html',
  styleUrls: ['./ingreso-datos-empaque.component.css']
})
export class IngresoDatosEmpaqueComponent {

  formulario!: FormGroup;

  value = 'Ingreso Lote';
  imgSuperior = '../assets/images/logo-superior.PNG';
  imgSalticas = '../assets/images/products-superior.png';
  
  productoSeleccionado: any;

  empleAac: DatosEmpleadoAac = {
    codigo: '0',
    nombre: 'N/A'
  }

  //Muestra hora y fecha en tiempo real
  fechaYHoraActual: Date = new Date();
  intervalo: any;

  optionsMaquina: SeleccionarDatos[] = [];

  data: any = {
    idEmpleado: 0,
    idProducto: 0,
    codigoProducto: "N/A",
    description:"N/A",
    idSupervisor: 0,
    idTurno: 0,
    idLinea: 0,
    idMaquina: 0,
    lote: 'N/A'
  }

  constructor(public router: Router,
    private listarServicio: ServiciosService,
    private route: ActivatedRoute,
    private fb: FormBuilder) {}

    ingresoEmpaque() {
      console.log(this.productoSeleccionado);
      console.log(this.productoSeleccionado.idEmpleado);
      this.data.idProducto = this.productoSeleccionado.idProducto;
      this.data.codigoProducto = this.productoSeleccionado.codigoProducto;
      this.data.description = this.productoSeleccionado.description;
      this.data.idMaquina = this.formulario.get('maquinaControl')?.value;
      this.data.lote = this.formulario.get('loteControl')?.value;
      this.data.idLinea = this.productoSeleccionado.idLinea;
      this.data.idSupervisor = this.productoSeleccionado.idSupervisor;
      this.data.idTurno = this.productoSeleccionado.idTurno;
      this.data.idEmpleado = this.productoSeleccionado.idEmpleado;
      this.router.navigate(['/ingreso-empaque', this.data]);
    }

  regreso(){
    this.router.navigate(['/menu-inicio', this.productoSeleccionado]);
  }
  
  salida() {
    this.router.navigate(['/pag-inicio']);
  }

  ngOnInit(){
    this.formulario = this.fb.group({
      maquinaControl : [''],
      loteControl : ['']
    })
    this.route.params.subscribe(datos => {
      console.log(datos);
      this.productoSeleccionado = datos;
    })
    this.listarServicio.getMaquina().subscribe((rersultadoMaquina : any) =>{
      this.optionsMaquina = rersultadoMaquina.data;
      console.log(this.optionsMaquina);
    })
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
  }

  ingresoDatos() {
    if (this.formulario.valid) {
      console.log('Formulario válido. Guardando...');
    } else {
      console.log('Por favor, completa todos los campos antes de guardar.');
    }
  }
  
}
