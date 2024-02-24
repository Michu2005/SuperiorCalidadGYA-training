import { Component } from '@angular/core';
import { DatosCodigo, PeriodicElement2 } from '../interfaces/datos';
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

  ELEMENT_DATA: PeriodicElement2[] = [
    {position: 1, paramDetalle: 'Param 1', min: 0, max: 0, paramDato: 0},
    {position: 2, paramDetalle: 'Param 2', min: 0, max: 0, paramDato: 0},
    {position: 3, paramDetalle: 'Param 3', min: 0, max: 0, paramDato: 0},
    {position: 4, paramDetalle: 'Param 4', min: 0, max: 0, paramDato: 0},
    {position: 5, paramDetalle: 'Param 5', min: 0, max: 0, paramDato: 0},
    {position: 6, paramDetalle: 'Param 6', min: 0, max: 0, paramDato: 0}
  ];
  displayedColumns: string[] = ['position', 'paramDetalle', 'min', 'max', 'paramDato'];
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
