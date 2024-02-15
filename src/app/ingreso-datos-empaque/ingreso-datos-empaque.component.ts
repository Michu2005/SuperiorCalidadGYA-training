import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { SeleccionarDatos } from '../interfaces/datos';

@Component({
  selector: 'ingreso-datos-empaque',
  templateUrl: './ingreso-datos-empaque.component.html',
  styleUrls: ['./ingreso-datos-empaque.component.css']
})
export class IngresoDatosEmpaqueComponent {
  value = 'Ingreso Lote';
  imgSuperior = '../assets/images/logo-superior.png';
  imgSalticas = '../assets/images/products-superior.png';

  optionsTurno: SeleccionarDatos[] = [];
  optionsMaquina: SeleccionarDatos[] = [];

  constructor(public router: Router,
    private listarServicio: ServiciosService) {}

  ngOnInit(){
    this.listarServicio.getTurno().subscribe((resultadoTurno: any) => {
      this.optionsTurno = resultadoTurno.data;
      console.log(this.optionsTurno);
    })
    this.listarServicio.getMaquina().subscribe((rersultadoMaquina : any) =>{
      this.optionsMaquina = rersultadoMaquina.data;
      console.log(this.optionsMaquina);
    })
  }
}
