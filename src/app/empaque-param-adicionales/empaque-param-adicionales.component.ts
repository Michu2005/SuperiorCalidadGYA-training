import { Component } from '@angular/core';
import { DatosCodigo } from '../interfaces/datos';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'empaque-param-adicionales',
  templateUrl: './empaque-param-adicionales.component.html',
  styleUrls: ['./empaque-param-adicionales.component.css']
})
export class EmpaqueParamAdicionalesComponent {

  imgSuperior = '../assets/images/logo-superior.PNG';
  formulario!: FormGroup;

  fechaYHoraActual: Date = new Date();
  intervalo: any;
  parametros: any [] = [];
  items: any[] = [];
  listId : number[] = [];

  productoSeleccionado: any;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private listarServicio : ServiciosService,
    private formBuilder: FormBuilder) {}

    pagIng() {
      this.router.navigate(['/pag-inicio']);
    }

    menuIng() {
      this.router.navigate(['/menu-inicio']);
    }

  ngOnInit(){
    this.route.params.subscribe((params: any) => {
      console.log(params);
      this.listId = params.idGuardados.split(',').map((num : number) => +num);
      this.productoSeleccionado = params;
    });
    this.cargarParametros();
    this.inicializarFormulario();
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
  }

  cargarParametros() {
    this.listarServicio.getParametroPorIdProductoYTipoParametroId(this.productoSeleccionado.idProducto, 3).subscribe((datos : any []) => {
      console.log(datos); // Verifica que los datos se estén recibiendo correctamente
      this.parametros = datos; // Asigna la lista de objetos directamente
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
        datoParametro: ['']
      });

      this.registrosFormArray.push(registroFormGroup);
    });
  }

  submitForm(){
    console.log(this.formulario.value);
    /*this.listarServicio.putRegistrarParamAdicional(this.formulario.get('registros')?.value).subscribe(
      (response : any) =>{
        console.log(response);
    })*/
  }

  getControl(index: number, controlName: string) {
    return (this.registrosFormArray.controls[index] as FormGroup).controls[controlName];
  }
}
