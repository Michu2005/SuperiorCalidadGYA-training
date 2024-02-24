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

export interface DatosEmpleadoAac {
    codigo: string;
    nombre: string;
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export interface PeriodicElement1 {
    position: number;
    parametro: string;
    min: number;
    max: number;
    paramZona1: number;
    paramZona2: number;
    paramZona3: number ;

}

export interface ControlFugas {
    position: number;
    fugaLeve: boolean;
    fugaGrave: boolean;
    sinFuga: boolean;
}