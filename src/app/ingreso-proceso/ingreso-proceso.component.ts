import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosCodigo } from '../interfaces/datos';
import { ServiciosService } from '../servicios/servicios.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  productoSeleccionado: DatosCodigo = {
    id:0,
    codigo:"N/A",
    descripcion:"N/A"
  }

  parametros: any [] = [];
  
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
      this.productoSeleccionado = datos as DatosCodigo;
    })
    this.cargarParametros();
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
  }

  cargarParametros() {
    this.listarServicio.getParametroPorIdProductoYTipoParametroId(this.productoSeleccionado.id, 2).subscribe((datos : any []) => {
      console.log(datos); // Verifica que los datos se estén recibiendo correctamente
      this.parametros = datos; // Asigna la lista de objetos directamente
    });
  }

  inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      parametros: this.formBuilder.array([]),
    });
  }
}
