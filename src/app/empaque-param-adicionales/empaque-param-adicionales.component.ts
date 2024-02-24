import { Component } from '@angular/core';
import { ControlFugas, DatosCodigo } from '../interfaces/datos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'empaque-param-adicionales',
  templateUrl: './empaque-param-adicionales.component.html',
  styleUrls: ['./empaque-param-adicionales.component.css']
})
export class EmpaqueParamAdicionalesComponent {
  imgSuperior = '../assets/images/logo-superior.png';

  fechaYHoraActual: Date = new Date();
  intervalo: any;

  datosRecibidos: DatosCodigo = {
    id: 0,
    codigo:"N/A",
    descripcion:"N/A"
  }

  ELEMENT_DATA: ControlFugas[] = [
    {position: 1, fugaLeve: false, fugaGrave: false, sinFuga: false},
    {position: 2, fugaLeve: false, fugaGrave: false, sinFuga: false},
    {position: 3, fugaLeve: false, fugaGrave: false, sinFuga: false},
    {position: 4, fugaLeve: false, fugaGrave: false, sinFuga: false},
    {position: 5, fugaLeve: false, fugaGrave: false, sinFuga: false},
    {position: 6, fugaLeve: false, fugaGrave: false, sinFuga: false},
    {position: 7, fugaLeve: false, fugaGrave: false, sinFuga: false},
    {position: 8, fugaLeve: false, fugaGrave: false, sinFuga: false},
    {position: 9, fugaLeve: false, fugaGrave: false, sinFuga: false},
    {position: 10, fugaLeve: false, fugaGrave: false, sinFuga: false},
  ];
  displayedColumns: string[] = ['position', 'fugaLeve', 'fugaGrave', 'sinFuga'];
  dataSource = this.ELEMENT_DATA;   

  constructor(private route: ActivatedRoute, 
    private router: Router) {}

    menuIng() {
      this.router.navigate(['/menu-inicio']);
    }

  ngOnInit(){
    this.route.params.subscribe(datos =>  {
      console.log(datos);
      this.datosRecibidos = datos as DatosCodigo;
    })
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
  }

}
