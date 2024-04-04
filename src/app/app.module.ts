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
import { IngresoEmpaqueComponent } from './ingreso-empaque/ingreso-empaque.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpaqueGalletaRotaComponent } from './empaque-galleta-rota/empaque-galleta-rota.component';
import { EmpaqueHermeticidadComponent } from './empaque-hermeticidad/empaque-hermeticidad.component';
import { EmpaqueParamAdicionalesComponent } from './empaque-param-adicionales/empaque-param-adicionales.component';
import { IngresoAdminComponent } from './ingreso-admin/ingreso-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    PagInicioComponent,
    IngresoDatosComponent,
    MenuInicioComponent,
    IngresoProcesoComponent,
    IngresoDatosEmpaqueComponent,
    IngresoEmpaqueComponent,
    EmpaqueGalletaRotaComponent,
    EmpaqueHermeticidadComponent,
    EmpaqueParamAdicionalesComponent,
    IngresoAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
