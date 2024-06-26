import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosEmpleadoAac } from '../interfaces/datos';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'pag-inicio',
  templateUrl: './pag-inicio.component.html',
  styleUrls: ['./pag-inicio.component.css']
})
export class PagInicioComponent{
  txtIng = 'INGRESE SU CÓDIGO PERSONAL';
  imgSuperior = '../assets/images/logo-superior.PNG';
  imgSalticas = '../assets/images/products-superior.png';
  
  codigoEmpleado: string = '';

  fechaYHoraActual: Date = new Date();
  intervalo: any;

  empleAac: DatosEmpleadoAac = {
    codigo: '0',
    nombre: 'N/A'
  }

  confirmarSalida() {
    if (confirm("¿Estás seguro de que deseas salir?")) {
      window.close(); // Cierra la ventana actual
    }
  }

  constructor(public router: Router,
    private listarServicio: ServiciosService) {}

    ingresoAdmin(){
      this.router.navigate(['/ingreso-admin']); 
    }

  ingresoDatos() {
    this.listarServicio.getIdPorCodigoEmpleado(this.codigoEmpleado).subscribe((response) =>{
      if(response === 0){
        console.log("Usuario no autorizado");
      }else {
        this.router.navigate(['ingreso-datos', { idEmpleado: response }]);
      }
    })
  }

  ngOnInit(){
    this.listarServicio.getEmpleadoAac().subscribe((resultEmpleadoAac : any) =>{
      this.empleAac = resultEmpleadoAac;
      console.log(resultEmpleadoAac);
    })
    this.intervalo = setInterval(() => {
      this.fechaYHoraActual = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo); // Limpia el intervalo cuando el componente se destruye
  }
}
