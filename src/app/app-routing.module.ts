import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { IngresoDatosComponent } from './ingreso-datos/ingreso-datos.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { IngresoProcesoComponent } from './ingreso-proceso/ingreso-proceso.component';
import { IngresoEmpaqueComponent } from './ingreso-empaque/ingreso-empaque.component';
import { IngresoDatosEmpaqueComponent } from './ingreso-datos-empaque/ingreso-datos-empaque.component';
import { EmpaqueGalletaRotaComponent } from './empaque-galleta-rota/empaque-galleta-rota.component';
import { EmpaqueHermeticidadComponent } from './empaque-hermeticidad/empaque-hermeticidad.component';
import { EmpaqueParamAdicionalesComponent } from './empaque-param-adicionales/empaque-param-adicionales.component';

const routes: Routes = [
  { path:'pag-inicio', component:PagInicioComponent},
  { path:'ingreso-datos', component:IngresoDatosComponent},
  { path:'menu-inicio', component:MenuInicioComponent},
  { path:'ingreso-proceso', component:IngresoProcesoComponent},
  { path:'ingreso-datos-empaque', component:IngresoDatosEmpaqueComponent},
  { path:'ingreso-empaque', component:IngresoEmpaqueComponent},
  { path:'empaque-galleta-rota', component:EmpaqueGalletaRotaComponent},
  { path:'empaque-hermeticidad', component:EmpaqueHermeticidadComponent},
  { path:'empaque-param-adicionales', component:EmpaqueParamAdicionalesComponent},
  
  
  
  //Ruta por defecto
  { path: '', redirectTo: 'pag-inicio', pathMatch: 'full' }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
