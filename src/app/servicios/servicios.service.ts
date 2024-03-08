import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParametroProducto } from '../interfaces/datos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private baseUrl = "http://localhost:8081/catalogos";
  productoSeleccionado: any;

  constructor(private http : HttpClient) { }

  public getLinea(){
    return this.http.get(`${this.baseUrl}/listar/linea`);
  }

  public getTurno(){
    return this.http.get(`${this.baseUrl}/listar/turno`);
  }

  public getCodigo(){
    return this.http.get(`${this.baseUrl}/listar/producto`);
  }

  public getEmpleadoSac(){
    return this.http.get(`${this.baseUrl}/listar/sac?idPerfil=2`);
  }

  public getMaquina(){
    return this.http.get(`${this.baseUrl}/listar/maquina`);
  }

  public getEmpleadoAac(){
    return this.http.get(`${this.baseUrl}/listar/aac?idPerfil=3`);
  }

  public getParametroPorIdProductoYTipoParametroId(idProducto: number, tipoParametroId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/listar/parametrosPorProductoYTipoParametro?idProducto=${idProducto}&idTipoParametro=${tipoParametroId}`);
  }


}
