import { Component, OnInit } from '@angular/core';
import { DatosCodigo } from '../interfaces/datos';
import { ActivatedRoute, Router } from '@angular/router';

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
  items: any[] = [];
  panelOpenState = false;

  constructor(private route: ActivatedRoute, 
    private router: Router) {}

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
    this.items = Array(10).fill({ columna1: '', columna2: '', columna3: '', columna4: '' });
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
  }
}
