import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategoriums } from 'src/app/Models/ICategoriums.interface';
import { IPedido } from 'src/app/Models/IPedido';
import { IPedidoR } from 'src/app/Models/IPedidoR.interface';
import { IProducto } from 'src/app/Models/IProducto.interface';
import { ApiServiceService } from 'src/app/service/api-service.service';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  categorias: ICategoriums[];
  productos: IProducto[];
  selectedCategory = false;
  selectedDevicecategory='';
  selectedDeviceProducto='';
  valorProducto: number = 0;
  valorTotal: number = 0;
  cantidadValue;
  response: IPedidoR[];
  request: IPedido;

  constructor(private api: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllCategorias().subscribe(data => {
      this.categorias = data;
    })
    this.api.getAllProductos().subscribe(data => {
      this.productos = data;
    })
  }

  agregar() {
    this.api.nuevopedido(this.request).subscribe(data => {
      this.response = data;
    })
    this.router.navigate(['dashboard']);
  }

  onChangeCategory(deviceValue) {
    this.selectedDevicecategory=deviceValue;
    this.selectedCategory= true;
  }

  onChangeProducto(deviceValue){
    this.selectedDeviceProducto=deviceValue;
  }

  onChangeCantidad(){
    console.log(this.cantidadValue);
    this.valorProducto = this.productos[this.selectedDeviceProducto].precio;
    this.valorTotal = this.valorProducto * this.cantidadValue;
    this.request.precio = this.valorTotal;
    this.request.fkClienteId = 1352;//to-do login, dato estatico
    this.request.fkProductoId = this.productos[this.selectedDeviceProducto].pedido_Id;
    this.request.cantidad = this.cantidadValue;
    this.request.activo = true;
  }

  get mostrarSeleccion() {
    return this.productos.filter(item =>{
       return item.fkCategoriaId == this.categorias[this.selectedDevicecategory].categoriaId;
    })
  }

}
