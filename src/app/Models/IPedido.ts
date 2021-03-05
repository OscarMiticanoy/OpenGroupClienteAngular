export class IPedido{
    pedidoId: number;
    precio: number;
    fkClienteId: number;
    fkProductoId: number;
    cantidad: number;
    activo: boolean;
}