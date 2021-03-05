import { IPedido } from "./IPedidos.interface";


export interface IClientes{
    clienteId: number;
    nombre: string;
    mail: string;
    contraseña: string;
    pedidos: IPedido[];
}