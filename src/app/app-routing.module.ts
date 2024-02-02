import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { IngresoDatosComponent } from './ingreso-datos/ingreso-datos.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { IngresoProcesoComponent } from './ingreso-proceso/ingreso-proceso.component';
import { IngresoEmpaqueComponent } from './ingreso-empaque/ingreso-empaque.component';
import { IngresoDatosEmpaqueComponent } from './ingreso-datos-empaque/ingreso-datos-empaque.component';

const routes: Routes = [
  { path:'pag-inicio', component:PagInicioComponent},
  { path:'ingreso-datos', component:IngresoDatosComponent},
  { path:'menu-inicio', component:MenuInicioComponent},
  { path:'ingreso-proceso', component:IngresoProcesoComponent},
  { path:'ingreso-empaque', component:IngresoEmpaqueComponent},
  { path:'ingreso-datos-empaque', component:IngresoDatosEmpaqueComponent},
  
  
  //Ruta por defecto
  { path: '', redirectTo: 'pag-inicio', pathMatch: 'full' }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
