export interface SeleccionarDatos {
    id: number,
    descripcion: string
}

export interface DatosCodigo {
    id: number;
    codigo: string;
    descripcion: string;
}

export interface DatosEmpleadoSac {
    codigo: string;
    nombre: string;
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }