import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPedidoR } from '../Models/IPedidoR.interface';
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

  actualizarPedido( id:number, cantidad:number):Observable<IPedidoR[]>{
    let direccion = this.Url + "Pedido/" + id;
    return this.http.put<IPedidoR[]>(direccion, cantidad);
  }

  borrarPedido( id:number ):Observable<IPedidoR[]>{
    let direccion = this.Url + "Pedido/" + id;
    return this.http.delete<IPedidoR[]>(direccion);
  }
}
