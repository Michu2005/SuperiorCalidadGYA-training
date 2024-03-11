import { Component } from '@angular/core';
import { DatosCodigo } from '../interfaces/datos';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'empaque-param-adicionales',
  templateUrl: './empaque-param-adicionales.component.html',
  styleUrls: ['./empaque-param-adicionales.component.css']
})
export class EmpaqueParamAdicionalesComponent {

  imgSuperior = '../assets/images/logo-superior.PNG';

  fechaYHoraActual: Date = new Date();
  intervalo: any;
  parametros: any [] = [];
  items: any[] = [];

  productoSeleccionado: DatosCodigo = {
    id: 0,
    codigo:"N/A",
    descripcion:"N/A"
  }

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private listarServicio : ServiciosService) {}

    pagIng() {
      this.router.navigate(['/pag-inicio']);
    }

    menuIng() {
      this.router.navigate(['/menu-inicio']);
    }

  ngOnInit(){
    this.route.params.subscribe(datos =>  {
      console.log(datos);
      this.productoSeleccionado = datos as DatosCodigo;
    })
    this.cargarParametros();
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
  }

  cargarParametros() {
    this.listarServicio.getParametroPorIdProductoYTipoParametroId(this.productoSeleccionado.id, 1).subscribe((datos : any []) => {
      console.log(datos); // Verifica que los datos se estén recibiendo correctamente
      this.parametros = datos; // Asigna la lista de objetos directamente
    });
  }
}
