/**
 * Represents a single Pedido.
 */
export interface IPedidoR{
    pedido_Id : number;
    total : number ;
    cliente : string;
    producto : string;
    precio : number;
    cantidad : number;
}