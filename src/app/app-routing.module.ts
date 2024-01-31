import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { IngresoDatosComponent } from './ingreso-datos/ingreso-datos.component';

const routes: Routes = [
  { path:'pag-inicio', component:PagInicioComponent},
  { path:'ingreso-datos', component:IngresoDatosComponent},
  
  //Ruta por defecto
  { path: '', redirectTo: 'pag-inicio', pathMatch: 'full' }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
