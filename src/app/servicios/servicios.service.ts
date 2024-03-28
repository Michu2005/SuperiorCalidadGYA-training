import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  public getIdPorCodigoEmpleado(codigoEmpleado: string){
    return this.http.get(`${this.baseUrl}/obtenerIdPorCodigoEmpleado?codigoEmpleado=${codigoEmpleado}`);
  }

  public postRegistrarProceso(data: any){
    return this.http.post(`${this.baseUrl}/registrarProceso`, data);
  }

  public postRegistrarEmpaque(data: any){
    return this.http.post(`${this.baseUrl}/registrarEmpaque`, data);
  }

  obtenerDetallesEmpaquePorIdCabecera(idCabecera: number): Observable<any[]> {
    return this.http.get<any[]>(`registrarEmpaque/${idCabecera}/detalles`);
  }
}
