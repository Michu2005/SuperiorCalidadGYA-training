import { Component } from '@angular/core';
import { DatosCodigo } from '../interfaces/datos';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'ingreso-empaque',
  templateUrl: './ingreso-empaque.component.html',
  styleUrls: ['./ingreso-empaque.component.css']
})
export class IngresoEmpaqueComponent{

  imgSuperior = '../assets/images/logo-superior.PNG';

  productoSeleccionado: DatosCodigo = {
    id:0,
    codigo:"N/A",
    descripcion:"N/A"
  }

  fechaYHoraActual: Date = new Date();
  intervalo: any;
  numMuestras: any[] = [];
  parametros: any [] = [];

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private listarServicio : ServiciosService) {}

    empaqueGalletaRota() {
      this.router.navigate(['/empaque-galleta-rota', this.productoSeleccionado]);
    }

    menuIng() {
      this.router.navigate(['/menu-inicio']);
    }

  ngOnInit(){
    this.route.params.subscribe(datos =>  {
      console.log(datos);
      this.productoSeleccionado = datos as DatosCodigo;
    })
    this.numMuestras = Array(10).fill({ columna1: '', columna2: '', columna3: '', columna4: '' });
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
