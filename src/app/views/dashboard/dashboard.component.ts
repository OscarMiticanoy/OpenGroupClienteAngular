
import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { IPedidoR } from '../../Models/IPedidoR.interface';
import { Subject } from 'rxjs';
import { IPedido } from '../../Models/IPedido';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dataSource: IPedidoR[];
  displayedColumns: string[] = ['pedido_Id', 'cliente', 'producto', 'precio', 'cantidad', 'total'];
  isProcessing = true;
  updatedPedido: IPedidoR[];


  constructor( private api:ApiServiceService, private router:Router ) { }

  ngOnInit(): void {
    //this.displayedColumns = this.columnNames.map(x => x.id);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.api.getAllPedidos().subscribe(data =>{
      this.dataSource = data;
      this.isProcessing = false; 
    })
  }

  nuevo(){
    this.router.navigate(['nuevo']);
  }

  editCourse(pedido: IPedidoR) {
    this.api.actualizarPedido(pedido.pedido_Id, pedido.cantidad).subscribe(data =>{
      this.updatedPedido = data;
    });
  }

  deleteCourse(pedido: IPedidoR) {
    this.api.borrarPedido( pedido.pedido_Id);
  }
  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
