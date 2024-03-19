import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { DatosCodigo, SeleccionarDatos } from '../interfaces/datos';

@Component({
  selector: 'ingreso-datos-empaque',
  templateUrl: './ingreso-datos-empaque.component.html',
  styleUrls: ['./ingreso-datos-empaque.component.css']
})
export class IngresoDatosEmpaqueComponent {
  value = 'Ingreso Lote';
  imgSuperior = '../assets/images/logo-superior.PNG';
  imgSalticas = '../assets/images/products-superior.png';
  
  productoSeleccionado: any;

  fechaYHoraActual: Date = new Date();
  intervalo: any;

  optionsMaquina: SeleccionarDatos[] = [];

  constructor(public router: Router,
    private listarServicio: ServiciosService,
    private route: ActivatedRoute) {}

  regreso(){
    this.router.navigate(['/menu-inicio', this.productoSeleccionado]);
  }
  
  salida() {
    this.router.navigate(['/pag-inicio']);
  }

  ingresoEmpaque() {
    this.router.navigate(['/ingreso-empaque', this.productoSeleccionado]);
  }

  ngOnInit(){
    this.route.params.subscribe(datos => {
      console.log(datos);
      this.productoSeleccionado = datos as DatosCodigo;
    })
    this.listarServicio.getMaquina().subscribe((rersultadoMaquina : any) =>{
      this.optionsMaquina = rersultadoMaquina.data;
      console.log(this.optionsMaquina);
    })
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
  }

  
}

