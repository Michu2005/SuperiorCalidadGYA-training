import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { IngresoDatosComponent } from './ingreso-datos/ingreso-datos.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { IngresoProcesoComponent } from './ingreso-proceso/ingreso-proceso.component';
import { IngresoDatosEmpaqueComponent } from './ingreso-datos-empaque/ingreso-datos-empaque.component';


@NgModule({
  declarations: [
    AppComponent,
    PagInicioComponent,
    IngresoDatosComponent,
    MenuInicioComponent,
    IngresoProcesoComponent,
    IngresoDatosEmpaqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
