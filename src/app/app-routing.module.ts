import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';

const routes: Routes = [
  {path: '', component:AppComponent},
  {path:'pag-inicio', component:PagInicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
