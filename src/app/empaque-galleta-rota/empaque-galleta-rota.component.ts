import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosCodigo } from '../interfaces/datos';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'empaque-galleta-rota',
  templateUrl: './empaque-galleta-rota.component.html',
  styleUrls: ['./empaque-galleta-rota.component.css']
})
export class EmpaqueGalletaRotaComponent {

  imgSuperior = '../assets/images/logo-superior.PNG';

  fechaYHoraActual: Date = new Date();
  intervalo: any;
  items: any[] = [];
  parametros: any [] = [];

  productoSeleccionado: DatosCodigo = {
    id:0,
    codigo:"N/A",
    descripcion:"N/A"
  }

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private listarServicio : ServiciosService) {}

    empaqueHermeticidad() {
      this.router.navigate(['/empaque-hermeticidad', this.productoSeleccionado]);
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
    this.items = Array(10).fill({ columna1: '', columna2: '', columna3: '', columna4: '' });
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
