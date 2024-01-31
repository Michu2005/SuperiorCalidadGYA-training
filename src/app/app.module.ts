import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { IngresoDatosComponent } from './ingreso-datos/ingreso-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    PagInicioComponent,
    IngresoDatosComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
