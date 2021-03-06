export interface IProducto {
    productoId: number;
    nombre: string;
    precio: number;
    stock: number;
    fkCategoriaId: number;
    fkCategoria: any;
    pedidos: any[];
}