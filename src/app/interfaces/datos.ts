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

export interface ParametroProducto {
    descripcion: string;
    min: number;
    max: number;
    paramZona1: number;
    paramZona2: number;
    paramZona3: number;
}

export interface ControlFugas {
    position: number;
    fugaLeve: boolean;
    fugaGrave: boolean;
    sinFuga: boolean;
}

export interface ParametrosEmpaque {
    descripcion: string;
    min: number;
    max: number;
    unidadMedida: string;
}