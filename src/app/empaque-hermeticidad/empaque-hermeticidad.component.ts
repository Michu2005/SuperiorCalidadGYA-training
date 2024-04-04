import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'empaque-hermeticidad',
  templateUrl: './empaque-hermeticidad.component.html',
  styleUrls: ['./empaque-hermeticidad.component.css']
})
export class EmpaqueHermeticidadComponent {

  imgSuperior = '../assets/images/logo-superior.PNG';
  botonGuardar = false;

  fechaYHoraActual: Date = new Date();
  intervalo: any;

  productoSeleccionado: any;
  

  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['position', 'fugaLeve', 'fugaGrave', 'sinFuga'];
  dataSource = this.ELEMENT_DATA;  

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private listarServicio: ServiciosService
    ) {}

    menuIng() {
      this.router.navigate(['/menu-inicio']);
    }

  ngOnInit(){
    this.route.params.subscribe((datos : any) =>  {
      console.log(datos);
      let listId = datos.idGuardados.split(',').map((num : number) => +num);
      const cantidadIDs = listId.length;
      for (let i = 0; i < cantidadIDs; i++) {
        this.ELEMENT_DATA.push({
          position: i+1,
          idGuardado: listId[i],
          datoHermeticidad: ['']
        });
      }
      this.dataSource = this.ELEMENT_DATA;
      
      this.productoSeleccionado = datos;
    })
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
  }

  submitForm(){
    console.log(this.ELEMENT_DATA);
    console.log(this.dataSource);
    this.listarServicio.putRegistrarHermeticidad(this.dataSource).subscribe(
      (response : any) =>{
        console.log(response);
    })
  } 
  
}
