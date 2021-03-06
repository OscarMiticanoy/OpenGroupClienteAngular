import { IPedido } from "./IPedido";

export interface ICategoriums{
    categoriaId: number;
    nombre: string;
    descripcion: string;
    pedidos: IPedido[];
}