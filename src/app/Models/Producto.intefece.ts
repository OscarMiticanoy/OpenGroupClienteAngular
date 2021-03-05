import { IPedido } from "./IPedidos.interface";


export interface IProducto{
    productoId: number; 
    nombre: string;
    precio: number;
    stock : number; 
    CategoriaId:number;
    pedidos: IPedido[];
}