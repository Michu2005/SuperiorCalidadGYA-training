import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { IngresoMenuComponent } from './ingreso-menu/ingreso-menu.component';

const routes: Routes = [
  { path: 'pag-inicio', component: PagInicioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PagInicioComponent,
    IngresoMenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    IngresoMenuComponent,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
