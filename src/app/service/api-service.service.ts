import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPedidoR } from '../Models/IPedidoR.interface';
import { ICategoriums } from '../Models/ICategoriums.interface';
import { IProducto } from '../Models/IProducto.interface';
import { IPedido } from '../Models/IPedido';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  Url: string = "https://localhost:44332/api/";

  constructor( private http:HttpClient) {}
  
  getAllPedidos():Observable<IPedidoR[]>{
    let direccion = this.Url + "Pedido";
    return this.http.get<IPedidoR[]>(direccion);
  }

  getAllCategorias(){
    let direccion = this.Url + "Categoriums";
    return this.http.get<ICategoriums[]>(direccion);
  }

  getAllProductos(){
    let direccion = this.Url + "Productoes";
    return this.http.get<IProducto[]>(direccion);
  }

  actualizarPedido( id:number, cantidad:number):Observable<IPedidoR[]>{
    let direccion = this.Url + "Pedido/" + id;
    return this.http.put<IPedidoR[]>(direccion, cantidad);
  }

  borrarPedido( id:number ):Observable<IPedidoR[]>{
    let direccion = this.Url + "Pedido/" + id;
    return this.http.delete<IPedidoR[]>(direccion);
  }

  nuevopedido(pedido: IPedido){
    let direccion = this.Url + "Pedido";
    return this.http.post<IPedidoR[]>(direccion, pedido);
  }
  
}
