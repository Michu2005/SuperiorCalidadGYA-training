import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { IngresoMenuComponent } from './ingreso-menu/ingreso-menu.component';

const routes: Routes = [
  {path:'pag-inicio', component:PagInicioComponent},
  {path:'ingreso-menu', component:IngresoMenuComponent},

  {path:'', redirectTo:'/pag-inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
