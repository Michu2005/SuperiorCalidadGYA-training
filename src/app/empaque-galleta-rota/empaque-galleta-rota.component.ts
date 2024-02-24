import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosCodigo, PeriodicElement } from '../interfaces/datos';

@Component({
  selector: 'empaque-galleta-rota',
  templateUrl: './empaque-galleta-rota.component.html',
  styleUrls: ['./empaque-galleta-rota.component.css']
})
export class EmpaqueGalletaRotaComponent {

  imgSuperior = '../assets/images/logo-superior.png';

  fechaYHoraActual: Date = new Date();
  intervalo: any;

  datosRecibidos: DatosCodigo = {
    id: 0,
    codigo:"N/A",
    descripcion:"N/A"
  }

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;

  constructor(private route: ActivatedRoute, 
    private router: Router
    ) {}

    empaqueHermeticidad() {
      this.router.navigate(['/empaque-hermeticidad', this.datosRecibidos]);
    }

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
