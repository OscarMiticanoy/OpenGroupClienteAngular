import { IPedido } from "./IPedido";


export interface IClientes{
    clienteId: number;
    nombre: string;
    mail: string;
    contraseña: string;
    pedidos: IPedido[];
}