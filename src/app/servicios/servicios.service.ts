import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private baseUrl = "http://localhost:8081/catalogos";

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

  public getEmpleado(){
    return this.http.get(`${this.baseUrl}/listar/empleado`);
  }

  public getEmpleadoSac(){
    return this.http.get(`${this.baseUrl}/listar/sac?idPerfil=2`);
  }
}
